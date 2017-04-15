/**
 * Created by zhanglei on 2017/4/15.
 */
//1：获取元素
var oWrap=utils.getByClass('wrap')[0];
var oBoxInner=utils.getByClass('boxInner')[0];
var aImg=oWrap.getElementsByTagName('img');
var oUl=utils.getChildren(oWrap,'ul')[0];
var aLi=oWrap.getElementsByTagName('li');
var oLeft=utils.getByClass('left')[0];
var oRight=utils.getByClass('right')[0];
var data=null;
var n=0;//n决定了第几张图片的显示
//2:请求数据
getData();
function getData(){
    var xml=new XMLHttpRequest();
    xml.open('get','json/data.txt?'+Math.random(),false);
    xml.onreadystatechange=function(){
        if(xml.readyState==4 && /^2\d{2}$/.test(xml.status)){
            data=utils.jsonParse(xml.responseText);
        }
    };
    xml.send();
}
//3:绑定数据
bind();
function bind(){
    var str='';
    var strLi='';
    for(var i=0; i<data.length; i++){
        str+=`<img src="" realImg="${data[i].imgSrc}" alt=""/>`;
        strLi+=i==0?'<li class="active"></li>':'<li></li>';
    }
    //还得给oBoxInner追加第一张图片，同时，改变oBoxInner宽度
    str+='<img src="" realImg="img/banner1.jpg" alt=""/>';
    oBoxInner.innerHTML=str;
    oBoxInner.style.width=aImg.length*aImg[0].offsetWidth+'px';
    oUl.innerHTML=strLi;
}
//4:图片延迟加载
setTimeout(lazyImg,500);
function lazyImg(){
    for(var i=0; i<aImg.length; i++){
        (function(index){
            var img=aImg[index];
            //创建一个临时图片对象
            var tmpImg=new Image;
            tmpImg.src=img.getAttribute('realImg');

            console.log(tmpImg.src)
            //图片地址的校验
            tmpImg.onload=function(){
                img.src=this.src;

            }
        })(i)
    }
}
//5:图片自动轮播
clearInterval(timer);
var timer=setInterval(autoMove,2000);
function autoMove(){
    if(n>=aImg.length-1){
        n=0;
        utils.css(oBoxInner,{left:-n*1000});
    }
    n++;
    /*utils.css(oBoxInner,{left:-n*1000});*/
    animate({
        ele:oBoxInner,
        target:{
            left:-n*1000
        },
        effect:2
    })
    bannerTip();
}
//6:焦点自动轮播
bannerTip();
function bannerTip(){
    for(var i=0; i<aLi.length; i++){
        //注意%的用法；
        aLi[i].className=i===n%aLi.length?'active':null;
    }
}
//7:鼠标移入停止，移除继续
oWrap.onmouseover=function(){
    clearInterval(timer);
    oLeft.style.display=oRight.style.display='block';
};
oWrap.onmouseout=function(){
    clearInterval(timer);
    timer=setInterval(autoMove,2000);
    oLeft.style.display=oRight.style.display='none';
};
//8:点击焦点手动切换
handleChange()
function handleChange(){
    //循环点击每个按钮
    for(var i=0; i<aLi.length; i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            //我们把点击按钮的索引，赋值给n；n决定着让第几张图片显示
            n=this.index;
            animate({
                ele:oBoxInner,
                target:{
                    left:-n*1000
                },
                effect:2
            })
            bannerTip();
        }
    }
}
//9:点击左右按钮进行切换
oRight.onclick=autoMove;
oLeft.onclick=function(){
    if(n<=0){
        n=aImg.length-1;
        utils.css(oBoxInner,{left:-n*1000});
    }
    n--;
    animate({
        ele:oBoxInner,
        target:{
            left:-n*1000
        },
        effect:2
    })
    bannerTip();
}










