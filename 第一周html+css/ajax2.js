/**
 * Created by zhanglei on 2017/4/25.
 */
function json2url(data){
    var ary=[];
    for(var attr in data){
        ary.push(attr+'='+data[attr]);
    }
    return ary.join('&');
}
function ajax(json){
    json=json||{};
    if(!json.url) return;
    var url=json.url;//请求地址
    var data=json.data||{};//请求数据
    var type=json.type||'get';//请求方式
    var jsonp=json.jsonp||'cb';//jsonp的属性名
    var timeout=json.timeout||3000;
    //创建xml对象；
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('MicroSoft.XMLHTTP');
    }
    //打开地址和发送请求；
    switch (type.toLowerCase()){
        case 'get':
            xml.open('get',url+'?'+json2url(data),false);
            xml.send();//数据通过上面发送给后台
            break;
        case 'post':
            xml.open('post',url,false);
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xml.send(json2url(data))//数据通过下面发送给后台;
            break;
        case 'jsonp':
            var fnName='jsonp_'+Math.random();
            fnName=fnName.replace('.','');
            window[fnName]=function(data){
                //准备接收系统调用传来的数据
                json.success && json.success(data);
                oHead.removeChild(oS);
            };
            data[jsonp]=fnName;

            var oHead=document.getElementsByTagName('head')[0];
            var oS=document.createElement('script');
            oS.src=url+'?'+json2url(data);
            oHead.appendChild(oS);
            break;
    }
    //加载
    json.fnLoading && json.fnLoading();
    //相应请求
    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            json.complete && json.complete();
            clearTimeout(timer);
            if(/^2\d{2}/.test(xml.status)){
                if(json.dataType=='json'){
                    json.success&&json.success(jsonParse(xml.responseText));
                }else{
                    json.success&&json.success(xml.responseText);
                }
            }else{
                json.error&&json.error(xml.status);
            }
        }
    };
    if(type=='jsonp') return;
    var timer=setTimeout(function(){
        alert('亲，您的网速太慢了');
        xml.onreadystatechange=null;
    },timeout)
}