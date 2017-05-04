<template>
  <div id="app" v-show="selWin">
    <div class="content">
      <div class="content-left">
        <p>URL：</p><input id="httpurl" class="iview-input" type="text" v-model="testmo" @keyup.enter="urlenter"/>
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
        <p>关键字：</p><input id="keywords" class="iview-input" type="text" v-model="keymo" @keyup.enter="keyenter"/>
      </div>
      <div class="content-right"></div>
      <ul>
        <li v-for = "kw in keycontent">
          {{kw}}
        </li>
      </ul>
    </div>
    
    <button class="btn" @click="confirm">确认</button>

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
      selWin:true,//控制窗口隐藏和显示
      testmo:this.hello.data,
      urls:[],//未获取title前的url
      keymo:'',
      urlcontent:[],//输入的url集合
      keycontent:[]//输入的关键字集合
    }
  },
  methods: {
    urlenter() {
      this.urls.push(this.testmo);
      this.$http.post('/api/urlcraw', {url:this.testmo}).then(response => {
          var body = response.body;
          body = unescape(body.replace(/&#x/g,'%u').replace(/;/g,''));
          console.log(body);
          this.testmo = body;
          this.urlcontent.push(this.testmo);
          this.testmo = '';
      });
      // this.urlcontent.push(this.test);
      // this.test = '';
        
    },
    keyenter() {
      this.keycontent.push(this.keymo);
      this.keymo = '';
    },
    confirm() {
      this.selWin = false;
      this.$http.post('/api/contentcraw', {url:this.urls, kw:this.keycontent}).then(response => {
        var body = response.body;
        console.log(body);
        this.$router.push({path: '/show',query: body});
      });
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  html 
    width: 100%
    height: 100%
    body
      width: 100%
      height: 100%
  #app
    display:flex;
    position: relative;
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
      width: 130px
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
        border-color: #5cadff
    .btn 
      position: absolute
      width: 100px
      height: 50px
      bottom: 10px
      left: 40%
        
</style>
