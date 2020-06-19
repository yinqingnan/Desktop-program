<template>
  <div>
    <div class="box">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo Menu"
        @open="handleOpen"
        @close="handleClose"
        router
        :default-openeds="openeds"
      >
        <el-submenu index="1">
            <template slot="title">推荐</template>
            <el-menu-item index="1-1" route="/home/discover/personality">
                <span class="iconfont icon-xihuan"></span>
                <span>发现音乐</span>
            </el-menu-item>
            <el-menu-item index="1-2">
                <span class="iconfont icon-leida"></span>
                <span>私人FM</span>
            </el-menu-item>
            <el-menu-item index="1-3">
                <span class="iconfont icon-airudiantubiaohuizhi-zhuanqu_zhibojian"></span>
                <span>LOOK直播</span>
            </el-menu-item>
            <el-menu-item index="1-4">
                <span class="iconfont icon-video"></span>
                <span>视频</span>
            </el-menu-item>
            <el-menu-item index="1-5">
                <span class="iconfont icon-pengyou"></span>
                <span>朋友</span>
            </el-menu-item>
        </el-submenu>  
        <el-submenu index="2">
            <template slot="title">我的音乐</template>
            <el-menu-item index="2-1">
                <span class="iconfont icon-yinlemusic214"></span>
                <span>本地音乐</span>
            </el-menu-item>
             <el-menu-item index="2-2">
                <span class="iconfont icon-Group-"></span>
                <span>下载管理</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">创建的歌单</template>
            <el-menu-item index="3-1">
                <span class="iconfont icon-xihuan"></span>
                <span>我喜欢的音乐</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">收藏的歌单</template>
            <el-menu-item index="4-1">
                <span class="iconfont icon-xihuan"></span>
                <span>我喜欢的音乐</span>
            </el-menu-item>
        </el-submenu>
      </el-menu>
  
    </div>
      
  </div>
</template>
<script>
export default {
  data () {
    return {
      openeds: ['0', '1', '2', '0', '3', '4']
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>
<style scoped>
.box{
    font-size: 12px;
    overflow-y: auto;
}
.Menu{
     height: calc(100vh - 148px);
}
.el-submenu .el-menu-item{
    height: 40px;
    line-height: 40px;
}
.el-menu-item, .el-submenu__title{
    height: 40px;
    line-height: 40px; 
}
</style>
