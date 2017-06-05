const http=require('http');
const fs=require('fs');
//创建服务
const server=http.createServer(function (req,res) {
    //需求：拿到当前文件夹下所有的文件夹；
    //1:拿到当前文件夹下所有的文件；
    var aryDir=[];
    fs.readdir('./',(err,files)=>{
        //2：逐个判断每个文件是否为文件夹，如果是，就放入数组；
        (function Iterator(i) {
            if(i>=files.length){
                console.log(aryDir)
                return;//阻断程序执行的作用；
            }
            fs.stat('./'+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    aryDir.push(files[i])
                }
                //当第一次的回调结束的时候，开始检查第二个文件；
                Iterator(++i);
            })
        })(0);
    })
});
//添加监听的端口
server.listen(8080);