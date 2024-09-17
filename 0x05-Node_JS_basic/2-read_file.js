const fs = require('fs');

/**
 * Count students in a given file
 * @param {string} filename Path to the CSV file
 * @throws {Error} If the file cannot be loaded
 */
function countStudents (filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const rows = data.split('\n').slice(1).filter(line => line.trim() !== '');

    const studentsByField = rows.reduce((acc, row) => {
      const field = row.split(',')[3];
      const firstname = row.split(',')[0];
      acc[field] = (acc[field] || []).concat([firstname]);
      return acc;
    }, {});

    console.log(`Number of students: ${rows.length}`);
    Object.entries(studentsByField).forEach(([field, names]) => {
      console.log(
				`Number of students in ${field}: ${names.length}. List: ${names.join(
					', '
				)}`
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
