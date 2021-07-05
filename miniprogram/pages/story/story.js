Page({
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items: [
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
            id: '灰姑娘'
            // 禁用选项
            // disabled: true,
          },
          {
            text: '公主的眼泪',
            id: '公主的眼泪'
          }
        ]
      },
      {
        text: '睡前故事',
        children: [
          {
            text: '见习死神',
            id: '见习死神'
          },
          {
            text: '我在等你',
            id: '我在等你'
          },
          {
            text: '月亮之子',
            id: '月亮之子'
          },
          {
            text: '零度的怀抱',
            id: '零度的怀抱'
          },
          {
            text: '酒',
            id: '酒'
          },
          {
            text: '想飞的猫',
            id: '想飞的猫'
          },
          {
            text: '神龙',
            id: '神龙'
          },
          {
            text: '遍插茱萸少一人',
            id: '遍插茱萸少一人'
          },
          {
            text: '最后一个太阳',
            id: '最后一个太阳'
          },
          {
            text: '就算你是妖又如何',
            id: '就算你是妖又如何'
          },
          {
            text: '英雄',
            id: '英雄'
          },
          {
            text: '桃妖(一)',
            id: '桃妖(一)'
          },
          {
            text: '桃妖(二)',
            id: '桃妖(二)'
          }
        ]
      },
      {
        text: '神话故事',
        children: [
          {
            text: '王母洞的传说',
            id: '王母洞的传说'
          },
          {
            text: '神与穷人',
            id: '神与穷人'
          }
        ]
      },
      {
        text: '凄美短文',
        children: [
          {
            text: '尘世间',
            id: '尘世间'
          }
        ]
      },
      {
        text: '唯美短文',
        children: [
          {
            text: '静',
            id: '静'
          }
        ]
      },
      {
        text: '我有故事你有酒吗',
        children: [
          {
            text: '我有故事你有酒吗前言',
            id: '我有故事你有酒吗前言'
          },
          {
            text: '南阳素素',
            id: '南阳素素'
          },
          {
            text: '阿苏姑娘',
            id: '阿苏姑娘'
          },
          {
            text: '茉莉不是花',
            id: '茉莉不是花'
          },
          {
            text: '狗爷',
            id: '狗爷'
          }
        ]
      }
    ]
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
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
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
