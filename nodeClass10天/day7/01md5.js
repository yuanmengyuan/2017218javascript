/**
 * Created by zhanglei on 2017/5/28.
 */
var str='123';
str=md5(md5(str).substr(4,11)+md5(str)+'张蕾');
console.log(str)
function md5(str) {
    const  crypto=require('crypto');
    const hash=crypto.createHash('md5');
    return hash.update(str).digest('base64')
}