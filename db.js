const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'test'
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log('Connected to the MySQL server.');
    }
  });

module.exports = connection;