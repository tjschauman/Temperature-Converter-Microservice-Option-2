const http = require('http');
const fs = require('fs');
const port = 4000;

const findTemp = (curr_unit, curr_temp, new_unit) => {

    var new_temp = 0;
    var data = 0;
    
    if (curr_unit == "F") {
        if (new_unit == "C"){
            new_temp = (5/9)*(curr_temp - 32)
        }else if (new_unit == "K") {
            new_temp = curr_temp + 457.87
        }
    }else if (curr_unit == "K"){
        if (new_unit == "C") {
            new_temp = curr_temp - 273.15
        }else if (new_unit == "F") {
            new_temp = curr_temp + 457.87
        }
    }else if (curr_unit == "C"){
        if (new_unit == "F"){
            new_temp = (9/5)*(curr_temp + 32)
        }else if (new_unit == "K"){
            new_temp = curr_temp + 273.15
        }
    };
    data = new_temp.toFixed(2);
    return data;
}

const file = 'temp.txt';

const server = http.createServer(function (req, res) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) { console.error(err) }
        else {
            const obj = JSON.parse(data);
            curr_unit = obj.curr_unit 
            curr_temp = obj.curr_temp 
            new_unit = obj.new_unit 
            data = findTemp(curr_unit, curr_temp, new_unit);
            res.write(data)
        }
        res.end()
    })
})


server.listen(port, function (err) {
    if (err) { console.error(err) }
    else {
        console.log('Server is listening on port ', port)
    }
})