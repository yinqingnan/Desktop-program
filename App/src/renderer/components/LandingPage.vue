<template>
  <div id="wrapper">
    <main>
        <SystemInformation/> 
        <Login/>
        <button @click="btn">变大</button>
        <button @click="btn1">初始化</button>
    </main>
  </div>
</template>

<script>
// import {ipcMain} from 'electron'
import SystemInformation from './LandingPage/SystemInformation'
import Login from './login/login'
export default {
  name: 'landing-page',
  components: { SystemInformation, Login },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    btn () {
      this.$electron.ipcRenderer.send('login-window')
    },
    btn1 () {
      this.$electron.ipcRenderer.send('reset-window')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  
</style>
