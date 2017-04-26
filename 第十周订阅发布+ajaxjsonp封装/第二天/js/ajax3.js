/**
 * Created by zhanglei on 2017/4/26.
 */
function json2url(json){
    //避免缓存
    json.t=Math.random();
    var ary=[];
    //遍历对象
    for(var attr in json){
        ary.push(attr+'='+json[attr]);
    }
    return ary.join('&');
}
function jsonParse(jsonStr){
    return 'JSON' in window? JSON.parse(jsonStr) : eval('('+jsonStr+')');
}
function ajax(json){
    json=json||{};
    //如果没有请求地址，后面的语句都不执行
    if(!json.url) return;
    var data=json.data||{};
    var type=json.type||'get';
    var jsonp=json.jsonp||'callback';
    var timeout=json.timeout||3000;
    var timer=null;

    //1：创建一个xml对象
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2:打开地址 3：发送请求
    switch(type.toLowerCase()){
        case 'get':
            xml.open('get',json.url+'?'+json2url(data),true);
            xml.send(null);
            break;
        case 'post':
            xml.open('post',json.url,true);
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xml.send(json2url(data));
            break;
        case 'jsonp':
            //创建一个有名字的全局函数
            var  fnName='jsonp_'+Math.random();// 这里有坑：名字中不能有点
            fnName=fnName.replace('.','');
            //在全局函数中，接收传进来的实参；
            window[fnName]=function(val){
                json.success && json.success(val);
                //卸磨杀驴，干掉script
                document.body.removeChild(oS);
            };
            //要把cb=jsonp_1228498798放到参数的最后面
            data[jsonp]=fnName;//{wd:renmin,cb:jsonp_128289000}
            //创建一个script，让script可以对本页面发起jsonp的请求；
            var oS=document.createElement('script');
            oS.src=json.url+'?'+json2url(data);
            document.body.appendChild(oS);
            break;
    }
    json.fnLoading && json.fnLoading();
    //4:响应请求
    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            json.complete && json.complete();
            clearTimeout(timer);
            //判断后台响应成功还是失败；
            if(/^2\d{2}$/.test(xml.status)){//响应成功
                if(json.dataType==='json'){
                    json.success &&  json.success(jsonParse(xml.responseText));
                }else{
                    json.success &&  json.success(xml.responseText);
                }
            }else{//响应失败
                json.error &&  json.error(xml.status);
            }
        }
    };
    if(type==='jsonp') return;
    //等待超时
    timer=setTimeout(function(){
        alert('您的网络不行啊！！！！😒');
        xml.onreadystatechange=null;
    },timeout)
}