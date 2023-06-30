const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "JoeRoot123",
  database: "test",
  port: 3306,
});

mysqlconnection.connect((err) => {
  if (err) {
    console.log(" ---< Boss, Connection Me Problem Hai ! >---");
  } else {
    console.log(" ---< Boss, Connection Ekdamm Msttt Hai ! >---");
  }
});

module.exports = mysqlconnection;
