const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const q = require('q');
const { check, validationResult } = require('express-validator/check');
const sql = require('./sql.js');
const cache = require('./cache.js');

//CORS
app.use(cors());
// JSON
app.use(bodyParser.json());
app.use(cache(600));

const operations = ['price','rent','ratio'];
const rooms = {min: 1, max: 5};

app.get('/data/:operationType',[
		check('operationType').isIn(operations),
		check('rooms').isInt(rooms)], (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(422).json({errors: errors.mapped()});
	}
	let operationType = request.params.operationType;
	let rooms = request.query.rooms;
	sql.findAll(operationType, rooms).then((result => response.send(result)), (error => response.status(500).send(error)));
});

const cacheWarmup = (port) => {
	process.stdout.write('Warming up cache');
	let promises = [];
	operations.forEach(operation => {
		for(let i = rooms.min; i <= rooms.max; i++){
			let promise = fetch(`http://localhost:${port}/data/${operation}?rooms=${i}`);
			promise.then(() => process.stdout.write('.'));
			promises.push(promise);
		}
	});
	let result = q.all(promises);
	result.then(() => console.log('Cache warmed up'));
	return result;
};

const server = app.listen(4003, () => {
	let host = server.address().address;
	let port = server.address().port;
	cacheWarmup(port).then(() => console.log(`App listening at http://${host}:${port}`));
});
