const express=require('express');
const router=require('./controller');
const app=express();
app.listen(8080);
//设置ejs模版
app.set('view engine','ejs');
//引入静态资源
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//添加请求
app.get('/',router.showIndex);
//请求当前文件夹下所有的图片
app.get('/:albumName',router.showDirImgs);
//请求/upload,为了显示图片上传页；
app.get('/upload',router.showUpload)
//post请求/upload,为了实现上传图片功能
app.post('/upload',router.doUpload)






//404页面，永远在最底下，因为他是接盘侠；
app.use(function (req,res) {
    res.render('404')
});