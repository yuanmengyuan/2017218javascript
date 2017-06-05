const express=require('express');
const router=require('./controller');
const app=express();
app.listen(8080);

//restful路由设计；
//当/add请求的时候，增加数据
app.get('/add',router.add);
app.get('/find',router.find);
app.get('/update',router.update);
app.get('/remove',router.remove);
app.get('/count',router.count);