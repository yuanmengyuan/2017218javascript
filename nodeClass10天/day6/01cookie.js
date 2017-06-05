const express=require('express');
const cookieparser=require('cookie-parser');
const app=express();

app.listen(8080);
//使用cookieparser中间件
app.use(cookieparser());

//再获取；
app.get('/',function (req,res) {
    //需要获取cookie：
    var likes=req.cookies.mudidi;
    res.send(`你可以对这些地方感兴趣：${likes}`)
})
//先添加
app.get('/gonglve',function (req,res) {
    var mudidi=req.query.mudidi;
    var arymudidi=req.cookies.mudidi||[];

    //设置：res.cookie(名字，值，{maxAge:存活时间，httpOnly:true})
    //获取：req.cookies.名字
    arymudidi.push(mudidi);
    //服务器给浏览器种了一个cookie： 设置cookie
    res.cookie('mudidi',arymudidi,{
        maxAge:24*60*60*30*1000 //cookie在浏览器的存活时间；
    });
    res.send(`我想去"${mudidi}"的旅游攻略`)
});