/**
 * Created by zhanglei on 2017/5/2.
 */
var utils=(function () {
    var frg='getComputedStyle' in window;
    //类数组转数组
    function makeArray(arg){
        if(frg){
            return Array.prototype.slice.call(arg);
        }else{
            var ary=[];
            for(var i=0; i<arg.length; i++){
                ary.push(arg[i]);
            }
            return ary;
        }
    }
    //把JSON格式的字符串，转成JSON格式的对象
    function jsonParse(jsonStr) {
        return 'JSON' in window? JSON.parse(jsonStr):eval('('+jsonStr+')');
    }
    //对象中暴露的是接口； 'box1  box3   box2     '
    function getByClass(strClass,parent){
        parent=parent||document;
        //浏览器支持，直接使用系统方法；
        if(frg){
            return this.makeArray(parent.getElementsByClassName(strClass));
        }
        //处理IE兼容性
        var aryClass=strClass.split(/\s+/g);
        var nodeList=parent.getElementsByTagName('*');
        var ary=[];
        //校验每个元素，是否包含数组中的每一项；
        for(var i=0; i<nodeList.length; i++){
            var cur=nodeList[i];
            var bOk=true;
            for(var j=0; j<aryClass.length; j++){
                var reg=new RegExp('\\b'+aryClass[j]+'\\b');
                if(!reg.test(cur.className)){
                    bOk=false;
                    break;
                }
            }
            if(bOk){
                ary.push(cur);
            }
        }
        return ary;

    }
    //判断元素身上，是否有某一个class名
    function hasClass(el,cName) {
        var reg=new RegExp('(^| +)'+cName+'( +|$)');
        return reg.test(el.className);
    }
    //addClass:如果元素身上，没有某个class名的时候，添加一个或一堆；
    function  addClass(el,strClass) {
        var aryClass=strClass.split(/\s+/g);
        for(var i=0; i<aryClass.length; i++){
            if(!this.hasClass(el,aryClass[i])){
                el.className+=' '+aryClass[i];
                el.className=el.className.replace(/\s+/g,' ');
            }
        }
    }
    function  removeClass(el,strClass) {
        var aryClass=strClass.split(/\s+/g);
        for(var i=0; i<aryClass.length; i++){
            el.className=el.className.split(aryClass[i]).join(' ');
            el.className=el.className.replace(/\s+/g,' ').replace(/(^ +)|( +$)/g,'');
        }
    }
    return {
        makeArray:makeArray,
        jsonParse:jsonParse,
        getByClass:getByClass,
        hasClass:hasClass,
        addClass:addClass,
        removeClass:removeClass,
        getCss:function (el,attr) {
            var val=null,
                reg=null;
            if(frg){
                val=getComputedStyle(el,false)[attr];
            }else{//IE浏览器
                if(attr=='opacity'){
                    val=el.currentStyle.filter;//alpha(opacity=10);
                    reg=/^alpha\(opacity[=:](\d+)\)$/;
                    return reg.test(val)?RegExp.$1/100:1;
                }else{
                    val=el.currentStyle[attr];
                }
            }
            reg=/^([+-]?((\d|([1-9]\d+))(\.\d+)?))(px|pt|rem|em)$/;
            return reg.test(val)?parseFloat(val):val;
        },
        setCss:function (el,attr,value) {
            //浮动
            if(attr==='float'){
                el.style.cssFloat=value;
                el.style.styleFloat=value;
                return;
            }
            //透明度
            if(attr==='opacity'){
                el.style[attr]=value;
                el.style.filter='alpha(opacity='+(value*100)+')';
                return;
            }
            var reg=/^(width|height|top|right|bottom|left|((margin|padding)(top|right|bottom|left)?))$/gi;
            if(reg.test(attr)&& !isNaN(value)){
                value=value+'px';
            }

            el.style[attr]=value;
        },
        setGroupCss:function (el,opt) {
            for(var attr in opt){
                this.setCss(el,attr,opt[attr]);
            }
        },
        css:function (el) {
            var argTwo=arguments[1];
            if(typeof argTwo==='string'){
                var argThree=arguments[2];
                if(typeof argThree==='undefined'){
                    //获取
                    return this.getCss(el,argTwo);
                }else{
                    //设置一个
                    this.setCss(el,argTwo,argThree)
                }
            }
            if(argTwo.toString()==='[object Object]'){
                this.setGroupCss(el,argTwo)
            }
        }
    }
})();












