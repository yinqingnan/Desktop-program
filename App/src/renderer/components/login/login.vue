<template>
    <div class="centent" :style="bg">
        <div class="box">
            <h1>网易云音乐登录</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" label-position="left" class="demo-ruleForm">
            <el-form-item label="账号" prop="zh">
                <el-input type="text" v-model="ruleForm.zh" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" @keyup.enter.native="onSubmit"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (value.length > 11) {
        callback(new Error('请输入正确的手机号码'))
      } else if (!this.isvalidPhone(value)) {
        callback(new Error('手机号码格式不正确，请进行检查'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: 'yinqingnan',
        zh: '18111184267'

      },
      bg: {},
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validatePass2 } //  这里需要用到全局变量
        ],
        zh: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.submitForm('ruleForm')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.get('/login/cellphone' + '?phone=' + this.ruleForm.zh + '&' + 'password=' + this.ruleForm.pass).then((res) => {
            if (res.data.code === 200) {
              // console.log(res.data)
              // this.$message.success('登录成功')
              this.$message({
                showClose: true,
                duration: 1000,
                message: '登录成功',
                type: 'success'
              })
              let Token = res.token
              localStorage.setItem('token', Token)
              this.$router.push({ path: '/home/discover/personality', query: res.data.profile })
              this.$electron.ipcRenderer.send('login-window')
            } else if (res.data.code === 502) {
              this.$message.error('错了哦,这是一条错误消息')
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.ruleForm.zh = ''
      this.ruleForm.pass = ''
    },
    isvalidPhone (str) {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      return reg.test(str)
    }
  },
  created () {
    this.bg.backgroundImage = 'url(' + require('../../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
    this.$electron.ipcRenderer.send('reset-window')
  }
}
</script>

<style scoped>
    .box{
        text-align: center;
        display: inline-block;
        width: 280px;
        margin-top: 18%;
    }
    .box>h1{
        font-size: 16px;
        line-height: 28px;
        text-indent: 38px;
        margin-bottom: 18px;
    }
    .centent{
        text-align: center;
        background-size: 100% 100%;
        color: #fff;
        height: 100vh;
    }
    .el-form-item__label{
      text-align: left;
    }
</style>
