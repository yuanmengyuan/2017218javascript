/**
 * Created by zhanglei on 2017/5/2.
 */
function json2url(json) {
    //new Date().getTime()
    json.t=Math.random();//避免缓存
    var ary=[];
    for(var attr in json){
        ary.push(attr+'='+json[attr]);//key=value&key=value
    }
    return ary.join('&');

}
function jsonParse(jsonStr) {
    return 'JSON' in window? JSON.parse(jsonStr) : eval('('+jsonStr+')');
}
function ajax(opt){//params json  opt
    opt=opt||{};
    if(!opt.url) return;
    //设置默认值；
    var data=opt.data||{};
    var type=opt.type||'get';
    var jsonp=opt.jsonp||'callback';
    var timeout=opt.timeout||3000;
    var timer=null;
    //先封装ajax； 四步
    //1:创建一个xml对象
    if(window.XMLHttpRequest){
        var xml=new XMLHttpRequest();
    }else{
        var xml=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2:打开地址，3：发送请求
    switch(type.toLowerCase()){
        case 'get':
            //前端传给后台的参数，放在地址栏中；
            xml.open('get',opt.url+'?'+json2url(data),true);
            xml.send(null);
            break;
        case 'post':
            xml.open('post',opt.url,true);
            xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xml.send(json2url(data));//前端传给后台的参数，放在请求体中
            break;
        case 'jsonp':
            //1:创建一个有名字的全局函数
            var fnName='jsonp_'+Math.random();
            fnName=fnName.replace('.','');
            window[fnName]=function (data) {
                //3:通过参数接收请求成功的数据
                opt.success && opt.success(data);
                //为了性能优化，干掉没必要的对象(卸磨杀驴)
                document.body.removeChild(oS);
            };
            data[jsonp]=fnName;//现在的参数，还是对象；
            //2:通过script请求调用全局函数
            var oS=document.createElement('script');
            oS.src=opt.url+'?'+json2url(data);
            document.body.appendChild(oS);
            break;
    }
    //4:响应请求；
    opt.fnLoading && opt.fnLoading();
    xml.onreadystatechange=function () {
        if(xml.readyState===4){
            opt.complete && opt.complete();
            clearTimeout(timer);
            if(/^2\d{2}$/.test(xml.status)){//成功
                if(opt.dataType==='json'){
                    opt.success && opt.success(jsonParse(xml.responseText));
                }else{
                    opt.success && opt.success(xml.responseText);
                }
            }else{//失败
                opt.error && opt.error(xml.status)

            }
        }
    };
    if(type==='jsonp') return;
    //5:用户网速太差的处理
    timer=setTimeout(function () {
        alert('哥们，网速不行嘛😒')
        xml.onreadystatechange=null;
    },timeout)


}