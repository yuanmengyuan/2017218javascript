/**
 * Created by zhanglei on 2017/4/19.
 */
class Banner{
    constructor(opt){
        opt=opt||{};
        this.ele=opt.ele;
        this.boxInner=utils.getByClass('boxInner',this.ele)[0];
        this.aImg=this.ele.getElementsByTagName('img');
        this.ul=utils.getChildren(this.ele,'ul')[0];
        this.aLi=this.ele.getElementsByTagName('li');
        this.left=utils.getByClass('left')[0];
        this.right=utils.getByClass('right')[0];
        this.data=this.timer=this.n=null;

        this.init();
    }
    init(){
        var _this=this;
        //获取数据
        this.getData();
        //绑定该数据
        this.bind();
        //图片懒加载
        this.lazyImg();
        //图片自动轮播
        this.timer=setInterval(function(){
            _this.autoMove();
        },2000);
    }
    getData(){
        var _this=this;
        var xml=new XMLHttpRequest();
        xml.open('get','json/data.txt.txt?'+Math.random(),false);
        xml.onreadystatechange=function(){
            if(xml.readyState==4 && /^2\d{2}$/.test(xml.status)){
                _this.data=utils.jsonParse(xml.responseText)
            }
        };
        xml.send();

    }
    bind(){
        var str="";
        var strLi="";
        for(var i=0; i<this.data.length; i++){
            str+=`<img src=""  realImg="${this.data[i].imgSrc}" alt=""/>`;
            strLi+=i==0?'<li class="active"></li>':'<li></li>';
        }
        this.boxInner.innerHTML=str;
        this.ul.innerHTML=strLi;
    }
    lazyImg(){
        var _this=this;
        for(var i=0; i<this.aImg.length; i++){
            (function(index){
                var tmpImg=new Image;
                tmpImg.src=_this.aImg[index].getAttribute('realImg');
                tmpImg.onload=function(){
                    _this.aImg[index].src=this.src;
                    tmpImg=null;
                    animate({
                        ele:_this.aImg[0],
                        target:{
                            opacity:1
                        },
                        duration:500
                    })
                }
            })(i);
        }
    }
    autoMove(){
        this.n++;
        this.n%=this.aImg.length;
        this.setBanner();
    }
    setBanner(){
        //哪个图片的索引等于this.n;就让哪张图片显示
        for(var i =0; i<this.aImg.length; i++){
            if(i==this.n){
                utils.css(this.aImg[i],'zIndex',1);
                animate({
                    ele:this.aImg[i],
                    target:{opacity:1},
                    callback:function(){
                        //这里只能用this。这个this是我们在animate中已经通过call改好的this-ele元素
                        var siblings=utils.siblings(this);
                        for(var i=0; i<siblings.length; i++){
                            utils.css(siblings[i],'opacity',0);
                        }
                    }
                })
            }else{
                utils.css(this.aImg[i],'zIndex',0);
            }
        }//该图片
        this.bannerTip();//该按钮
    }
    bannerTip(){
        console.log(this.aLi)
        //哪个按钮的索引等于n，就点亮哪个按钮，同时，灭掉其他按钮
        for(var i=0; i<this.aLi.length; i++){
            this.aLi[i].className=i==this.n?'active':null;
        }
    }
}
class HandleControl extends Banner{
    constructor(opt){
        super(opt)
        this.handleInit();
    }
    handleInit(){
        //移入停止，移出继续
        this.overout();
        //手动点击按钮进行切换
        this.handleChange();
        //点击左右按钮进行切换
        this.leftRight();
    }
    overout(){
        var _this=this;
        this.ele.onmouseover=function(){
            clearInterval(_this.timer);
            _this.left.style.display=_this.right.style.display='block';
        };
        this.ele.onmouseout=function(){
            _this.left.style.display=_this.right.style.display='none';
            _this.timer=setInterval(function(){
                _this.autoMove();
            },2000);
        }
    }
    handleChange(){
        var _this=this;
        //点击按钮进行改变，改变的是n;
        for(let i=0; i<this.aLi.length; i++){
            this.aLi[i].onclick=function(){
                _this.n=i;
                _this.setBanner();
            }
        }
    }
    leftRight(){
        var _this=this;
        _this.right.onclick=function(){
            _this.autoMove();
        };
        _this.left.onclick=function(){
            if(_this.n<=0){
                _this.n=_this.aImg.length;
            }
            _this.n--;
            _this.setBanner();
        }
    }
}











