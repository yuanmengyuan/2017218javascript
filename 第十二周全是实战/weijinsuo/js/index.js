$(window).on('resize',resize).trigger('resize');
var $aItem;
function resize() {
    //拿到可视区的宽度
    var $windowWidth=$(window).width();
//判断是否为小屏
    var isSmallScreen=$windowWidth<768?true:false;
    $aItem=$('#carousel-ymy .item');
    //思路1：
    /*$aItem.each(function (index,item) {
        if(isSmallScreen){//小屏幕
            var img=$(this).data('xs-image');
            $(this).css('backgroundImage','url('+img+')')
             $(this).html('<img src="'+img+'"/>');
        }else{//大屏幕
            var img=$(this).data('lg-image');
            $(this).html('');
            $(this).css('backgroundImage','url('+img+')')
        }
    })*/
    //思路2；
    $aItem.each(function (index,item) {
        //根据isSmallScreen来取不同的自定义属性的值；
        var img=$(this).data(isSmallScreen?'xs-image':'lg-image');
        $(this).html('<img src="'+img+'"/>');
        $(this).css('backgroundImage','url('+img+')');
    })
    //实现滚动条菜单在移动端下面；
    //遇到的问题：1）在移动端要出现横向滚动条； 2）移动端和Pc的样式切换；3）千万不要把overflow-x写在container；

    var $ul=$('#product .nav-tabs');
    var $li=$ul.children('li:not(.pull-right)');
    var width=0;
    if($windowWidth<=768){
        //通过li的宽度来计算ul的宽度；这样li就不会发生折行；
        $li.each(function (index,item) {
            width+=$(item).width();
        })
        width+=20;
        $ul.css('width',width);
        $ul.parent().css('overflow-x','scroll');
    }else{
        //让恢复大屏的时候，让ul的宽度也恢复.container的宽度；
        $ul.css({
            width:$('#product .container').width()
        });
        $ul.parent().css('overflow','hidden');
    }

}
//实现轮播图的左右滑动切换页面；
var offset=50;
$('.carousel').each(function (index,item) {
    var startX,endX;
    item.addEventListener('touchstart',function (e) {
        startX=e.targetTouches[0].clientX;
    });
    item.addEventListener('touchmove',function (e) {
        endX=e.targetTouches[0].clientX;
    });
    item.addEventListener('touchend',function (e) {
        //需要计算了；
        if(Math.abs(endX-startX)>offset){
            if(endX-startX>0){
                $(this).carousel('prev');
            }else if(endX-startX<0){
                $(this).carousel('next');
            }
        }
    })
});
//工具小提示
$('[data-toggle="tooltip"]').tooltip();
//news标题切换:把标题内容写在自定义属性上；然后当点击事件发生的时候，通过jquery中的data()来获取对应的内容；
var $ali=$('#news .nav-pills li');
var $h4=$('#news h4');
$ali.on('click',function () {
    $h4.html($(this).data('title'));
})
//设置吸顶的效果；
$('#navbar').affix({
    offset:{
        top: 40
    }
})












