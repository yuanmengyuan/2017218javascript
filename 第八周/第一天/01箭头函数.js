/**
 * Created by zhanglei on 2017/4/11.
 */
/*箭头函数-表达式的写法；
var fn=p=>p;//中间的p是参数，后面的p是返回值
var res=fn(123);
var fn1=()=>'我没有参数';
//console.log(fn1())
var fn2=(n,m)=>n+m;
console.log(fn2(2,3));*/
//箭头函数-函数体写法
/*
var fn=p=>{
    return p;
}
console.log(fn(2334555))*/
/*var fn=()=>{
    return '我没有参数'
}
console.log(fn())*/
var fn=()=>{
    console.log('外面的this:'+this)
    return {
        getThis:()=>{//这个函数的父函数中的this指向window
            //当用了箭头函数以后，自函数中的this，指的就是父函数中的this；
            console.log('里面的this:'+this)
        },
        getThis(){

        },
        getThis:function(){

        }
    }
};
var obj=fn();
obj.getThis();
