// miniprogram/pages/jingjing/jingjing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:0,
    background: ['./../../images/one.jpg', './../../images/two.jpg', './../../images/three.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    "tabBar": {
      "color": "#999",
      "selectedColor": "#4da9ff",
      "borderStyle": "black",
      "position": "bottom",
      "list": [
        {
          "pagePath": "pages/story/story",
          "text": "故事",
          "iconPath": "images/find@2x.png",
          "selectedIconPath": "images/find_active@2x.png"
        },
        {
          "pagePath": "pages/dongdong/dongdong",
          "text": "邀请函",
          "iconPath": "images/mine@2x.png",
          "selectedIconPath": "images/mine_active@2x.png"
        },
        {
          "pagePath": "pages/index/index",
          "text": "我的",
          "iconPath": "images/buycar@2x.png",
          "selectedIconPath": "images/buycar_active@2x.png"
        }
      ]
    },
  },
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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