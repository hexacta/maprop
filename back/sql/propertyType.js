const db = require('./db.js');
const q = require('q');

const statement = 'SELECT DISTINCT property_type FROM propiedades WHERE property_type IS NOT NULL';

const find = () => {
	let deferred = q.defer();
	db.query(statement, (error, results) => {
		if(error){
			deferred.reject(error);
			return;
		}
		deferred.resolve(results.map(r => r.property_type));
	});
	return deferred.promise;
};

module.exports = find;