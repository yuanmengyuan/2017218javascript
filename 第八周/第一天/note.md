### 1.1 箭头函数
- 表达式
    1) var fn=p=>p;
    2) var fn=()=>'我没有参数';
    3) var fn=(n,m)=>n+m;  
- 函数体
    1) var fn=p=>{return p};
    2) var fn=()=>{return '我没有参数'};
    3) var fn=(n,m)=>{return n+m}
注意：箭头函数中的this，指向父函数的this；
### 复习this
1）自执行函数中的this，永远都是window;
2）当元素身上的事件被触发的时候，会执行一个函数，函数中的this指向当前这个元素
3）回调函数中的this，一般都是window
4）当函数被调用的时候，点前面是谁，this就是谁；
5）遇到call,apply，bind以上通通失效，他们可以改变this指向；
6）箭头函数中的this，指向父级的this；
### 1.2 类的创建和继承
- 类的创建
```
class 类名{
    constructor(){//写私有的属性和方法；
    }
    getName(){//公有的属性和方法
    }
    static getAge(){//类的静态方法；也是类的私有方法，实例不能使用
    }
}
类.xxxx=xxxx;//类的私有属性；
```
- 类的继承
```
class S extends F{
    constructor(name,age,color){
        super(name,age);
        this.color=color;
    }
    //下面正常写子类公有的；
}
```
- 解构赋值：{属性名}=persion;//实际拿到的是对象身上该属性名对应的值；
- let 和 const 
    1) 他两都不能进行预解释
    2) let会形成块级作用域；
    3) const 是个常量，不能进行更改；
    









