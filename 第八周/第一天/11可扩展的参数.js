/**
 * Created by zhanglei on 2017/4/11.
 */
    //参数，传了按照传的参数来，没传按照默认的值来；
/*
var fn=(a=12,b=5)=>{
    console.log(a+b)
}
fn(10,30)*/
/*var fn=(a,b,...keys)=>{
    console.log(`a:${a}`)
    console.log(`b:${b}`)
    console.log(`...keys:${keys}`)
};
fn('ymy',19,'dulala',34);*/
//扩展运算符
var ary=[29,16,4];
var ary2=[1,2,...ary];
var res=Math.max(...ary2);
//求最大值和最小值
//1)sort 2)Math.max配合eval 3)Math.max配合apply 4)假设法 5)扩展运算符












