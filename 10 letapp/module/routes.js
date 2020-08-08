const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

let getFileMime = function (extname) {
    let data = fs.readFileSync('./data/mime.json');
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

let app = {
    login: (req, res) => {
        ejs.renderFile('./views/form.ejs', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
            res.end(data);
        })
    }, 
    register: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' + ';charset="utf-8"' });
        res.end('注册页面');
    },
    dologin: (req, res) => {
        var postData = '';
        req.on('data', (chunk) => postData += chunk); // chunk是片段
        req.on('end', () => {
            console.log(postData);
            res.end(postData);
        });
    },
    static: (req, res, staticPath) => {
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
        }
    }, 
    news: (req, res) => {
        let msg = '这是一个数据';
        let list = [
            {
                title: "新闻1",
            },
            {
                title: "新闻2",
            },
            {
                title: "新闻3",
            }
        ];
        ejs.renderFile('./views/news.ejs', {
            msg: msg, 
            newslist: list
        }, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
            res.end(data);
        })
    },
    error: (req, res) => {
        res.end('error');
    }
}

module.exports = app;