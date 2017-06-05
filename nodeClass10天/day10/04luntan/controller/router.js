const formidable=require('formidable');
const md5=require('../models/md5').md5;
const db=require('../models/db');
const sd=require('silly-datetime');
const fs=require('fs');
const gm=require('gm');
const path=require('path');
const ObjectId=require('mongodb').ObjectID;

exports.showIndex=function (req,res,next) {//显示首页
    res.render('index',{
        login:req.session.login?true:false,
        avatar:req.session.avatar?req.session.avatar:"moren.jpg",
        username:req.session.username,
        current:"首页"
    });

};
exports.showReg=function (req,res,next) {//显示注册页
    res.render('reg',{
        login:req.session.login?true:false,
        username:req.session.login?req.session.username:"",
        current:"注册"
    });
};
exports.doReg=function (req,res,next) {//执行注册功能
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields) {
        var {username,password}=fields;
        var avatar='moren.jpg';
        password=md5(md5(password).substr(7,11)+'ymy');
        //写入数据库前先查看用户名是否已经存在；
        db.find('users',{username},function (err,result) {
            if(err){
                res.send({"bok":false,"msg":"服务器错误！"})
                return;
            }
            if(result.length==0){//没这个用户-》可以注册
                //存数据库
                db.insert('users',{username,password,avatar},function (err,result) {
                    if(err){
                        res.send({"bok":"false","msg":"数据插入失败"})
                        return;
                    }
                    //设置session；
                    req.session.login=true;
                    req.session.username=username;
                    req.session.avatar=avatar;
                    res.send({"bok":true,"msg":"恭喜你！注册成功！！"})
                })
            }else{//有这个用户-》不能注册
                res.send({"bok":false,"msg":"改用户名已经存在"})
            }
        })
    })
};
exports.showLogin=function (req,res,next) {//显示登录页
    res.render('login',{
        login:req.session.login?true:false,
        username:req.session.login?req.session.username:"",
        current:"登录"
    });
};
exports.doLogin=function (req,res,next) {//执行登录功能
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields) {
        var {username,password}=fields;
        password=md5(md5(password).substr(7,11)+'ymy');
        //写入数据库前先查看用户名是否已经存在；
        db.find('users',{username},function (err,result) {
            if(err){
                res.send({"bok":false,"msg":"服务器错误！"})
                return;
            }
            if(result.length==0){//说明该用户名不存在，登录失败；
                res.send({"bok":false,"msg":"登录失败！该用户名不存在"})
            }else{
                //用户名存在，需要比对密码
                if(result[0].password==password){
                    req.session.login=true;
                    req.session.username=username;
                    req.session.avatar=result[0].avatar;
                    res.send({"bok":true,"msg":"登录成功"})
                }else{
                    res.send({"bok":false,"msg":"登录失败！密码错误！"})
                }

            }

        })
    })
};
exports.logout=function (req,res,next) {//执行退出功能
    req.session.login=false;
    req.session.username="";
    //退出后默认回到首页
    res.redirect('/');
};
exports.upAvatar=function (req,res,next) {//显示上传头像页面
    if(!req.session.login){
        res.send('非法闯入，必须先登录');
        return;
    }
    res.render('upFile',{
        login:req.session.login?true:false,
        username:req.session.login?req.session.username:"",
        current:"设置"
    });
};
exports.doVatar=function (req,res,next) {
    var form=new formidable.IncomingForm();
    form.uploadDir='./avatar/';
    form.parse(req,function (err,fileds,files) {
        var oldpath=files.touxiang.path;
        var newname=req.session.username+path.extname(files.touxiang.name);
        var newpath=form.uploadDir+newname;
        fs.rename(oldpath,newpath,function () {
            //更改数据库中的头像
            db.update('users',{username:req.session.username},{$set:{"avatar":newname}},function (err,result) {
                if(err){
                    console.log('更新图像失败');
                    return;
                }
                req.session.avatar=newname;
                //渲染页面并传avatar参数
                res.render('cut',{
                    avatar:newname
                })
            })

        })
    })
};
exports.doCut=function (req,res,next) {
    var {w,h,l,t}=req.query;
    // w=Number(w);
    // h=Number(h);
    // l=Number(l);
    // t=Number(t);
    gm('./avatar/'+req.session.avatar)
        .crop(w,h,l,t)
        .resize(200,200,'!')
        .write('./avatar/'+req.session.avatar,function (err) {
            if(err){
                res.send({"bok":false,"msg":"切图失败"})
            }else{
                res.send({"bok":true,"msg":"恭喜你！切图成功"})
            }
        })
};
//执行提交留言功能；
exports.postliuyan=function (req,res,next) {
    var form=new formidable.IncomingForm();
    form.parse(req,function (err,fields) {
        fields.username=req.session.username;
        fields.avatar=req.session.avatar;
        fields.time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
        db.insert('liuyan',fields,function (err,result) {
            if(err){
                res.send({"bok":false,"msg":"留言提交失败"})
            }else{
                res.send({"bok":true,"msg":"留言提交成功！"})
            }
        })
    })
};
//获取所有留言
exports.getAlldata=function (req,res,next) {
    var {page,pageamount}=req.query;
    //到数据库中查找所有留言
    db.find("liuyan",{},{sort:{"time":-1},page,pageamount},function (err,result) {
        if(err){
            res.send({"bok":false,"msg":"留言获取失败"})
        }else{
            res.send({"bok":true,"msg":result})
        }
    })
};
//获取所有页数
exports.fenye=function (req,res,next) {
    db.allCount('liuyan',function (count) {
        res.send(count.toString())
    })
};
//删除当前留言
exports.delete=function (req,res,next) {
    var _id=ObjectId(req.params.id);
    db.remove("liuyan",{_id},function (err,result) {
        if(err){
            console.log('删除失败');
            return ;
        }
        res.redirect('/');
    })
};
//查看当前评论的内容
exports.detail=function (req,res,next) {
    var _id=ObjectId(req.params.id);
    db.find('liuyan',{_id},function (err,result) {
        res.render('detail',{
            title:result[0].title,
            content:result[0].content,
            avatar:result[0].avatar,
            time:result[0].time,
            login:req.session.login?true:false,
            username:req.session.login?req.session.username:"",
            current:''
        })
    })
};
//获取我的说说
exports.myshuo=function (req,res,next) {
    db.find("liuyan",{"username":req.session.username},function (err,shuoshuos) {
        res.render('myShuo',{
            shuoshuos,
            current:'说说',
            login:req.session.login?true:false,
            username:req.session.login?req.session.username:""
        })
    })
};
//获取所有用户列表
exports.userList=function (req,res,next) {
    db.find("users",{},function (err,result) {
        if(!err){
            res.render('userlist',{
                current:'列表',
                login:req.session.login?true:false,
                username:req.session.login?req.session.username:"",
                shuoshuos:result
            })
        }
    })
};















