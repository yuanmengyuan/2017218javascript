1. 引入bootstrap依赖的文件(css和js)
2. 一个bootstrap按钮的制作：
    1）自制按钮网站：http://blog.koalite.com/bbg/
    2）要注意，所有按钮用的标签，只有三个 a , button ,input;
3. top模块用到的知识点：
    1）删格系统 .row .col-md-xxxx
    2）字体图标：我们自己引入的图标  bootstrap中的图标
    3）css3选择器 
    4）把JS效果用css来实现
    5）自制bootstrap的按钮
4. nav导航区域：
    1）先找类似的导航 navbar-default
    2）需要把navbar-default从源码里面拎出来，改成navbar-ymy
    3）照着网页一步步的改成我们想要的样式；
        注意：
        1）只能更改navbar-ymy | index.css 下面的代码;不能更改源码；
        2）响应式工具 visible-md  visible-lg | hidden-xs hidden-sm
        3）移动端-汉堡菜单