/**
 * Created by zhanglei on 2017/4/27.
 */
//给自己事件池绑定许多方法，即都绑到数组中去了；
function on(ele,type,fn){
    if(ele.addEventListener){
        ele.addEventListener(type,fn,false);
    }else{//IE浏览器
        if(!ele['on'+type]){
            ele['on'+type]=[];
            //这里用来解决run的重复绑定问题；
            ele.attachEvent('on'+type,function(){
                run.call(ele);
            })
        }
        var a=ele['on'+type];
        //解决重复问题
        for(var i=0; i<a.length; i++){
            if(a[i]==fn) return;
        }
        a.push(fn);

    }
}
//拿到数组，顺序调用（是函数，才能调用）
function run(){
    var e=window.event;
    e.target=e.srcElement;
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
    e.preventDefault=function(){
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelBubble=true;
    };

    var a=this['on'+e.type];
    if(a.length){
        for(var i=0; i<a.length; i++){
            if(typeof a[i]==='function'){
                a[i].call(this,e);
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
}
//拿到数组，循环匹配，匹配到谁，赋值为null;
function off(ele,type,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(type,fn,false);
    }else{//IE
        var a=ele['on'+type];
        if(a.length){
            for(var i=0; i<a.length; i++){
                if(a[i]===fn){
                    a[i]=null;
                    break;
                }
            }
        }
    }
}

function processThis(fn,argThis){
    return function(e){
        e=e||window.event;
        fn.call(argThis,e);
    }
}