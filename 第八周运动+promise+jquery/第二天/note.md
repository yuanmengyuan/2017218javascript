### promise
- Promise是个类，类的属性和方法
    - all:谁跑的慢，数据以谁为准
    - race:谁跑的快，数据以谁为准
- Promise这个类new出来的实例，实例具有的方法
    - then() 成功之后的回调
        - then(callback).catch(callback)
        - then(callback1,callback2) //如果callback1中有错误，会阻断程序的执行
    - catch() 失败之后的回调，避免异常错误引起的程序阻断
- 当你new Promise的时候，会立即执行，所以，为了控制程序的执行；必须在外面套一层函数，在需要的时候调用
    - new Promise接收一个参数
    ```
    new Promise(function(resolve,reject){
    )
    ```
### 运动优化小技巧：
1. 开启定时器前，先关闭没用的定时器
2. 边界值的判断
3. 全局变量作为元素的私有属性
4. _move解决了多个匿名函数无法销毁的问题













