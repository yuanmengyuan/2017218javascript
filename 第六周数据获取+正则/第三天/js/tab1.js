/**
 * Created by zhanglei on 2017/4/1.
 */
//获取元素 1。获取数据 2。绑定数据 3。隔行换色 4。表格排序
//获取元素
var oTab=document.getElementById('tab');
var tHead=oTab.tHead;//获取表头；表头是唯一的；
var tBody=oTab.tBodies[0];
var aCells=tHead.rows[0].cells;
var aRows=tBody.rows;
var data=null;
//1。获取数据
getData();
function getData(){
    //1.创建一个xml对象
    var xml=new XMLHttpRequest();
    //2.打开地址
    xml.open('GET','json/data.txt.txt')
    //3.发送请求
    xml.send(null);
    //4.响应请求
    xml.onreadystatechange=function(){
        if(xml.readyState==4 && /^2\d{2}$/.test(xml.status)){
            data=utils.jsonParse(xml.responseText);
            bind(data);
        }
    }
}
//2。绑定数据
/*function bind(){
    var str='';
    for(var i=0; i<data.txt.length; i++){
        data.txt[i].sex=data.txt[i].sex==0?'男':'女';
        str+='<tr>\
            <td>'+data.txt[i].name+'</td>\
            <td>'+data.txt[i].age+'</td>\
            <td>'+data.txt[i].level+'</td>\
            <td>'+data.txt[i].sex+'</td>\
            </tr>'
    }
    tBody.innerHTML=str;
}*/
//动态绑定
function bind(){
    var frg=document.createDocumentFragment();
    for(var i=0; i<data.length; i++){
        var cur=data[i];
        //循环一次创建一个tr
        var oTr=document.createElement('tr');
        for(var attr in cur){
            //遍历一次创建一个td;
            var td=document.createElement('td');
            if(attr=='sex'){
                cur[attr]=cur[attr]==0?'男':'女';
            }
            td.innerHTML=cur[attr];
            oTr.appendChild(td)
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg=null;
    changeColor();
}
//3.隔行换色
function changeColor(){
    //%的思想，有几种情况就%几
    for(var i=0; i<aRows.length; i++){
        aRows[i].className='bg'+i%2;
    }
}
//4.表格排序；
function sort(n){
    //点击哪一列，就让哪一列*=-1；其他的列都恢复成-1的初始值；
    for(var i=0; i<aCells.length; i++){
        if(n==i){
            aCells[i].flg*=-1;
        }else{
            aCells[i].flg=-1;
        }
    }
    //1.类数组转数组
    var ary=utils.makeArray(aRows);
    //2.sort排序
    ary.sort(function(a,b){
        a= a.cells[n].innerHTML;//求出当前行中索引为1的这一列的内容； 内容是数据类型的字符串；
        b= b.cells[n].innerHTML;
        if(isNaN(a) || isNaN(b)){
            return a.localeCompare(b)*aCells[n].flg;
        }
        return (a-b)*aCells[n].flg;//1 -1 1 -1 1 -1
    })
    //3.重新插入页面：数组中现在放的都是每一个行元素；
    var frg=document.createDocumentFragment();
    for(var i=0; i<ary.length; i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg=null;//释放文档碎片对象，目的为了性能优化；
    changeColor();
}
for(var i=0; i<aCells.length; i++){
    if(aCells[i].className==='cursor'){
        aCells[i].index=i;
        aCells[i].flg=-1;
        aCells[i].onclick=function(){
            sort(this.index);
        }
    }
}
/*
aCells[1].index=1;
aCells[1].flg=-1;
aCells[1].onclick=function(){
    sort(this.index);
}
*/





























