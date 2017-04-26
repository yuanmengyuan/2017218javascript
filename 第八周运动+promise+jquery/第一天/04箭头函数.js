/**
 * Created by zhanglei on 2017/4/11.
 */
/*var fn=p=>p;
var fn2=()=>'我没有参数';
var fn3=(n,m)=>n+m;*/
/*var fn=p=>{return p};
var fn1=()=>{
    return '我没有参数'
}
var fn2=(n,m)=>{
    return n+m;
}*/
var fn=()=>{
    console.log('outer:'+this);//window
    return {
        fn:()=>{//箭头函数中的this，指向的是父函数的this；
            console.log ('inner:'+this)
        }
    }
};
var obj=fn();
obj.fn();








