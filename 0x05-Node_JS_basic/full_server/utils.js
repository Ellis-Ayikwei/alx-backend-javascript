const fs = require('fs');

const readDatabase = (filepath) => {
  return new Promise((resolve, reject) => {
    // Reject if the filepath is missing
    if (!filepath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Read the file asynchronously
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        // Reject if there is an error reading the file
        reject(new Error('Cannot load the database'));
        return;
      }

      // Prepare the object to hold fields and corresponding student first names
      const fields = {};
      
      // Split data into lines and remove any empty lines
      const lines = data.trim().split('\n');

      // Loop through each line starting from the second one (first line is headers)
      for (const line of lines.slice(1)) {
        const [firstName, , , field] = line.split(',');
        
        // Initialize the field array if it doesn't exist
        if (!fields[field]) {
          fields[field] = [];
        }
        
        // Push the firstName into the appropriate field array
        fields[field].push(firstName);
      }
      
      // Resolve the promise with the object
      resolve(fields);
    });
  });
};

module.exports = readDatabase;
