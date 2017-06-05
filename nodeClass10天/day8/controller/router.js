const db=require('../modles/db');
exports.add=function (req,res,next) {
    db.insert('liuyan',{"name":"小红","age":Math.round(Math.random()*100)},function (err,result) {
        res.send(result);
    })
};
exports.find=function (req,res,next) {
    var {page,pageamount}=req.query;
    db.find('liuyan',{"age":22},function (err,result) {
        res.send(result)
    })
};
exports.update=function (req,res,next) {
    db.update('liuyan',{"age":22},{$set:{"name":"嘻嘻嘻嘻"}},function (err,result) {
        console.log(result)
       res.send(result)
    })
};
exports.remove=function (req,res,next) {
    db.remove('liuyan',{"age":22},function (err,result) {
        res.send(result);
    })
};
exports.count=function (req,res,next) {
    db.allCount('liuyan',function (count) {
        res.send(count.toString());
    })
};
