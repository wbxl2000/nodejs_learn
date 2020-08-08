const fs = require('fs');
const { dir } = require('console');

// 1、定义一个异步方法 isDir 来判断一个资源到底是目录还是文件

async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) => {
            if (err) throw err;
            if (stat.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
}

// 2、获取 wwwroot 里面的所有资源 循环遍历

function main() {
    var path = '../05 fs/wwwroot';
    var dirArray = [];
    fs.readdir(path, async (err, files) => { // 此处异步
        if (err) throw err;
        for (var i = 0; i < files.length; i++) {
            if (await isDir(path + '/' + files[i])) {
                dirArray.push(files[i]);
            }
        }
        console.log(dirArray);
    })
}

main();