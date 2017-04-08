/**
 * Created by zhanglei on 2017/4/5.
 */
var utils=(function(){
    var frg='getComputedStyle' in window;//如果frg为true，说明是标准浏览器；否则是IE6-8浏览器
    return {
        //类数组转数组
        makeArray:function(arg){
            var ary=[];
            if(frg){//标准浏览器
                ary=Array.prototype.slice.call(arg);
            }else{//IE6-8浏览器
                for(var i=0; i<arg.length; i++){
                    ary.push(arg[i]);
                }
            }
            return ary;
        },
        //把json格式的字符串转成JSON格式的对象
        jsonParse:function(strJson){
            return 'JSON' in window? JSON.parse(strJson):eval('('+strJson+')');
        },
        //求[n,m]之间的随机数
        rnd:function(n,m){
            n=Number(n);
            m=Number(m);
            //无效数字返回0-1之间随机数
            if(isNaN(n) || isNaN(m)){
                return Math.random();
            }
            if(n>m){
                var tmp=m;
                m=n;
                n=tmp;
            }
            return Math.round(Math.random()*(m-n)+n);
        },
        //getCss:获取非行间样式（也可以拿到行内样式）
        getCss:function(ele,attr){
            var value=null,reg=null;
            if(frg){//标准
                value=getComputedStyle(ele,false)[attr];
            }else{//IE6-8
                if(attr=='opacity'){
                    value=ele.currentStyle.filter;
                    reg=/alpha\(opacity[=:](\d+)\)/;
                    return reg.test(value)?RegExp.$1/100:1;
                }else{
                    value=ele.currentStyle[attr];
                }
            }
            reg=/^([+-]?(\d|([1-9]\d+))(\.\d+)?)(px|pt|rem|em)$/;
            return reg.test(value)?parseFloat(value):value;
        },
        //win:盒子模型
        //通过第二个参数来区分获取和设置
        win:function(attr,value){
            //value==undefined ; typeof value=='undefined' ; value==null;
            if(value==null){
                return document.body[attr]||document.documentElement[attr];
            }
            document.body[attr]=document.documentElement[attr]=value;
        },
        //offset:求定位元素到body的偏移量
        offset:function(ele){
            var l=ele.offsetLeft;
            var t=ele.offsetTop;
            var par=ele.offsetParent;
            while(par){
                if(window.navigator.userAgent.toUpperCase().indexOf('MSIE 8.0')==-1){
                    l+=par.clientLeft;
                    t+=par.clientTop;
                }
                l+=par.offsetLeft;
                t+=par.offsetTop;
                par=par.offsetParent;
            }
            return {left:l,top:t};
        }
    }
})();














