const app = require("http");

const server = app.createServer((req, res) => {});

server.listen(1245, () => {
	console.log("Hello Holberton School!");
});

export default server;
