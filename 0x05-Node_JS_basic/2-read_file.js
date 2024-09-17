const fs = require('fs');

function countStudents(path) {
  const data = fs.readFileSync(path, { encoding: 'utf8' });
  const lines = data.split('\n').filter(line => line !== '');
  const fields = lines[0].split(',');
  const studentsByField = {};
  for (let i = 1; i < lines.length; i++) {
    const student = lines[i].split(',');
    if (!studentsByField[student[3]]) {
      studentsByField[student[3]] = [];
    }
    studentsByField[student[3]].push(student[0]);
  }
  console.log(`Number of students: ${lines.length - 1}`);
  for (const field in studentsByField) {
    console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
  }
}
