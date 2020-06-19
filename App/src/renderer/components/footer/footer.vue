<template>
    <div>
        <!-- <audio :src="url"></audio> -->
        <div class="box">
            <span><span class="iconfont icon-shangyiqu"></span></span>
            <span class="iconfont icon-xihuan"></span>
            <span><span class="iconfont icon-xiayiqu"></span></span>
        </div>
    </div>
</template>
<script>
export default {
  props: ['url']
}
</script>
<style scoped>
.box{
    width: 200px;
    display: flex;
    justify-content: center;
}  
.box>span{
    width: 32px;
    height: 32px;
    
}
</style>