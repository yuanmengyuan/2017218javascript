/**
 * Created by zhanglei on 2017/5/23.
 */
const http=require('http');
const fs=require('fs');
const path=require('path');
const sd=require('silly-datetime');
const formidable=require('formidable');

http.createServer(function (req,res) {
    //渲染：读取www/form.html的文件，并且通过浏览器渲染；
    fs.readFile('./www/form.html',function (err,data) {
        res.end(data);
    })
    //提交数据：前端向后台通过post提交数据；
    if(req.url==='/tijiao' && req.method.toLowerCase()==='post'){
        var form=new formidable.IncomingForm();
        //图片上传后的存储路径
        form.uploadDir='./uploads/';
        form.parse(req,function (err,fields,files) {
            var oldpath=files.tupian.path;
            var obj=path.parse(files.tupian.name),
                filename=obj.name,//图片的名字
                extname=obj.ext;//图片的后缀名
            var newpath=form.uploadDir+filename+sd.format(new Date(), 'YYYYMMDD HHmmss')+Math.floor(Math.random()*100)+extname;
            //在更改名字之前先判断图片的大小，如果图片太大，不让上传
            if(files.tupian.size>1048576){
                //删除图片； 从图片路径
                fs.unlink(oldpath,function (err) {
                    if(err){
                        res.end('删除失败');
                        return;
                    }
                })
                return;//阻止程序执行；
            }
            //fields:{name:value}的文本域； files：关于你所上传的这个文件的详细信息；
            //console.log(fields)
            //console.log(files)
            //需求：更改文件的名字，让文件可以正常打开
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                    res.end('改名失败');
                    return;
                }
            })
            res.end();
        })
    }

}).listen(8080);