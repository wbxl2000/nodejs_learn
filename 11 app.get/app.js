const http = require('http');
const app = require('./module/routes');
const ejs = require('ejs');

// 注册 web 服务
http.createServer(app).listen(8081);

// 配置静态web服务
app.static('public');

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
    console.log(req.body);
    res.send(req.body);
})

// 配置路由
app.get('/news', function(req, res) {
    res.send('新闻');
})
