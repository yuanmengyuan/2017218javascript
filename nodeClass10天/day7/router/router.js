const formidable=require('formidable');
const md5=require('../models/md5').md5;
const db=require('../models/db');
exports.showLogin=function (req,res,next) {
   res.render('login');
};
exports.dologin=function (req,res,next) {
    //执行登录功能；
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields,files) {
        var username=fields.username;
        var password=fields.password;
        password=md5(md5(password)+'ymy');
        db.find('users',{username},function (err,result) {
            if(err){
                res.json({"bok":false,"msg":"服务器错误"});
                return;
            }
            if(result.length){//说明用户存在，我们应该比对密码；
                //拿登录的加过密的密码 和  数据库中加密的密码 进行比较；
                if(password===result[0].password){
                    //设置session
                    req.session.login=true;
                    req.session.username=username;
                    res.send({"bok":true,"msg":"登录成功"})
                }else{
                    res.send({"bok":false,"msg":"登录失败！密码错误"})
                }
            }else{
                res.send({"bok":false,"msg":"登录失败！该用户不存在"})
            }
        })
    })
};
exports.showReg=function (req,res,next) {
    res.render('reg');
};
exports.doreg=function (req,res,next) {
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields,files) {
        //把提交过来的用户名和密码插入到数据库
        var username=fields.username;
        var password=fields.password;
        password=md5(md5(password)+'ymy');
        //数据库查找是否有这个用户；
        db.find('users',{username},function (err,result) {
            if(err){
                res.send('服务器错误');
            }
            if(result.length){//不能注册，说明该用户名已存在；
                res.send({"bok":false,"msg":"注册失败！该用户名已存在"})
            }else{//用户名不存在，不存在才能注册
                //往数据库中注册；一定注意：数据库中的用户密码，一定不能是明码；
                db.insertOne("users",{username,password},function (err,result) {
                    if(err){
                        res.send('数据插入失败');
                        return;
                    }
                    //设置session
                    req.session.login=true;
                    req.session.username=username;
                    //数据插入成功；
                    res.send({"bok":true,"msg":"恭喜你注册成功"});
                })
            }
        })
    })
};