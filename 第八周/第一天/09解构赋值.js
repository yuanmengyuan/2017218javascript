/**
 * Created by zhanglei on 2017/4/11.
 */
/*var obj={a:'杜拉拉',age:34,fn(){alert(123)}};
var {a,age,fn}=obj;*/
var person={name:'dulala',age:18,showName(){console.log('打印出:'+this.name)}};
var {name,age,showName}=person;
person.showName();