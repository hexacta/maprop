const request = require('request');

const url = 'http://ws.geeklab.com.ar/dolar/get-dolar-json.php';
const refreshRate = 3600000;

const get = () => {
	request(url, {json: true}, (error, response, body) => {
		module.exports = body.libre;
		console.log(`Dollar value: ${module.exports}`);
		setTimeout(() => get(), refreshRate);
	});
};

module.exports = get;