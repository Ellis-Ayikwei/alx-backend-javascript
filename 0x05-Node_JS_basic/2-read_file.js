const fs = require("fs");

/**
 * Count students in a given file
 * @param {string} filePath Path to the CSV file
 * @throws {Error} If the file cannot be loaded
 */
function countStudents(filePath) {
	try {
		const fileData = fs.readFileSync(filePath, { encoding: "utf8" });

		const lines = fileData.split("\n").filter((line) => line.length > 0);
		const fields = lines[0].split(",");
		const studentsByField = {};

		for (let i = 1; i < lines.length; i += 1) {
			const studentdata = lines[i].split(",");
			const field = studentdata[3];
			if (!studentsByField[field]) {
				studentsByField[field] = [];
			}
			studentsByField[field].push(studentdata[0]);
		}

		console.log(`Number of students: ${lines.length - 1}`);
		for (const field in studentsByField) {
			console.log(
				`Number of students in ${field}: ${
					studentsByField[field].length
				}. List: ${studentsByField[field].join(", ")} `
			);
		}
	} catch (err) {
		throw new Error("Cannot load the database");
	}
}

module.exports = countStudents;
