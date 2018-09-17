require('dotenv').config();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect(function(err) {
  if (err) {
    console.log("Erro na conexão DB")
    throw err
  }
});

module.exports = connection;

