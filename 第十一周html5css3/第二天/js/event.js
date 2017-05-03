/**
 * Created by zhanglei on 2017/5/2.
 */
//把要给元素绑定的方法，都放到"数组"中去；
//on：可以绑定自定义事件(myXXXXX); 可以绑定系统事件
function on(el,type,fn){
    if(/^my/gi.test(type)){
        //自定义事件
        if(!el[type]){
            el[type]=[];
        }
        var a=el[type];
        //避免数组中重复绑定的问题；
        for(var i=0; i<a.length; i++){
            if(a[i]===fn) return;
        }
        a.push(fn);
    }else{//系统事件
        if(el.addEventListener){
            el.addEventListener(type,fn,false);//false:冒泡;true:捕获
        }else{
            if(!el['on'+type]){
                el['on'+type]=[];
                //解决重复绑定run的问题；
                el.attachEvent('on'+type,function(){
                    run.call(el);
                })
            }
            var a=el['on'+type];
            //避免数组中重复绑定；
            for(var i=0; i<a.length; i++){
                if(a[i]===fn) return;
            }
            a.push(fn);//给自定义事件池的数组绑定；

        }
    }

}
//拿到数组，进行顺序调用
function fire(type,e){
    //this是元素；
    var a=this[type]||[];
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
//把"数组"里面的每个函数进行顺序调用
function run() {
    var e=window.event;
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
//拿到"数组"，进行遍历匹配，匹配到谁，把谁赋值为null;
function off(el,type,fn) {
    if(/^my/.test(type)){//解除自定义事件的绑定；
        var a=el[type];
        if(a.length){
            for(var i=0; i<a.length; i++){
                if(a[i]===fn){
                    a[i]=null;
                    break;
                }
            }
        }
    }else{//系统事件
        if(el.removeEventListener){
            el.removeEventListener(type,fn,false);
        }else{
            var a=el['on'+type];
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
}
//改变fn中的this，同时传一个事件对象；
function processThis(fn,argThis) {
    return function (e) {
        e=e||window.event;
        fn.call(argThis,e)
    }
}