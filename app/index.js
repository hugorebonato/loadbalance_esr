const express = require("express");
const app = express();
const port = process.env.PORT;
const { hostname } = require("os");

app.get("/", function (request, response) {
  response.send(`<h1>Hostname: ${hostname()}</h1>`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
