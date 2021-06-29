Page({
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items:[
      {
        // 导航名称
        text: '童话故事',
        // 禁用选项
        // disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '灰姑娘',
            // id，作为匹配选中状态的标识
            id: '灰姑娘',
            // 禁用选项
            // disabled: true,
          },
          {
            text: '小红帽',
            id: '小红帽',
          },
        ],
      },
      {
        text: '睡前故事',
        children: [
          {
            text: '见习死神',
            id: '见习死神',
          },
          {
            text: '我在等你',
            id: '我在等你',
          },
          {
            text: '月亮之子',
            id: '月亮之子',
          },
          {
            text: '零度的怀抱',
            id: '零度的怀抱',
          },
          {
            text: '尘世间',
            id: '尘世间',
          },
          {
            text: '酒',
            id: '酒',
          },
          {
            text: '想飞的猫',
            id: '想飞的猫',
          },
          {
            text: '神龙',
            id: '神龙',
          },
          {
            text: '遍插茱萸少一人',
            id: '遍插茱萸少一人',
          },
          {
            text: '最后一个太阳',
            id: '最后一个太阳',
          },
          {
            text: '就算你是妖又如何',
            id: '就算你是妖又如何',
          },
          {
            text: '英雄',
            id: '英雄',
          },
          {
            text: '桃妖(一)',
            id: '桃妖(一)',
          },
          {
            text: '桃妖(二)',
            id: '桃妖(二)',
          },
        ],
      },
      {
        text: '神话故事',
        children: [
          {
            text: '后羿射日',
            id: '后羿射日',
          },
          {
            text: '夸父逐日',
            id: '夸父逐日',
          },
        ],
      },
    ]
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    this.setData({ activeId: detail.id });
      wx.navigateTo({
      url: `/pages/story/story_detail/story_detail?id=${detail.id}`,
    }) 
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
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