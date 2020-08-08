const fs = require('fs');

// 1. fs.stat 检测是文件还是目录

// fs.stat('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('是文件：' + data.isFile());
//     console.log('是目录：' + data.isDirectory());
// })

//

// 2. fs.mkdir 创建目录 参数(path, mode, callback)，第二个是目录权限(读写权限，默认777)

// fs.mkdir('./css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建成功');
// })

// 3. fs.writeFile 创建写入文件，以前存在的话会替换，参数1为路径，2为内容，3为参数：编码、权限、flag

// fs.writeFile('./html/aaa.html', '你好nodejs', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建写入文件成功');
// })

// 4. fs.appendFile 追加文件

// fs.appendFile('./html/index.html', '\n<br>第4次追加的内容', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('追加成功');
// })

// 5. fs.readFile 读取文件

// fs.readFile('./html/index.html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     console.log(data.toString());
// })

// 6. fs.readdir 读取目录

// fs.readdir('./html', (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);
// })

// 7. fs.rename 重命名 功能1：重命名，2：移动文件

// fs.rename('./html/my_news.html','./css/move.css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('重命名+移动 成功');
// })

// 8. fs.rmdir 删除目录 如果里面有文件，先把里面的文件都读取，然后删除文件先

// fs.rmdir('./aaa', (err) => {
//     if (err) throw err;
//     console.log('删除目录成功');
// });

// 9. fs.unlink 删除文件

// fs.unlink('./aaa/aaa.html', (err) => {
//     if (err) throw err;
//     console.log('删除文件成功');
// });

// 2.1 mkdirp

const mkdirp = require('mkdirp');
// return value is a Promise resolving to the first directory created
// mkdirp('./tmp/foo/bar/baz').then(made =>
//   console.log(`made directories, starting with ${made}`))
