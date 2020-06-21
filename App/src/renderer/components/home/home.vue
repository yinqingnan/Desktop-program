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
              <div class="Playoperation">
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
              </div>
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
        title: '游园会',
        author: '周杰伦',
        pic: '',
        url: 'http://m801.music.126.net/20200621223040/239c553a5aa22815c75c6deec51d3c84/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2041626782/eaf0/d6fe/b76a/9f2e4df64d86fa5d797fd38152cb4dcb.mp3',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      }
    }
  },
  methods: {
    btn () {
      this.$router.push({ path: '/login' })
    },
    btn1 () {
      // console.log(123)
      // this.$electron.ipcRenderer.send('close')
    }
  },
  mounted () {
    this.user_msg = this.$route.query
  }

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