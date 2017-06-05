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
        '.screen-4_phone_item_4',
    ],
    '.screen-5':[
        '.screen-5_heading',
        '.screen-5_subheading',
        '.screen-5_phone'
    ]
};
var isAnimateDone=false;//当前屏幕下所有子元素的状态是done吗？
function setScreenAnimate(screenCls){
    var screen=document.querySelector(screenCls);//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//获取需要设置动画的元素
    var isSetAnimateClass=false;//是否有初始化子元素的样式
    screen.onclick=function () {
        //初始化样式增加init; A_init
        if(isSetAnimateClass===false){
            //给当前屏幕下的每个元素都添加动画初始样式；
            for(var i=0; i<animateElements.length; i++){
                var element=document.querySelector(animateElements[i]);
                var baseCls=element.getAttribute('class');
                element.setAttribute('class',baseCls+' '+animateElements[i].substring(1)+'_animate_init');
            }
            isSetAnimateClass=true;
            return;
        }
        //切换所有animateElements的init->done; A A_done
        if(isAnimateDone===false){
            for(var i=0; i<animateElements.length; i++){
                var element=document.querySelector(animateElements[i]);
                var baseCls=element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
            }
            isAnimateDone=true;
            return;
        }
        //切换所有animateElements的done->init; A A_init
        if(isAnimateDone===true){
            for(var i=0; i<animateElements.length; i++){
                var element=document.querySelector(animateElements[i]);
                var baseCls=element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
            }
            isAnimateDone=false;
            return;
        }

    }
}
for(var k in screenAnimateElements){
    setScreenAnimate(k)
}
