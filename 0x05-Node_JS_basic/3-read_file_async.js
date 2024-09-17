const fs = require('fs').promises;

/**
 * Count students in a given file asynchronously
 * @param {string} filename Path to the CSV file
 * @returns {Promise<void>} A promise that resolves when the operation is complete
 * @throws {Error} If the file cannot be loaded
 */
async function countStudents(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const rows = data.split('\n').filter(line => line.trim() !== '').slice(1); // Remove empty lines and skip header

        // Process rows to count students by field
        const studentsByField = rows.reduce((acc, row) => {
            const [firstname, , , field] = row.split(',');
            acc[field] = (acc[field] || []).concat([firstname]);
            return acc;
        }, {});

        // Log results
        console.log(`Number of students: ${rows.length}`);
        Object.entries(studentsByField).forEach(([field, names]) => {
            console.log(
                `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
            );
        });
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
