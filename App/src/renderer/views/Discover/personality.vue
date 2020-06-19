<template>
    <div class="content">
        <div class="box">
            <el-carousel :interval="4000" type="card" height="200px" style="margin:20px 0">
                <el-carousel-item v-for="(item,index) in imglist" :key="index" :style="{'backgroundImage': 'url(' + item.url + ')'}" class="lunbo">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="songsheet">
            <div>
                <h1>推荐歌单</h1>
                <h2>更多 <span class="iconfont icon-next"></span></h2>
            </div>
            <div >
                <ul style="margin-top:10px;margin-top: 10px;display: flex;flex-wrap: wrap;justify-content: space-between">
                    <li class="recommend" @click="songsheet(1)">
                        <div>
                            <h1>{{week}}</h1>
                            <h2>{{riqi}}</h2>
                        </div>
                        <p>每日歌曲推荐</p>
                    </li>
                    <li v-for="(item,index) in datalist" :key="index" class="recommend" @click="songsheet(item.id)">
                         <div :style="{'backgroundImage': 'url(' + item.picUrl + ')'}" class="lunbo">
                            <h3 class="Tooltip"><span class="iconfont icon-video" style="vertical-align: middle;margin-right:4px"></span>{{item.playCount}} 万 </h3>
                        </div>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="Exclusive songsheet">
            <div>
                <h1>推荐歌单</h1>
                <h2>更多 <span class="iconfont icon-next"></span></h2>
            </div>
            <div style=" padding-bottom: 24px;">
                <ul class="Exclusives">
                    <li v-for="(item,index) in Exclusive.slice(0, 3)" :key="index"  @click="Exclusiveclick(item.id)">
                        <div :style="{'backgroundImage': 'url(' + item.picUrl + ')'}" class="lunbo">
                            <div>
                                <span class="iconfont icon-video"></span>
                            </div>
                        </div> 
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="uptodatemusic songsheet">
            <div>
                <h1>最新音乐</h1>
                <h2>更多 <span class="iconfont icon-next"></span></h2>
            </div>
            <div>
                <ul>
                <li v-for="(item, index) in uptodatemusiclist1" :key="index" @dblclick="dbuptodatemusic">
                    <h2>
                        {{index+1}}
                    </h2>
                    <div  @click="uptodatemusicbtn(item.id)" style=" cursor: pointer;">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div style="margin-left:8px">
                        <h1>{{item.name}}</h1>
                        <div>
                            <span>SQ</span>
                            <span v-if="item.song.mvid" @click="PlayMV(item.song.mvid)" style=" cursor: pointer;"><span class="iconfont icon-video"></span></span>
                            <h2>{{item.song.artists[0].name}}</h2>
                        </div>
                     
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in uptodatemusiclist2" :key="index" @dblclick="dbuptodatemusic">
                    <h2>
                        0{{index+5}}
                    </h2>
                    <div @click="uptodatemusicbtn(item.id)" style=" cursor: pointer;">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div style="margin-left:8px">
                        <h1>{{item.name}}</h1>
                        <div>
                            <span>SQ</span>
                            <span v-if="item.song.mvid" @click="PlayMV(item.song.mvid)" style=" cursor: pointer;"><span class="iconfont icon-video"></span></span>
                            <h2>{{item.song.artists[0].name}}</h2>
                        </div>
                     
                    </div>
                </li>
            </ul>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imglist: [
        {url: require('../../assets/logo/lunbo1.png')},
        {url: require('../../assets/logo/lunbo2.png')},
        {url: require('../../assets/logo/lunbo3.png')},
        {url: require('../../assets/logo/lunbo4.png')},
        {url: require('../../assets/logo/lunbo5.png')},
        {url: require('../../assets/logo/lunbo6.png')},
        {url: require('../../assets/logo/lunbo7.png')},
        {url: require('../../assets/logo/lunbo8.png')}
      ],
      week: null,
      riqi: null,
      datalist: [],
      Exclusive: [],
      uptodatemusiclist1: [],
      uptodatemusiclist2: [],
      personalizedMVlist: []
    }
  },
  mounted () {
    var now = new Date()
    var a = ['日', '一', '二', '三', '四', '五', '六']
    var index = new Date().getDay()
    var str = '星期' + a[index]
    this.week = str
    this.riqi = now.getDate()
    this.getlist()
    this.Exclusives()
    this.uptodatemusic()
    this.personalizedMV()
  },
  methods: {
    // 推荐歌单
    getlist () {
      this.$axios.get('/personalized?limit=9').then((res) => {
        // console.log(res.data.result)
        this.datalist = res.data.result
      })
    },
    // 独家放送
    Exclusives () {
      this.$axios.get('/personalized/privatecontent/list').then((res) => {
        // console.log(res.data.result)
        this.Exclusive = res.data.result
      })
    },
    // 最新音乐
    uptodatemusic () {
      this.$axios.get('/personalized/newsong').then((res) => {
        this.uptodatemusiclist1 = res.data.result.slice(0, 5)
        this.uptodatemusiclist2 = res.data.result.slice(5, 10)
      })
    },
    // 推荐MV
    personalizedMV () {
      this.$axios.get('/personalized/mv').then((res) => {
        console.log(res.data.result)
        this.personalizedMVlist = res.data.result
      })
    },
    songsheet (id) {
      console.log(id)
      console.log('根据id进行数据请求，推荐歌单 ')
    },
    Exclusiveclick (id) {
      console.log(id)
      console.log('推荐歌单跳转', id)
    },
    PlayMV (id) {
      console.log('播放mv', id)
    },
    uptodatemusicbtn (id) {
      console.log(id)
      console.log('点击播放音乐', id)
    },
    dbuptodatemusic () {
      console.log('双击效果')
    }
  }
}
</script>


