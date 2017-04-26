### 继承
子类继承父类的属性和方法；
- call继承：子类只继承父类私有的属性和方法；
父类私有的属性和方法，都在父类的构造函数里；
- 拷贝继承：私有通过call来继承，公有通过extend（）来继承
- 原型继承：
    + 私有继承：call继承
    + 公有继承：父类原型上的属性和方法，只有父类中的实例可以使用吧；
    + 子类原型可以使用父类原型上的属性和方法；子类原型作为父类的实例；
### 解读测试题
- 数据类型检测：
    + typeof
    + instanceof
    + constructor
    + Object.prototype.toString.call()   '[object Object]'
- 获取浏览器屏幕的宽高
    document.body.clientWidth||document.documentElement.clientWidth
- Dom的动态操作
    + 创建元素
        + document.createElement('标签名')
        + obj.cloneNode(boolean); true:深度克隆 false：只克隆表面
    + 动态插入
        + parent.insertBefore(newEle,oldEle)
        + parent.appendChild(newEle);
    + 动态删除
        + parent.removeChild(newEle);
    + 动态替换
        + parent.replaceChild(newEle,oldEle);
- 属性操作
    + . 和[]
    + attribute
        + 获取getAttribute(属性名)
        + 设置 setAttribute(key,value);
        + 移除属性 removeAttribute(key);
- 数组常用的方法
    + 增加，删除，替换
        push() pop() shift() unshift() splice(n,0,xxxx)-增加 splice(n,m)-删除  splice(n,m,x)-替换
    + 数组的查找和拼接
        slice(n,m) 包前不包后
        ary1.concat(ary2,ary3,4);
    + 数组转字符串
        toString() -》转成以,分割的字符串
        join(拼接形式) 配合eval可以实现数学运算    
    + 数组的翻转和排序
        reverse()  sort(function(a,b){return a-b})
    + 数组常用但不兼容
        indexOf()   forEach() map()
- 删除最后一项
    ary.length-- ary.splice(ary.length-1) ary.splice(ary.length-1,1)
    ary.pop()
- 数组末尾增加一项
    ary.push()  ary[ary.length]=xxx; ary.splice(ary.length,0,xxx);
- 最大值和最小值：
    + sort排序
    + 假设法
    + 对象不重名及对象属性名为数字的情况下
    + Math.max() 配合 eval()
    + Math.max() 配合 apply();
- 复制：
    + for循环克隆
    + ary1.concat()
    + ary1.splice(0);
    + ary1.slice() / ary1.slice(0)
- 闭包：
    + 避免全局变量名的污染和冲突
    + 封装
### 难点：
    + 预解释的题：
        1 面试题（*=； this题； 原型图； 原型图的题）
        2 函数的三种角色题
        3 原型图再画一画
    + 面向对象来写一个选项卡
### 普通函数改成面向对象
- 全局变量变成私有属性：
    - 因为如果设为元素的私有属性的话，只要能拿到实例this，就一定能拿到所有的属性
    - 保证：整个构造函数中，主体的this都是实例；
- 全局函数变成公有方法； 
- 如果给类.prototype=赋值，一定要修改constructor；
- 任何时候，都要注意this指向；
    
### 作业
- 笔记：
- 预解释图+题
- 原型图+题
- 面向对象版的选项卡： 重在掌握this；
    
    
    
    
    
    
    
    
    
    
    
    