/**
 * Created by zhanglei on 2017/4/12.
 */
(function(){
    var ymyEffect= {
        Linear: function (t, b, c, d) {
            return c / d * t + b;
        }
    };
    function animate(ele,target,duration){
        //一开始为公式的参数做准备
        var begin={},change={};
        for(var attr in target){
            //利用属性名，求出对应属性的初始值
            begin[attr]=utils.getCss(ele,attr);
            change[attr]=target[attr]-begin[attr];
        }
        var duration=duration||2000;
        var time=0;
        var timer=setInterval(function(){
            //让时间不断的累加；
            time+=10;
            //时间累加的边界限制
            if(time>=duration){
                //直接等于目标值
                utils.css(ele,target);
                clearInterval(timer);
                return;
            }
            //每次求出最新的位置
            for(var attr in change){
                //分别求出每个属性的最新位置；
                var curPos=ymyEffect.Linear(time,begin[attr],change[attr],duration);
                if(typeof curPos === 'string'){
                    curPos=Number(curPos.slice(0,4))
                }
                console.log(curPos)
                //分别设置最新位置
                utils.css(ele,attr,curPos);
            }

        },10);

    }

    window.animate=animate;
})();