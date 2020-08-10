// 实现功能：打印wwwroot下所有的目录

// 注意如果按照普通逻辑写是不行的，因为在fs里面是异步的。

//解决思路：1.改造for循环，递归实现  2.nodejs里面的新特性 async await

// 1. 递归：匿名自执行函数

const fs = require('fs');
var path = './wwwroot';
var dirArr = [];

fs.readdir(path, (err, files) => {
    if (err) throw err;
    (function getDir(i) {
        if (i == files.length) {
            console.log(dirArr);
            return;
        }
        fs.stat(path + '/' + files[i], (err, stat) => {
            if (stat.isDirectory()) {
                dirArr.push(path + '/' + files[i]);
            }
            getDir(i + 1);
        })
    })(0)
})