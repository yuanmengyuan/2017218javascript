const http=require('http');
const fs=require('fs');

//创建服务器
const server=http.createServer(function (req,res) {
    //处理icon自动请求的问题
    if(req.url==='/favicon.ico'){
        return;
    }
    //根据路径的不同，返回不同的内容；
    var pathname='./static'+req.url;
    fs.readFile(pathname,function (err,data) {
        if(err){
            res.end('404') //二合一：res.write('404'); res.end();
        }
        res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
        res.end(data);
    })
});
//监听服务
server.listen(8080);