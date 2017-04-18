/**
 * Created by zhanglei on 2017/4/18.
 */
    //面向对象三大小技巧：1）this永远是实例 2）全局变量都是实例的私有属性 3）不要函数嵌套函数
class BaseToTop{
    constructor(opt){
        opt=opt||{};
        this.ele=opt.ele;
        this.duration=opt.duration||1000;
        this.timer=null;
        this.step=null;
        this.bOk=false;
        this.init();
    }
    init(){
        //统帅全部的思路
        //点击事件之后，回到顶部
        this.clickEvent();
    }
    clickEvent(){
        //点击事件发生的时候，要执行一个函数
        this.ele.click(()=>{
            //计算步长 target/duration*interval
            var target=$(window).scrollTop();
            var duration=this.duration;
            var interval=30;
            this.step=target/duration*interval;
            this.timer=setInterval(()=>{
                this.moveTop();
            },interval);
        })
    }
    moveTop(){
        //每次拿到最新的位置；
        var curTop=$(window).scrollTop();
        //然后在最新的位置上-=step
        curTop-=this.step;
        if(curTop<=0){
            //设置为0；
            $(window).scrollTop(0);
            //关闭定时器
            clearInterval(this.timer);
            //阻止程序的执行
            return;
        }
        //重新赋值新位置
        $(window).scrollTop(curTop);
        this.bOk=false;

    }
}
class ShowOrHide extends BaseToTop{
    constructor(opt){//先继承父类上原有的；父类如果有参数，必须写参数
        super(opt);
        this.scrollName=null;
        this.ele.hide();
        this.scrollEvent()
    }
    scrollEvent(){
        $(window).on('scroll',this.scrollName=()=>{
            //超过一屏，显示按钮
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
        this.btnHide();
    }
    btnHide(){
        this.ele.click(()=>{
            this.ele.hide();//让当前按钮隐藏；
            $(window).off('scroll',this.scrollName);//解除scroll的事件绑定
            $(window).scroll(()=>{
                if($(window).scrollTop()<=0){
                    this.scrollEvent();
                }
            })
        })
    }
}
class CanStop extends ShowOrHide{
    constructor(opt){
        super(opt);
        this.stop();
    }
    stop(){
        $(window).on('scroll',()=>{
            if(this.bOk) clearInterval(this.timer);
            this.bOk=true;
        })
    }
}