<style scoped>
.content{
    width: 764px;
    margin: 0 auto;
}
.el-carousel__item h3 {
color: #475669;
font-size: 14px;
opacity: 0.75;
line-height: 200px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.lunbo{
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
/* .songsheet{
    padding: 0 20px;
} */
.songsheet>div{
    display: flex;
    justify-content: space-between; 
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e1e2;
}
.songsheet>div>h1{
    font-size: 18px;
    font-weight: 600;
}
.songsheet>div>h2{
    font-size: 12px;
    cursor: pointer;
    color: #666666;
}
.recommend{
    min-width: 136px;
    width: 19%;
    cursor: pointer;
}
.recommend>div{
    border: 1px solid #e1e1e2;
    height: 136px;
    margin-bottom: 6px;
}
.recommend>p{
    font-size: 10px;
    line-height: 10px;
    height: 34px;
}
.recommend>div>h1{
    text-align: center;
    margin: 17px 0;
    color: #666;
}
.recommend>div>h2{
    font-size: 70px;
    text-align: center;
    color: #c62f2f;
}
.Tooltip{
    font-size: 10px;
    text-align: right;
    color: #ffffff;
    line-height: 1;
    margin-top: 4px;
}
.Exclusive{
    padding-bottom: 24px;

}
.Exclusives{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.Exclusives>li{
    width: 32%;
    cursor: pointer;
    height: 150px;
    margin-bottom: 10px;
}
.Exclusives>li>div{
    height: 100%;
    padding-top: 10px;
    width: 100%;
}
.Exclusives>li>p{
    font-size: 10px;
    margin-top: 4px;
}
.Exclusives>li>div>div{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(0,0,0,.5);
    text-align: center;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, .5);
}
.Exclusives>li>div>div>span{
    font-size: 10px;
    color: #fff;
}
.uptodatemusic>div>ul{
    width: 50%;
}
.uptodatemusic>div>ul:nth-of-type(1){
    border-right: 1px solid #ededed;
}
.uptodatemusic>div>ul>li{
    display: flex;
    height: 50px;
    line-height: 50px;
}
.uptodatemusic>div>ul>li:hover{
    background: #e3e3e5;
}
.uptodatemusic>div>ul>li>h2{
    width: 38px;
    font-size: 12px;
    text-align: center;
}
.uptodatemusic>div>ul>li>div>img{
    width: 38px;
    height: 38px;
    display: block;
    margin-top: 6px;
}
.uptodatemusic>div>ul>li>div>div{
    display: flex;
    line-height: 1;
    margin-top: 4px;
}
.uptodatemusic>div>ul>li>div>h1{
    line-height: 1;
        font-size: 12px;
    margin-top: 6px;
}
.uptodatemusic>div>ul>li>div>div>h2{
    font-size: 12px;
    line-height: 1;
    color: #999;
}
.uptodatemusic>div>ul>li>div>div>span:nth-of-type(1){
    border: 1px solid #fe672e ;
    color: #fe672e;
    width: 20px;
    height: 10px;
    font-size: 10px;
    text-align: center;
    margin-right: 4px;
}
.uptodatemusic>div>ul>li>div>div>span:nth-of-type(2){
    margin-right: 4px;
     border: 1px solid #fe672e ;
    color: #fe672e;
    width: 20px;
    height: 10px;
    font-size: 10px;
    line-height: 1;
    vertical-align: middle;
    text-align: center;
}
.uptodatemusic>div>ul>li>div>div>span:nth-of-type(2)>span{
    font-size: 12px;
}
.uptodatemusic{
    margin-bottom: 20px;
}
</style>