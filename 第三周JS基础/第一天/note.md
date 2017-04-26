- 页面由三部分组成：
    + html：超文本标记语言，负责页面结构
    + css:层叠样式表，负责页面样式；
    + js：轻量级的脚本语言，负责页面的动效和数据交互
    小总结：结构，样式和行为，三者相分离；
    + 在html页面中写结构；
    + 通过 link标签的href属性，引入css样式
    + 通过script标签的src属性，引入js脚本；
- css引入页面的方式有三种
    + 行内`<div style="width:200px;height:300px;"></div>`
    + 内嵌:在header里面写一个`<style>选择器{key:value}</style>`
    + 外链：在header里面写一个`<link rel="stylesheet" href="css/index.css"/>`
- JS引入页面的方式，同CSS相似；
    + 内嵌：在开发过程中，建议把script放在body底部；如果非要把script标签对，放在head里面的话；需要加window.onload
    ```
    window.onload=function(){
        document.body.innerHTML='XXXXXX';
    }
    ```
    + 行内：`<div onclick="xxxx" onmouseover="xxxx"></div>`
    + 外链：`<script src="01.js"></script>`
    注意：如果script作为JS的外链，一定不要在两个script标签中写代码，写了也没用；
- javascript由三部分组成：
    + ECMAScript:完全兼容，它提供了一些列的javascript语法：比如变量，数据类型，运算符，条件判断语句等等；
    + DOM：document object model 文档对象模型 ；兼容型很不好，但是，开发人员可以解决； 封装一个自己的DOM库
    + BOM：browser object model  浏览器对象模型：不兼容，也解决不了；
- javascript常用的输出方式：
    1. alert()
    2. confirm() 有两个返回值：true,false
    3. console.log() 把要打印的东西原样的打印出来；
    4. console.table()
    5. console.dir(); 打印对象身上的属性和方法
    6. document.write(); 遇到window.onload=function(){清空页面}
    7. 对象.innerHTML 这是属性；
    对象.innerHTML = XXXX;
- 常用，但是大家遇到后，又不认识的知识点：
    + 等号的作用，是用来赋值；
    + 变量和字符串的区别：变量没引号，字符串有引号
    + 属性和方法的区别：属性没括号，方法有括号；
    + 函数，函数只有条件满足的时候才会执行；
- english:
    + onclick 单击事件
    + ondblclick 双击事件
    + onload 加载完成的时候；
    + function(){} 函数，函数的作用就是用来干事情的；
        + 函数什么时候执行，取决于不同的条件；
    + onmouseover

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    