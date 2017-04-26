### 1.0复习
- 正则实例上的属性和方法：var reg=new RegExp();
    1. reg.test(); //校验
    2. reg.exec(); //捕获
        + exec的返回值，一般有三个（如何大正则的，index,input）
        + 如果有小分组的时候，小分组从第二项开始；
    3. reg.lastIndex();//从哪里开始查找；
        + 一开始从0开始查找；
        + 第二次开始，从找到内容的下一项位置开始查找；
    reg.test()和reg.exec()都能影响reg.lastIndex();（重要）
- 字符串跟正则配合的属性和方法
    1. str.match(reg)  返回的是数组，在正则有全局g的情况下，不能拿到小分组；
    2. str.replace(reg,callback);  替换; callback中最少接收三个参数：跟exec一样
    3. str.search(reg)
    4. str.split(reg)
- Math常用的属性和方法
    1. Math.round()
    2. Math.floor()
    3. Math.ceil()
    4. Math.sqrt()
    5. Math.pow(2,3)
    6. Math.max()
    7. Math.min()
    8. Math.abs()
    9. Math.random();
- 复习DOM相关的知识
1. 获取元素的几种方式：
   id  
   className 
   name 
   tagName 
   clientWidth 
   querySelector 
   querySelectorAll
2. dom节点
节点         nodeName       nodeValue     nodeType
文本节点       #text        文本内容          3
注释节点       #comment     注释内容          8
元素节点      大写的标签名    null             1
document节点   #document    null             9

3. 节点关系
parentNode
childNodes
children 
previousSibling
nextSibling
firstChild
lastChild

4. 关于DOM的动态操作
+ 创建
    1. docment.creatElement
    2. obj.cloneNode(boolean是否深度克隆)
+ 动态插入
    1. parent.appendChild(curEle);//插入到容器的末尾
    2. parent.insertBefore(curEle,oldEle);
+ 动态删除和替换
    1. 删除 parent.removeChild(curEle);
    2. 替换 parent.replaceChild(curEle,oldEle);
5. 属性操作：
    1. 通过.和[]
    2. attribute系列
        + 设置 obj.setAttribute()
        + 获取 obj.getAttribute()
        + 删除 obj.removeAttribute();
- DOM库
> 获取元素的几种方式：
1. getByClass  通过class名来获取元素
2. hasClass    判断是否有某个class名
3. addClass    添加class
4. removeClass 移除class
5. getCss       获取非行间样式
6. setCss       设置一个样式
7. setGroupCss  设置一组样式
8. css          三合一
9. win          盒子模型的封装
10. offset      盒子模型偏移量的封装
> 节点关系
1. getChildren   获取当前容器下的所有子元素节点；
2. prev          获取上一个哥哥元素
3. prevAll       获取所有的哥哥元素
4. next          获取下一个弟弟元素
5. nextAll       获取所有的弟弟元素
6. sibling       获取相邻元素
7. siblings      获取所有的兄弟元素
8. firstChild    第一个子元素
9. lastChild     最后一个子元素
10. index        当前元素的索引

> DOM动态操作：
1. appendChild   插入容器末尾；
2. prependChild  插入容器开头
3. insertBefore  插入到指定元素的前面
4. insertAfter   插入到指定元素的后面


    














    
    
    
    
    
    
    
    
    
    
    
    
    
    