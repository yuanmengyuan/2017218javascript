/**
 * Created by zhanglei on 2017/3/30.
 */
//获取元素 1.获取数据 2.绑定数据 3.隔行换色 4.表格排序
//获取元素
var oTab=document.getElementById('tab');
var tHead=oTab.tHead;
var tBody=oTab.tBodies[0];
var aCells=tHead.rows[0].cells;//获取到表头第一行中的所有的列；
var aRows=tBody.rows;//获取表体中所有的行；
var data=null;
//1.获取数据
getData();
function getData(){
    var xml=new XMLHttpRequest();
    xml.open('GET','data2.txt');
    xml.send(null);
    xml.onreadystatechange=function(){
        if(xml.readyState==4 && /^2\d{2}$/.test(xml.status)){
            data=utils.jsonParse(xml.responseText);
            bind();
        }
    }
}
//2.绑定数据
/*function bind(){
    var str='';
    for(var i=0; i<data.length; i++){
        var cur=data[i];
        cur.sex=cur.sex==0?'男':'女';
        str+='<tr>\
            <td>'+cur.name+'</td>\
            <td>'+cur.age+'</td>\
            <td>'+cur.level+'</td>\
            <td>'+cur.sex+'</td>\
            </tr>'
    }
    tBody.innerHTML=str;
}*/
function bind(){
    var frg=document.createDocumentFragment();
    for(var i=0; i<data.length; i++){
        var cur=data[i];
        var tr=document.createElement('tr');
        for(var attr in cur){
            var td=document.createElement('td');
            if(attr=='sex'){
                cur[attr]=cur[attr]==0?'男':'女';
            }
            td.innerHTML=cur[attr];
            tr.appendChild(td);
        }
        frg.appendChild(tr);
    }
    tBody.appendChild(frg);
    frg=null;
    changeColor();
}
//3.隔行换色
function changeColor(){
    for(var i=0; i<aRows.length; i++){
        aRows[i].className='bg'+i%2;
    }
}
//4.表格排序
function sort(n){
    for(var i=0; i<aCells.length;i++){
        aCells[i].flg=i==n?aCells[i].flg*-1:-1;
       /* if(n==i){
            aCells[i].flg*=-1;
        }else{
            aCells[i].flg=-1;
        }*/
    }
    //类数组转数组
    var ary=utils.makeArray(aRows);
    //sort排序
    ary.sort(function(a,b){
        a= a.cells[n].innerHTML;
        b= b.cells[n].innerHTML;
        //汉字的比较
        if(isNaN(a) || isNaN(b)){
            return a.localeCompare(b)*aCells[n].flg;
        }
        return (a-b)*aCells[n].flg;//1 -1 1 -1
    })
    //重新插入页面
    var frg=document.createDocumentFragment();
    for(var i=0; i<ary.length; i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg=null;
    changeColor();
}
for(var i=0; i<aCells.length; i++){
    if(aCells[i].className=='cursor'){
        aCells[i].flg=-1;
        aCells[i].index=i;
        aCells[i].onclick=function(){
            sort(this.index)
        }
    }
}












