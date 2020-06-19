<template>
    <div>
        <div class="header">
            <ul>
                <li v-for="(item,index) in list" :key="index" @click="Switchroute(item.url,index)" :class="index==num? 'active': '' ">{{item.name}}</li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    //   list: ['个性推荐', '歌单', '主播电台', '排行榜', '歌手', '最新音乐']
      list: [
        { name: '个性推荐', url: '/home/discover/personality' },
        { name: '歌单', url: '/home/discover/songlist' },
        { name: '主播电台', url: '/home/discover/anchorstation' },
        { name: '排行榜', url: '/home/discover/leaderboard' },
        { name: '歌手', url: '/home/discover/singer' },
        { name: '最新音乐', url: '/home/discover/newmusic' }
      ],
      num: 0
    }
  },
  methods: {
    Switchroute (url, index) {
      console.log(url, index)
      this.num = index
      this.$router.push({path: url})
    }
  }
}
</script>
<style>
.header{
    width: calc(100% - 56px);
    margin: 0 auto;
    border-bottom: 1px solid #e1e1e2;
    margin: 0 28px;

    /* text-align: center; */
}
.header>ul{
    width: 474px;
    display: flex;
    height: 43px;
    margin: 0 auto;
    line-height: 43px;
    justify-content: center;
}
.header>ul>li{
    width: 80px;
    text-align: center;
}
.active{
    color: #c62f2f;
    border-bottom:2px solid #c62f2f;
}
</style>