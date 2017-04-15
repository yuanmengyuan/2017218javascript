/**
 * Created by zhanglei on 2017/4/15.
 */
$.fn.extend({
    tab:function(){//#div
        //tab在原型上，所以，tab中的this指向实例；
        var $aBtn=this.find('button');//拿到所有的按钮
        var $aDiv=this.find('div');//拿到所有的内容框
        $aBtn.click(function(){
            $(this).addClass('active').siblings('button').removeClass('active');
            $aDiv.eq($(this).index()).addClass('show').siblings().removeClass('show');
        })
    }
});