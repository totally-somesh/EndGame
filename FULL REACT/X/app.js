const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const routerapp = require("./router/router");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.setHeader("Access-Control-Allow-Headers", "content-type");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/", routerapp);

app.listen(3007, function () {
  console.log(" ---< Boss, Connection Mstt Hai ! Bhidd Jao... >--- ");
});

module.exports = app;
