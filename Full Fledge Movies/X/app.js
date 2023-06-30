const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./router/router");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", router);

app.listen(3007, function () {
  console.log("Connection Ok !");
});

module.exports = app;
