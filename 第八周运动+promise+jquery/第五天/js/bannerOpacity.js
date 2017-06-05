/**
 * Created by zhanglei on 2017/4/16.
 */
var $wrap=$('.wrap');
var $boxInner=$wrap.find('.boxInner');
var $aImg=null;
var $ul=$wrap.find('ul');
var $left=$wrap.find('.left');
var $right=$wrap.find('.right');
var $aLi=null;
var data=null;
var n=0;//n决定让第几张图片显示
//1:获取数据
getData();
function getData(){
    $.ajax({
        url:'json/data.txt.txt',
        type:'get',
        async:false,//同步
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
    //遍历数据中的每个对象
    $.each(data,function(index,item){
        str+='<img src=""  realImg="'+item.imgSrc+'" alt=""/>';
        strLi+=index==0?'<li class="active"></li>':'<li></li>';
    });
    $boxInner.html(str);//注意：jquery中没有等号，都是方法函数化；
    $ul.html(strLi);
    $aImg=$boxInner.children('img');//jquery中没有DOM映射，所以得重新获取
    $aLi=$ul.children('li');
}
//3：延迟加载
lazyImg();
function lazyImg(){
    $.each($aImg,function(index,item){
        //item是每个img原生
        var tmpImg=new Image;//原生
        tmpImg.src=$(item).attr('realImg');//拿的是图片的realImg属性
        tmpImg.onload=function(){
            item.src=this.src;
            //等图片加载成功之后，我们应该让第一张图片显示；
            /*$aImg.first().stop().animate({
                opacity:1,
                zIndex:1
            },1500);*/
            $aImg.first().stop().css('zIndex',1).fadeIn(1000);
            tmpImg=null;
        }
    })
}

//4：图片自动轮播
clearInterval(timer);
var timer=setInterval(autoMove,2000);
function autoMove(){
    //思路1：
    n++;
    n%=$aImg.length;
    //当索引为几的时候，就让索引对应的图片显示，该图片显示之后，它的兄弟元素层级降到0，同时隐藏；
    setBanner();
}
function setBanner(){
    $aImg.eq(n).css('zIndex',1).fadeIn(1000).siblings('img').css('zIndex',0).fadeOut();
    /*//思路2：
     n++;
     n%=$aImg.length;
     setBanner();
     */
    bannerTip();//把bannerTip写在定时器中，是为了拿到正确的n；
}
/*//这个是思路2：
function setBanner(){
    $aImg.each(function(index,item){
        if(index===n){
            $(item).css({zIndex:1}).fadeIn(1000,function(){
                $(this).siblings('img').css({zIndex:0}).hide();
            })
        }else{
            $(item).css({zIndex:0})
        }
    })
}*/
//5：焦点自动轮播
function bannerTip(){
    //让当前索引为n的按钮点亮，同时让他的兄弟元素都变灭；
    $aLi.eq(n).addClass('active').siblings().removeClass('active');
}
//6：鼠标移入停止，移出继续运动
$wrap.mouseover(function(){
    $left.show();
    $right.show();
    clearInterval(timer);
}).mouseout(function(){
    $left.hide();
    $right.hide();
    timer=setInterval(autoMove,2000);
});
//7：点击焦点手动切换
$aLi.click(function(){
    n=$(this).index();
    setBanner();
});
//8：点击左右按钮手动切换
$right.click(function(){
    autoMove();
});
$left.click(function(){
    n--;
    n=n%$aImg.length;
    setBanner();
});










