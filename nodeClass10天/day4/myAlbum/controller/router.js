var file=require('../models/files');
var formidable=require('formidable');
var fs=require('fs');
//router在控制器中，restful路由设计；
//显示首页
exports.showIndex=function (req,res,next) {
    file.showAllAlbums(function (err,albums) {
        if(err){
            next();
            return;
        }
        res.render('index',{
            albums
        });
    });
};
//显示点击的文件夹下面的所有相册内容；
exports.showImg=function (req,res,next) {
    //拿到当前相册的名称；
    var albumName=req.params.albumName;
    file.showImgs(albumName,function (err,albums) {
        if(err){
            next();
            return;
        }
        if(albums instanceof  Array){
            res.render('albumsImg',{
                albums,
                albumName
            })
        }
    })

};
//渲染表单上传页；
exports.showForm=function (req,res) {
    file.showAllAlbums(function (err,albums) {
        if(err){
            next();
            return;
        }
        res.render('upload',{
            albums
        });
    });
};
//处理图片的上传
exports.doupload=function (req,res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";
    form.parse(req,function (err,fields,files) {
        // console.log(fields)
        // console.log(files)
        if(err){
            next();
            return;
        }
        var oldpath=files.tupian.path;
        var newpath=form.uploadDir+'/'+fields.wenjianjia+'/'+files.tupian.name;
        fs.rename(oldpath,newpath,function (err) {
            if(err){
                console.log(err)
                next();
                return;
            }else{
                fs.unlink(oldpath,function (err) {
                    if(!err) console.log('删除成功')
                    res.send('上传并且删除成功')
                })
            }
        })

    })
};