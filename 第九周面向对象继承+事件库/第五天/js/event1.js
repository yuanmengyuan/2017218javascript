/**
 * Created by zhanglei on 2017/4/23.
 */
function on(ele,type,fn){
    //如果浏览器支持的话，直接使用浏览器提供的标准方法
    if(ele.addEventListener){//标准浏览器
        ele.addEventListener(type,fn,false);
    }else{//IE浏览器
        var tmpFn=function(){
            //这里解决this问题，让this成功指向ele;
            fn.call(ele);
        };
        tmpFn.name=fn;//起个名字 fn1  fn2
        if(!ele.myEvent){
            ele.myEvent=[];
        }
        var a=ele.myEvent;
        //在自己池中，先for 循环逐个判断，如果重复了，直接return；
        for(var i=0; i<a.length; i++){
            //解除多次绑定的问题；
            if(a[i].name==fn) return;
        }
        ele.myEvent.push(tmpFn);//给自己事件池添加
        ele.attachEvent('on'+type,tmpFn);//给系统事件池添加
    }
}
function off(ele,type,fn){//fn1  fn2
    var ary=ele.myEvent;
    if(ele.removeEventListener){//标准浏览器
        ele.removeEventListener(type,fn,false);
    }else{//Ie浏览器
        if(ary.length){
            for(var i=0; i<ary.length; i++){
                //谁的名字跟数组中的函数的名字一样，就把谁解除事件绑定；
                if(ary[i].name===fn){
                    ele.detachEvent('on'+type,ary[i]);//删除系统事件池
                    ary.splice(i,1);//删除自己事件池，也就是数组的池子
                    //要保证数组池子和系统池子，同步增减；同时还要注意数组塌陷的问题；
                }
            }
        }
    }
}