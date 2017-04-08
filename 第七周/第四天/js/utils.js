/**
 * Created by zhanglei on 2017/4/8.
 */
var utils=(function () {
    var frg='getComputedStyle' in window;//惰性思想
    return {
        //makeArray：把类数组转成数组
        makeArray:function(arg){
            var ary=[];
            if(frg){
                ary=Array.prototype.slice.call(arg);//arguments(都兼容) htmlCollection（只兼容标准浏览器）
            }else{
                for(var i=0; i<arg.length; i++){
                    ary.push(arg[i]);
                }
            }
            return ary;
        },
        //jsonParse:把JSON格式的字符串，转成JSON格式的对象
        jsonParse:function(strJson){
            return 'JSON' in window ? JSON.parse(strJson) : eval('('+strJson+')')
        },
        //win:对JS盒子模型的兼容处理；两个功能：获取，设置
        win:function(attr,value){
            if(value==null){//获取，需要返回值
                return document.documentElement[attr]||document.body[attr];
            }
            document.documentElement[attr]=document.body[attr]=value;
        },
        //getCss:获取非行间样式 （也能拿到行间样式）
        getCss:function(ele,attr){
            var value=null,reg=null;
            if(frg){
                value=getComputedStyle(ele,false)[attr];
            }else{
                if(attr==='opacity'){
                    value=ele.currentStyle.filter;
                    reg=/alpah\(opacity[:=](\d+)\)/g;
                    return reg.test(value)?RegExp.$1/100:1;
                }else{
                    value=ele.currentStyle[attr];
                }
            }
            reg=/^([+-]?((\d|([1-9]\d+))|(\.\d+)?))(px|pt|em|rem)$/;
            return reg.test(value)?parseFloat(value):value;
        },
        //offset：求有定位的元素，到body的距离{left:xxx,top:xxx}
        offset:function(ele){
            var l=ele.offsetLeft;
            var t=ele.offsetTop;
            var par=ele.offsetParent;
            while(par){
                //说明不是IE8浏览器
                if(window.navigator.userAgent.toUpperCase().indexOf('MSIE 8.0')==-1){
                    l+=par.clientLeft;
                    t+=par.clientTop;
                }
                l+=par.offsetLeft;
                t+=par.offsetTop;
                par=par.offsetParent;
            }
            return {left:l,top:t}
        },
        //rnd
        rnd:function(n,m){
            n=Number(n);
            m=Number(m);
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
        //getByClass:限定范围的通过class来获取元素
        getByClass:function(strClass,parent){
            parent=parent||document;
            if(frg){
                return this.makeArray(parent.getElementsByClassName(strClass))
            }
            var ary=[];
            var aryClass=strClass.split(/\s+/g);
            var nodeList=parent.getElementsByTagName('*');
            for(var i=0; i<nodeList.length; i++){
                var cur=nodeList[i];
                var bOk=true;
                for(var j=0; j<aryClass.length; j++){
                    var reg=new RegExp('\\b'+aryClass[j]+'\\b');
                    if(!reg.test(cur.className)){
                        bOk=false;
                        break;//性能优化
                    }
                }
                if(bOk){
                    ary.push(cur);
                }
            }
            return  ary;
        },
        //hasClass:判断某个元素身上，是否有某个class名
        hasClass:function(ele,cName){
            var reg=new RegExp('\\b'+cName+'\\b');
            return reg.test(ele.className);
        },
        //addClass:如果元素身上没有某个class名，那么就可以添加；'    div1 div2 div3 '
        addClass:function(ele,strClass){
            var aryClass=strClass.split(/\s+/g);
            for(var i=0; i<aryClass.length; i++){
                //如果元素身上没有某个class名->才添加
                if(!this.hasClass(ele,aryClass[i])){
                    ele.className +=' '+aryClass[i];
                }
            }
        }
    }
})();






