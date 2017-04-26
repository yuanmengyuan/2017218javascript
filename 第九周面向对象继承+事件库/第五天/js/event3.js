//把我们要"绑定"的方法，都放进"数组"
function on(ele,type,fn){
    //区分浏览器
    if(ele.addEventListener){//标准
        ele.addEventListener(type,fn,false);
    }else{//IE6-8
        if(!ele["on"+type]){
            ele["on"+type]=[];
            //解决run被重复绑定的问题；
            ele.attachEvent('on'+type,function(){
                run.call(ele);
            })
        }
        var a=ele["on"+type];
        //去重判断:解决重复绑定问题；
        for(var i=0; i<a.length; i++){
            if(a[i]===fn) return;
        }
        a.push(fn);

    }
}
//拿到"数组"中的每个方法，进行顺序调用
function run(){
    var e=window.event;
    //对事件对象做兼容处理；
    e.target=e.srcElement;
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
    e.preventDefault=function(){//阻止默认事件
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelBubble=true;//阻止冒泡；
    };
    var a=this["on"+e.type];
    if(a.length){//证明数组有长度，可以循环调用；
        for(var i=0; i<a.length; i++){
            if(typeof  a[i]==='function'){
                a[i].call(this,e);//fn1 fn2 fn3
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
}
//从"数组"中找到要"解除绑定"的方法，赋值为null
function off(ele,type,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(type,fn,false);
    }else{
        //拿到数组，遍历判断，并赋值为null
        var a=ele["on"+type];
        for(var i=0; i<a.length; i++){
            if(a[i]===fn){
                a[i]=null;
                break;
            }
        }
    }
}














