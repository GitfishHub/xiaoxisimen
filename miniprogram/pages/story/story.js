import Http from './../../http/http.js'
Page({
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items: []
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    })
  },

  onClickItem({ detail = {} }) {
    this.setData({ activeId: detail.id })
    wx.navigateTo({
      url: `/pages/story/story_detail/story_detail?id=${detail.id}`
    })
  },
  async init() {
    await Http.get('/storys/getmenu', {}).then((res) => {
      this.setData({
        items: res.data
      })
    })
  },
  onLoad: function (options) {
    this.init()
  },

  onReady: function () {},
  onShow: function () {
    // this.init()
  },
  onHide: function () {},
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
