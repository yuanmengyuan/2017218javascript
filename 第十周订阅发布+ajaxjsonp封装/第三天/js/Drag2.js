//订阅发布，针对的是自定义的行为；
//this.on绑定的是自定义的行为； on绑定的是系统行为；
class EventEmitter{
    constructor(){}
    //绑定事件，提前订阅
    on(type,fn){
        if(!this[type]){
            this[type]=[];
        }
        var a=this[type];
        for(var i=0; i<a.length; i++){
            if(a[i]==fn) return;
        }
        a.push(fn);
        return this;//实现链式操作；
    }
    //发射器，发布；
    fire(type,e){
        var a=this[type]||[];
        if(a.length){
            for(var i=0; i<a.length; i++){
                if(typeof a[i]==='function'){
                    a[i].call(this,e);
                }
            }
        }
    }
}
class Drag extends EventEmitter{
    constructor(opt){
        super();
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
        //监听者
        this.fire('myDown',e);
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
        //监听者:实际是留给会技术的用户，让用户来开发的；
        this.fire('myMove',e);
    }
    up(e){
        //IE释放焦点捕获
        if(this.el.releaseCapture){
            this.el.releaseCapture();
            off(this.el,'mousemove',this.MOVE);
            off(this.el,'mouseup',this.UP);
        }else{
            off(document,'mousemove',this.MOVE);
            off(document,'mouseup',this.UP);
        }
        //监听者
        this.fire('myUp',e);
    }
}












