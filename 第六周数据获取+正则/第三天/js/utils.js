/**
 * Created by zhanglei on 2017/4/1.
 */
var utils=(function(){
    return {
        //类数组转数组
        makeArray:function(arg){
            var ary=[];
            try{
                ary=Array.prototype.slice.call(arg);
            }catch(e){
                for(var i=0; i<arg.length; i++){
                    ary[ary.length]=arg[i];
                }
            }
            return ary;
        },
        //把JSON格式的字符串转成JSON格式的对象
        jsonParse:function(strJson){
            return 'JSON' in window?JSON.parse(strJson) : eval('('+strJson+')');
        }
    }
})();