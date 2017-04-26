//思路：核心解决三大问题：1）this问题 2）顺序问题 3）重复绑定问题
//这三大问题都是ele.attachEvent上的问题；
//解决核心：通过"数组"来解决
//1:创建自己的事件池；自己事件池本身就是数组；
function on(ele,type,fn){
    //浏览器支持，直接使用系统提供的方法
    if(ele.addEventListener){
        ele.addEventListener(type,fn,false);//冒泡；
    }else{
        //如果没有数组，就在元素身上创建一个数组
        if(!ele["myEvent"+type]){
            ele["myEvent"+type]=[];
            //放在这里的目的：为了只绑定一次，解决run的重复绑定的问题；
            ele.attachEvent('on'+type,function(){
                run.call(ele);
            })
        }
        var a=ele["myEvent"+type];
        //去重判断:解决去重问题；
        for(var i=0; i<a.length; i++){
            if(a[i]===fn) return;
        }
        a.push(fn);
    }
}
//2：顺序调用数组；解决顺序问题；
function run(){
    var e=window.event;
    e.target=e.srcElement;//事件源问题
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
    e.preventDefault=function(){
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelBubble=true;
    };

    var a=this["myEvent"+e.type];
    //把数组进行顺序调用-》顺序问题；
    if(a.length){
        for(var i=0; i<a.length; i++){
            if(typeof a[i]==='function'){
                //把fn1里面的this变成ele,同时，拿到了事件对象；把数组顺序调用
                a[i].call(this,e);//当函数被调用的时候，点前面是谁，this就是谁；
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
}
//3:拿到数组，循环比对
function off(ele,type,fn){
    //浏览器支持的话，直接使用系统提供的方法
    if(ele.removeEventListener){//标准浏览器
        ele.removeEventListener(type,fn,false);
    }else{//IE浏览器：拿到数组，循环比对
        var a=ele["myEvent"+type];
        if(a.length){
            for(var i=0; i<a.length; i++){
                //找到要解除事件绑定的函数，不能删除，而要赋值为null;
                if(a[i]===fn){
                    a[i]=null;
                    break;//性能优化
                }
            }
        }

    }
}










