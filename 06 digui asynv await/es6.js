// ES6之前：通过回调函数来获取异步方法里面的数据。卧槽。
// function getData(callback) {
//     // ajax
//     setTimeout(function() {
//         var name = 'qer';
//         callback(name);
//     }, 1000);
// }

// getData((aaa) => {
//     console.log(aaa);
// })

// ES6 

var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var name = 'qer';
        resolve(name);
    }, 1000);
})

/*
将函数封装的写法：
function getData(resolve, reject) {
    setTimeout(() => {
        var name = 'qer';
        resolve(name);
    }, 1000);
}
var p = new Promise(getData);
*/

p.then((name) => {
    console.log(name);
})