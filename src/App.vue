<template>
  <div id = 'app'>
    
    <!-- <router-link to="/hello">hello{{msg}}</router-link>

    <router-link to="/show">show</router-link> -->
    

    <v-sel :hello="hello"></v-sel>

    <!-- <v-show></v-show> -->
  
    <router-view></router-view>
  </div>
</template>

<script>
import Sel from "./components/select/Sel.vue";
import Show from "./components/content/content.vue";


import $ from "jquery";


export default {
  data() {
    return {
      msg: {},
      hello:{}
    };
  },
  created() {
    var formData = new FormData();

    // formData.append('foo', 'bar');
    // this.$http.post('/api/promise2',{params:'1'}).then(data => {
    //   data = data.body;
    //   this.msg = data.data;
    //   this.hello = data;
    // });
    // var _this = this;
    // $.ajax({
    //   url:'/api/promise2',
    //   type:'get',
    //   data: {
    //     a:'1'
    //   },
    //   success:function(data) {
    //      //   data = data.body;
    //     _this.msg = data.data;
    //     _this.hello = data;
    //   }
    // })
    
  },
  components:{
    'v-sel': Sel,
   'v-show': Show
  }
}
</script>

<style>

</style>
