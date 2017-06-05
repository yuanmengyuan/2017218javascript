/**
 * Created by zhanglei on 2017/5/27.
 */
const express=require('express');
const cookieparser=require('cookie-parser');
const app=express();
app.listen(8080);
//引入cookieparser中间件
app.use(cookieparser());

//请求
app.get('/',function (req,res) {
    if(req.cookies.login){
        res.send('你好啊：'+req.cookies.username)
    }else{
        res.send('只有登录才能查看，请您先登录！！！')
    }
});
app.get('/login',function (req,res) {
    //种cookie；
    res.cookie('login','true');
    res.cookie('username','ymy');
    res.send('登录成功！！！！')

})