// miniprogram/pages/story/story_detail/story_detail.js
const app = getApp()
var Http = app.require('http/http.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    story: {},
    isPlaying: false // 是否播放
  },
  init(id) {
    Http.postjson('/storys/getdetail', {
      id
    }).then((res) => {
      this.setData({
        story: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init(options.id)
    this.setData({ id: options.id })
    wx.setNavigationBarTitle({
      title: options.id
    })
  },
  // 手动播放音频文件
  audioClick() {
    this.setData({
      isPlaying: !this.data.isPlaying
    })
    if (this.data.isPlaying) {
      this.AudioContext.play()
    } else {
      this.AudioContext.pause()
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.AudioContext = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
