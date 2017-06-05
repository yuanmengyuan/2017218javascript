const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const server=http.createServer(function (req,res) {
    var obj=url.parse(req.url,true);
    var pathname=obj.pathname;//请求地址
    var getData=obj.query;//拿到get请求的参数；
    var filename='./public'+pathname;
    var extname=path.extname(pathname);
    //当浏览器发起请求的时候，服务器根据请求地址不同，读取不同的文件；
    //fs下的'./代表的是根目录'
    fs.readFile(filename,function (err,data) {
        if(err){
            console.log(err);
            res.end('读取数据失败')
        }
        //根据后缀名不同，返回不同的mime类型；
        getMime(extname,function (mime) {
            res.writeHeader(200,{'Content-Type':mime});
        });
        //服务器把从磁盘中
        res.end(data);
    })
});
//给服务器添加监听
server.listen(8080);
function getMime(extname,callback) {
    fs.readFile('./mime.json',function (err,data) {
        if(err){
            res.end('mime读取失败');
            return;
        }
        callback(data[extname])
    })
}