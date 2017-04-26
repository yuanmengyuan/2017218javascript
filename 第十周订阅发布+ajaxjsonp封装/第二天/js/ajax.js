/**
 * Created by zhanglei on 2017/4/26.
 */
function json2url(json){
    json.t=Math.random();//避免缓存
    //把 key=value分别放入数组
    var ary=[];
    for(var attr in json){
        ary.push(attr+'='+json[attr]);
    }
    //数组.join('&')
    return ary.join('&');//数组转字符串用join
}
function jsonParse(jsonStr){
    return 'JSON' in window?JSON.parse(jsonStr):eval('('+jsonStr+')');
}
function ajax(json){
    json=json||{};
    if(!json.url) return;//如果没有请求地址，直接阻断程序执行；
    //以下都是有默认值的；
    var data=json.data||{};//请求数据的参数
    var type=json.type||'get';//请求类型
    var jsonp=json.jsonp||'callback';//jsonp请求的属性名
    var timeout=json.timeout||3000;
    var url=json.url;
    var timer=null;
    //1：创建一个xml对象
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2：打开地址，3：发送请求
    switch (type.toLowerCase()){
        case 'get':
            //get中请求数据的参数，放在地址栏，即url?后面
            xml.open('get',url+'?'+json2url(data),true);
            xml.send(null);//请求体中没有任何数据
            break;
        case 'post':
            xml.open('post',url,true);
            //设置请求头
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xml.send(json2url(data));//post请求，请求数据的参数，放在请求体里面；
            break;
        case 'jsonp':
            //一会写jsonp
            break;
    }
    json.fnLoading && json.fnLoading();//等待请求的过程
    //4.相应请求
    xml.onreadystatechange=function(){
        if(xml.readyState===4){//准备完成，请求完成
            json.complete && json.complete();//请求完成
            clearTimeout(timer);//关闭定时器
            if(/^2\d{2}$/.test(xml.status)){//响应请求2xxx
                if(json.dataType==='json'){
                    json.success && json.success(jsonParse(xml.responseText))
                }else{
                    json.success && json.success(xml.responseText)
                }
            }else{//请求失败，status：404 500 3xx
                json.error && json.error(xml.status)
            }
        }
    };
    //网速的判断
    timer=setTimeout(function(){
        alert('哥们，网速是在太low了！！！！！');
        xml.onreadystatechange=null;
    },timeout);

}