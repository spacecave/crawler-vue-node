<template>
  <div id="app">
    <div class="content">
      <div class="content-left">
        <p>URL：</p><input id="httpurl" class="iview-input" type="text" v-model="test" @keyup.enter="urlenter"/>
      </div>
      <div class="content-right">
        <ul>
          <li v-for = "item in urlcontent">
            {{item}}
          </li>
        </ul>
        
      </div>
    </div>
      
    <div class="content">
      <div class="content-left">
        <p>关键字：</p><input id="keywords" class="iview-input" type="text">
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    hello: {
      type: Object
    },

  },
  data() {
    return {
      //  test:this.hello.data
      urlcontent:[]
    }
  },
  methods: {
    urlenter() {
      this.$http.post('/api/urlcraw', {url:this.test}).then(response => {
          var body = response.body;
          this.msg = body.data;
      });
      this.urlcontent.push(this.test);
      this.test = '';
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  #app
    display:flex
    width:90%
    height:100%
    margin:auto
    .content
      flex:1
      
      .content-left
        float:left
        margin-top:40%
        &>*
          float:left
        &>p
          line-height:32px
      .content-right
        float:right
        margin-right:100px;
    .iview-input 
      display: inline-block
      width: 130ps
      height: 32px
      line-height: 1.5
      padding: 4px 7px
      font-size: 12px
      border: 1px solid #d7dde4
      border-radius: 4px
      color: #657180
      background-color: #fff
      background-image: none
      position: relative
      cursor: text
      transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out
      &:hover 
        border-color: #5cadff;
</style>
