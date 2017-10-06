require('dotenv').config();
const mysql = require('mysql');

let options = {
  connectionLimit: 10,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
};

let pool  = mysql.createPool(options);

module.exports = pool;
