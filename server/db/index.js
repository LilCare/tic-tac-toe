const mysql = require('mysql');
const Promise = require('bluebird');

const db = mysql.createConnection({
  user     : 'root',
  password : 'yourpassword'//,
  //database:
});

Promise.promisifyAll(db);

module.exports = db;