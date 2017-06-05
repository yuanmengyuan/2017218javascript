//引入模块
var file=require('../models/file');
var formidable=require('formidable');
var sd=require('silly-datetime');
var fs=require('fs');
var path=require('path');

//导出模块
module.exports={
    //显示首页
    showIndex:function (req,res,next) {
        //渲染
        file.getAllAlbums(function (err,albums) {
            if(err){
                next();
            }
            res.render('index',{
                albums
            })
        })

    },
    //显示当前文件夹下所有图片
    showDirImgs:function (req,res,next) {
        var albumName=req.params.albumName;
        file.getDirImgs(albumName,function (err,albums) {
            if(err){
                next();
                return;
            }
            res.render('detail',{
                albumName,
                albums
            })
        })

    },
    //显示表单页面
    showUpload:function (req,res,next) { 
        file.getAllAlbums(function (err,albums) {
            if(err){
                next();
            }
            res.render('form',{
                albums
            })
        })
    },
    //实现上传功能：
    doUpload:function (req,res,next) {
        var form=new formidable.IncomingForm();
        form.uploadDir='./tmpDir/';//tmpDir这个文件夹用来临时存放过渡图片的；
        form.parse(req,function (err,fields,files) {
            //console.log(fields)
            //console.log(files)
            var oldpath=files.tupian.path;
            var obj=path.parse(files.tupian.name),
                name=obj.name,
                ext=obj.ext,
                time=sd.format(new Date(), 'YYYYMMDDHHmmss'),
                newpath='./uploads/'+fields.wenjianjia+'/'+name+time+ext;
            //处理图片的大小；1048576
            if(files.tupian.size>=54283){
                //不让上传，删掉临时文件夹中的图片；
                fs.unlink(oldpath,function (err) {
                    if(err){
                        console.log('删除失败')
                        next();
                        return;
                    }
                })
                res.send('图片太大，上传失败');
                return;
            }
            //改名字
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                    console.log('改名失败');
                    next();
                    return;
                }
                res.send('上传成功')
            });

        })


    }
}