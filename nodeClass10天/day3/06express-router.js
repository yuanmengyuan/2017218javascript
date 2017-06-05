/**
 * Created by zhanglei on 2017/5/23.
 */
const express=require('express');
const app=express();
app.listen(8080);
//get和post请求，对路由卡的比较死的请求； use()可以扩充地址的请求
app.get('/',function (req,res) {
    res.send('11111111111111')
});
//我们自己给路由添加的正则；
/*
app.get(/^\/student\/(\d{6})(\d{1,2})$/,function (req,res) {
    console.log(req.params)
    res.send('学生的学号是：'+req.params[0]+',年龄是:'+req.params[1])
});
app.get(/^\/teacher\/(\d{4})$/,function (req,res) {
    res.send('老师的工号是：'+req.params[0])
})*/
//express自带的正则；
app.get('/teacher/:id',function (req,res,next) {
    console.log(1)
    next();
})
app.get('/:teacher/:id',function (req,res) {
    console.log(2)
    res.send(req.params.teacher+'的工号是：'+req.params.id)
})
