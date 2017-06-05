const mongoose=require('mongoose');
//1:链接服务器
mongoose.connect('mongodb://localhost:27017/test');
//2:创建一个schema：规定了数据的结构和数据类型
var carSchema=new mongoose.Schema({
    name:String,
    age:Number
});
//类：类就是相当于数据库中的集合；
var Car=mongoose.model('Car',carSchema);

/*
//实例
var miaomiao=new Car({
    name:'miaomaio',
    age:8
});
//save是实例的方法；
miaomiao.save(function (err) {
    if(err){
        console.log(err)
    }else{
        console.log('保存成功')
    }
})*/
//增加  类.create(json,cb)
/*
Car.create({
    name:'huahua',
    age:2
},function (err,result) {
    if(!err){
        console.log('ok')
    }
})
Car.create({
    name:'jiafei',
    age:21
},function (err,result) {
    if(!err){
        console.log('ok')
    }
})
Car.create({
    name:'sunhe',
    age:28
},function (err,result) {
    if(!err){
        console.log('ok')
    }
})
Car.create({
    name:'jiaxiaoqi',
    age:19
},function (err,result) {
    if(!err){
        console.log('ok')
    }
})
*/
//查
/*Car.find({"age":2},function (err,result) {
    if(!err){
        console.log(result)
    }
})*/
/*Car.find({"age":{$gt:18}},function (err,result) {
    if(!err){
        console.log(result)
    }
}).sort({"age":-1})*/
/*
Car.find({},function (err,result) {
    if(!err){
        console.log(result)
    }
}).sort({"age":1}).limit(4).skip(1*4)
*/
