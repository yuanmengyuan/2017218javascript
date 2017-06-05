/**
 * Created by zhanglei on 2017/5/17.
 */
$(window).on('resize',resize).trigger('resize');
function resize() {
    //1:rem的计算：不同设备下rem的计算
    var windowW=$(window).width(),
        windowH=$(window).height(),
        designW=640,
        htmlFont=windowW/designW*100;
    //当设计稿的宽度大于640的时候，按照640来显示，同时html:100px;
    if(windowW>designW){
        htmlFont=100;
        $('.musicBox').css({
            width:640,
            margin:'0 auto'
        });//让我们的产品左右居中；
    }
    $('html').css('fontSize',htmlFont);
    //2:计算歌词内容可以有的空间；  ?px/htmlFont=.8rem;
    var lrcHeight=windowH-$('header').height()-$('footer').height()-.8*htmlFont;
    $('main').css('height',lrcHeight);
}
//获取需要绑定的元素；
var $callback=$.Callbacks();
    $lrc=$('.lrc'),
    $current=$('.current'),
    $duration=$('.duration'),
    $bar=$('.bar'),
    data=[],
    $id=0;
//获取播放按钮的元素；
var audio=$('audio')[0],
    $btn=$('.btn'),
    $play=$('.play'),
    $pause=$('.pause');
//定时器；
var timer=null;
//5：绑定歌词；
var str='';
$callback.add(function (data) {
    console.log(data instanceof Array)
    $.each(data,function (index,item) {
        str+=`<p data-minute=${item.minute} data-second=${item.second}>${item.lrc}</p>`;
    });
    $lrc.html(str);
});
function  timeFormat(time) {
    var minute=Math.floor(time/60);
    var second=Math.floor(time%60);
    minute=minute<10?'0'+minute:''+minute;
    second=second<10?'0'+second:''+second;
    return minute+':'+second;
}
//6:点击按钮播放歌曲；
$callback.add(function () {
    audio.play();
    audio.addEventListener('canplay',function () {
        //需要拿到当前音频对象的总时间
        $duration.html(timeFormat(audio.duration));
    })
})
//7:点击按钮播放和暂停；
$callback.add(function () {
    //移动端点击用tap；PC用click；
    $btn.on('tap',function () {
        if(audio.paused){
            audio.play();
            $play.hide();
            $pause.show();
        }else{
            audio.pause();
            $play.show();
            $pause.hide();
        }
    })
});
//8:歌词对应播放和当前时间的计算；
$callback.add(function () {
    timer=setInterval(function () {
        //停止播放的判断；
        if(audio.currentTime>audio.duration){
            clearInterval(timer);
        }
        //进度条；
        $bar.css('width',audio.currentTime/audio.duration*100+'%');
        //计算当前时间和歌词匹配
        var time=timeFormat(audio.currentTime),
            minute=time.split(':')[0],
            second=time.split(':')[1],
            target=$lrc.children('p').filter(`[data-minute="${minute}"]`).filter(`[data-second="${second}"]`);
        //设置当前时间
        $current.html(time);
        target.addClass('active').siblings().removeClass('active');
        //什么时候开始网上运动的判断；
        var index=target.index();
        if(index>=2){
            $lrc.css('top',-.84*(index-2)+'rem');
        }
    },1000)
   /*audio.addEventListener('timeupdate',function () {
       $current.html(timeFormat(audio.currentTime))
   })*/
});


var musicRender=(function () {
    return {
        init:function () {
            //3：数据获取；
            $.ajax({
                url:'lyric.json',
                dataType:'json',
                type:'get',
                success:function (result) {
                    result=result.lyric||'';
                    if(result){
                        result=result.replace(/&#(\d{2});/g,function () {
                            var num=Number(arguments[1]),
                                val=arguments[0];
                            switch (num){
                                case 45:
                                    val='-';
                                    break;
                                case 32:
                                    val=' ';
                                    break;
                                case 40:
                                    val='(';
                                    break;
                                case 41:
                                    val=')'
                                    break;
                            }
                            return val;

                        });
                        //新建一个数组；这个数组中保存我们需要的值；
                        var reg=/\[(\d{2})&#58;(\d{2})&#46;(?:\d{2})\]([^&#\d]+)/g;
                        result.replace(reg,function () {
                            $id++;
                            data.push({
                                minute:arguments[1],
                                second:arguments[2],
                                lrc:arguments[3],
                                id:$id
                            })
                        })

                        //4：此时才拿到数据；传给Fire方法；
                        $callback.fire(data)
                    }
                }
            })
        }
    }
})();
musicRender.init();

