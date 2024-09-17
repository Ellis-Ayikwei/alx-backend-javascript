const app = require('http');

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(1245, '127.0.0.1', () => {
  console.log('Server is listening on port 1245');
});

module.exports = server;
