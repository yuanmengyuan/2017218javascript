### 1.0 复习
- html5新增标签
    - header, nav,section,hgroup,article,aside,figure,figureCaption,dialog(dt,dd),footer
- 多媒体标签
    - video 视频 autoplay  controls
    - audio 音频
        - source  
        ```
        <audio autoplay controls>
            <source src="引入资源 type="audio/mp3"></source>
        </audio>
        ```
- 实战：360音乐导航
- canvas:
- embed:改标签，通过 src 可以引入各种插件：比如flash
- meter：状态显示
    - min:最小值，如果value的值小于min的时候，实际拿到的是min的值；
    - max:同上；
    - low/high  在low和high都是合格值，大于high或小于low，都会显示成黄色；
    - optimum：最佳的值；
- 注释标签
    - ruby配合rt来使用
    - mark (默认黄色)高亮显示；可以通过background更改颜色和样式
- localStorage:
    1. 存：.  []   setItem(k,v);
    2. 取：.  getItem(K);
    3. 删：localStorage.clear()   localStorage.removeItem(key)
    4. 取出所有的key;
    ```
    for(var i=0; i<localStorage.length; i++){
        console.log(localStorage.key(i))
    }
    ```
- 区分div:nth-child(1) 和 div:nth-of-type(1)区别
    - div:nth-child(1)：当前div的父容器下第一个子元素必须是div;
    - div:nth-of-type(1):当前div的父容器下找到所有div中的第一个div
    - E:only-child （独生子）
    















