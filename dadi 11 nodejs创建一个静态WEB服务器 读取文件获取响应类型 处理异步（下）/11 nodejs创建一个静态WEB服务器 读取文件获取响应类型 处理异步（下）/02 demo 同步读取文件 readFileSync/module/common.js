const fs = require('fs');
const common=require('./module/common.js');
const path=require('path');
const url=require('url');

let getFileMime = function (extname) {
    let data = fs.readFileSync('./data/mime.json');
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

exports.static = function (req, res, staticPath) {
    // 1. 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    // 2. 通过fs模块读取文件
    if (pathname != '/favicon.ico') {
        fs.readFile('./' + staticPath + pathname, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset="utf-8"' });
                res.end('404 NOT FOUND, 页面走丢了');
                return;
            }
            let mime = getFileMime(extname);
            res.writeHead(200, { 'Content-Type': '' + mime + ' charset="utf-8"' });
            res.end(data);
        })
    }
}

