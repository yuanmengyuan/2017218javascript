//要保证this永远指向实例；
function Tab(ele){
    //1.先把全局变量，都作为私有属性放在构造函数中
    this.oWrap=ele;
    this.aBtn=this.oWrap.getElementsByTagName('li');
    this.aDiv=this.oWrap.getElementsByTagName('div');
    this.init();
}
//把所有全局函数，都作为公有方法放在prototype上；注意constructor指向和this问题；
Tab.prototype={
    constructor:Tab,
    init:function(){
        var _this=this;
        for(var i=0; i<this.aBtn.length; i++){
            this.aBtn[i].index=i;
            this.aBtn[i].onclick=function(){
                _this.fnClick(this);
            };
        }
    },
    fnClick:function(btn){
        for(var i=0; i<this.aBtn.length; i++){
            this.aBtn[i].className='';
            this.aDiv[i].className='';
        }
        this.aBtn[btn.index].className='current';
        this.aDiv[btn.index].className='show';
    }
};