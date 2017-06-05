const express=require('express');
//router2中是关于留言板的控制器处理；
const router=require('./router/router2');
const app=express();
app.listen(8080);
//ejs模板引擎
app.set('view engine','ejs');
app.use(express.static('./public'));

//发送请求
app.get('/',router.showIndex);
app.post('/',router.doliuyan);
//请求所有留言
app.get('/getliuyan',router.getliuyan);
//请求留言的个数得到分页的个数；
app.get('/getCount',router.getCount)
