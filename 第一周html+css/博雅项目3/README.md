### 项目结构
- css文件夹：放置公共样式+index.css页面样式
- images文件夹：放置图片的
- index.html写页面结构的；

### index.css文件夹
- 重置样式
- 公共样式
- index.css样式

### 脱离正常文档流
- 绝对定位（独自飘在那）
- 固定定位（回到顶部，对联广告）
- 浮动（几个标签在一排，比如导航菜单）

### 清除浮动的3个方法
- 伪类清除浮动
```
.clearfix::after{
    display:block;
    height:0;
    content:"";
    clear:both;
}
```
- clear:both;
- overflow:hidden;











