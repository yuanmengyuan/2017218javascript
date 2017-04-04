### 1.1css盒子模型
css盒子模型，由四部分构成：手动设置的宽高+padding+border+margin
### 1.2JS盒子模型：
主要通过元素身上提供的属性和方法，来获取元素身上的样式值；
JS中盒子模型所设计的属性和方法，主要包含以下几类
    1. client系列
    clientWidth    clientHeight   clientLeft     clientTop
    + clientWidth／clientHeight: 手动设定的宽度／高度+左右／上下padding 
    + clientLeft/clientTop: 左边框的宽度 / 上边框的宽度
    2. offset系列
    offsetWidth offsetHeight offsetLeft offsetTop offsetParent
    + offsetWidth/offsetHeight:手动设定的宽度／高度+左右／上下padding + 左右的border宽度
    （clientWidth+左右border      clientHeight+上下border）
    + offsetLeft/offsetTop:当前 元素的外边框 距离 他定位父级的内边框 之间的距离
    + offsetParent: 定位上的父级；
    3. scroll系列
    scrollWidth    scrollHeight    scrollLeft   scrollTop
    + scrollWidth／scrollHeight：在内容没有溢出的情况下，scrollWidth/scrollHeight等于clientWidth/clientHeight;
    如果内容溢出的情况下，scrollHeight约等于：上padding+真实内容的高度
    为什么是约等于：
    1）当内容溢出的情况下，不同浏览器拿到的值不同；
    2）同一浏览器下，内容是否溢出拿到的值也不同
    + scrollTop:指当前页面被浏览器卷去高度；
    
### 1.3 Js盒子模型遇到的问题
    1. JS盒子模型中求出来的都是四舍五入的整数，无法拿到小数 --不解决
    2. JS盒子模型中拿到的值都是复合值，无法拿到单独的宽或高； --解决：封装getCss
    3. `关于盒子模型的偏移量，我们只能求出当前容器的外边框到定位父级的那边框之间的距离，无法求出当前定位元素到body的距离；--解决：封装offset
    4. 求可视区的宽高或被浏览器卷曲的高度和宽度，太麻烦了；-- 封装win
### 1.4 封装getCss
- 封装的基本思想：
1）属性判断 点.
    + 1) obj.xxx   if(window.getComputedStyle)->boolean;
    + 2) typeof obj.xxx=='function'    if(typeof window.getComputedStyle=='function')
2) 属性判断 in
    + if("getComputedStyle" in window)
3) 因为他有报错，可以用try...catch(e)..
4) 正则判断：
    + 1） reg.test()
    + 2） str.search(reg)===-1
- 字符串中跟正则配合的方法：
    + replace()
    + match()
    + split()   // str.split(/[^\d]+/g)
    + search()
- 
    
    
    
    
    
    
    
    
    