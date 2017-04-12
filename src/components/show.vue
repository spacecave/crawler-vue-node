<template>
    <div>出数据组件{{msg}}</div>
</template>

<script >
    export default {
        data() {
            return {
                msg:'test1'
            }
        },
        created() {
            this.$http.get('/api/promise2').then(response => {
                var body = response.body;
                this.msg = body.data;
            });

        }
    }
</script>

<style>
    
</style>