### 1.0 a链接
1. 如果href没设置，或设置为#;页面默认会跳转到顶部
2. a链接一般可以用于锚点设置；
3. 阻止a链接的跳转：
    1）`<a href="javascript:;">toTop</a>`
    2) `<a href="javascript:void(0);">toTop</a>`
### 1.1document.body 和 document.documentElement之间的兼容问题
IE7及它以上+标准浏览器下：document.documentElement=》可视区高度； document.body=》body内容的高度
IE5，6：document.documentElement拿到的是0，0为false；通过document.body可以拿到可视区的高度；
所以：可视区的兼容写法为 document.documentElement.clientHeight||document.body.clientHeight;
### 1.2 回到顶部思路总结
- 第一个版本，点击立即隐藏版
    1）点击按钮的时候，需要计算步长：var step=target/duration*interval
    2) 开启定时器，每次在最新的距离上减去固定的步长step；求出新位置，并且要设置新位置
    3）当位置小于0的时候，说明回到顶部了，必须关闭定时器，同时阻断程序的执行；
    4）首屏不显示按钮，只有当滚动距离大于一屏的时候，才显示按钮
    5）点击按钮立即隐藏，但是这里有个坑；
        解决：点击隐藏按钮的时候，应该禁止滚动条事件；
        等停止定时器的时候，重新绑定滚动条事件；
### 1.3 单张图片的延迟加载思路总结
- 图片要成功加载，必须触发滚轮事件window.onscroll
- 图片加载的条件： img.offset().top+img.height<scrollTop+clientHeight
- 图片开始加载
    1 先找一个临时的图片对象 tmpImg
    2 把要用的图片地址，让tmpImg校验下
    3 校验结果：onload   onerror
    4 _如果成功，把正确的地址赋值给真正的img标签；一定要注意性能优化：
        1. 图片只加载一次img.loaded=true;
        2. 释放临时图片对象 = null;
    onerror事件，同上；















