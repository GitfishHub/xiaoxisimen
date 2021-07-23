// miniprogram/pages/punishment/punishment.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    manList: [
      {
        id: 1,
        name: '洗碗3天'
      },
      {
        id: 2,
        name: '录哄睡故事一个'
      },
      {
        id: 3,
        name: '俯卧撑60个'
      },
      {
        id: 4,
        name: '承包周末的厨房'
      },
      {
        id: 5,
        name: '罚款20到基金会'
      },
      {
        id: 6,
        name: '洗臭袜子3天'
      }
    ],
    ladyList: [
      {
        id: 1,
        name: '按摩15分钟'
      },
      {
        id: 2,
        name: '录哄睡故事一个'
      },
      {
        id: 3,
        name: '整理房间1小时'
      },
      {
        id: 4,
        name: '承包周末的厨房'
      },
      {
        id: 5,
        name: '罚款20到基金会'
      },
      {
        id: 6,
        name: '倒垃圾3天'
      }
    ]
  },
  handleClickMan({ currentTarget }) {
    let data =
      currentTarget.dataset.type == 1
        ? JSON.stringify(this.data.manList)
        : JSON.stringify(this.data.ladyList)
    wx.navigateTo({
      url: `/pages/punishment/detail/detail?girdList=${data}`
    })
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
