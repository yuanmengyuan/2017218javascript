/**
 * Created by zhanglei on 2017/4/18.
 */
class ToTop{
    constructor(opt){//构造函数，里面放的都是私有的属性和方法
        this.btn=opt.ele;
        this.duration=opt.duration || 1000;
        this.timer=null;
        this.step=null;
        this.mingzi=null;
        this.init();//init必须被调用，否则程序无法执行；
    }
    init(){
        //滚轮事件
        this.scrollEvent();
        //点击按钮，回调顶部
        this.clickEvent();
    }
    clickEvent(){
        this.btn.click(()=>{
            this.btn.hide();
            $(window).off('scroll',this.mingzi);
            //计算步长 target/duration*interval
            var target=$(window).scrollTop();
            var duration=this.duration;
            var interval=30;
            this.step=target/duration*interval;
            clearInterval(this.timer);
            this.timer=setInterval(()=>{
                this.toTop();
            },interval)
        })
    }
    toTop(){
        //每次求出最新的距离；
        var curTop=$(window).scrollTop();
        //在最新的距离上-=step；
        curTop-=this.step;
        //停止运动的条件
        if(curTop<=0){
            $(window).scrollTop(0);
            clearInterval(this.timer);
            $(window).on('scroll',this.mingzi=()=>{
                this.showOrHide();
            })
            return;
        }
        //设置最新距离
        $('body').scrollTop(curTop);
    }
    scrollEvent(){
        /*$(window).scroll(()=>{
            this.showOrHide();
        })*/
        //用on的目的，是为了能够解除事件绑定；
        $(window).on('scroll',this.mingzi=()=>{
            this.showOrHide();
        })
    }
    showOrHide(){
        //判断卷去的高度>一屏，按钮显示，否则隐藏；
        if($(window).scrollTop()>$(window).height()){
            this.btn.show();
        }else{
            this.btn.hide();
        }
    }
}













