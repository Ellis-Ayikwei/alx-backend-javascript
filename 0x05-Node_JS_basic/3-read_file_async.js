const fs = require('fs');
const csv = require('csvtojson');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        csv()
          .fromString(data.toString())
          .then((students) => {
            const studentsByField = {};
            students.forEach((student) => {
              if (!studentsByField[student.field]) {
                studentsByField[student.field] = [];
              }
              studentsByField[student.field].push(student.firstname);
            });
            console.log(`Number of students: ${students.length}`);
            for (const field in studentsByField) {
              console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
            }
            resolve(students);
          });
      }
    });
  });
};

module.exports = countStudents;
