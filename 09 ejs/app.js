const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');

http.createServer(function (req, res) {
    console.log(req.method);
    // 创建静态web服务
    routes.static(req, res, 'my_website');
    // 路由
    let pathname = url.parse(req.url).pathname;
    if (pathname == '/news') {
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
    } else if (pathname == '/login') {
        ejs.renderFile('./views/form.ejs', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
            res.end(data);
        })
    } else if (pathname == '/dologin') {
        var postData = '';
        req.on('data', (chunk) => postData += chunk); // chunk是片段
        req.on('end', () => {
            console.log(postData);
            res.end(postData);
        });
    } else if (pathname == '/register') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
        res.end("执行注册");
    } else if (pathname == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
        res.end("后台逻辑");
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
        res.end('404 NOT FOUND, 页面走丢了');
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');