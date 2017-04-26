### 复习昨天的事件基础
- e.target=e.target||e.srcElement; 事件源
- e.type 事件类型
- e.clientX, e.clientY 距离可视区左上角的坐标位置
- e.pageX,e.pageY
   e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
- e.keyCode 拿到的是键码
- 阻止冒泡 e.stopPropagation? e.stopPropagation():e.cancelBubble=true;
- 阻止默认事件 e.preventDefault ? e.preventDefault() : e.returnValue=false;
- 事件流：
    + 两种：事件捕获， 事件冒泡
    + 三种：事件捕获，事件源，事件冒泡
    关于事件冒泡的运用-典型的是事件委托；
- 关联元素
    + onmouseover=>var oTo = e.fromElement||e.relatedTarget;
    + onmouseout=>var oTo = e.toElement||e.relatedTarget;
    + 当前元素中是否包含关联元素 if(oWrap.contains(oTo))
- 关于onmosueover和onmouseout冒泡问题的解决
    + 方案1：关联元素
    + 方案2：onmouseenter   onmouseleave
    注意：方案1  和 方案2 不能混合使用，二选一即可； 
### 作业：
1）面向对象练熟
2）把事件及事件对象，事件委托，冒泡等
3）小米购物车：1鼠标移入版  2 点击版
4）放大镜

    
    
    
    
    
    
    
    
    
    