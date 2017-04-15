/**
 * Created by zhanglei on 2017/4/13.
 */
//获取元素
var oWrap=utils.getByClass('wrap')[0];
var oBoxInner=utils.getByClass('boxInner')[0];
var aImg=oBoxInner.getElementsByTagName('img');
var aBtn=oWrap.getElementsByTagName('li');
var oLeft=utils.getByClass('left')[0];
var oRight=utils.getByClass('right')[0];
var n=0;//n决定着让第几张图片运动；
//要给boxInner再追加一张跟第一张一样的图片；
oBoxInner.innerHTML+='<img src="img/banner1.jpg" alt=""/>';
oBoxInner.style.width=aImg.length*1000+'px';
//图片自动轮播
clearInterval(timer);
var timer=setInterval(autoMove,2000);
function autoMove(){
    if(n>=aImg.length-1){
        n=0;
        utils.css(oBoxInner,{left:-n*1000});//瞬间拉回
    }
    n++;
    animate({
        ele:oBoxInner,
        target:{
            left:-n*1000
        }
    })
    bannerTip();
}
//焦点轮播
function bannerTip(){
    //处理图片的索引
    //var tmp=n>=aBtn.length?0:n;//思路1：三目判断
    for(var i=0; i<aBtn.length; i++){
        //console.log(i)
        aBtn[i].className=i==n%aBtn.length?"active":null;
    }
}
//鼠标移入停止运动，鼠标移除，继续运动；
oWrap.onmouseover=function(){
    clearInterval(timer);
    //让左右按钮显示；
    oLeft.style.display=oRight.style.display='block';
};
oWrap.onmouseout=function(){
    clearInterval(timer);
    timer=setInterval(autoMove,2000);
    //让左右按钮显示；
    oLeft.style.display=oRight.style.display='none';
};
//点击焦点按钮，手动切换
handleChange();
function handleChange(){
    for(var i=0; i<aBtn.length; i++){
        (function(index){
            //点击拿到对应的索引，然后给n赋值索引；因为n决定着第几张图片的运动
            aBtn[index].onclick=function(){
                n=index;
                //图片运动
                animate({
                    ele:oBoxInner,
                    target:{
                        left:-n*1000
                    }
                });
                //焦点
                bannerTip();
            }
        })(i);
    }
}
//左右按钮的运动
oRight.onclick=autoMove;
oLeft.onclick=function(){
    if(n<=0){
        n=aBtn.length;
        utils.css(oBoxInner,'left',-n*1000);
    }
    n--;
    animate({
        ele:oBoxInner,
        target:{
            left:-n*1000
        }
    });
    bannerTip();
};








