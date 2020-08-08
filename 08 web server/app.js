const http = require('http');
const routes = require('./module/routes');
const url = require('url');

http.createServer(function (req, res) {
    // 创建静态web服务
    routes.static(req, res, 'my_website');
    // 路由
    let pathname = url.parse(req.url).pathname;
    if (pathname == '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
        res.end("执行登录");
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