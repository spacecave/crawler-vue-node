<template>
    <div >
    你好啊,这是<span>{{hello.errno}}</span>
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
<style scoped>

</style>
