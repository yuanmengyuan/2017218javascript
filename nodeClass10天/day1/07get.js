const http=require('http');
const querystring=require('querystring');
const url=require('url');

http.createServer(function (req,res) {
    //方案1：原始手动获取；
    /*if(req.url==='/favicon.ico') return;
    var strQuery=req.url.split('?')[1];
    var ary1=strQuery.split('&');
    var obj={};
    for(var i=0; i<ary1.length; i++){
        var ary3=ary1[i].split('=');
        obj[ary3[0]]=ary3[1];
    }
    console.log(obj)*/
    //方案2：querystring:把键值对的字符串转成键值对的对象；
    /*if(req.url==='/favicon.ico') return;
    var strQuery=req.url.split('?')[1];
    var obj=querystring.parse(strQuery);*/
    //方案3：url
    var obj=url.parse(req.url,true).query;

    console.log(obj)
    res.end('ok');
}).listen(8080);