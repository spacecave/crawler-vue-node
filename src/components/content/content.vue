<template>
    <div id="app2">
        <div>爬取数据显示区域{{msg}}</div>
        <div class="tab">
            <div class="tab-item">first</div>
            <div class="tab-item">second</div>
            <div class="tab-item">third</div>
        </div>
         
    </div>
    
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

<style lang="stylus" rel="stylesheet/stylus">
    #app2 
        margin-top: 10px
        border:1px solid #000
        .tab
            display:flex
            width: 100%
            height: 100%
            line-height: 40px
            .tab-item
                flex:1
                text-align:center
</style>