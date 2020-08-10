const fs = require('fs');

var readStream = fs.createReadStream('./data/input.txt');

var str = '';

readStream.on('data', (data) => {
    str += data;
    count ++;
    console.count();
})

readStream.on('end', () => {
    console.log(str);
})

readStream.on('error', (err) => {
    console.log(err);
})