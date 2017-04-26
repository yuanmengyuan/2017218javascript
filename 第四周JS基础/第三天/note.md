- 给数组末尾增加一项
    + push()
    + ary[ary.length]=xxx;
    + ary.splice(ary.length,0,xxxx);
- 删除数组最后一项
    + pop()
    + ary.length--; ary.length-=1; ary.length=ary.length-1;
    + ary.splice(ary.length-1,1);
- 如何实现克隆
    + ary.slice();/ary.slice(0)
    + ary.concat();
    + ary.splice(0) 注意：如果用splice()进行克隆，0不能省略；
    + for循环也可以实现；但for循环是循环，不是方法；
- 数据类型的比较：
    + 对象==对象 比较的是地址   []==[] false
    + 字符串==对象 转成字符串    ""==[]  true
    + 字符==数字  转成数字   ""==0 true
    + 字符串==布尔值 转成数字   ""==![]  true;
    + 数字==对象 转成数字    0==[] 
    + 布尔值==对象 转成数字    false==[]   ![]==[];
    + 数字==布尔值 转成数字  false==![] 
    + null==undefined    true
    + null===undefined   false
    + NaN==NaN false ；NaN跟任何值都不相等；包括自己也不相等；
- 字符串常用的方法
    + 通过下标找对应的字符
        + charAt()
        + charCodeAt()
    + 通过字符找下标
        + indexOf()  从前往后，找到返回对应内容的索引；找不到返回-1；
        + lastIndexOf() 从后往前找
    + 字符串截取
        + slice(n,m) 包前不包后；但是可以取负值
        + substring(n,m)包前不包后；
        + substr(n,m)  从索引n开始，删除m个
    + 字符串转数组
        + split(切割形式)
    + 字符串转大小写
        + toUpperCase()  转大写
        + toLowerCase()  转小写
    + 字符串跟正则配合的方法
        + split
        + replace（''，''）
        + match（） 找到的话，就把找到的内容抓出来；找不到返回null;
        + search() 有的话，返回内容的索引，没有-1；
- Math:
    + Math.round()
    + Math.floor()
    + Math.ceil()
    + Math.abs()
    + Math.pow()
    + Math.sqrt()
    + Math.max()
    + Math.min()
    + Math.random()
- 定时器
    + 隔一段时间爆发一次 setInterval(callback,毫秒数)； 关闭定时器 clearInterval(定时器的名字);
    + 只爆发一次的 setTimeout(callback,毫秒数); 关闭定时器 clearTimeout(定时器的名字)
- 用setTimeout()实现setInterval();用递归的思想；
- n++ 和 ++n的区别
    + ++n  先++；再运算；累加后的结果参与了运算
    + n++  先运算，再++； 累加后的结果不参与运算；
- 创建数组的两种方式
    + var ary=[1,2,3]; 字面量方式创建
    + var ary2=new Array(1,2,3); 实例创建
- DOM树，由一大堆的元素和标签组成；所以，DOM就是用来操作页面中的标签的；
- DOM中的获取方式有以下几种：
    + id
    + className
    + tagName
    + name
    + 可视区的宽度：document.body.clientWidth||document.documentElement.clientWidth;
    + 可视区的高度：document.body.clientHeight||document.documentElement.clientHeight;
    + querySelector() 获取一个元素； 实参可以是:div .div #div 
    + querySelectorAll();
- DOM节点的关系：
    + parentNode:结构上的父级
    + childNodes;子节点
    + children; 可以拿到当前容器下的所有子元素；但是，IE8下如果有注释，不兼容；
    + previousSibling 上一个哥哥节点
    + nextSibling  下一个弟弟节点
    + firstChild() 第一个子节点
    + lastChild() 最后一个子节点；
- 节点：

| 节点  | nodeType  |  nodeName       | nodeValue
|:----:| :--------:| :-------:       | :--------:|
|文本节点|    3     |     #text       |  文本内容         |
|元素节点|    1     |   大写的标签名    |    null       |
|注释节点|    8     |      #comment   |    注释内容       |
|document节点| 9   |      #document   |    null       |
   
- 判断属性是否存在的方法
    + in: "属性名" in 对象    如果支持，返回true；不支持返回false；
    + ".": 对象.属性名   如果不支持，返回undefined;
    
> 复习重点：

- 数组常用的方法 14个
- 算法：
    + 快排：涉及递归的思想
    + 插排：数组的splice
    + 冒排：外面代表轮数，里面代表次数； 第二个参数可传可不传
    + 去重：
        + sort思想
        + 双重循环
        + 新数组
        + 对象中如果有了，删除的是数组中的这一个；防止数组塌陷
        + 利用对象，可以记录重复的次数
- 字符串常用的方法 14个；
- 封装了 str2url
- Math常用的方法
- 定时器：
    + setInterval() clearInterval()
    + setTimeout() clearTimeout()
    + 递归思想：用setTimeout实现setInterval
- 时钟 和 倒计时
- DOM的获取方式 ：7 个
- DOM节点类型，节点名称，节点内容
- DOM节点关系：7个
- 封装：当前容器下的所有子元素
- 封装：当前元素的上一个哥哥元素
- 参数：1）形参 2）arguments
- 返回值： return 1）返回值 2）阻断程序执行
- 闭包和自定义属性；
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    