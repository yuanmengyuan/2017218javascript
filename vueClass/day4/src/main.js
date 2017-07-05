//import Vue from 'vue/dist/vue.js';  //这样写，是可以的；但它麻烦
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import route from './route';
import leiButton from './components/Button';
import VueResource from 'vue-resource';
import axios from 'axios';
import 'animate.css';

Vue.use(VueRouter);// 可以把这个组件变成全局公用的组件
Vue.use(leiButton);
//Vue.use(VueResource);
Vue.prototype.$http=axios;

//1:创建实例，并且引入配置
var router=new VueRouter(route);
var app=new Vue({
    router, //2:把router放入app实例；
    el:'#app',
    render:h=>h(App)
})
