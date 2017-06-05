const http=require('http');
const url=require('url');
const fs=require('fs');

var users={
    "ymy":123456,
    "zhangsan":123123
};
http.createServer((req,res)=>{
    //1:渲染页面；
    var obj=url.parse(req.url,true);
    var getData=obj.query;
    var pathname=obj.pathname;//请求的文件路径；
    var filename='./public'+pathname;
    if(pathname==='/user'){//请求数据
        //判断通过参数传进来的用户是否存在；
        //校验用户名
        switch (getData.act){
            case 'login':
                if(users[getData.username]){
                    //说明该用户存在
                    //校验密码
                    if(users[getData.username]==getData.password){
                        res.end('{"bok":true,"msg":"恭喜你，登录成功！"}')
                    }else{
                        res.end('{"bok":false,"msg":"sorry!您的密码不正确"}')
                    }
                }else{
                    res.end('{"bok":false,"msg":"该用户不存在"}')
                }
                break;
            case 'reg':
                if(users[getData.username]){
                    //说明用户已经存在，不能注册
                    res.end('{"bok":false,"msg":"注册失败！！该用户名已经存在！"}')
                }else{
                    users[getData.username]=getData.password;
                    res.end('{"bok":true,"msg":"恭喜您，注册成功！！！"}')
                }
                break;
            default:
                res.end('未知的act')
        }
    }
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.end('404')
        }
        res.end(data);
    })
}).listen(8080);