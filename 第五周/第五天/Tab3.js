function Tab(){
    //{oWrap:xxx,aBtn:xxx,aDiv:xxx}
    this.oWrap=document.getElementsByTagName('div')[0];
    this.aBtn=this.oWrap.getElementsByTagName('li');
    this.aDiv=this.oWrap.getElementsByTagName('div');
    this.init();//函数被调用的时候，点前面是谁，this就是谁

}
Tab.prototype.init=function(){
    var leilei=this;
    for(var i=0; i<this.aBtn.length; i++){
        this.aBtn[i].index=i;
        //当点击事件被触发的时候，this指得是被点击的按钮
        this.aBtn[i].onclick=function(){
            leilei.fnClick(this.index);
        };
    }
};
Tab.prototype.fnClick=function(index){
    //必须拿到this，才能使用this这个对象上的aBtn
    for(var i=0; i<this.aBtn.length; i++){
        this.aBtn[i].className='';
        this.aDiv[i].className='';
    }
    this.aBtn[index].className='current';
    this.aDiv[index].className='show';
};