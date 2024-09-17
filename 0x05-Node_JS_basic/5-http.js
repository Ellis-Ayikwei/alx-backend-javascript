const http = require('http');

const filepath = process.argv[2];
const fs = require('fs').promises;

async function countStudents(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    const rows = data
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1);

    const studentsByField = rows.reduce((acc, row) => {
      const [firstname, , , field] = row.split(',');
      acc[field] = (acc[field] || []).concat([firstname]);
      return acc;
    }, {});

    let result = `Number of students: ${rows.length}\n`;
    result += Object.entries(studentsByField)
      .map(
        ([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      )
      .join('\n');

    return result;
  } catch (err) {
    throw new Error(`Cannot load the database ${filename}`);
  }
}

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentList = await countStudents(filepath);
      res.end(`This is the list of our students\n${studentList}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(1245, '127.0.0.1', () => {
  console.log('Server is listening on port 1245');
});

module.exports = server;
