### 需要安装的插件
- webpack:  webpack  webpack-dev-server 
- vue的编译： vue-loader   vue-template-compiler
- babel:  babel-core babel-cli babel-loader babel-preset-es2015 babel-preset-stage-0  style-loader css-loader
- vue上线后的产品： vue  vue-router
- 配置： html-webpack-plugin

### 子组件和样式
- 一个.vue的文件： template  style script
- scoped 把样式私有化
- less  
    + 下载 less less-loader 
    
```
<style scoped lang="less" rel="stylesheet/less"></style>
```
### vue里面的动画
- transition组件，让谁动，就用transition把谁包裹了；
- 配合第三方库来设置样式： animate.css
    + 使用 style上添加  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"
    
### 数据请求
- vue-resource 
通过Vue.use(VueResource) 注册为公共组件；
    + this.$http.get()
    + this.$http.post()
    + this.$http.jsonp();
- axios
 不能使用Vue.use来注册公共组件，必须使用Vue.prototype.$http=axios;
    + this.$http.get()
    + this.$http.post()
