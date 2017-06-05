//引入模块
var fs=require('fs');

//导出模块
//导出uploads下所有的文件夹；
module.exports={
    getAllAlbums:function (callback) {
        fs.readdir('./uploads',function (err,files) {
            if(err){
                callback(err,null);
                return;
            }
            var aryAlbums=[];
            (function iterator(i) {
                if(i>=files.length){
                    callback(null,aryAlbums);
                    return;
                }
                //读每个文件的状态；
                fs.stat('./uploads/'+files[i],function (err,stats) {
                    if(err){
                        callback(err,null);
                        return;
                    }
                    //判断是个文件夹的话，就放入数组；
                    if(stats.isDirectory()){
                        aryAlbums.push(files[i]);
                    }
                    iterator(++i);
                })
            })(0);
        })
    },
    getDirImgs:function (albumName,callback) {
        fs.readdir('./uploads/'+albumName,function (err,files) {
            if(err){
                callback(err,null);
                return;
            }
            var aryAlbums=[];
            (function iterator(i) {
                if(i>=files.length){
                    callback(null,aryAlbums);
                    return;
                }
                //读每个文件的状态；
                fs.stat('./uploads/'+albumName+'/'+files[i],function (err,stats) {
                    if(err){
                        callback(err,null);
                        return;
                    }
                    //判断是个文件夹的话，就放入数组；
                    if(stats.isFile()){
                        aryAlbums.push(files[i]);
                    }
                    iterator(++i);
                })
            })(0);
        })
    }
}