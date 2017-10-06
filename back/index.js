const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const q = require('q');
const { validationResult } = require('express-validator/check');
const dataValidations = require('./dataValidations.js');
const sql = require('./sql/sql.js');
const propertyType = require('./sql/propertyType.js');
const dollar = require('./dollar.js');
const cache = require('./cache.js');
const constants = require('./constants.js');

//CORS
app.use(cors());
// JSON
app.use(bodyParser.json());
app.use(cache(600));

app.get('/data/:operationType', dataValidations, (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(422).json({errors: errors.mapped()});
	}
	let filters = {
		operationType: request.params.operationType,
		rooms: request.query.rooms,
		propertyType: request.query.propertyType,
		minSurface: request.query.minSurface,
		maxSurface: request.query.maxSurface
	};
	sql.findAll(filters).then((result => response.send(result)), (error => response.status(500).send(error)));
});

app.get('/propertyTypes', (request, response) => {
	propertyType().then(propertyTypes => response.send(propertyTypes));
});

const cacheWarmup = (port) => {
	dollar();
	/*
	process.stdout.write('Warming up cache');
	let promises = [];
	constants.operations.forEach(operation => {
		for(let i = constants.rooms.min; i <= constants.rooms.max; i++){
			let promise = fetch(`http://localhost:${port}/data/${operation}?rooms=${i}&propertyType=Departamento`);
			promise.then(() => process.stdout.write('.'));
			promises.push(promise);
		}
	});
	let result = q.all(promises);
	result.then(() => console.log('Cache warmed up'));
	return result;
	*/
};

const server = app.listen(4003, () => {
	let host = server.address().address;
	let port = server.address().port;
	cacheWarmup(port);
	console.log(`App listening at http://${host}:${port}`);
});
