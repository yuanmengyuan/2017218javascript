var MongoClient=require('mongodb').MongoClient;
var url=require('../setting').url;
//链接数据库
function _MongoConnect(callback) {
    MongoClient.connect(url,(err,db)=>{
        if(err){
            //如果数据库链接失败，把失败的原因传出来；
            callback(err,null);
            return;
        }
        console.log('数据库链接成功！')
        callback(db);
    })
}
//增：插入数据；
exports.insert=function (collectionName,json,callback) {
    _MongoConnect(function (db) {
        db.collection(collectionName).insertOne(json,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
};
//查：1）查找当前集合下，满足条件的数据 2）排序 3）分页；
exports.find=function (collectionName,json1,json2,callback) {
    if(arguments.length==3){
        callback=json2;
        json2={};
    }
    //所有关于find的扩展功能，都在json2中进行设置；如果不设置json2，它只有查找功能；
    _MongoConnect(function (db) {
        var aryData=[];
        var sort=json2.sort||{};//排序；
        var page=Number(json2.page);//显示第几页
        var pageamount=Number(json2.pageamount);//每页显示多少条；
        var cursor=db.collection(collectionName).find(json1).limit(pageamount).skip(page*pageamount).sort(sort);
        cursor.each(function (err,doc) {
            if(err){
                callback(err,null);
                return;
            }
            if(doc!=null){
                aryData.push(doc);
            }else{
                callback(null,aryData);
                db.close();
            }
        })
    })
};
//改：
exports.update=function (collectionName,json1,json2,callback) {
    _MongoConnect(function (db) {
        db.collection(collectionName).updateMany(json1,json2,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
};
//删除
exports.remove=function (collectionName,json,callback) {
    _MongoConnect(function (db) {
        db.collection(collectionName).deleteMany(json,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
};
//得到当前集合下所有数据的总数；
exports.allCount=function (collectionName,callback) {
    _MongoConnect(function (db) {
        db.collection(collectionName).count({}).then(function (count) {
            callback(count);//注意count是数字；
        })
    })
};