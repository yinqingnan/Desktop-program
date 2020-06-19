// pages/Detailspage/Detailspage.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    songList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
    let id=options.id
    wx.request({
      url: 'http://192.168.10.39:3000/top/list?id='+id,
      success(res){
        console.log(res.data)
        that.setData({
          songList:res.data.playlist.tracks,
          list:res.data.playlist
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})