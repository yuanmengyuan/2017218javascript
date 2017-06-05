/**
 * Created by zhanglei on 2017/5/24.
 */
const express=require('express');
const app=express();
app.listen(8080);
var putong={
    "teacher":['teacher1','teacher2'],
    "student":64
};
app.get('/:username/:password',function (req,res,next) {
    //先到数据库的普通用户中进行查找，如果有说明是普通用户；如果没有next()
    var username=req.params.username;
    if(putong[username]){
        res.send('普通用户')
    }else{
        next();
    }
});

app.get('/admin/login',function (req,res,next) {
    console.log(1)
    res.send('我是管理员');
});