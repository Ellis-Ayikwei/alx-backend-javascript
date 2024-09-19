import readDatabase from '../utils';

const filepath = process.argv[2];

class StudentsController {
  static getAllStudents(_, res) {
    const responseParts = ['This is the list of our students'];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    readDatabase(filepath)
      .then((data) => {
        const sortedFields = Object.entries(data)
          .sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB));

        sortedFields.forEach(([field, Fnames]) => {
          responseParts.push(
            `Number of students in ${field}: ${
              Fnames.length
            }. List: ${Fnames.join(', ')}`,
          );
        });

        const finalResponse = responseParts.join('\n');
        res.end(finalResponse);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    readDatabase(filepath)
      .then((data) => {
        const studentList = data[major];
        if (studentList) {
          const finalResponse = `List: ${studentList.join(', ')}`;
          res.end(finalResponse);
        } else {
          res.statusCode = 500;
          res.end('Cannot load the database');
        }
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
}

export default StudentsController;
