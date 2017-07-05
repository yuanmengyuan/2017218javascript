const express=require('express');
const cookieParser=require('body-parser');
const Msg=require('./model/Msg');
const ObjectId = require('mongodb').ObjectID;
const app=express();
app.listen(8080);

//中间件
app.use(cookieParser());
//静态资源
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile('09留言框.html',{root:__dirname})
});
//前端向后台"提交"数据
app.post('/post',(req,res)=>{
    req.body.time=new Date().getTime();
    //mongoose中增加数据
    Msg.create(req.body,(err,result)=>{
        res.send(result);
    })
});
//前端向后台"请求"数据
app.get('/get',(req,res)=>{
    var {page,pageamount}=req.query;
    pageamount=Number(pageamount);
    //mongoose中查找数据
    Msg.find({},(err,result)=>{
        res.send(result);
    }).sort({time:-1}).limit(pageamount).skip(page*pageamount)
;})
//前端向后台请求数据总量
app.get('/count',(req,res)=>{
    Msg.count({},(err,result)=>{
        res.send(result.toString())
    })
});
//数据删除
app.get('/del',(req,res)=>{
    var _id=ObjectId(req.query.id);
    Msg.remove({_id},(err,result)=>{
        console.log(result);
        res.send(result)
    })
});