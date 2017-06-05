const formidable=require('formidable');
const db=require('../models/db');
const ObjectId=require('mongodb').ObjectID;
const sd = require('silly-datetime');


//负责渲染留言框的首页；
exports.showIndex=function (req,res,next) {
    res.render('index');
};
//因为是post请求，所以必须通过formidable拿到别人传过来的数据；
exports.addData=function (req,res,next) {
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fileds) {
        fileds.time=sd.format(new Date(),'YYYY-MM-DD HH:mm');
        db.insert('liuyan',fileds,function (err,result) {
            if(err){
                res.send({"bok":false,"msg":"留言提交失败，请联系管理员"});
                return;
            }
            res.send({"bok":true,"msg":"留言提交成功"});
        })
    })
};
exports.findData=function (req,res,next) {
    var page=req.query.page;
    var pageamount=req.query.pageamount;
    //带分页和排序功能的查询；
    db.find('liuyan',{},{sort:{"time":-1},page,pageamount},function (err,result) {
        if(err){
            res.send({"bok":false,"msg":"数据查询失败"});
            return;
        }
        res.send(result);

    })
};
exports.deleteData=function (req,res,next) {
    var id=req.params.id.toString();
    console.log(ObjectId(id))
    db.remove("liuyan",{"_id":ObjectId(id)},function (err,result) {
        if(!err){
            res.redirect('/');
        }
    })

};
exports.allcount=function (req,res,next) {
    db.allCount('liuyan',function (count) {
        res.send(count.toString())
    })
};