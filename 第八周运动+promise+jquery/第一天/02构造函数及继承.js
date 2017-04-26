/**
 * Created by zhanglei on 2017/4/11.
 */
/*//es5的写法；
function F(name,age){//构造函数，里面存的都是私有的属性和方法
    this.name=name;
    this.age=age;
}
F.prototype.showName=function(){//原型
    console.log(this.name);
};
function S(name,age){
    F.call(this,name,age);//继承了父类私有的属性和方法
}
S.prototype=new F;//原型链继承；
var f1=new F('ymy',18);//实例
var s1=new S('tangtang',2);
f1.showName();
s1.showName()*/
class F{//通过class来创建一个类
    constructor(name,age){//构造函数写在constructor里面；constructor都是私有的属性和方法；
        this.name=name;
        this.age=age;
    }
    //下面这个函数，就是公共属性的写法；它放在prototype上；
    getName(){
        console.log(this.name)
    }
    //类的静态属性和方法;也就是类上私有的方法；
    static getAge(){
        console.log(this.age)
    }
}
class S extends F{
    constructor(name,age,color){
        super(name,age);//这句话必须得写；
        this.color=color;
    }
    //下面写子类自己公有的；
    haha(){
        console.log('hahahhahhaha')
    }
}
F.age=100;//私有的属性
var f1=new F('ymy',18);
var s1=new S('tangtang',2,'pink');
console.dir(f1);
console.dir(s1);





























