const express=require('express');
const router=require('./controller');//这里不引入router，因为我们在controller中设置package.json的入口文件(main)
const app=express();
app.listen(8080);
//设置模版引擎
app.set('view engine','ejs');
//静态资源
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//发送请求；
//get请求"/"->显示首页
app.get('/',router.showIndex);
//get请求'／卡通动漫'
app.get('/:albumName',router.showImg);
//get请求'/upload';
app.get('/upload',router.showForm);
//post请求；处理上传上来的图片；
app.post('/doupload',router.doupload);
//404页面；接盘侠
app.use(function (req,res) {
    res.render('404')
});
