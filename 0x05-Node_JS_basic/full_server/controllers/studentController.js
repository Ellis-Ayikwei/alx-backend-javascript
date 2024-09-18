import readDatabase from '../utils.js';
let filepath = process.argv[2];

class StudentsController {
	static getAllStudents(_, res) {
        const responseParts = ["This is the list of our students"];
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
    
        readDatabase(filepath)
            .then((data) => {
                const sortedFields = Object.entries(data).sort(([fieldA], [fieldB]) =>
                    fieldA.localeCompare(fieldB)
                );
                sortedFields.forEach(([field, Fnames]) => {
                    responseParts.push(
                        `Number of students in ${field}: ${Fnames.length}. List: ${Fnames.join(", ")}`
                    );
                });
                const finalResponse = responseParts.join("\n");
                res.end(finalResponse); // Use res.end directly
            })
            .catch((error) => {
                res.statusCode = 500;
                const finalResponse = error instanceof Error ? error.message : error.toString();
                res.end(finalResponse); // Use res.end to finalize the response
            });
    }
    

	static getAllStudentsByMajor(req, res) {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");

		const major = req.params.major;

		if (major !== "CS" && major !== "SWE") {
			res.statusCode = 500; 
			return res.end("Major parameter must be CS or SWE");
		}

		readDatabase(filepath)
			.then((data) => {
				const studentList = data[major];
				if (studentList && studentList.length > 0) {
					const finalResponse = `List: ${studentList.join(", ")}`;
					res.end(finalResponse);
				}
			})
			.catch((error) => {
				res.statusCode = 500;
				const errorMessage =
					error instanceof Error ? error.message : error.toString();
				res.end(errorMessage);
			});
	}
}


export default StudentsController