/**
 * Created by zhanglei on 2017/4/11.
 */
//创建一个类用class；创建构造函数用constructor;
class Father{
    constructor(name,age){//构造函数，里面放的都是私有的属性和方法；
        this.name=name;
        this.age=age;
    }
    //公有的属性和方法；就放在原型prototype上；
    getName(){
        console.log(this.name);
    }
    //静态的属性和方法：指"类"身上私有的属性和方法；
    static aa(){
        console.log(122345)
    }
}
class Son extends Father{
    constructor(name,age,color){
        super(name,age);//super必须得写；
        this.color=color;
    }
    aaa(){

    }
}
var f1=new Father('ymy',18);
var s1=new Son('dongdong',20,'green')
Father.aa();
console.dir(f1);
console.dir(s1);













