//index.js
const app = getApp()
var that
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    datalist:[],
    num:null
  },

  onLoad: function() {
    that=this
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onReady:function(){
    wx.request({
      url: 'http://192.168.10.39:3000/toplist/detail',
      success(res){
        console.log(res)
        // console.log(res.data.list)
        that.setData({
          datalist:res.data.list
        })

      }
    })
  },
  btn:function(event){
    let id = event.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '../Detailspage/Detailspage?id='+ id,
    })
  }
})
