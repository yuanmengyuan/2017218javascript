<template>
    <div>
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <transition enter-active-class="animated fadeInUp" leave-active-class="hide">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style>
.router-link-active{
    background: #ff0000;
    padding:10px;
}
.hide{
    display: none;
}
</style>
<script>

</script>