const fs = require('fs');

var readStream = fs.createReadStream('./1.jpg');

var writeSteam = fs.createWriteStream('./data/1.jpg');

readStream.pipe(writeSteam);