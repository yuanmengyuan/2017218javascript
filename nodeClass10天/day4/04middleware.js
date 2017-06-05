/**
 * Created by zhanglei on 2017/5/24.
 */
const express=require('express');
const app=express();
app.listen(8080);

app.get('/admin/login',function (req,res,next) {
    console.log(1)
    res.send('我是管理员');
});
app.get('/:username/:password',function (req,res) {
    console.log(2)
    res.send('我是普通用户')
});