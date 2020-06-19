<template>
    <div class="box">
        <div>
            <div class="logo">
                <img src="../../assets/imgs/logo.png" alt="">
            </div>  
            <div class="WebOperations">
                <div class="btn">
                    <button @click="Back">
                        <span class="iconfont icon-shangyiye "></span>
                    </button>
                    <button @click="goahead">
                        <span class="iconfont icon-next"></span>
                    </button>
                </div>
                <div class="search">
                    <el-popover
                    placement="bottom"
                    width="420"
                    visible-arrow="true"
                    trigger="click">
                        <div class="Hot_search_text">
                            <h1>热搜榜</h1>
                        </div>
                        <ul class="list">
                            <li v-for="(item,index) in searchlist" :key="index">
                                <h2 :class="index<3? 'red' :'bule'">{{index + 1}}</h2>
                                <div class="list_details">
                                    <div>
                                        <h1>{{item.searchWord}}</h1>
                                        <h2>{{item.score}}</h2>
                                        <span class="iconfont icon-hot" v-show="item.iconType"></span>
                                        <span class="iconfont icon-shangsheng" v-show="item.source"></span>
                                    </div>
                                    <h3>{{item.content}}</h3>
                                </div>
                            </li>
                        </ul>
                        <input type="text" placeholder="搜索音乐，视频，歌词，电台" slot="reference">
                    </el-popover>
                    <span class="iconfont icon-sousuo sousuo"></span>
                </div>
            </div>
        </div>
        <div class="userOperations">
            <div>
                <el-avatar :src="user_msg.avatarUrl"></el-avatar>
                <el-tooltip :content="user_msg.nickname" placement="top">
                    <h1 class="name">{{user_msg.nickname}}</h1>
                </el-tooltip>
                
            </div>
            <div>|</div>
            <div class="Operations">
                <el-tooltip content="迷你形态" placement="top">
                    <span class="iconfont icon-suoxiao" @click="mini"></span>
                </el-tooltip>
                <el-tooltip content="最小化" placement="top" >
                    <span class="iconfont icon-zuixiaohua" @click="minimize"></span>
                </el-tooltip>
                <el-tooltip :content="text" placement="top" >
                    <span class="iconfont icon-zuidahua" @click="maximize"></span>
                </el-tooltip>
                <el-tooltip content="关闭" placement="top">
                    <span class="iconfont icon-guanbi2" @click="shutdown"></span>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'headers',
  data () {
    return {
      num: true,
      text: '最大化',
      searchlist: []
    }
  },
  methods: {
    mini () {
      console.log(1)
    },
    minimize () {
      this.$electron.ipcRenderer.send('min-window')
    },
    maximize () {
      if (this.num) {
        this.text = '最小化'
        this.$electron.ipcRenderer.send('max-window')
      } else {
        this.text = '最大化'
        this.$electron.ipcRenderer.send('login-window')
      }
      this.num = !this.num
    },
    shutdown () {
      this.$electron.ipcRenderer.send('close')
    },
    Back () {
      this.$router.go(-1)
    },
    goahead () {
      history.forward()
    },
    getsearch () {
      this.$axios.get('/search/hot/detail').then((res) => {
        // console.log(res.data.data)
        this.searchlist = res.data.data
      })
    }
  },
  mounted () {
    this.getsearch()
  },
  props: ['user_msg']
}
</script>
<style scoped>
.box{
    display: flex;
    background:#c62f2f;
    justify-content: space-between;
    padding-right: 8px;
    padding-top: 4px;

}
.box>div{
    display: flex;
}
.logo img{
    display: inline-block;
}
.btn{
    border-radius: 5px;
    width: 50px;
    height: 20px;
    display: flex;
    line-height: 20px;
    margin-top: 13px;
}
.btn>button{
    outline: none;
    border: 0;
    cursor: pointer;
    background: transparent;
    color: #d05656;
    width: 48%;
    text-align: center;
    padding: 0;
}
.btn>button:nth-child(1){
    border: 1px solid #a82828;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.btn>button:nth-child(2){
    border: 1px solid #a82828;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0;
}
.WebOperations{
    display: flex;
}
.search{
    width: 218px;
    height: 22px;
    position: relative;
    margin-top: 12px;
    margin-left: 10px;

}
.search input{
    outline: none;
    border-radius: 30px;
    height: 22px;
    width: 100%;
    text-indent:10px;
    background: rgba(0,0,0,.4);
    color:#fff
    
}
.search input::-webkit-input-placeholder{
    color: #ca7d7d;
}
.sousuo{
    position: absolute;
    top: 4px;
    right: 8px;
    color: #ca7d7d;

}
.userOperations{
    color:#e29595 ;
    display: flex;
    /* margin-left: 364px; */
    padding-top: 12px;

}
.name{
    width: 65px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.userOperations>div:nth-child(1){
    display: flex;
}
.userOperations>div:nth-child(1)>span{
    height: 24px;
    width: 24px;
}
.userOperations>div:nth-child(2){
    margin: 4px;
}
.userOperations>div:nth-child(1)>h1{
    font-size: 12px;
    margin: 4px;
}
.Operations{
    margin-top: 4px;
    margin-left: 14px;
}
.Operations>span{
    cursor: pointer;
}

.list{
    width: 420px;
    height: 500px;
    overflow-y: auto;
}
.list>li{
    display: flex;
    height: 34px;
    line-height: 34px;
    margin-top: 14px;
}
.list>li>h2{
    font-size: 14px;
    width: 54px;
    text-align: center;
}
.Hot_search_text{
    font-size: 14px;
}
.list_details>div>h1{
    font-size: 12px;
    color:#333333 ;
    font-weight: 600;
}
.list_details>div{
    display: flex;
    height: 16px;
    line-height: 16px;
}
.list_details>div>h2{
    font-size: 12px;
     color:#dfdfdf ;
    font-weight: 500;
    margin:0 12px;
}
.list_details{
    height: 34px;
}
.red{
    color:#ff3d3d ;
}
.blue{
    color: #a6a6a6;
}
.list_details>div>span{
    color: #ff4545;
}
.list_details>h3{
      color: #999999;
    font-size: 11px;
    line-height: 1;
    margin-top: 3px;
}
</style>











<style>
.el-popover{
    padding: 12px 0;
}
</style>