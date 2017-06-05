var fs=require('fs');
//读取uploads文件夹下有多少个文件夹
exports.showAllAlbums=function (callback) {
    //读文件夹
    fs.readdir('./uploads',function (err,files) {
        if(err){
            callback(err,null);//文件夹读取失败
            return;
        }
        var aryAlbums=[];
        (function iterator(i) {
            if(i>=files.length){
                callback(null,aryAlbums);
                return;//阻断程序执行
            }
            fs.stat('./uploads/'+files[i],function (err,stats) {
                if(err){
                    callback(err,null);
                    return;
                }
                //判断是否为文件夹；
                if(stats.isDirectory()){
                    aryAlbums.push(files[i])
                }
                iterator(++i);
            })
        })(0)
    })
};
//获取当前文件夹下有多少张图片：图片属于文件；
exports.showImgs=function (albumName,callback) {
    fs.readdir('./uploads/'+albumName,function (err,files) {
        if(err){
            callback(err,null);//文件夹读取失败
            return;
        }
        var aryAlbums=[];
        (function iterator(i) {
            if(i>=files.length){
                callback(null,aryAlbums);
                return;//阻断程序执行
            }
            //注意路径问题
            fs.stat('./uploads/'+albumName+'/'+files[i],function (err,stats) {
                if(err){
                    callback(err,null);
                    return;
                }
                //判断是否为文件；注意：这里改了
                if(stats.isFile()){
                    aryAlbums.push(files[i])
                }
                iterator(++i);
            })
        })(0)
    })
}