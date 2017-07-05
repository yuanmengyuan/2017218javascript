<template>
    <div>
        <h1>{{msg}}</h1>
        <Navs></Navs>
    </div>
</template>

<style>
div{
    background: #eee;
}
</style>

<script>
    //导入home组件
    import Home from './components/Home.vue';
    import Navs from './components/Navs.vue';
  export default{
      data(){
          return {msg:'hello! app 圆梦源'}
      },
      components:{Home,Navs},
      created(){
          /*this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
              params:{
                  wd:'fanyiguan'
              },
              jsonp:'cb'
          }).then(res=>{
              console.log(res.body.s)
          })*/
          this.$http.get('https://api.github.com/users/yuanmengyuan')
              .then(res=>{
                  console.log(res.data)
              })
      }
  }
</script>












