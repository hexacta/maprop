const db = require('./db.js');
const q = require('q');
const areas = require('../areas.js');
const utils = require('../utils.js');
const subqueries = require('./subqueries.js');

const find = (filters) => {
	const dollarConversionRate = require('../dollar.js');
	let deferred = q.defer();
	areas.getArea(filters.name).then(area => {
		let params = [dollarConversionRate];
		let operationType = subqueries.operationType(filters.operationType, params);
		let rooms = subqueries.rooms(filters.rooms, params);
		let propertyType = subqueries.propertyType(filters.propertyType, params);
		let minSurface = subqueries.minSurface(filters.minSurface, params);
		let maxSurface = subqueries.maxSurface(filters.maxSurface, params);
		let polygon = subqueries.polygons(area, params);
		let query = `
			SELECT 
			(CASE WHEN price_currency = 'USD' THEN price * ? ELSE price END) AS value,
			CAST(TRIM(REPLACE(REPLACE(REPLACE(area_covered, 'm', ''), '²', ''),',','.')) AS UNSIGNED) AS surface
			FROM inmobiliaria.propiedades 
			WHERE price IS NOT NULL
			${operationType}
			${rooms}
			${propertyType}
			${minSurface}
			${maxSurface}
			${polygon}
			ORDER BY 1
		`;
		db.query(query, params, (error, results) => {
			if(error){
				deferred.reject(error);
			}
			else{
				let data = {
					name: area.name,
					coords: area.coords,
					count: results.length
				};
				if(results.length > 0){
					data.value = utils.median(results.map(r => r.value));
					data.dollarValue = Math.ceil(data.value / dollarConversionRate);
					data.minSurface = Math.min(...results.map(r => r.surface));
					data.maxSurface = Math.max(...results.map(r => r.surface));
				}
				deferred.resolve(data);
			}
		});
	});
	return deferred.promise;
};

const findRatio = (filters) => {
	let deferred = q.defer();
	let priceFilters = Object.assign({operationType: 'price'}, filters);
	let rentFilters = Object.assign({operationType: 'rent'}, filters);
	let promises = [
		find(priceFilters),
		find(rentFilters)
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
		delete result.dollarValue;
		deferred.resolve(result);
	});
	return deferred.promise;
};

const findAll = (filters) => {
	return areas.getAreas()
	.then((areas => {
		let promises = [];
		areas.forEach(area => {
			let newFilters = Object.assign({name: area.name}, filters);
			if(filters.operationType === 'ratio'){
				delete newFilters.operationType;
				promises.push(findRatio(newFilters));
			}
			else{
				promises.push(find(newFilters));
			}
		});
		return q.all(promises);
	}))
	.then(data => {
		return {
			dollarConversionRate: require('../dollar.js'),
			surface: {
				min: utils.nullSafeLimit('min', 'minSurface', data),
				max: utils.nullSafeLimit('max', 'maxSurface', data)
			},
			value: {
				min: utils.nullSafeLimit('min', 'value', data),
				max: utils.nullSafeLimit('max', 'value', data)
			},
			dollarValue: {
				min: utils.nullSafeLimit('min', 'dollarValue', data),
				max: utils.nullSafeLimit('max', 'dollarValue', data)
			},
			count: data.reduce((sum, d) => sum + d.count, 0),
			data: data
		};
	});
};

module.exports.findAll = findAll;