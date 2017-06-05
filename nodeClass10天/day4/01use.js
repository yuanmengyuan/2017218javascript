const express=require('express');
const app=express();
app.listen(8080);

//添加请求
//最初的请求地址：/admin/aaa/index.js?name=ymy&age=18
app.use('/admin',function (req,res) {
    //拿到真正的请求地址和传给后台的参数；
    console.log(req.originalUrl);//  /admin/aaa/index.js?name=ymy&age=18
    //拿到的是我们属于的最基本的地址；
    console.log(req.baseUrl); //  /admin
    //拿到是基本地址的其他子子孙孙的路径地址；(不包含基本地址，也不包含参数)
    console.log(req.path)//    /aaa/index.js
    res.send('ok');

})