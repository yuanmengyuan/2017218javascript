//ajax({url:xx,data:xxx,type:xxx,dataType:xxx,jsonp:'',fnLoading:fn,fnComplete:fn,success:fn,error:fn,timeout:2000})
function json2url(json){
    json.t=Math.random();
    var ary=[];
    for(var attr in json){
        ary.push(attr+'='+json[attr])
    }
    return ary.join('&')
}
function ajax(json){
    json=json||{};
    if(!json.url) return;
    json.data=json.data||{};
    json.type=json.type||'get';
    json.jsonp=json.jsonp||'cb';
    json.timeout=json.timeout||3000;

    var timer=null;//定时器
    //创建xml对象
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //打开地址和发送请求
    switch(json.type.toLowerCase()){
        case 'get':
            //前端数据通过地址栏传给后台
            xml.open('get',json.url+'?'+json2url(json.data),true);
            xml.send();
            break;
        case 'post':
            xml.open('post',json.url,true);
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xml.send(json2url(json.data));//把数据放在请求体中发送给后台；
            break;
        case 'jsonp':
            var fnName='jsonp_'+Math.random();
            //创建一个有名的全局函数;全局函数名也作为数据传送给后台，但是以get的形式；
            fnName=fnName.replace('.','');
            window[fnName]=function(data){
                //系统调用全局函数后，传进来的数据
                json.success&&json.success(data);
                oHead.removeChild(oS);//数据拿到后，删除script;
            };
            json.data[json.jsonp]=fnName;
            //通过script调用这个全局函数
            var oS=document.createElement('script');
            var oHead=document.getElementsByTagName('head')[0];
            oS.src=json.url+'?'+json2url(json.data);
            oHead.appendChild(oS);
            break;

    }
    json.fnLoading&& json.fnLoading();
    //相应请求:这里属于异步，有等待的过程
    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            //请求完成
            json.fnComplete&&json.fnComplete();
            if(/^2\d{2}$/.test(xml.status)){
                //说明请求成功
                if(json.dataType==='json'){
                    success && success(jsonParse(xml.responseText))
                }else{
                    success && success(xml.responseText)
                }
            }else{
                //说明请求失败
                json.error && json.error(xml.status);
            }
        }
    };
    //如果超时的处理；注意，jsonp没有超时处理；因为他是函数的立即调用；
    if(json.type=='jsonp') return;
    timer=setTimeout(function(){
        alert('您的网速不给力')
        xml.onreadystatechange=null;
    },json.timeout)
}