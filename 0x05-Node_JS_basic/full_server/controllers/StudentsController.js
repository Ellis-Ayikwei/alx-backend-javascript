// full_server/controllers/StudentsController.js

const readDatabase = require('../utils');  // Adjust import if necessary
const filepath = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    const responseParts = ['This is the list of our students'];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    readDatabase(filepath)
      .then((data) => {
        const sortedFields = Object.entries(data)
          .sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB));

        sortedFields.forEach(([field, firstNames]) => {
          responseParts.push(
            `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`,
          );
        });

        const finalResponse = responseParts.join('\n');
        res.end(finalResponse);
      })
      .catch((error) => {
        console.error(error);  // Log error for debugging purposes
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    res.status(200).setHeader('Content-Type', 'text/plain');

    readDatabase(filepath)
      .then((data) => {
        const studentList = data[major];
        if (studentList) {
          const finalResponse = `List: ${studentList.join(', ')}`;
          res.end(finalResponse);
        } else {
          res.status(500).send('Cannot load the database');
        }
      })
      .catch((error) => {
        console.error(error);  // Log error for debugging purposes
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
