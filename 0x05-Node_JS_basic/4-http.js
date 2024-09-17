const app = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
});

server.listen(port, hostname, () => {
  console.log('Hello Holberton School!');
});
