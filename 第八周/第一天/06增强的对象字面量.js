/**
 * Created by zhanglei on 2017/4/11.
 */
var obj={name:'ymy',age:18};//xxff00;
var aa='嘻嘻';
var fn=()=>{alert(1234)};
var objOther={
    __proto__:obj,
    aa,
    fn
};//引用数据类型，是对地址的引用；
objOther.name='贝贝';
/*
console.log('父级'+obj.name);
console.log('子级'+objOther.name);*/

