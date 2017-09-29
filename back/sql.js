const db = require('./db.js');
const q = require('q');
const areas = require('./areas.js');
const dolar = require('./dolar.js');

const median = function(array){
	if(array.length % 2){
		return array[Math.floor(array.length / 2)];
	}
	else{
		return Math.ceil((array[array.length / 2 - 1] + array[array.length / 2]) / 2);
	}
};

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
			FROM inmobiliaria.propiedades 
			WHERE operation_type = ?
			AND rooms = ?
			AND price IS NOT NULL
			AND MBRWithin(Point(lat,lon), PolyFromText('${polygon}'))
			ORDER BY 1
		`;
		db.query(query, params, (error, results) => {
			if(error){
				deferred.reject(error);
			}
			else{
				let value = undefined;
				if(results.length > 0){
					value = median(results.map(r => r.value));
				}
				let data = {
					name: name,
					coords: area.coords,
					dollarConversionRate: dollarConversionRate,
					count: results.length,
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
		if(!results[0].value || !results[1].value){
			result.value = undefined;
		}
		else {
			result.count = Math.min(results[0].count, results[1].count);
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