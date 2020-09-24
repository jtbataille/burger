// Requires mysql to begin the connection with this format
var mysql = require("mysql");

// Information to start connection with 'burgers_db' database and the password, host, etc.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "burgers_db"
});

// Logs if the connection has been made or has failed
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports connection as a module
module.exports = connection;