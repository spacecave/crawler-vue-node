<template>
  <div id = 'app'>
    测试
    <router-link to="/hello">hello</router-link>

    <router-link to="/show">show</router-link>
  
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
//  components:{Hello}
}
</script>

<style>

</style>
