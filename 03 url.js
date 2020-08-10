const url = require('url');

var api='https://www.baidu.com/s?wd=nvm&rsv_spt=1&rsv_iqid=0x9f59769b0011c018&issp=1&f=8&rsv_bp=1&rsv_idx=2';

var getValue = url.parse(api, true).query; // true是把参数转化为对象

console.log(getValue);

console.log('wd: ' + getValue.wd + '--rsv_bp: ' + getValue.rsv_bp);