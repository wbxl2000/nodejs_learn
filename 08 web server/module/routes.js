const fs = require('fs');
const path = require('path');
const url = require('url');

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
        // 同步方法
        try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                let mime = getFileMime(extname);
                // console.log('  -' + extname + ' ' + mime);
                res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (err) {

        }
        // 异步方法，在app.js没有使用路由时可以使用
        // console.log('pathname' + pathname);
        // fs.readFile('./' + staticPath + pathname, (err, data) => {
        //     if (err) {
        //         res.writeHead(404, { 'Content-Type': 'text/html; charset="utf-8"' });
        //         res.end('404 NOT FOUND, 页面走丢了');
        //         return;
        //     }
        //     console.log(data);
        //     if (data) {
        //         let mime = getFileMime(extname);
        //         console.log('  -' + extname + ' ' + mime);
        //         res.writeHead(200, { 'Content-Type': '' + mime + ' ;charset="utf-8"' });
        //         res.end(data);
        //     }
        // })
    }
}