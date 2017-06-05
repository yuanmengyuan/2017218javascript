/**
 * Created by zhanglei on 2017/5/21.
 */
const http=require('http');
const querystring=require('querystring');
const url=require('url');

//创建服务器
const server=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        return;
    }
    var str='';
    req.on('data',(data)=>{
        str+=data;
    });
    req.on('end',()=>{
        var postData=querystring.parse(str);
        var getData=url.parse(req.url,true).query;
        console.log(postData)
        console.log(getData);
        res.end();
    })
});
//给服务器添加监听
server.listen(8080);
//http://localhost:8080/index.html?name=ymy&age=18#bbb123;