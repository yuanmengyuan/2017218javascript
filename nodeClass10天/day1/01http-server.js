/**
 * Created by zhanglei on 2017/5/20.
 */
const http=require('http');
const server=http.createServer(function (req,res) {
    //request：前端向后台发起请求；请求页面和数据等
    //response：后台给前端响应；
    if(req.url=='/favicon.ico'){
        return;
    }
    console.log('有人来了，好开心');//调试
    //通过writeHeader来设置后台响应的状态吗，需要渲染的文件类型，和字符集编码；
    res.writeHeader('200',{'content-type':'text/html;charset=utf-8'});
    res.write('有人来了，好开心');//在浏览器展示内容的
    res.end();
});
server.listen(8080);
