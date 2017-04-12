<template>
  <div id = 'app'>
    
    <router-link to="/hello">hello{{msg}}</router-link>

    <router-link to="/show">show</router-link>

    <Hello :hello="hello"></Hello>
  
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  data() {
    return {
      msg: {},
      hello:{}
    };
  },
  created() {
    this.$http.get('/api/promise1').then(data => {
      data = data.body;
      this.msg = data.data;
      this.hello = data;
    });
  },
  components:{Hello}
}
</script>

<style>

</style>
