/**
 * Created by zhanglei on 2017/3/26.
 */
function Tab(){
    //把全局变量，变成私有属性
    //构造函数中的this，都是实例；
    this.oWrap=document.getElementsByTagName('div')[0];
    this.aBtn=this.oWrap.getElementsByTagName('li');
    this.aDiv=this.oWrap.getElementsByTagName('div');
    //this.init();
}
//原型中的公共方法，只有实例this才调用；
Tab.prototype.init=function(){
    var _this=this;
    //主体思路：点击每个按钮，让所有都灭，就让当前亮；
    /*for(var i=0; i<this.aBtn.length; i++){
        this.aBtn[i].index=i;
        //当点击事件发生的时候，会执行一个函数，函数中的this指向当前这个元素；
        this.aBtn[i].onclick=function(){
            _this.fnClick(this);//当函数被调用的时候，点前面是谁，this就是谁
        };//xxff00

    }*/
    for(var i=0; i<this.aBtn.length; i++){
        var _this=this;
        (function(index){
            _this.aBtn[i].onclick=_this.fnClick.bind(_this,index)
        })(i);
    };
};
Tab.prototype.fnClick=function(index){
    for(var i=0; i<this.aBtn.length; i++){
        this.aBtn[i].className='';
        this.aDiv[i].className='';
    }
    this.aBtn[index].className='current';
    this.aDiv[index].className='show';
};