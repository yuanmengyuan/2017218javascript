const express=require('express');
const gm=require('gm');
const fs = require('fs')
const app=express();
app.listen(8080);

//设置模板引擎
app.set('view engine','ejs');
//静态资源
app.use(express.static('./public'));
app.use('/avatar',express.static('./avatar'));
//添加请求；渲染页面
app.get('/',function (req,res,next) {
    res.render('index');
});
//实现切图功能；
app.get('/cut',function (req,res,next) {
    var {w,h,l,t}=req.query;
    gm('./avatar/ala.jpg')
        .crop(w,h,l,t)
        .resize(100,100,'!')
        .write('./avatar/ala.jpg',function (err) {
            if(err){
                res.send({"bok":false,"msg":"切图失败"})
            }else{
                res.send({"bok":true,"msg":"恭喜你，切图成功"})
            }

        })
});












