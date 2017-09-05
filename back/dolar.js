const request = require('request');
const q = require('q');

const url = 'http://ws.geeklab.com.ar/dolar/get-dolar-json.php';
const refreshRate = 3600000;

let value = null;

function get(){
	var deferred = q.defer();
	if(value){
		deferred.resolve(value);
	}
	else{
		request(url, {json: true}, (error, response, body) => {
			if(error){
				deferred.reject(error);
			}
			else{
				value = body.libre;
				setTimeout((() => {value = null}), refreshRate);
				deferred.resolve(value);
			}
		});
	}
	return deferred.promise;
}

module.exports.get = get;