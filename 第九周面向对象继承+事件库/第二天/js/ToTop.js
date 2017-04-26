/**
 * Created by zhanglei on 2017/4/19.
 */
class ToTop{
    constructor(opt){
        //所有的全局变量，都是私有属性；
        opt=opt||{};
        this.ele=opt.ele;
        this.duration=opt.duration||1000;
        this.step=null;
        this.timer=null;
        this.scrollName=null;
        this.bOk=false;
        this.clickEvent();
    }
    clickEvent(){
        //点击按钮的时候，计算step，然后回到顶部
        this.ele.on('click',()=>{
            //计算step = target/duration*interval
            var target=$(window).scrollTop();
            var duration=this.duration;
            var interval=30;
            this.step=target/duration*interval;
            this.timer=setInterval(()=>{
                this.toTop();
            },interval);
        })
    }
    toTop(){
        //求出最新位置
        var curTop=$(window).scrollTop();
        //在最新位置上-=step；
        curTop-=this.step;
        //条件判断
        if(curTop<=0){
            $(window).scrollTop(0);
            clearInterval(this.timer);
            //如果实例上有scrollEvent这个方法，才执行；
            this.scrollEvent && this.scrollEvent();
            return;
        }
        //设置新位置
        $(window).scrollTop(curTop);
        this.bOk=false;
    }
}
class ShowOrHide extends ToTop{
    constructor(opt){
        super(opt)
        this.scrollEvent();
    }
    scrollEvent(){
        $(window).on('scroll',this.scrollName=()=>{
            //当滚动距离大于一屏，显示按钮，否则隐藏；
            if($(window).scrollTop()>$(window).height()){
                this.ele.show();
            }else{
                this.ele.hide();
            }
        })
    }
}
class QuicklyHide extends ShowOrHide{
    constructor(opt){
        super(opt);
        this.addClick();
    }
    addClick(){
        //所有的事件绑定都是异步
        this.ele.on('click',()=>{
            this.ele.hide();
            //解除scroll行为绑定的事件
            $(window).off('scroll',this.scrollName);
        })
    }
}
class QuicklyStop extends ShowOrHide{
    constructor(opt){
        super(opt);
        this.addScroll();
    }
    addScroll(){
        $(window).on('scroll',()=>{
            if(this.bOk) clearInterval(this.timer);
            this.bOk=true;
        })
    }
}












