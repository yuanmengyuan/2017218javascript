- 循环
    + for循环
        + 选项卡
        + 随机验证码
        + 去重
        + 获取当前元素下面的所有子元素
        + 隔行换色的九九乘法表
    + for...in循环
    + while循环
        + 随机验证码
        + 封装上一个哥哥元素
    + do..while基本不用
    + 跟循环有关的：break，continue
        + break:阻断循环执行
        + continue：跳过该次循环，以后继续；
- 注意点：
函数中，阻断程序执行，用的return;
循环中，阻断循环执行，用的break;
循环中，阻断该次循环，其他循环继续，用的continue;
- 判断
    + if判断
        + if...elseif...
        ```
        if(2)
            alert('true')
        else
            alert('false')
        ```
        +`if(3) alert('true'); else alert('false');`
        +`if(x) alert(xxx)`
    + 三目 条件?语句1：语句2； 
        + 注意，也可以用三目来写if...elseif....或 switch...case
    + switch 中用的是===，属于严格比较；
- 运算符
    + 算术运算符： + - * ／ % 
        + 除了加号以外，其他运算符，可以进行隐式数据类型转换；
        + "+"号有两个功能：1）字符串拼接 2）运算
    + 比较运算符：>= > <= < == ===
    + 逻辑运算符：&& || !;
        + 用&&可以写if条件；
        + 用||可以写else条件；
        ```
        n==2 && alert(true); //&&：当前面的条件成立的时候，才会走后面的语句
        n!=2 || alert(false);//||：当前面的条件不成立的时候，才会走后面的语句；
        ```
        + !在数据类型比较中，一旦遇到!，立即或优先进行布尔值的转换；
    + 赋值运算符
        + =：赋值的
        + +=； -=；  *= /= %=
        + "%="用于秒转换；求剩下的秒数
- "=="的数据类型的比较：
    + 对象==对象 对象比较的是地址  []==[] false
    + 字符串==对象 转成字符串 ""==[] true;
    + 字符串==数字 转成数字 ""==0 true
    + 字符串==布尔值 转成数字 ""==![]  true
    + 数字==布尔值 转成数字  0==![] true 
    + 数字==对象 转成数字   0==[]  true; 0=={} false;
    + null==undefined true;
    + null===undefined false;
    + NaN跟任何值都不相等； 包括他自己；
- DOM树
    + doctype
        + html
            + head
                + meta[name=description]
                + meta[name=keywords]
                + link[rel=icon]
                + link[href=xx.css]
            + body
                + 通过标签搭建html页面
                + 在body底部写script
                    + script：src
                    + script内嵌式
- DOM中获取元素的方式
    + id
    + className
    + name
    + tagName
    + 可视区的宽高
        document.body.clientWidth||document.documentElment.clientWidth
        document.body.clientHeight||document.documentElment.clientHeight
    + querySelector()   #id  .class div   拿到的是一个元素
    + querySelectorAll() #id  .class div  拿到的是一组元素
- DOM中的节点
    包含的节点      nodeType      nodeName      nodeValue
    文本节点         3               #text        文本内容
    注释节点         8               #comment     注释内容
    元素节点         1              大写的标签名    null
    document节点     9              #document    null
- DOM的节点关系
    + parentNode 父节点
    + childNodes 子节点   getChildren();
    + children   子元素 只有IE8有注释内容的时候，不兼容；其他时候，都能获取当前容器下的所有子元素；
    + previousSibling 上一个哥哥节点
    + nextSibling 下一个弟弟节点
    + firstChild
    + lastChild
- getChildren思路
    1. 现获取当前容器下，所有的子节点
    2. 逐个判断每个子节点是否为元素节点，如果是，就放入数组中
    3. 返回数组；
- window.navigator.userAgent:可以拿到浏览器的详细信息；这个详细信息，是个string数据类型；indexOf()
- DOM动态操作；
    + 如何创建新标签
        + document.createElement(标签名) 创建 ；
        + 克隆 obj.cloneNode(false/true)false:只克隆表面； true:深度克隆
    + 动态插入；
        + 父级.appendChild(新元素) 插入到父容器的末尾；
        + 父级.insertBefore(newEle,oldEle) 插入到指定元素的前面；
    + 删除标签
        + 父级.removeChild(获取到的元素名)
    
- 属性操作：
    + . 和 []
    + attribute
        + setAttribute(属性名，属性值) 设置属性
        + getAttribute(属性名) 获取属性
        + removeAttribute(属性名) 移除属性
    + 1）通过点来设置自定义属性，看不到；但是通过setAttribute()可以看到；
      2）通过点获取元素身上已经定义好的的自定义属性，获取不到；但是通过getAttribute()可以拿到；
    + 注意事项：千万不要混搭；
    用"."都用点，用attribute，都用attribute；
- JS输出方式
    + alert()
    + confirm('') => boolean:true false;
    + console.log()
    + console.dir()
    + console.table()
    + document.write()
    + innerHTMl
- JS中的数据类型
    + 基本数据类型
        + 字符串string 数字number 布尔值boolean  null undefined
        + 基本数据类型是对值的引用
    + 引用数据类型
        + 对象数据类型
            + 数组[] 普通对象{} 日期对象newDate() 正则new RegExp()....
        + 函数数据类型
        + 引用数据类型对地址的引用；
- 数据类型检测
    + typeof  用于基本数据类型检测
    + obj1 instanceOf Object   前面的对象是否属于后面的类
    + obj.constructor 可以拿到所属的构造函数
    + Object.prototype.toString.call();
- 什么时候会出现NaN？
    + 转换失败的时候 
    + 无效运算的时候 null+undefined   undefined+undefined
- 什么时候会出现undefined?
    + 定义了形参但没有赋值undefined
    + 函数没有写return，接收到的函数返回值就是undefined;
    + 函数写了return，但没有赋值，也是undefined；
    + 当一个对象上的属性名不存在的时候，不会报错，出现的是undefiend
- 其他数据类型转为number数据类型
    + 一个严格转换，两个非严格转换
        + Number()
        + parseInt()
        + parseFloat()
    + null默认转成0； undefined->NaN
    + false->0     true->1
    + []转成-》0   
- 其他数据类型转为布尔数据类型
    + Boolean() 
        + 假："", 0,NaN,null,undefined,false
        + 真：除了假都是真；
    + if(一个值) 会转成布尔；
    + if(表达式/比较)  会默认转成布尔；
    + !
- 其他数据类型转成字符串数据类型
    + 对象转字符串：toString()
    + 数字转字符串：""+数
- arguments
    + 接收实参
    + arguments.callee() 函数本身
    + arguments.length; 
    + arguments 是类数组
- 类数组主要包含两种：
所有的类数组，都不能使用数组的方法；
    1. htmlCollection 元素集合: tagName className name ...
    2. arguments
- 闭包：当函数被调用的时候，会形成一个私有作用域，保护里面的变量不受外界的干扰，函数的这种保护机制，叫做闭包；
- 函数包含有名函数和匿名函数；
    + 有名函数
    ```
    function fn(){}
    var fn=function(){} 函数表达式
    fn();
    ```
    + 匿名函数
    ```
    oBtn.onclick=function(){} 函数表达式
    自执行函数
    (function(){})()
    ~function(){}();
    +function(){}();
    -function(){}();
    ```
    
    
    
    
    
    
    
    
    
    
    
    
    



