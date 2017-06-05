/**
 * Created by zhanglei on 2017/5/20.
 */
const http=require('http');
const fs=require('fs');
const server=http.createServer(function (req,res) {
    //拿到当前目录下的所有文件，files是个数组；里面放了所有的文件和文件夹；
    var aryDir=[];
    fs.readdir('./',function (err,files) {
        //强制把异步变成了同步；
        (function Iterator(i) {
            if(i>=files.length){
                console.log(aryDir)
                return;
            }
            fs.stat('./'+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    aryDir.push(files[i]);
                }
                Iterator(++i);
            })

        })(0);
    })

});
server.listen(8080);