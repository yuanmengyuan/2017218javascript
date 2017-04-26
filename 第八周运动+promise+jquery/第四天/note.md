### 1.1 $(document).ready() 和 window.onload的区别：
- window.onload 是等页面所有的内容（图片，音频，视频，DOM结构.....）都加载完成的时候，才执行JS代码；
- $(document).ready(function(){...代码}) 只要DOM结构加载完成，就开始执行JS 代码;
$(function(){...代码})
### 1.2jQuery选择器
- 基本选择器：
    $('#div')  $('.div') $('div')  $('.div1,.div2');
- 独有的表达式选择器
### 1.3 取值赋值合体
- css
    + 一个参数的时候：1）获取 2）设置一组 css(一个参数)
    + 两个参数的时候：设置一个  css(arg1,arg2);
- html
    + 获取 html()
    + 设置 html('内容')
- val()  同 html()
    + 注意区分：val和html
    val针对表单元素的值；input  textarea select
    html针对普通标签元素的值；div p span h1
- attr() 
    + 获取 attr('class')
    + 设置 attr('class','xxxx')
### JS和jquery只能共存，不能混淆
- 共存：指的是 JS和jquery之间能相互转换
    - JS 转成jquery：只需要被$包裹即可； $(this)      $(oDiv)
    - jquery转JS: [index] get(index)
### jquery中DOM常用方法
- append 和 appendTo
    联系：功能相同，但是针对的主体不同
- 创建元素  $('<div>')  $('<div></div>')
### 运动
- show()  hide()
- slideDown() slideUp()
- fadeIn()    fadeOut()
- animate(target,time,effect,callback)
- 开启运动之前，先停止运动 stop();
### ajax 前后端数据交互
ajax({
     type:'get/post',
     url:'xxxx?'+Math.random()*1000000+new Date().getTime(),
     async:true/false,
     dataType:'json',//解决了jsonParse()
     data:$('form').serialize()//表单序列化：就是把前端要传后台的数据，以k=v&k=v拼成字符串
     success:function(){//成功之后的回调
     }，
     error:function(){//失败之后的回调
     }
})
### 事件和事件绑定
- 事件绑定：2个
    on(type,fn) //可以执行多次
    one(type,fn) //只能执行一次
- 解除绑定
    off(type,fn);//注意：只能解除有名字的函数；
### jquery插件
- 给类上扩充插件 $.extend({});
- 给实例上扩充插件 $.fn.extend({});








