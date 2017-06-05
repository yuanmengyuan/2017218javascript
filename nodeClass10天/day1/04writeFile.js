const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    fs.writeFile('./static/2.txt','中午吃饭拉12233，吃什么呢？',(err)=>{
        if(err){
            res.writeHeader(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.end('写入失败')
        }
        res.end();
    })
});
server.listen(8080);