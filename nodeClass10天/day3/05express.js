/**
 * Created by zhanglei on 2017/5/23.
 */
const express=require('express');//引入模块
const app=express();//创建服务器：server
app.listen(8080);//给服务器添加监听；
//设置模版引擎
app.set('view engine','ejs');
//静态资源文件；
//app.use(express.static('./public'));
//get请求：当请求/的时候，展现index页面；
app.get('/',function (req,res) {
    res.render('index',{
        n:7,
        fruits:['榴莲','芒果','草莓','西瓜','甜瓜']
    })
});
app.get('/yundong',function (req,res) {
    var yundongs=[
        {title:'篮球',desc:'因为可以长高个'},
        {title:'足球',desc:'因为大粗腿'},
        {title:'游泳',desc:'因为可以好身材'},
        {title:'瑜伽',desc:'因为可以冻龄'}
    ];
    res.render('yundong',{
        yundongs
    })
});

