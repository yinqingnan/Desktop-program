<template>
    <div>
        <!-- <audio :src="url"></audio> -->
        <div class="box">
            <aplayer :music="music"></aplayer>
        </div>
    </div>
</template>
<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer
  },
  props: ['music']
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