/**
 * Created by zhanglei on 2017/5/20.
 */
const http=require('http');
const fs=require('fs');
const server=http.createServer(function (req,res) {
    //根据请求地址不同，返回不同的内容；
    //1：读取文件
    fs.readFile('./static/1.txt',function (err,data) {
        if(err){
            res.write('404');
            res.end();
        }
        res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
        res.write(data);
        res.end();
    })
});
//监听
server.listen(8080);
