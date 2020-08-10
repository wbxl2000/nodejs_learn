const http = require('http');

http.createServer((req, res) => {
    console.log(req.url); //获取url
    // 设置响应头
    res.writeHead(200, { "Content-Type": "text/html; charset='utf-8'"});
    // 设置一下编码防止中文乱码
    res.write("<head> <meta charset='utf-8'></head>");
    res.write('你好 nodejs');
    res.end();
}).listen(3000);