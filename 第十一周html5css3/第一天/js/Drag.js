/**
 * Created by zhanglei on 2017/5/2.
 */
function EventEmitter(){}
//把要绑定的方法，都存到数组中去；
EventEmitter.prototype.on=function(type,fn) {
    if(!this[type]){
        this[type]=[];
    }
    var a=this[type];
    for(var i=0; i<a.length; i++){
        if(a[i]===fn) return;
    }
    a.push(fn);
    return this;
};
//拿到数组，顺序调用
EventEmitter.prototype.fire=function(type,e) {
    var a=this[type]||[];
    if(a.length){
        for(var i=0; i<a.length; i++){
            if(typeof a[i]==='function'){
                a[i].call(this,e)
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
};
//拿到数组，匹配到了赋值为null
EventEmitter.prototype.off=function(el,type,fn) {
    var a=this[type];
    if(a.length){
        for(var i=0; i<a.length; i++){
            if(a[i]===fn){
                a[i]=null;
                break;
            }
        }
    }
};
function Drag(opt){
    this.el=opt.el;
    this.x=this.y=this.l=this.t=null;
    this.MOVE=this.UP=null;
    on(this.el,'mousedown',processThis(this.down,this))

}
Drag.prototype=new EventEmitter;
Drag.prototype.down=function(e) {
    this.x=e.clientX;
    this.y=e.clientY;
    this.l=this.el.offsetLeft;
    this.t=this.el.offsetTop;
    this.MOVE=processThis(this.move,this);
    this.UP=processThis(this.up,this);
    //move和up分浏览器；
    if(this.el.setCapture){//IE
        this.el.setCapture();
        on(this.el,'mousemove',this.MOVE);
        on(this.el,'mouseup',this.UP);
    }else{//标准浏览器
        on(document,'mousemove',this.MOVE);
        on(document,'mouseup',this.UP);
        //阻止默认事件
        e.preventDefault();
    }
    this.fire('myDown',e)
};
Drag.prototype.move=function (e) {
    this.el.style.left=e.clientX-this.x+this.l+'px';
    this.el.style.top=e.clientY-this.y+this.t+'px';
    this.fire('myMove',e)
};
Drag.prototype.up=function (e) {
    if(this.el.releaseCapture){
        this.el.releaseCapture();
        off(this.el,'mousemove',this.MOVE);
        off(this.el,'mouseup',this.UP);
    }else{
        off(document,'mousemove',this.MOVE);
        off(document,'mouseup',this.UP);
    }
    this.fire('myUp',e)
};











