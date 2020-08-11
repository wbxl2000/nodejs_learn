const url = require('url');
const fs = require('fs');
const path = require('path');

// 扩展res
function changeRes(res) {
    res.send = (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
    }
}

// 根据后缀名获取文件没醒
function getFileMime(extname) {
    let data = fs.readFileSync('./data/mime.json');
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

// 静态web服务方法
function initStatic(req, res, staticPath) {
    // 1. 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname=='/'?'/index.html':pathname;
    let extname = path.extname(pathname);
    // 2. 通过fs模块读取文件
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

let server =  () => {
    let G = {
        // 区分 get 和 post
        _get:{},
        _post:{},
        // 默认路径 静态web目录
        staticPath: 'static'
    };

    let app = function(req, res) {
        // 扩展res的方法
        changeRes(res);

        // 配置静态web服务
        initStatic(req, res, G.staticPath);


        let pathname = url.parse(req.url).pathname;
        // 获取请求类型
        let method = req.method.toLowerCase();
        console.log(pathname);
        if (G['_'+method][pathname]) {
            if (method == "get") {
                G._get[pathname](req, res);
            } else {
                console.log(`??`);
                // post 获取post数据，把它绑定到req.body
                let postData = '';
                req.on('data', (chunk) => postData += chunk);
                req.on('end', () => {
                    req.body = postData;
                    G._post[pathname](req, res);
                })
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end('页面不存在');
        }
    }
    
    app.get = function(str, cb) {
        // 注册方法
        G._get[str] = cb;
    }
    
    app.post = function(str, cb) {
        // 注册方法
        G._post[str] = cb;
        console.log(str);
        console.log(G._post['/doLogin']);
    }

    // 配置静态web服务目录
    app.static = function(staticPath) {
        G.staticPath = staticPath;
    }

    return app;
}

module.exports = server();