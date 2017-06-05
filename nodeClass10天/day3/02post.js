/**
 * Created by zhanglei on 2017/5/23.
 */
const http=require('http');
const querystring=require('querystring');
const formidable=require('formidable');
const fs=require('fs');

const server=http.createServer(function (req,res) {
    if(req.url==='/upload' && req.method.toLowerCase()=='post'){
        var form=new formidable.IncomingForm();
        form.uploadDir='./uploads/';
        form.parse(req,function (err,fields,files) {
            //fields 文本域：name:xxx,age:xxxx,tupian :xxxx
            //files：对传进来的大文件进行parse解析；
            // console.log(fields);//键值对
            // console.log(files);//文件对象的详细信息；
            var oldpath=files.tupian.path;
            var newpath=form.uploadDir+files.tupian.name;
            //该名字;
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                    res.end('改名失败');
                    return;
                }
            })
            res.end('ok');
        })
    }
});
server.listen(8080);