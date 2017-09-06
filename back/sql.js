const db = require('./db.js');
const q = require('q');
const areas = require('./areas.js');
const dolar = require('./dolar.js');

function find(name) {
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
		`;
		db.db.query(query, [dollarConversionRate, dollarConversionRate], (error, result) => {
			if(error){
				deferred.reject(error);
			}
			else{
				let data = result[0];
				data.name = name;
				data.coords = area.coords;
				data.dollarConversionRate = dollarConversionRate;
				data.ratio = data.price / data.rent;
				deferred.resolve(data);
			}
		});
	});
	return deferred.promise;
}

function findAll(){
	return areas.getAreas()
	.then((areas => {
		let promises = [];
		areas.forEach(area => {
			promises.push(find(area.name));
		})
		return q.all(promises);
	}));
}

module.exports.find = find;
module.exports.findAll = findAll;