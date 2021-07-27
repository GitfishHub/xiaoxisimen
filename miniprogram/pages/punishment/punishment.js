// miniprogram/pages/punishment/punishment.js
import json from './static/index.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 0 //1惩罚2奖励
  },
  handleClickMan({ currentTarget }) {
    let data = []
    if (this.data.type == 1) {
      data =
        currentTarget.dataset.type == 1
          ? JSON.stringify(json.chengfaMan)
          : JSON.stringify(json.chengfaLady)
    } else {
      data =
        currentTarget.dataset.type == 1
          ? JSON.stringify(json.jiangliMan)
          : JSON.stringify(json.jiangliLady)
    }
    wx.navigateTo({
      url: `/pages/punishment/detail/detail?girdList=${data}?type=${this.data.type}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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
