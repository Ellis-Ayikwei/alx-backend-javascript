const fs = require('fs');

const readDatabase = (filepath) => new Promise((resolve, reject) => {
  if (!filepath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fields = {};
    const lines = data.trim().split('\n');
    for (const line of lines.slice(1)) {
      const [firstName, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    resolve(fields);
  });
});

module.exports = readDatabase;
