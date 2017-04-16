<template>
  <div id="app">
     <Input v-model="value" placeholder="请输入url..." style="width: 300px"></Input>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    hello: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
