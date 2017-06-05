const express=require('express');
const router=require('./controller');
const app=express();
app.listen(8080)
//设置ejs模版引擎
app.set('view engine','ejs');
//静态资源
app.use(express.static('./public'));

//restful路由设计；
app.get('/',router.showIndex); //渲染页面
app.post('/add',router.addData);//提交留言功能； 增加数据
app.get('/find',router.findData);//查询数据； 查询数据
app.get('/delete/:id',router.deleteData);//删除数据
app.get('/allcount',router.allcount)