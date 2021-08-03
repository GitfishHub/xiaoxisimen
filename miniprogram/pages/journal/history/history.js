// miniprogram/pages/journal/history/history.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    historyList: [
      {
        id: 1,
        title: '难忘的一天',
        timer: '1627894646434'
      },
      {
        id: 2,
        title: '散',
        timer: '213123123123'
      },
      {
        id: 3,
        title: '关',
        timer: '213123123123'
      },
      {
        id: 4,
        title: '可',
        timer: '213123123123'
      }
    ]
  },
  handleClickDetail({ currentTarget }) {
    wx.navigateTo({
      url: `/pages/journal/history/detail/detail?id=${currentTarget.dataset.id}`
    })
    console.log(currentTarget, 111)
  },
  handleClickDelete({ currentTarget }) {
    console.log(
      '%c [ id ]',
      'font-size:13px; background:pink; color:#bf2c9f;',
      currentTarget.dataset.id
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
