/**
 * Created by zhanglei on 2017/3/29.
 */
var utils=(function(){
    return {
        /**
         * makeArray 类数组转数组
         * @param arg
         * @returns {Array}
         */
        makeArray:function(arg){
            var ary=[];
            try{
                ary=Array.prototype.slice.call(arg);
            }catch(e){
                for(var i=0;i<arg.length; i++){
                    ary.push(arg[i]);
                }
            }
            return ary;
        },
        /**
         * jsonParse:把JSON格式的字符串，转成JSON格式的对象
         * @param strJson
         * @returns {Object}
         */
        jsonParse:function(strJson){
            return 'JSON' in window ? JSON.parse(strJson): eval('('+strJson+')');
        }
    }
})();