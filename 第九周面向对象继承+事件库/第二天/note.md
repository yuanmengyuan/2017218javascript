### 事件
我们之前所接触到的事件：
鼠标事件：
onclick  ondbclick onmouseover onmouseout onmouseenter onmouseleave 
系统事件：
onload   resize  onscroll
键盘事件：
onkeydown   onkeyup  onkeypress 
表单事件：
onfocus    onblur  autofocus=true/false;
### 事件分为DOM0级事件 和  DOM2级事件
- DOM0级事件 和  DOM2级事件的区别：
    1. DOM0级事件:1）在元素的私有属性上；2）同一个元素，同一个行为，只能绑定同一个方法；如果多次绑定，后面的方法会覆盖前面的方法；3)只能发生在事件流的冒泡阶段；
    2. DOM2级事件：1）在元素所属的EventTarget这个类的原型上 2）同一个元素，同一个行为，可以绑定多个不同的方法 3）可以人为的控制发生事件流的哪个阶段（捕获，冒泡）
    标准浏览器下：addEventListener(type,fn,useCapture);
        + 解绑 removeEventListener(type,fn,useCapture);
        + 注意：所有的行为，都不加on
    IE6-8下：attachEvent('on'+type,fn)
        + 解绑：detachEvent('on'+type,fn);
        + attachEvent只能发生在冒泡阶段
- 事件流
    + 由三部分构成：捕获，target事件源，冒泡
    + 由两部分构成：捕获，冒泡；
    注意顺序：先捕获，后冒泡；
- 一个元素的层级嵌套：
元素自己-》HTMLDivElement ->HTMLElement->Element->Node->EventTarget->Object
### 事件对象：
- 事件对象的兼容处理：e=e||window.event
- 事件源：e.target=e.target||e.srcElement;
- 坐标：距离当前可视区左上角的坐标-兼容：e.clientX; e.clientY;
- 坐标：距离第一屏左上角的坐标：e.pageX;e.pageY;
不兼容：
e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
- 事件类型：e.type
- 键码:e.keyCode
- 阻止默认事件： e.preventDefault?e.preventDefault():e.returnValue=false;
### 思考题？













    
    
    
    
    
    
    
    
    
    
    
    
    
    
