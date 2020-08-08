const http = require('http');
const routes = require('./module/routes');
const url = require('url');

http.createServer(function (req, res) {
    console.log(req.method);
    // 创建静态web服务
    routes.static(req, res, 'my_website');
    // 路由
    let pathname = url.parse(req.url).pathname.replace("/", "");
    try {
        routes[pathname](req, res);
    } catch (error) {
        routes['error'](req, res);
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');