/**
 * Created by zhanglei on 2017/3/30.
 */
var utils=(function(){
    return{
        makeArray:function(arg){
            var ary=[];
            try{
                ary=Array.prototype.slice.call(arg);
            }catch(e){
                for(var i=0; i<arg.length; i++){
                    ary.push(arg[i])
                }
            }
            return ary;
        },
        jsonParse:function(strjson){
            return 'JSON' in window? JSON.parse(strjson) : eval('('+strjson+')');
        }
    }
})();