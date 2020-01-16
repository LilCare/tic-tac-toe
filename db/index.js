const mysql = require('mysql');
const Promise = require('bluebird');

const db = mysql.createConnection({
  user     : 'root',
  password : 'yourpassword'//,
  //database:
});

Promise.promisifyAll(db);

db.connectAsync()
  .then(() => console.log('Connected to mysql on:' + db.threadId))
  .catch((err) => console.log('Error connecting to mysql: ', err));

module.exports = db;