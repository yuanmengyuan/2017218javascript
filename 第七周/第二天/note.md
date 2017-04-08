### 1.1 区分结构父级和定位父级
parentNode结构父级，最大的元素是html;
offsetParent定位父级，最大的元素是body;
### 1.2 JS盒子模型的四个问题
1 只能拿到四舍五入的整数，无法拿到小数
2 只能求出复合值，无法拿到单独的值； --getCss
3 只能直到当前元素的外边框，到定位父级的内边框的距离；无法直接求出到body的距离； --offset
4 每次写一大堆好复杂 -- win
//获取：需要返回值
document.body.clientWidth||document.documentElement.clientWidth
document.body.clientHeight||document.documentElement.clientHeight
document.body.scrollTop||document.documentElement.scrollTop
document.body.scrollLeft||document.documentElement.scrollLeft
//设置：用了连等； 设置不需要返回值；
document.body.scrollTop=document.documentElement.scrollTop=xxx;
document.body.scrollLeft=document.documentElement.scrollLeft=xxx;
