/**
 * Created by zhanglei on 2017/4/15.
 */
//静态方法的添加；直接给类添加的
$.extend({
    tab:function(ele){//#div
        var $aBtn=$(ele).find('button');//拿到所有的按钮
        var $aDiv=$(ele).find('div');//拿到所有的内容框
        $aBtn.click(function(){
            $(this).addClass('active').siblings('button').removeClass('active');
            $aDiv.eq($(this).index()).addClass('show').siblings().removeClass('show');
        })
    }
})