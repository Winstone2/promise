const fs = require('fs');

function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFileAsync('example.txt')
    .then(content => console.log(content))
    .catch(error => console.error(error));
