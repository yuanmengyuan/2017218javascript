const db=require('../models/db');
const formidable=require('formidable');
exports.showIndex=function (req,res,next) {
    res.render('liuyanban')
};
exports.doliuyan=function (req,res,next) {
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields,files) {
        //数据提交；
        db.insertOne('liuyan',fields,function (err,result) {
            if(err){
                res.send({"bok":false,"msg":"提交失败，请联系管理员重新进行提价"});
                return;
            }
            res.send({"bok":true,"msg":"留言提交成功！！！"})
        })
    })
};
exports.getliuyan=function (req,res,next) {
    var page=req.query.page;
    var pageamount=req.query.pageamount;
    db.find('liuyan',{},{sort:{"time":-1},page,pageamount},function (err,result) {
        if(err){
            res.send({"bok":false,"msg":"数据获取失败"})
            return;
        }
        res.send({"bok":true,"msg":result});
    })
};
exports.getCount=function (req,res,next) {
    db.count('liuyan',function (count) {
        res.send(count);
    })
};