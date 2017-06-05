const express=require('express');
const session=require('express-session');
const app=express();
app.listen(8080);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    /*cookie: { secure: true } *///针对https
}))

app.get('/',function (req,res) {
    //判断：如果登录，显示"你好：xxxx";如果没登录，滚回去登录
    if(req.session.login){
        res.send('你好啊：'+req.session.username);
    }else{
        res.send('请您先登录，才能观看')
    }
});
//在express-session中，种session和获取session都用req;
app.get('/login',function (req,res) {
    //到数据库种查。。。。。
    //种session-设置session
    req.session.login=true;
    req.session.username='圆梦源';
    res.send('登录成功')
});