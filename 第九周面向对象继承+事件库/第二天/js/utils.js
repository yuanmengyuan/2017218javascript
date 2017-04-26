/**
 * Created by zhanglei on 2017/4/9.
 */
var utils=(function(){
    var frg='getComputedStyle' in window;
    function makeArray(arg){
        var ary=[];
        if(frg){
            ary=Array.prototype.slice.call(arg);
        }else{
            for(var i=0; i<arg.length; i++){
                ary.push(arg[i]);
            }
        }
        return ary;
    }
    function jsonParse(strJson){
        return 'JSON' in window?JSON.parse(strJson):eval('('+strJson+')')
    }
    function rnd(n,m){
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
    }
    function offset(ele){
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
    function win(attr,value){
        if(typeof value === 'undefined'){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=document.body[attr]=value;
    }
    function getByClass(strClass,parent){//'div1 div2'
        parent=parent||document;
        if(frg){
            return this.makeArray(parent.getElementsByClassName(strClass));
        }
        var ary=[];
        //通过什么来验证对应的元素--标准
        var aryClass=strClass.split(/\s+/g);
        //验证父容器下的哪些元素--对象
        var nodeList=parent.getElementsByTagName('*');
        for(var i=0; i<nodeList.length; i++){
            var cur=nodeList[i];
            var bOk=true;
            for(var j=0; j<aryClass.length; j++){
                //var reg=new RegExp('\\b'+aryClass[j]+'\\b')
                var reg=new RegExp('(^| +)'+aryClass[j]+'( +|$)');
                //只要有一项不符合，那么bOk=false;立即停止校验
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
    return {
        //makeArray:
        makeArray:makeArray,
        //jsonParse
        jsonParse:jsonParse,
        //rnd
        rnd:rnd,
        //offset
        offset:offset,
        //win
        win:win,
        //getByClass:限定范围 的通过 class 来 获取元素
        getByClass:getByClass,
        //hasClass:判断元素身上，是否有某个class名；
        hasClass:function(ele,cName){
            var reg=new RegExp('(^| +)'+cName+'( +|$)');
            return reg.test(ele.className);
        },
        //addClass:如果元素身上没有某些class名，我们可以添加1个或一堆
        addClass:function(ele,strClass){
            var aryClass=strClass.split(/\s+/g);
            for(var i=0; i<aryClass.length; i++){
                if(!this.hasClass(ele,aryClass[i])){
                    //1）开头结尾的空格去掉 2）中间多个空格替换为1个空格
                    ele.className=ele.className.replace(/(^ +)|( +$)/g,'').replace(/\s+/g,' ');
                    ele.className+=' '+aryClass[i];
                }
            }
        },
        //removeClass:移除某个元素身上的某些class名；
        removeClass:function(ele,strClass){
            //1:字符串转数组
            var aryClass=strClass.split(/\s+/g);
           // console.log(aryClass)
            //2:判断元素的class名是否包含数组中的该项，如果有，删掉
            for(var i=0; i<aryClass.length; i++){
                var reg=new RegExp('(^| +)'+aryClass[i]+'( +|$)','g');
                if(reg.test(ele.className)){
                    ele.className=ele.className.replace(reg,' ').replace(/(^ +)|( +$)/g,'').replace(/\s+/g,' ');
                }
            }
        },
        //getCss
        getCss:function(ele,attr){
            var value=null,reg=null;
            if(frg){
                value=getComputedStyle(ele,false)[attr];
            }else{
                if(attr=='opacity'){
                    value=ele.currentStyle.filter;
                    reg=/^alpha\(opacity[=:](\d+)\)$/;
                    return reg.test(value)?reg.exec(value)[1]/100:1;
                }else{
                    value=ele.currentStyle[attr];
                }
            }
            reg=/^([+-]?((\d|([1-9]\d+))(\.\d+)?))(px|pt|rem|em)$/;
            return reg.test(value)?parseFloat(value):value;
        },
        //setCss:给元素设置一个样式
        setCss:function(ele,attr,value){
            //3.浮动
            if(attr==='float'){
                ele.style.cssFloat=value;//firefox
                ele.style.styleFloat=value;//ie
                return;
            }
            //2.处理透明度
            if(attr==='opacity'){
                ele.style[attr]=value;//标准浏览器
                ele.style.filter='alpha(opacity='+value*100+')';
                return ;
            }
            //1.处理单位：width,height,left,top,right,bottom,margin,padding
            var reg=/(width|height|top|right|bottom|left|((margin|padding)(Top|Right|Bottom|Left)?))/g;
            /*if(reg.test(attr) && !/(auto|%)/.test(value)){
                value=parseInt(value)+'px';
            }*/
            //富豪思想
            if(reg.test(attr) && !isNaN(value)){
                value=value+'px';
            }
            ele.style[attr]=value;//最核心的
        },
        //setGroupCss:给当前元素，设置一组样式
        setGroupCss:function(ele,opt){
            for(var attr in opt){
                this.setCss(ele,attr,opt[attr]);
            }
        },
        //css:三合一的方法；集获取，设置一个，设置一组为一体；
        //都有的是ele,第二个参数，如果是字符串（1有第三个参数，2没有第三个）；如果是对象，设置一组；---核心：在与区分参数
        css:function(ele){
            var argTwo=arguments[1];// 第二个参数
            //判断第二个参数的数据类型
            if(typeof argTwo==='string'){
                var argThree=arguments[2];
                //说明没有第三个参数，是获取
                if(typeof argThree==='undefined'){
                    return this.getCss(ele,argTwo);
                }else{//有第三个参数，是设置一个
                    this.setCss(ele,argTwo,argThree);
                }
            }
            //对象数据类型的检测，直接使用toString(); 是对象，说明是设置一组
            if(argTwo.toString()==='[object Object]'){
                this.setGroupCss(ele,argTwo);
            }
        },
        //getChildren:获取当前容器下的所有元素
        getChildren:function(parent,tagName){
            var childNodes=parent.childNodes;
            var ary=[];
            for(var i=0; i<childNodes.length; i++){
                var cur=childNodes[i];
                //先判断是个元素节点
                if(cur.nodeType==1){
                    //如果第二个参数没有，说明不过滤，直接添加即可；
                    if(typeof tagName==='undefined'){
                        ary.push(cur);
                    }else{//如果第二个参数有，需要比对标签名是否一致
                        if(cur.tagName.toLowerCase()===tagName.toLowerCase()){
                            ary.push(cur);
                        }
                    }
                }
            }
            return ary;
        },
        //prev:求上一个哥哥元素
        prev:function(ele){
            if(frg){
                return ele.previousElementSibling;
            }
            var pre=ele.previousSibling;
            while(pre && pre.nodeType !== 1){
                pre=pre.previousSibling;
            }
            return pre;
        },
        //next:下一个弟弟元素
        next:function(ele){
            if(frg){
                return ele.nextElementSibling;
            }
            var nex=ele.nextSibling;//下一个弟弟节点
            while(nex && nex.nodeType !== 1){
                nex=nex.nextSibling;
            }
            return nex;
        },
        //prevAll:当前元素所有的哥哥元素
        prevAll:function(ele){
            var ary=[];
            var pre=this.prev(ele);//先求出上一个哥哥元素
            while(pre){
                ary.push(pre);
                pre=this.prev(pre);
            }
            return ary;
        },
        //nextAll:
        nextAll:function(ele){
            var ary=[];
            var nex=this.next(ele);
            while(nex){
                ary.push(nex);
                nex=this.next(nex);
            }
            return ary;
        },
        //sibling:当前元素的相邻元素
        sibling:function(ele){
            var prev=this.prev(ele);
            var next=this.next(ele);
            var ary=[];
            if(prev) ary.push(prev);
            if(next) ary.push(next);
            return ary;
        },
        //siblings:当前元素的所有兄弟元素
        siblings:function(ele){
            return this.prevAll(ele).concat(this.nextAll(ele));
        },
        //求当前元素的所有索引
        index:function(ele){
            return this.prevAll(ele).length;
        },
        //firstChild:求当前容器下的第一个子元素
        firstChild:function(parent){
            var aChild=this.getChildren(parent);
            return aChild[0];
        },
        //lastChild:求当前容器的最后一个子元素
        lastChild:function(parent){
            var aChild=this.getChildren(parent);
            return aChild[aChild.length-1];
        },
        //把元素插入到父容器的末尾；
        appendChild:function(parent,ele){
            parent.appendChild(ele);
        },
        prependChild:function(parent,ele){
            var first=this.firstChild(parent);
            if(first){
                parent.insertBefore(ele,first);
            }else{
                parent.appendChild(ele);
            }
        },
        //insertBefore
        insertBefore:function(newEle,oldEle){
            oldEle.parentNode.insertBefore(newEle,oldEle);
        },
        //insertAfter
        insertAfter:function(newEle,oldEle){
            var nex=this.next(oldEle);//先求出oldEle的弟弟
            if(nex){
                oldEle.parentNode.insertBefore(newEle,nex);
            }else{
                oldEle.parentNode.appendChild(newEle);
            }
        }
    }
})();













