const http = require('http');
const routes = require('./module/routes');

http.createServer(function (req, res) {
  // 创建静态web服务
  routes.static(req, res, 'static');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');