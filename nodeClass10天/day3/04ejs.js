/**
 * Created by zhanglei on 2017/5/23.
 */
var str='我最爱的手机是iphone <%= n%>';
var ejs=require('ejs');
str=ejs.render(str,{n:7});
console.log(str)