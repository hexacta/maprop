const fs = require("fs");
const q = require("q");

const file = './areas.json';

function getAreas(){
	let deferred = q.defer();
	fs.readFile(file, 'utf8', (err, data) => {
  		if (err){
  			deferred.reject(error);
  		}
  		else{
  			deferred.resolve(JSON.parse(data));
  		}
	});	
	return deferred.promise;
}

function getArea(name){
  let deferred = q.defer();
  getAreas().then(areas => deferred.resolve(areas.find(a => a.name === name)));
  return deferred.promise;
}

module.exports.getAreas = getAreas;
module.exports.getArea = getArea;