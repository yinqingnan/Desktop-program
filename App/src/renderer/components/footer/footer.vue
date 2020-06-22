<template>
    <div>
        <!-- <audio :src="url"></audio> -->
        <div class="box">
            <aplayer :music="music" ref="aplayer" 
            v-if="reFresh"
            :autoplay=autoplay
            theme="#b7daff"
            >
            </aplayer>
        </div>
    </div>
</template>
<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer
  },
  data () {
    return {
      autoplay: false,
      reFresh: true,
      music: {
        title: 'Mojito', // 歌名
        artist: '周杰伦', // 作者
        pic: '', // 海报
        src: 'http://yf.wp.zp68.com:811/sub/filestores/2019/10/15/5b10904b239a147dbd702695407ed059.mp3?lx=xzwj&k=26779dd3412544e8b87f', // url
        // src: '../../assets/MP3/Mojito.mp3', // url
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      },
      MusicID: ''
    }
  },
  // props: ['music'],
  computed: {
    getStoreItem () {
      return this.$store.state.Counter.musicID
    }
  },
  watch: {
    getStoreItem (newval, oldval) {
      // console.log(newval) // 数据变更后进行数据请求
      this.reFresh = false
      this.$axios.get('/song/url?id=' + newval).then((res) => {
        this.music.src = res.data.data[0].url
        this.$nextTick(() => {
          this.reFresh = true
        })
        console.log(res.data.data[0].url)
        // console.log(this.$refs.aplayer.switch())
      })
      this.$axios.get('/song/detail?ids=' + newval).then((res) => {
        this.music.title = res.data.songs[0].ar[0].name
        this.music.artist = res.data.songs[0].name
        this.music.pic = res.data.songs[0].al.picUrl
      })
    //   this.$refs.aplayer.switch(1)
    },
    deep: true
  }
}
</script>
<style scoped>
.box{
    /* width: 200px; */
    display: flex;
    justify-content: center;
}  
.box>div{
    width: 100%;
    height: 48px;
    margin: 0 6px;
    
}

</style>
<style>
.aplayer .aplayer-body .aplayer-info{
    height:45px !important;
}
.aplayer-pic{
    width: 45px !important;
    height: 45px !important;
}
</style>