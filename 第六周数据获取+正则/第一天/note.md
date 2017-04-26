### 类数组转数组
- 类数组有两种：
    1. arguments
    2. htmlCollection 元素集合
- 浏览器异常捕获
    try....catch(e){}...finally{..}
    平常用的，只有 try...catch...
    使用场景：只要有报错的情况，建议用try...catch....
- JSON: JOSN 是系统window的属性 
    + JSON.parse() 把JSON格式的字符串，转成JSON格式的对象
    + JSON.stringify() 把JSON格式的对象，转成JSON格式的字符串；
    注意JSON,属性名一定是双引号"";属性值，如果是数字，可以没有引号；
- eval() 容易引起"注入攻击"；
### sort排序
- DOM映射：html页面中的DOM结构，跟通过JS获取到的元素集合htmlCollection之间，存在一一对象的关系；
    + appendChild() 有类似剪切的功能;
- sort排序三步骤：
    1 类数组转数组
    2 sort排序
    3 把排好序的内容，重新插入页面
- 把数据插入页面的几种方式
    1. 字符串拼接； _插入页面用innerHTML;
    2. 动态创建和插入； document.createElement()   父级.appendChild(元素)
    3. 文档碎片； 1）先把创建好的每个元素，放入文档碎片 2）最后把文档碎片放入父元素中；3）释放文档碎片
### 作业：
1  把错的考试题练；
2  封装两个工具方法：1）makeArray 2)jsonParse
3  sort排序：1）类数组转数组 2）sort排序 3）重新插入页面
4  数据插入页面的3种方式 















    