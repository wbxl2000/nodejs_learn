const fs = require('fs');

var str = '';

for (var i = 0; i < 100; i ++) {
    str += 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
}

var writeStream = fs.createWriteStream('./data/output.txt');

writeStream.write(str);

// 标记写入完成
writeStream.end();

writeStream.on('finish', () => {
    console.log('写入完成');
})