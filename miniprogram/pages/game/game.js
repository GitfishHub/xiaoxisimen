// miniprogram/pages/game/game.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    allList: [
      {
        id: 1,
        list: [
          {
            id: '1-1',
            name: '大转盘'
          },
          {
            id: '1-2',
            name: '连连看'
          },
          {
            id: '1-3',
            name: '能量雨'
          }
        ],
        title: 'A类别游戏'
      },
      {
        id: 2,
        title: 'B类别游戏',
        list: [
          {
            id: '2-1',
            name: '你画我猜'
          }
        ]
      },
      {
        id: 3,
        title: 'C类别游戏',
        list: [
          {
            id: '3-1',
            name: '飞机大战'
          }
        ]
      }
    ],
    typeListA: [
      {
        id: 1,
        name: '大转盘'
      },
      {
        id: 2,
        name: '连连看'
      },
      {
        id: 3,
        name: '能量雨'
      }
    ]
  },
  handleClickPlay({ currentTarget }) {
    this.setData({
      currentIndex: currentTarget.dataset.index
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
