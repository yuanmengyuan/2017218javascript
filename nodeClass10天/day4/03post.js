const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));
//添加请求；
//'/'渲染出表单;
app.get('/',function (req,res) {
    res.render('form2')
});
app.post('/',function (req,res) {
    //获取post请求提交的数据
    console.log(req.body)
    res.send('提交完成');
});
