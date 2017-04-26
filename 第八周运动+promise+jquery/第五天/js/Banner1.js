/**
 * Created by zhanglei on 2017/4/16.
 */
//先创建一个Banner类；
class Banner{
    constructor(){
        //以前的全局变量，在这里都是私有属性
        this.wrap=$('.wrap');
        this.boxInner=this.wrap.find('.boxInner');
        this.ul=this.wrap.find('ul');
        this.aImg=null;
        this.aLi=null;
        this.left=this.wrap.find('.left');
        this.right=this.wrap.find('.right');
        this.data=null;
        this.timer=null;
        this.n=0;
        this.init();
    }
    init(){
        //所有逻辑思维的"调用"；
        //获取数据
        this.getData();
        //绑定数据
        this.bind();
        //延迟加载
        setTimeout(()=>{
            this.lazyImg();
        },500);
        //图片自动轮播
        clearInterval(this.timer);
        this.timer=setInterval(()=>{
            this.autoMove();
        },2000);
        //焦点自动轮播-->已经被调用了，不用操心了；
        //移入停止，移出继续
        this.overout();
        //点击焦点手动切换
        this.handleChange();
        //点击左右按钮手动切换
        this.leftRight();
    }
    getData(){
        $.ajax({
            type:'get',
            url:'json/data.txt?'+Math.random(),
            async:false,
            dataType:'json',
            success:(val)=>{
                this.data=val;
            }
        })
    }
    bind(){
        var str="";
        var strLi="";
        $.each(this.data,function(index,item){
            //字符串拼接
            str+=`<img src="" realImg="${item.imgSrc}" alt=""/>`;
            strLi+=index==0?'<li class="active"></li>':'<li></li>';
        });
        str+=`<img src="" realImg="${this.data[0].imgSrc}" alt=""/>`;
        this.boxInner.html(str);
        this.ul.html(strLi);
        this.aImg=this.wrap.find('img');
        this.aLi=this.wrap.find('li');
        this.boxInner.css('width',this.aImg.length*1000)
    }
    lazyImg(){
        $.each(this.aImg,(index,item)=>{
            var tmpImg=new Image;
            tmpImg.src=$(item).attr('realImg');
            tmpImg.onload=function(){
                item.src=this.src;//这个this不用变，因我们要的就是tmpImg；
            }
        })
    }
    autoMove(){
        if(this.n==this.aImg.length-1){
            this.n=0;
            this.boxInner.css('left',0);
        }
        this.n++;
        this.boxInner.animate({left:-this.n*1000});
        //焦点也跟n有关，所以，焦点的调用得在这里；
        this.bannerTip();
    }
    bannerTip(){
        this.aLi.eq(this.n%this.aLi.length).addClass('active').siblings().removeClass('active');
    }
    overout(){
        this.wrap.mouseover(()=>{
            this.left.show();
            this.right.show();
            clearInterval(this.timer);
        }).mouseout(()=>{
            this.left.hide();
            this.right.hide();
            clearInterval(this.timer);
            this.timer=setInterval(()=>{
                this.autoMove();
            },2000)
        })
    }
    handleChange(){
        //认真思考
        this.aLi.click((ev)=>{
            //ev.target:就指的是当前被点击的元素，而且这个元素是原生的；
            this.n=$(ev.target).index();
            this.boxInner.animate({left:-this.n*1000});
            //焦点也跟n有关，所以，焦点的调用得在这里；
            this.bannerTip();
        })
    }
    leftRight(){
        this.right.click(()=>{
            this.autoMove();
        })
        this.left.click(()=>{
            if(this.n<=0){
                this.n=this.aLi.length;
                console.log(this.n)
                this.boxInner.css('left',-this.n*1000);
            }
            this.n--;
            this.boxInner.animate({left:-this.n*1000});
            //焦点也跟n有关，所以，焦点的调用得在这里；
            this.bannerTip();

        })
    }
}














