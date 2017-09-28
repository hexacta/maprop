const mcache = require('memory-cache');

const cache = (duration) => {
	return (request, response, next) => {
		let key = '__express__' + request.originalUrl || request.url;
		let cachedBody = mcache.get(key);
		if(cachedBody){
			response.send(cachedBody);
		}
		else{
			response.sendResponse = response.send;
			response.send = (body) => {
				mcache.put(key, body, duration * 1000);
				response.sendResponse(body);
			};
			next();
		}
	};
};

module.exports = cache;