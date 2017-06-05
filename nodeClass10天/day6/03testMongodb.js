const db=require('./models/db');
const express=require('express');
const app=express();
app.listen(8080);

//添加请求--路由设计
//add添加
app.get('/add',function (req,res,next) {
    db.insertOne('test',{"name":"乔峰","age":parseInt(Math.random()*100)},function (err,result) {
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
});
// find 显示首页
app.get('/find',function (req,res,next) {
    var page=req.query.page;
    var pageamount=req.query.pageamount||3;
    db.find('test',{},function (err,result) {
        if(err){
            console.log(err);
            return;
        }
        res.send(result);
    })
});
//更新数据
app.get('/update',function (req,res,next) {
    db.updateMany('test',{"age":88},{$set:{"name":"哈哈哈哈"}},function (err,result) {
        res.send(result);
    })
});
//删除数据
app.get('/del',function (req,res,next) {
    db.remove('test',{"age":88},function (err,result) {
        res.send(result);
    })
});
//获取总数量
app.get('/all',function (req,res,next) {
    db.count('test',function (count) {
        res.send(count.toString());
    })
});











