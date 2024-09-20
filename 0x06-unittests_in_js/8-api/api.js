const express = require("express");
const app = express();

const port = 7865;
const localhost = "127.0.0.1";

app.get("/", (_, res) => {
	res.statusCode = 200;
	res.contentType("text/plain");
	res.send("Welcome to the payment system");
});

const server = app.listen(port, localhost, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = server;
