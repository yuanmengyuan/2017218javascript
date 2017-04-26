/**
 * Created by zhanglei on 2017/4/26.
 */
function json2url(json){
    //避免缓存
    json.t=Math.random();
    var ary=[];
    for(var attr in json){
        ary.push(attr+'='+json[attr]);
    }
    return ary.join('&');
}
function jsonParse(jsonStr){
    return 'JSON' in window? JSON.parse(jsonStr):eval('('+jsonStr+')');
}
function ajax(json){
    json=json||{};
    //如果没有请求地址，什么操作都不做
    if(!json.url) return;
    //默认值的设置
    var data=json.data||{};
    var type=json.type||'get';
    var jsonp=json.jsonp||'callback';
    var timeout=json.timeout||3000;
    var timer=null;
    //ajax封装的四部曲
    //1:创建xml对象
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2:打开地址 三：发送请求
    switch (type.toLowerCase()){
        case 'get':
            //请求参数应该在地址栏
            xml.open('get',json.url+'?'+json2url(json.data),true);
            xml.send(null);
            break;
        case 'post':
            //请求参数在请求体
            xml.open('post',json.url,true);
            //设置请求头
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            //设置请求体
            xml.send(json2url(json.data));
            break;
        case 'jsonp':
            //第一步：创建一个有名字的全局函数
            var fnName='jsonp_'+Math.random();
            fnName=fnName.replace('.','');
            window[fnName]=function(val){
                //接收数据的
                json.success && json.success(val);
                oBody.removeChild(oS);
            };
            json.data[jsonp]=fnName;
            //通过script发送请求；script必须必须插入页面的底部；
            var oS=document.createElement('script');
            var oBody=document.getElementsByTagName('body')[0];
            oS.src=json.url+'?'+json2url(json.data);
            oBody.appendChild(oS);
            break;
    }
    //告诉用户我正在努力的加载；
    json.fnLoading && json.fnLoading();
    //4：相应请求
    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            json.complete &&  json.complete();//请求成功
            clearTimeout(timer);
            //加载成功或失败
            if(/^2\d{2}/.test(xml.status)){//成功
                if(json.dataType==='json'){
                    json.success && json.success(jsonParse(xml.responseText))
                }else{
                    json.success && json.success(xml.responseText);
                }
            }else{//失败
                json.error && json.error(xml.status);
            }
        }
    };
    if(json.type==='jsonp') return;
    //网速的判断
    timer=setTimeout(function(){
        alert('哥们，网速不行嘛！！！')
        xml.onreadystatechange=null;
    },timeout)


}













