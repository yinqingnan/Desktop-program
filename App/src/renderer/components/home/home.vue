<template>
    <div>
        <div class="box">
          <el-container>
          <el-header>
            <!-- 头部信息 -->
            <Header :user_msg = 'user_msg'></Header>
          </el-header>
          <el-container class="content">
            <el-aside width="205px">
              <Left style="height:86%"></Left>
              <!-- <div class="Playoperation">
                  <div>
                    <img src="../../assets/touxiang.png" alt="">
                  </div>
                  <div>
                    <div>
                      <h1>赤岭</h1>
                      <p><span class="iconfont icon-xihuan"></span></p>
                    </div>
                    <div>
                      <h1>李玉刚</h1>
                      <p><span class="iconfont icon-zhuanfa"></span></p>
                    </div>
                  </div>
              </div> -->
            </el-aside>
            
            <el-main>
              <router-view/>
            </el-main>
          </el-container>
          <el-footer>
            <Footer :music="music"></Footer>
          </el-footer>
        </el-container>
        </div>
        
    </div>
</template>
<script>
import Header from '../header/header'
import Left from '../left/left'
import Footer from '../footer/footer'
export default {
  components: {
    Header,
    Left,
    Footer
  },
  data () {
    return {
      user_msg: {},
      music: {
        title: '光辉岁月', // 歌名
        author: '谢波', // 作者
        pic: '', // 海报
        url: 'http://m7.music.126.net/20200622101033/218826df1f6a34f51e1559f76151a0e3/ymusic/560b/525b/065a/aa95d15723e10e652b6410ab1c473a09.mp3', // url
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      },
      MusicID: ''
    }
  },
  methods: {
    btn () {
      this.$router.push({ path: '/login' })
    },
    btn1 () {
      // this.$electron.ipcRenderer.send('close')
    }
  },
  mounted () {
    this.user_msg = this.$route.query
  }
  // computed: {
  //   getStoreItem () {
  //     return this.$store.state.Counter.musicID
  //   }
  // },
  // watch: {
  //   getStoreItem (newval, oldval) {
  //     // console.log(newval) // 数据变更后进行数据请求
  //     this.$axios.get('/song/url?id=' + newval).then((res) => {
  //       this.music.url = res.data.data[0].url
  //       console.log(this.music.url)
  //     })
  //     this.$axios.get('/song/detail?ids=346576').then((res) => {
  //       console.log(res.data)
  //     })
  //   },
  //   deep: true
  // }

}
</script>
<style scoped>
.el-header,.el-footer,.el-main{
  padding: 0
}
.el-header{
  height: 50px !important;
}
.el-footer{
  height: 48px !important;
  line-height: 48px;
}
.content{
  height: calc(100vh - 98px);
}
.Playoperation{
  cursor: pointer;
  height: 40px;
  border-top: 1px solid #e1e1e2;
  display: flex;
}
.Playoperation>div:nth-child(1){
  line-height: 40px;
  
}
.Playoperation>div:nth-child(1)>img{
  display: block;
  width: 40px;
  height: 40px;
  margin: 7px;
}
.Playoperation>div:nth-child(2){
  width: 100%;
  padding: 0 4px;
  padding-right: 12px;
}
.Playoperation>div:nth-child(2)>div{
  display: flex;
  justify-content: space-between;
}
.Playoperation>div:nth-child(2)>div:nth-of-type(1){
  margin: 10px 0 6px 0;
}
   .Playoperation>div:nth-child(2)>div>h1{
     font-size: 12px;
   }
</style>
<style>
.el-aside >div{
  height: 80%;
}
.el-aside{
  overflow: hidden;
}
</style>