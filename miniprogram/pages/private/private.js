// miniprogram/pages/private/private.js
import json from './public.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indexList: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'p',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ],
    persionList: []
  },
  handleClickDelete({ currentTarget }) {
    wx.showModal({
      title: '提示',
      content: `是否确认删除人员${currentTarget.dataset.detail.name}的信息?`,
      success(res) {
        console.log(res)
      }
    })
  },
  handleClickEditor() {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      persionList: json
    })
  },
  handleClickDetail({ currentTarget }) {
    wx.navigateTo({
      url: `/pages/private/detailpersion/detailpersion?id=${currentTarget.dataset.id}`
    })
  },
  handleClickAdd({ currentTarget }) {
    console.log(
      '%c [ currentTarget ]',
      'font-size:13px; background:pink; color:#bf2c9f;',
      currentTarget
    )
    wx.navigateTo({
      url: `/pages/private/addpersion/addpersion?id=${
        currentTarget.dataset.detail ? currentTarget.dataset.detail.id : ''
      }`
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
