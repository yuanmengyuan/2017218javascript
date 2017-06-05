//获取元素
var getEle=function (sel) {
    return document.querySelector(sel);
};
var getEleAll=function (sel) {
    return document.querySelectorAll(sel);
};
//获取元素样式
var getCls=function(ele){
    return ele.getAttribute('class');
};
var setCls=function(ele,cls){
    return ele.setAttribute('class',cls);
};
//为元素添加样式
var addCls=function (ele,cls) {
    var baseCls=getCls(ele);
    if(baseCls.indexOf(cls)===-1){
        setCls(ele,baseCls+' '+cls);
    }
};
//删除元素样式
var delCls=function (ele,cls) {
    var baseCls=getCls(ele);
    if(baseCls.indexOf(cls) !==-1){
        setCls(ele,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
};
//第一步：初始化样式 init
var screenAnimateElements={
    '.screen-1':[
        '.screen-1_heading',
        '.screen-1_phone',
        '.screen-1_shadow'
    ],
    '.screen-2':[
        '.screen-2_heading',
        '.screen-2_subheading',
        '.screen-2_phone',
        '.screen-2_point_1',
        '.screen-2_point_2',
        '.screen-2_point_3',
    ],
    '.screen-3':[
        '.screen-3_heading',
        '.screen-3_subheading',
        '.screen-3_phone',
        '.screen-3_features'
    ],
    '.screen-4':[
        '.screen-4_heading',
        '.screen-4_subheading',
        '.screen-4_phone',
        '.screen-4_phone_item_1',
        '.screen-4_phone_item_2',
        '.screen-4_phone_item_3',
        '.screen-4_phone_item_4'
    ],
    '.screen-5':[
        '.screen-5_heading',
        '.screen-5_subheading',
        '.screen-5_phone'
    ]
};
var setScreenAnimateInit=function (screenCls) {
    var screen=getEle(screenCls);//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//获取需要设置动画的元素
    for(var i=0; i<animateElements.length; i++){
        var element=getEle(animateElements[i]);
        var baseCls=element.getAttribute('class');
        element.setAttribute('class',baseCls+' '+animateElements[i].substring(1)+'_animate_init');
    }
};
var setScreenAnimateDone=function (screenCls) {
    var screen=getEle(screenCls);//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//获取需要设置动画的元素
    for(var i=0; i<animateElements.length; i++){
        var element=getEle(animateElements[i]);
        var baseCls=element.getAttribute('class');
        element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
    }
};

var navItems=getEleAll('.header_nav-item');
var outlineItems=getEleAll('.outline_item');

var navTip=getEle('.header_nav-tip');
var switchNameItemsActive=function (index) {
    // for(var i=0; i<navItems.length; i++){
    //     delCls(navItems[i],'header_nav-item_status_active');
    // }
    //addCls(navItems[index],'header_nav-item_status_active');

    navTip.style.left=index*70+'px';
    for(var i=0; i<outlineItems.length; i++){
        delCls(outlineItems[i],'outline_item_status_active');
    }
    addCls(outlineItems[index],'outline_item_status_active');
};
//设置播放屏內的元素动画；
window.onload=function () {
    for(var k in screenAnimateElements){
        if(k=='.screen-1'){
            setScreenAnimateDone('.screen-1');
            continue;
        }
        setScreenAnimateInit(k)
    }
};
//第二步：滚动到哪里，就播放到哪里
window.onscroll=function () {
    var top=document.documentElement.scrollTop||document.body.scrollTop;
    if(top>80){
        var header=getEle('.header');
        addCls(header,'header_status_back');
        addCls(getEle('.outline'),'outline_status_in');
    }else{
        var header=getEle('.header');
        delCls(header,'header_status_back');
        delCls(getEle('.outline'),'outline_status_in');
        switchNameItemsActive(0);
    }
    if(top>1){
        setScreenAnimateDone('.screen-1');
        switchNameItemsActive(0);
    }
    if(top>800*1-100){
        setScreenAnimateDone('.screen-2');
        switchNameItemsActive(1);
    }
    if(top>800*2-100){
        setScreenAnimateDone('.screen-3');
        switchNameItemsActive(2);
    }
    if(top>800*3-100){
        setScreenAnimateDone('.screen-4');
        switchNameItemsActive(3);
    }
    if(top>800*4-100){
        setScreenAnimateDone('.screen-5');
        switchNameItemsActive(4);
    }
};
//双向定位
function setNavJump(i,lib) {
    lib.onclick=function () {
        document.body.scrollTop=800*i;
    }
}
for(var i=0; i<navItems.length; i++){
    setNavJump(i,navItems[i]);
}
for(var i=0; i<outlineItems.length; i++){
    setNavJump(i,outlineItems[i]);
}
//滑动门特效；
var setTip=function (index,lib) {
    lib[index].onmouseover=function () {
        navTip.style.left=index*70+'px';
    };
    var activeIndex=0;
    lib[index].onmouseout=function () {
        for(var i=0; i<lib.length; i++){
            if(getCls(lib[i]).indexOf('header_nav-item_status_active') !== -1){
                activeIndex=i;
                break;
            }
        }
        navTip.style.left=activeIndex*70+'px';
    };
};
for(var i=0; i<navItems.length; i++){
    setTip(i,navItems)
}









