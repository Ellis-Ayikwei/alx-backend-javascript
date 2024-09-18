const express = require('express');

const app = express();
const port = 1245;

const fs = require('fs').promises;

const filepath = process.argv[2];

async function countStudents(filename) {
  try {
    if (!filename) {
      throw new Error('Cannot load the database');
    }
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
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentList = await countStudents(filepath);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
