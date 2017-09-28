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
		let roomsCondition = '';
		let params = [dollarConversionRate, dollarConversionRate];
		if(rooms){
			roomsCondition = 'AND ROOMS = ?';
			params.push(rooms);
		}
		let query = `
			SELECT 
				AVG(CASE 
					WHEN operation_type = 'Venta' THEN null
					WHEN price_currency = 'USD' THEN price * ?
					ELSE price END) AS rent,
				AVG(CASE 
					WHEN operation_type = 'Alquiler' THEN null
					WHEN price_currency = 'USD' THEN price * ?
					ELSE price END) AS price,
				COUNT(1) count
			FROM inmobiliaria.propiedades_mapa 
			WHERE MBRWithin(Point(lat,lon), PolyFromText('${polygon}'))
			${roomsCondition}
		`;
		db.db.query(query, params, (error, result) => {
			if(error){
				deferred.reject(error);
			}
			else{
				let data = {};
				data.name = name;
				data.coords = area.coords;
				data.dollarConversionRate = dollarConversionRate;
				data.count = result[0].count;
				if(operationType === 'ratio'){
					data.value = Math.ceil(result[0].price / result[0].rent);
				}
				else if(operationType === 'price'){
					data.value = Math.ceil(result[0].price);
				}
				else if(operationType === 'rent'){
					data.value = Math.ceil(result[0].rent);
				}
				deferred.resolve(data);
			}
		});
	});
	return deferred.promise;
};

const findAll = (operationType, rooms) => {
	return areas.getAreas()
	.then((areas => {
		let promises = [];
		areas.forEach(area => {
			promises.push(find(area.name, operationType, rooms));
		});
		return q.all(promises);
	}));
};

module.exports.findAll = findAll;