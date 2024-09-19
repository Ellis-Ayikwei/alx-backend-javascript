const fs = require('fs');

const readDatabase = (filepath) => new Promise((resolve, reject) => {
  if (!filepath) {
    return reject(new Error('Cannot load the database'));
  }
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const studentRecords = fileLines.slice(1).map((line) => {
        const studentRecord = line.split(',');
        return studentRecord;
      });
      for (const studentdata of studentRecords) {
        const [fname, , , field] = studentdata;
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(fname);
      }
      return resolve(studentGroups);
    }
  });
});

module.exports = readDatabase;
