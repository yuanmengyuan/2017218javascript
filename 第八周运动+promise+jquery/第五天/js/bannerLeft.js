/**
 * Created by zhanglei on 2017/4/16.
 */
var $wrap=$('.wrap');
var $boxInner=$wrap.find('.boxInner');
var $ul=$wrap.find('ul');
var $aImg=null;
var $aLi=null;
var $left=$wrap.find('.left');
var $right=$wrap.find('.right');
var data=null;
var n=0;//n决定了让第几张图片显示
var timer=null;
//1:获取数据
getData();
function getData(){
    $.ajax({
        type:'get',
        url:'json/data.txt.txt',
        async:false,
        dataType:'json',
        success:function(val){
            data=val;
        }
    })
}
//2:绑定数据
bind();
function bind(){
    var str="";
    var strLi="";
    $.each(data,function(index,item){
        str+='<img src="" realImg="'+item.imgSrc+'" alt=""/>';
        strLi+=index===0?'<li class="active"></li>':'<li></li>';
    });
    str+='<img src="" realImg="'+data[0].imgSrc+'" alt=""/>';
    $boxInner.html(str);
    $ul.html(strLi);
    $aImg=$wrap.find('img');
    $aLi=$wrap.find('li');
    //改$boxInner的宽度
    $boxInner.css({width:$aImg.length*1000})
}
//3:延迟加载
setTimeout(lazyImg,500);
function lazyImg(){
    $.each($aImg,function(index,item){
        var tmpImg=new Image;
        tmpImg.src=$(item).attr('realImg');
        tmpImg.onload=function(){
            item.src=this.src;
            tmpImg=null;
        }
    })
}
//4:图片自动轮播
clearInterval(timer);
timer=setInterval(autoMove,2000);
function autoMove(){
    if(n>=$aImg.length-1){
        n=0;
        $boxInner.css("left",0);
    }
    n++;
    $boxInner.animate({
        left:-n*1000
    })
    bannerTip();

}
//5:焦点自动轮播
function bannerTip(){
    $aLi.eq(n%$aLi.length).addClass('active').siblings().removeClass('active');
}
//6:移入停止，移出继续
$wrap.mouseover(function(){
    $left.show();
    $right.show();
    clearInterval(timer);
}).mouseout(function(){
    $left.show();
    $right.show();
    timer=setInterval(autoMove,2000)
});
//7:点击焦点手动切换
$aLi.click(function(){
    n=$(this).index();
    $boxInner.animate({
        left:-n*1000
    });
    bannerTip();
})
//8:点击左右按钮进行切换
$right.click(function(){
    autoMove();
});
$left.click(function(){
    if(n<=0){
        n=$aLi.length;
        $boxInner.css('left',-n*1000)
    }
    n--;
    $boxInner.animate({
        left:-n*1000
    });
    bannerTip();
})









