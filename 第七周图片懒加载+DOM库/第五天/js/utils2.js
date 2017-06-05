/**
 * Created by zhanglei on 2017/4/9.
 */
var utils=(function(){
    var frg='getComputedStyle' in window;
    return {
        //getCss:获取一个样式
        getCss:function(ele,attr){
            var value=null,reg=null;
            if(frg){
                value=getComputedStyle(ele,null)[attr];
            }else{
                if(attr==='opacity'){
                    value=ele.currentStyle['filter'];
                    reg=/alpha\(opacity[=:](\d+)\)/g;
                    return reg.test(value)?RegExp.$1/100:1;
                }else{
                    value=ele.currentStyle[attr];
                }
            }
            reg=/^([+-]?(\d|([1-9]\d+))(\.\d+)?)(px|pt|rem|em)$/;
            return reg.test(value)?parseFloat(value):value;
        },
        //setCss:设置一个
        setCss:function(ele,attr,value){
            //FLOAT
            if(attr=='float'){
                ele.style.cssFloat=value;
                ele.style.styleFloat=value;
                return ;
            }
            //透明度
            if(attr==='opacity'){
                ele.style[attr]=value;//标准浏览器
                ele.style.filter='alpha(opacity='+value*100+')';//IE
                return;
            }
            //对单位的处理；没写单位，我帮你补上
            var reg=/^(width|height|top|right|bottom|left|((margin|padding)(top|right|bottom|left)?))$/;
            if(reg.test(attr) && !isNaN(value)){
                value=value+'px';
            }
            ele.style[attr]=value;
        },
        //setGroupCss:设置一组
        setGroupCss:function(ele,opt){
            //循环opt来拿到每个键值对
            for(var attr in opt){
                this.setCss(ele,attr,opt[attr]);
            }
        },
        //css:三合一
        css:function(ele){
            var argTwo=arguments[1];
            if(typeof argTwo==='string'){//获取，设置一个
                var argThree=arguments[2];
                if(typeof argThree === 'undefined'){//获取
                    return this.getCss(ele,argTwo)
                }else{//设置一个
                    this.setCss(ele,argTwo,argThree)
                }
            }
            if(argTwo.toString()==='[object Object]'){
                this.setGroupCss(ele,argTwo);
            }
        },
        //getByClass
        getByClass:function(strClass,parent){
            parent=parent||document;
            if(frg){
                return Array.prototype.slice.call(parent.getElementsByClassName(strClass));
            }
            var ary=[];
            var aryClass=strClass.split(/\s+/g);
            var nodeList=parent.getElementsByTagName('*');
            for(var i=0; i<nodeList.length; i++){
                var cur=nodeList[i];
                var bOk=true;
                for(var j=0; j<aryClass.length; j++){
                    var reg=new RegExp('(^| +)'+aryClass[j]+'( +|$)');
                    if(!reg.test(cur.className)){
                        bOk=false;
                        break;//阻断循环
                    }
                }
                if(bOk){
                    ary.push(cur);
                }
            }
            return ary;
        },
        //hasClass
        hasClass:function(ele,cName){
            var reg=new RegExp('(^| +)'+cName+'( +|$)');
            return reg.test(ele.className);
        },
        //addClass
        addClass:function(ele,strClass){
            var aryClass=strClass.split(/\s+/g);
            for(var i=0; i<aryClass.length; i++){
                if(!this.hasClass(ele,aryClass[i])){
                    ele.className+=' '+aryClass[i];
                }
            }
        },
        //removeClass
        removeClass:function(ele,strClass){
            var aryClass=strClass.split(/\s+/g);
            for(var i=0; i<aryClass.length; i++){
                var reg=new RegExp('(^| +)'+aryClass[i]+'( +|$)');
                if(reg.test(ele.className)){
                    ele.className=ele.className.replace(reg,' ').replace(/(^ +)|( +|$)/g,'').replace(/\s+/g,' ');
                }
            }
        }
    }
})();