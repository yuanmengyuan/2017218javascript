const express=require('express');
const router=require('./router');
const app=express();
const session=require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.listen(8080);
app.set('view engine','ejs');
app.use(express.static('./public'));


//restful 请求；
//1：渲染登录的页面；
app.get('/login',router.showLogin);
//1.1:执行登录功能；
app.post('/dologin',router.dologin);
//2：显示注册页面；
app.get('/reg',router.showReg);
//2.1:执行注册功能
app.post('/doreg',router.doreg);