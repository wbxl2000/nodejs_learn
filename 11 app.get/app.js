const http = require('http');
const app = require('./module/routes');
const ejs = require('ejs');

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

// 注册 web 服务
// http.createServer(app).listen(8081);

// 配置路由
app.get('/', function(req, res) {
    res.send('首页');
})

// 配置路由
app.get('/login', function(req, res) {
    ejs.renderFile('./views/form.ejs', (err, data) => {
        res.send(data);
    })
})

// 配置路由
app.post('/doLogin', function(req, res) {
    console.log(res.body);
    res.send(res.body);
})

// 配置路由
app.get('/news', function(req, res) {
    res.send('新闻');
})
