const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);

//中间件
app.use(bodyParser());
app.use(express.static('./'));

app.get('/',(req,res)=>{
    res.sendFile('06vue-resource.html',{root:'./'})
})
app.get('/get',(req,res)=>{
    console.log(req.query)
    res.send('我是通过get请求得到的数据')
});
app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})