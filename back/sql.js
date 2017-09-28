const db = require('./db.js');
const q = require('q');
const areas = require('./areas.js');
const dolar = require('./dolar.js');

const find = (name, operationType, rooms) => {
	let deferred = q.defer();
	let dollarConversionRate;
	dolar.get().then(value => {
		dollarConversionRate = value;
		return areas.getArea(name);
	})
	.then(area => {
		let polygon = 'POLYGON (';
		area.coords.forEach(subpolygon => {
			polygon += '('
			subpolygon.forEach(coords => polygon += coords.lat + ' ' + coords.lng + ',');
			polygon = polygon.substr(0, polygon.length - 1);
			polygon += ')';
		});
		polygon += '))';
		let operation = operationType === 'rent' ? 'Alquiler' : 'Venta';
		let params = [dollarConversionRate, operation, rooms];
		let query = `
			SELECT 
			(CASE WHEN price_currency = 'USD' THEN price * ? ELSE price END) AS value
			FROM inmobiliaria.propiedades_mapa 
			WHERE operation_type = ?
			AND rooms = ?
			AND price IS NOT NULL
			AND MBRWithin(Point(lat,lon), PolyFromText('${polygon}'))
			ORDER BY 1
		`;
		db.query(query, params, (error, result) => {
			if(error){
				deferred.reject(error);
			}
			else{
				let value = undefined;
				if(result.length > 0){
					value = Math.ceil(result[Math.floor(result.length / 2)].value);
				}
				let data = {
					name: name,
					coords: area.coords,
					dollarConversionRate: dollarConversionRate,
					count: result.length,
					value: value
				};
				deferred.resolve(data);
			}
		});
	});
	return deferred.promise;
};

const findRatio = (name, rooms) => {
	let deferred = q.defer();
	let promises = [
		find(name, 'price', rooms),
		find(name, 'rent', rooms)
	];
	q.all(promises).then((results) => {
		let result = Object.assign({}, results[0]);
		if(!results[1].value){
			results.value = undefined;
		}
		else {
			result.value = Math.ceil(results[0].value / results[1].value);
		}
		deferred.resolve(result);
	});
	return deferred.promise;
};

const findAll = (operationType, rooms) => {
	return areas.getAreas()
	.then((areas => {
		let promises = [];
		areas.forEach(area => {
			if(operationType === 'ratio'){
				promises.push(findRatio(area.name, rooms));
			}
			else{
				promises.push(find(area.name, operationType, rooms));				
			}
		});
		return q.all(promises);
	}));
};

module.exports.findAll = findAll;