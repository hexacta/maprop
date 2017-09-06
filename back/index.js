const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('./sql.js');

//CORS
app.use(cors());
// JSON
app.use(bodyParser.json());

app.get('/data', (request, response) => {
	sql.findAll().then((result => response.send(result)), (error => response.status(500).send(error)));
});

app.get('/data/:name', (request, response) => {
	sql.find(request.params.name).then((result => response.send(result)), (error => response.status(500).send(error)));
});

const server = app.listen(3001, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log(`Example app listening at http://${host}:${port}`);
});
