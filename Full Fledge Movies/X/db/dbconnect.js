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
    console.log(" Error In DB Connect " + JSON.stringify(err));
  } else {
    console.log(" DB Connect Ok ");
  }
});

module.exports = mysqlconnection;
