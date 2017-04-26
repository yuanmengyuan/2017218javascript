### 预解释无节操
- 只对等号左边带var的只声明，不定义
- return后面的不进行预解释，return下面的虽然不执行但会进行预解释
- 函数的声明早于变量声明
- 已经声明过的不会重复声明，但会重新赋值
- （IE10及10以下）条件判断语句无论是否成立，都会预解释
- 自执行函数不会进行预解释，只有执行到他的时候，声明+定义+调用同步完成；

### this
- 当函数被调用的时候，点前面是谁，this就是谁
- 自执行函数的this都是window；
- 回调函数中的this一般都是window；
- 元素身上的事件被触发的时候，会执行一个函数，函数中的this指向当前这个元素
- 当遇到call,apply,bind以上规律都失效，因为他们可以改变this指向；

### 面向对象
- 特点：
    1 封装：低耦合高内聚
    2 继承：子类继承父类的属性和方法
    3 多态：重载和重写
    重写：子类重写父类的属性和方法
    重载：JS没有严格意义上的重载，但有类似重载的功能，就是传不同的参数，可以实现不同的效果；
- 面向对象设计模式：
    1 单例模式
        - 各个模块的调用：对象.属性名
        - 本模块之间的相互调用：this.属性名
    2 工厂模式
    3 构造函数模式
    4 原型模式
- 重要的条件反射：
    1 构造函数：里面都是私有属性
      构造函数中的this，指向当前这个实例；
    2 原型prototype：里面都是共有的属性和方法；
    3 __proto__:原型链
- 原型最基础的三句话
    1 每个函数数据类型（普通函数，类），都有一个属性叫prototype，prototype是个对象
    2 prototype上天生自带一个属性，叫constructor，指向当前所属的类
    3 每个对象（普通对象，实例，prototype）上，都有一个属性叫__proto__,指向当前实例所属类的原型；
- 连个大boss,Object 和Function
    1 Function  是  Object 的爹；
    2 Object 是 Function 的爹；
    3 Object 是 Function.prototype的爹
    4 Object.prototype 是 Function.prototype的爹
- 函数的三种角色：
    + 普通函数：形成一个私有作用域，形参赋值，越解释，代码执行，内存和内存释放,作用域链
    + 类：实例，prototype,constructor，类，原型链__proto__
    + 普通对象:具有普通对象的特征：属性和方法；
- 如果给原型自定义了一个对象，那么自定义的这个对象上，没有constructor
### 属性判断
- in:判断某个属性是否在元素上； （包含了私有+公有）
- hasOwnProperty判断某个属性是否为元素身上的私有属性
 使用 obj.hasOwnProperty(属性名)
- 写一个方法：判断是否为公有属性？
- isPrototypeOf：判断前一个对象是否在后一个对象的原型链上；返回的布尔值；
- propertyIsEnumerable：他的作用跟hasOwnProperty类似；返回的布尔值；
### 改变this指向的函数
- call(arg1,arg2,arg3,arg4......)
    - call的一个参数用来改变call前面的函数中的this关键字
    - call从第二个参数开始，相当于给call前面的函数从左往右一个个的赋值；
    - call当改完this指向，传完参数后，立即执行了；
- apply(arg1,arg2) arg2可传可不传
    - arg1用来改变this指向，具体跟call一样；
    - 区别：apply的第二个参数是个数组，存放所有需要给形参的值；
    虽然apply的第二个参数是个数组，但是对于形参来说，也是从左往右一个个的赋值；
- bind(预处理机制)
    - 相同：
    bind的传参形式跟call一样；
    - 注意：bind属于预处理机制，当调用bind的时候，会返回一个已经改好this，传好参数的函数；
    你只需要在需要的时候，调用即可；
- eval() 把字符串作为JS代码来执行；
- toString() 基类Object.prototype上的toString()
    - 作用：可以打印出this所属类的详细信息；












