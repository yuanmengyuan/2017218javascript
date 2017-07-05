const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

app.listen(8080);

app.use(cookieParser('leilei'));
app.get('/',function (req,res) {
    req.secret='leilei'; //秘钥
    res.cookie("name","ymy",{
        maxAge:24*60*60*1000*60,//cookie存活期，保存密码的有效期
        signed:true //是否签名
    });
    res.send('设置成功')
})
app.get('/getCookie',function (req,res) {
    //var cookie=req.cookies.name;  //拿没签名过cookie
    var cookie=req.signedCookies.name; //拿签名过的cookie
    res.send(cookie)
})