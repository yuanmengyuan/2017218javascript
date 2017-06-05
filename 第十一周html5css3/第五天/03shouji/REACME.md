### 1.0 创建页面结构
```
//html
<div id="fullpage">
   <div class="section">1</div>
   <div class="section">2</div>
   <div class="section">3</div>
   <div class="section">4</div>
</div>

```
### 1.2 引入fullpage.js
- fullpage.js依赖jQuery; 
    1. 引入jquery
    2. 引入fullpage.js
- 配置
- 遇到的问题：
1. 吸顶的顶部通栏的问题：
    1）position:fixed; left:0; top:0;
    2）header必须写在fullpage外面
2. 底部导航的问题：
    1）footer必须写在fullpage里面；必须给他父级的section加上.fp-auto-height;
    ```
    <div class="section fp-auto-height">
         <footer>
                122334455
         </footer>
    </div>

    ```
    2）高度需要通过footer设置高度来撑开；
3. 背景无法填充容器 background-size:cover | 100% 100%;
4. 内容被顶部通栏覆盖
    思路：
        1） 先测css能否解决；
        2） 如果css不能解决，我们需要通过JS来操作；
```
for(var i=0; i<5; i++){
        $('.section').eq(i).css({
            paddingTop:'100px'
        })
    }
```
### 1.3 添加动效的奥秘
- 三步曲：
    1. 先写好跟PS一样的效果；
    2. 通过opacity和transform把他改变；
    3. 当滚动到这屏的时候，给当前的section添加.current;
    current所做的事情，就是利用过渡(transition,animation)动态显示；
















