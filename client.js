const fs = require('fs');
const http = require('http');

http.get('http://localhost:4000', (response) => {
    var data = ''
    response.on('data', (text) => {
        data = text
    });;
    response.on('end', () => {
        fs.writeFile('convertedtemp.txt', data, err => {
            if (err) {console.error(err)}
        });
    })
})

