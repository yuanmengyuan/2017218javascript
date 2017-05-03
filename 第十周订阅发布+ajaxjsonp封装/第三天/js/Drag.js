class Drag{
    constructor(opt){
        //构造函数中，都是私有的属性和方法
        opt=opt||{};
        if(!opt.el) return;
        this.el=opt.el;
        this.x=this.y=this.l=this.t=null;
        this.DOWN=processThis(this.down,this);
        this.MOVE=this.UP=null;
        this.xtimer=this.ytimer=null;
        on(this.el,'mousedown',this.DOWN);
    }
    down(e){
        //存初始位置
        this.x=e.clientX;
        this.y=e.clientY;
        this.l=this.el.offsetLeft;
        this.t=this.el.offsetTop;
        this.MOVE=processThis(this.move,this);
        this.UP=processThis(this.up,this);
        //分浏览器来进行事件调用-背景背选中的问题和失去焦点的问题；
        if(this.el.setCapture){
            this.el.setCapture();
            on(this.el,'mousemove',this.MOVE);
            on(this.el,'mouseup',this.UP);
        }else{
            on(document,'mousemove',this.MOVE);
            on(document,'mouseup',this.UP);
            //阻止默认事件
            e.preventDefault();
        }
        //跟拖拽无关的：按下的时候，停止定时器
        clearTimeout(this.xtimer);
        clearTimeout(this.ytimer);
    }
    move(e){
        var l=e.clientX-this.x+this.l;
        var t=e.clientY-this.y+this.t;
        var maxL=(document.documentElement.clientWidth||document.body.clientWidth)-this.el.offsetWidth;
        var maxT=(document.documentElement.clientHeight||document.body.clientHeight)-this.el.offsetHeight;
        if(l<=0){
            l=0;
        }else if(l>=maxL){
            l=maxL;
        }
        if(t<=0){
            t=0;
        }else if(t>=maxT){
            t=maxT;
        }

        this.el.style.left=l+'px';
        this.el.style.top=t+'px';

        //跟拖拽无关的：在move的时候，求横向的速度；
        if(!this.prevX){
            this.prevX=e.clientX;
        }else{
            this.speedX=e.clientX-this.prevX;
            this.prevX=e.clientX;//更新上一次的坐标
        }
    }
    up(){
        //IE释放焦点捕获
        if(this.el.releaseCapture){
            this.el.releaseCapture();
            off(this.el,'mousemove',this.MOVE);
            off(this.el,'mouseup',this.UP);
        }else{
            off(document,'mousemove',this.MOVE);
            off(document,'mouseup',this.UP);
        }
        //跟拖拽无关的：抬起后开始运动
        this.dropX();
        this.dropY();
    }
    dropX(){
        clearTimeout(this.xtimer);
        this.speedX*=0.93;//只要乘小于1的，都可以；
        var l=this.el.offsetLeft+this.speedX;
        var maxL=(document.documentElement.clientWidth||document.body.clientWidth)-this.el.offsetWidth;
        if(l<0){
            l=0;
            this.speedX*=-1;
        }else if(l>=maxL){
            l=maxL;
            this.speedX*=-1;
        }
        this.el.style.left=l+'px';
        if(Math.abs(this.speedX)>=0.5){
            this.xtimer=setTimeout(processThis(this.dropX,this),30);
        }

    }
    dropY(){
        clearTimeout(this.ytimer);
        //给纵向速度
        if(!this.speedY){
            this.speedY=9.8;
        }else{
            this.speedY+=9.8;
        }
        this.speedY*=0.93;
        var t=this.el.offsetTop+this.speedY;
        var maxT=(document.documentElement.clientHeight||document.body.clientHeight)-this.el.offsetHeight;
        //做边界判断
        if(t>=maxT){//落地
            t=maxT;
            this.speedY*=-1;
            this.tmp++;
        }else{//先走的是这里；
            this.tmp=0;
        }
        this.el.style.top=t+'px';
        if(this.tmp<2){
            this.ytimer=setTimeout(processThis(this.dropY,this),30);
        }
        console.log(this.speedY)
    }
}












