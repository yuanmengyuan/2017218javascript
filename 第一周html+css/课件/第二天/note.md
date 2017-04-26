### 1. 复习
#### 1.1 复习markdown常用语法
- 标题 #
- 列表：
    + 无序列表 `- 或* `
    + 有序列表 `1. 2. `
- 引入图片和文字
    + ![图片名称](远程地址) ：yotuku.cn;
    + [](点击文字要跳往的地址);
- 粗体和斜体
    + `**学习学习**`
    + `*斜体*`
- 表格

 |name     | age       | sex     |
 |:------: | :-------- | -------:|
 |前端      | 6         | 你猜     | 
 
- `> `
- `***`
- 单行代码(``)和代码块
```
里面写代码块
```

#### 1.2 复习常用的快捷键
- ctrl:ctrl+a  ctrl+c   ctrl+v   ctrl+x ctrl+s ctrl+alt场景切换 ctrl+w关闭当前页面 ctrl+空格:中英文切换
- shift：1）中英文切换(不建议) 2)大写英文字母
- windows+r打开运行窗口，在运行窗口中输入cmd,可以打开命令行;
- 创建html5的快捷键：1）!+tab  2)html:5+tab;
- 在style中注释：ctrl+shift+/

#### 1.3 复习html
- html骨架结构
  + !DOCTYPE..文档声明头(html5,html4.01,XHTML)
  + 在html4.01和XHTML中各有3个小规范
    1. strict 严谨的
    2. transitional 普通的
    3. frameset 框架
  + html：超文本标记语言；里面用的都是"标签对儿"
    1. head
        + `meta（charset:UTF-8,GB2312）`
        + `<meta name="description" content="要描述的内容"/>`
        + `<meta name="keywords" content="关键字，关键词"/>`
        **以上两个meta都是为了SEO优化**
        + `<title>页面的标题</title>`
    2. body
        + 标题`<h1></h1><h2></h2>`
        + 段落 p:虽然p是块元素，但是他里面放的也是图片，文字；
        + span:里面用来放文本：图片，文字；
        + a链接`<a href="要跳往的地址"`></a>
        + 图片`<img src="相对地址/绝对地址"`
- css样式，写在<style></style>
    + 样式的基本语法：
    选择器(div){
        key:value
    }
    ```
    p{
        height:40px;
        line-height:40px;
        background-color:red;
    }
    ```
    + 选择器：
        1. 标签选择器：div,h,p,a,img,span
        2. class选择器:.xinxi
        (千万不要用汉字和数字开头做为class名，一定要用英文)
### 2. html更多解读
- html只考虑标签嵌套，跟tab和空格无关，无数个空格，也只算作一个；        
- 图片标签`<img src="相对路径/绝对路径"/>`  
    + 相对路径：以当前页面为出发点查找的；(./ 或 不写,找到父级../)
    + 绝对路径：都是以http开头的；例如：http://i1.piimg.com/567571/f3f79e8903424ea4.jpg
    + 图片标签上有两个常用属性，src属性：引入图片地址; alt标签：图片无法正常加载时，用来替代的文字；(alt也可以省略)
- a链接
a链接有三个常用的属性：
   + href:'要跳往的地址',href的作用
    1. 可以填写绝对路径，跳到直到的网页
    2. 可以写#：1）不确定地址的时候 2)简单的回到顶部效果
    3. 利用锚点进行页面切换
   + title:鼠标以上时的提示
   + target:打开方式(默认的_self当前页面打开; _blank新页面打开)
   + 这些属性中，title和target都可以省略；
- a链接的锚点使用
   + 本页面各个模块之间的相互跳转
   ```
   <div id="#div1"></div>
   <a href="#div1"></a>
   ```
   + 实现不同页面之间，不同模块的相互跳转
   `<a href="detail.html#detail1"></a>`
### 3. 列表
- 无序列表:无序列表中的li也是容器；
```
<ul>
    <li></li>
    <li></li>
</ul>
```
- 有序列表
```
<ol>
    <li></li>
    <li></li>
</ol>
```
- 定义列表：dl,dt,dd都是容器
```
<dl>
    <dt>表头</dt>
    <dd>详情介绍</dd>
</dl>
```
### 4. 表单
- 表单用<from action="提交到哪里"></from>
- 输入文本框 `<input type="text" placeholder="默认提示"/>`
- 输入密码 `<input type="password" placeholder="默认提示"/>`
- 单选按钮：单选按钮组，一定要加上name，否则无法实现单选效果；
```
<input type="radio" name="sex"/>男
<input type="radio" name="sex"/>女
```
- 多选框 `<input type="checkbox" checked/>`
- 下拉单
```
<select>
    <option name="city" value="bj">北京</option>
    <option name="city" value="sh">上海</option>
    <option name="city" value="sz">深圳</option>
<select>
```
- name和value主要用于前端向后台提交数据；id：1）设置样式(不建议) 2)在JS阶段，用来获取元素 3)id配合a链接，进行锚点设置；
- 留言框`<textarea name="" value="" cols="" rows=""></textarea>`
- 按钮
    + 普通按钮 type=button
    + 提交按钮 type=submit
    + 重置按钮 type=reset
### 5. 选择器
- 标签选择器：div h1~h6 p span a img ul li ol dl dt dd input select
### 作业：
- 必须熟练使用相对路径和绝对路径；
- 锚点：同一页面不同模块的跳转； 不同页面不同模块的跳转
- 列表：无序列表 有序列表 定义列表
- 表单：不要看代码，自己写出来；
- 以上是必须掌握的，接下来，是提高的；
- 小项目练习(这是用来拔高的)

  
  
  
  
  
  
