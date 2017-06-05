//连接数据库
const mongoClient=require('mongodb').MongoClient;
const url=require('../setting').url;
//请求地址
function _mongoConnect(callback) {
    mongoClient.connect(url,function (err,db) {
        if(err){
            console.log('数据库连接失败');
            return;
        }
        console.log('数据库连接成功')
        callback(db);
    })
}
//插入数据   db.xxx.insertOne(json);
exports.insertOne=function (collectionName,json,callback) {
    _mongoConnect(function (db) {
        db.collection(collectionName).insertOne(json,function (err,result) {
            callback(err,result);
            db.close();//关闭数据库
        })
    })
};
//查找数据:1)普通数据和花式数据查找； 2）分页功能  3）排序  db.xxx.find()
exports.find=function (collectionName,json1,json2,callback) {
    //如果传的是3个参数，说明是普通的查找，没有分页和排序
    if(arguments.length==3){
        callback=json2;
        json2={};
    }
    _mongoConnect(function (db) {
        var sort=json2.sort||{},//排序
            pageamount=Number(json2.pageamount),//每页显示多少条；
            page=Number(json2.page);//第几页

        //通过find查找拿到的数据；
        var cursor=db.collection(collectionName).find(json1).limit(pageamount).skip(pageamount*page).sort(sort);
        var aryData=[];
        //遍历cursor，拿到里面的数据
        cursor.each(function (err,doc) {
            if(doc != null){
                aryData.push(doc);
            }else{
                callback(err,aryData);
                db.close();
            }
        })
    })
};
//改数据
exports.updateMany=function (collectionName,json1,json2,callback) {
    _mongoConnect(function (db) {
        db.collection(collectionName).updateMany(json1,json2,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
};
//删除数据
exports.remove=function (collectionName,json,callback) {
    _mongoConnect(function (db) {
        db.collection(collectionName).deleteMany(json,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
}
//得到数据的总数量
exports.count=function (collectionName,callback) {
    _mongoConnect(function (db) {
        db.collection(collectionName).count({}).then(function (count) {
            callback(count.toString())
        })
    })
}


