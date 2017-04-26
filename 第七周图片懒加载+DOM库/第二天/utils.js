/**
 * Created by zhanglei on 2017/4/5.
 */
var utils=(function(){
    return {
        makeArray:function(arg){
            var ary=[];
            try{
                ary=Array.prototype.slice.call(arg);
            }catch(e){
                for(var i=0; i<arg.length; i++){
                    ary.push(arg[i]);
                }
            }
            return ary;
        },
        win:function(attr,value){
            //如果没传第二个参数，说明是获取；
            //所有经过typeof的都是字符串；
            if(typeof value==='undefined'){
                return document.body[attr]||document.documentElement[attr];
            }
            //能走下面的，说明是设置
            document.body[attr]=document.documentElement[attr]=value;
        },
        getCss:function getCss(ele,attr){
            var value=null;
            var reg=null;
            if(/MSIE (6|7|8)\.0/g.test(window.navigator.userAgent)){//是IE6-8 currentStyle
                if(attr=='opacity'){//IE浏览器下对透明度的处理；
                    value=ele.currentStyle.filter;//filter:alpha(opacity:10)
                    reg=/alpha\(opacity:(\d+)\)/g;
                    return reg.test(value)?RegExp.$1/100:1;
                    // 无g:reg.test(value)?reg.exec(value)[1]/100:1;
                }else{
                    value=ele.currentStyle[attr];
                }
            }else{//标准浏览器 getComputedStyle
                value=getComputedStyle(ele,null)[attr];
            }
            //通过正则来处理单位；
            reg=/^((\+|-)?((\d|([1-9]\d+))(\.\d+)?))(px|pt|rem|em)$/;
            return reg.test(value)?parseFloat(value):value;
        }
    }
})();
