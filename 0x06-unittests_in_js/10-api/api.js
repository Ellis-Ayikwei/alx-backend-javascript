const express = require("express");
const app = express();

const port = 7865;
const localhost = "127.0.0.1";
app.use(express.json());

app.get("/", (_, res) => {
	res.statusCode = 200;
	res.contentType("text/plain");
	res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
	const id = req.params.id;
	const regex = new RegExp("^[0-9]+$");

	if (!regex.test(id)) {
		res.statusCode = 404;
		res.contentType("text/plain");
		return res.send("Not Found");
	}
	res.statusCode = 200;
	res.contentType("text/plain");
	res.send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (req, res) => {
	const data = {
		payment_methods: {
			credit_cards: true,
			paypal: false,
		},
	};
	res.statusCode = 200;
	res.contentType("application/json");
	res.send(data);
});

app.post("/login", (req, res) => {
	const username = req.body.userName;
	res.statusCode = 200;
	res.contentType("text/plain");
	res.send(`Welcome ${username}`);
});

const server = app.listen(port, localhost, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = server;
