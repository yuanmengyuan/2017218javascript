### 1.1复习
- 页面由三部分组成
    + html 超文本标记语言；负责页面结构
    + css  层叠样式表；负责页面样式
    + JS 轻量级的脚本语言； 负责动效和数据交互；
- CSS引入页面的方式
    + 行内`<div style="width:200px;height:300px;"></div>`
    + 内嵌,在head里面`<style></style>`
    + 外链，在head里面`<link href="" rel="stylesheet"/>`
- JS引入页面的方式
    + 行内 `<div onclick="alert(xxxx)"></div>`
    + 内嵌，一般建议在body底部`<script>xxxxxxxxxx</script>`;
    如果想在head中引入JS外链；一定要加window.onload=function(){};
    + 外链`<script src=""></script>`
- 函数的作用：做事情的，能做哪些事情；
- 属性和方法的区别：属性没括号，方法有括号；
- 字符串和变量的区别：字符串有引号，变量没引号;
    + 字符串一般用单引号；为了元素身跟上的属性值区分开来；属性值一般是"";
    + 变量，就是别名；var str； 告诉浏览器，定义了str这么一个变量；
    + 如果没有定义变量，xxx is not defined;
- JS常见的输出方式7种
    + alert('') ; 
    + confirm('确定要删除？'); 他有两个返回值：true 真； false假；
    + console.log(''); 可以在控制台打印出我们想要打印的内容；
    + console.dir(); 打印出对象身上的属性和方法；
    + document.write();
    如果遇到window.onload会清空页面；
    + 元素.innerHTML=xxxx;
    + console.table();可以把数组和对象，以表格的形式打印出来；
    ```
    var ary2=[
        {
            name:'杜拉拉',
            age:18,
            sex:'gril'
        },
        {
            name:'王伟',
            age:38,
            sex:'boy'
        }
    ];
    console.table(ary2);

    ```
    ![](http://i1.piimg.com/567571/9f38b766e53640ef.png)
- chrome控制台
    + Elements:用来调试html+css的
    + console:用来调试JS的
    + sources:可以拿到该网站相关的资源：images ,html ,css, js
### 1.2 体验JS编程思想
- 需求：鼠标移入div1的时候，div2显示；鼠标移出div1的时候，div2隐藏；
- 实现思路：
    1. 高度：div2的高度为0； 移入div1后高度为100;移出div1时div2高度0；
    2. display:block显示，none，隐藏；
    3. 透明度：rgba(); opacity();
    4. 定位：left和top;
    5. margin:margin-left和 margin-top;
    6. overflow:hidden和visible;
- 如何培养JS编程思想
    + 找到谁？给谁加什么事件？想干什么事？
    + 先写注释，再写代码；
- 常见的bug;
    + xxx is not defined; 变量没有被定义过；
    + Cannot set property 'onmouseover' of null ：不能给null来设置onmouseover这个属性---元素获取错误；
- JS获取元素的方式：
    + document.getElementById('id名字')；
   因为id是唯一的，所有拿到的是一个元素；
    + document.getElementsByTagName('标签名');
    标签名拿到的是一个元素集合；即使只有一个元素，也是个集合；
    想要取到其中的一个；aDiv[0] aDiv[2];
- ****JS中的数据类型，包括，基本数据类型 和 引用数据类型
    + 基本数据类型：
        1. 字符串string
        2. 数字 number
        3. 布尔值 boolean
        4. undefined 现在没有，以后也没有；
        5. null 空对象，现在没有，以后会有；
    + 引用数据类型
        1. 对象数据类型
            + 数组
            + 正则
            + 对象{}
        2. 函数数据类型
            function 函数名(){};
- 数据类型检测的方式
    1. typeof 可以检测基本数据类型，但是对于对象数据类型，检测出来的都是object，无法知道具体属于哪种对象；
    2. 对象 instanceof 类； 比如`ary instanceof Array` 判断这个实例是否属于某个类；
    3. 对象.constructor: 比如`ary.constructor`可以打印出对象所属的类；
    4. Object.prototype.toString.call(ary); 出来的结果 '[object Array]'
    
- 基本数据类型和引用数据类型的区别：
    - 基本数据类型：是对值的操作；
    - 引用数据类型：是对地址的操作；
- 操作属性用的是"." oDiv.style.display='block'


































   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    