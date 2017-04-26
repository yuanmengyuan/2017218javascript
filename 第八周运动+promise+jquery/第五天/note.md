### each 和 map
- $().each() 和 $.each()的区别：
    - $().each() 只能遍历jquery获取到的元素；
    - $.each() 既可以遍历jquery元素也可以遍历原生数组和原生对象
- $().map()  和 $.map() =》他们和each的区别
    - map的回调函数接收的参数，跟each的顺序正好相反
    - map可以返回一个新的数组；而each拿到的还是原来的数组；
### 注意：jquery中没有DOM映射；