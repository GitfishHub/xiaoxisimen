Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '故事',
        color: '#FF8C00',
        icon: 'like',
        path: '/pages/story/story'
      },

      {
        name: '用餐盲选',
        color: '#DDA0DD',
        icon: 'bag',
        path: '/pages/turntable/turntable'
      },
      {
        name: '购物',
        color: 'red',
        icon: 'shop-collect'
      },
      {
        name: '许愿屋',
        color: '	#FF00FF',
        icon: 'point-gift'
      },
      {
        name: '游戏',
        color: '#7CFC00',
        icon: 'fire'
      },
      {
        name: '小树洞',
        color: '	#87CEFA',
        icon: 'smile'
      },
      {
        name: '惩罚',
        color: '#000',
        icon: 'eye',
        path: '/pages/punishment/punishment'
      },
      {
        name: '奖励',
        color: '#2E8B57',
        icon: 'gold-coin'
      },
      {
        name: '日志记录',
        color: '	#FF69B4',
        icon: 'column'
      },
      {
        name: '敬请期待',
        color: '#A0522D',
        icon: 'weapp-nav'
      }
    ]
  },
  handleClick({ currentTarget }) {
    console.log(currentTarget.dataset.path, '111')
    if (currentTarget.dataset.path) {
      wx.navigateTo({
        url: currentTarget.dataset.path
      })
    } else {
      wx.showToast({
        title: `模块正在开发中,敬请期待~`,
        icon: 'none',
        duration: 2000
      })
    }
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
