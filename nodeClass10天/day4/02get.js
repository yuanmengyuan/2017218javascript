const express=require('express');
const app=express();
app.listen(8080);
//设置模版引擎；
app.set('view engine','ejs');
//添加请求
//1:当请求"/",把表单渲染出来；
app.get('/',function (req,res) {
    console.log(req.query);
    res.render('form')
});
