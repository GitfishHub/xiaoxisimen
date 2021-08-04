const app = getApp()
import Http from './../../http/http.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '睡前故事',
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
      // {
      //   name: '许愿屋',
      //   color: '	#FF00FF',
      //   icon: 'point-gift'
      // },
      // {
      //   name: '小树洞',
      //   color: '	#87CEFA',
      //   icon: 'smile'
      // },
      {
        name: '游戏',
        color: '#7CFC00',
        icon: 'fire',
        path: '/pages/game/game'
      },
      {
        name: '惩罚',
        color: '#000',
        icon: 'eye',
        path: '/pages/punishment/punishment?type=1'
      },
      {
        name: '奖励',
        color: '#2E8B57',
        icon: 'gold-coin',
        path: '/pages/punishment/punishment?type=2'
      },
      {
        name: '日志记录',
        color: '#FF69B4',
        icon: 'column',
        path: '/pages/journal/journal'
      },
      {
        name: '敬请期待',
        color: '#A0522D',
        icon: 'weapp-nav'
      }
    ],
    specil:{
        name: '私有模块',
        color: '#87CEFA',
        icon: 'smile',
        path:'/pages/private/private'
    },
    userInfo: {}
  },
  handleClickInfo({ detail }) {
    // console.log(detail, 111)
    // wx.setStorage({
    //   key: 'userInfo',
    //   data: detail.userInfo
    // })
    // this.setData({
    //   userInfo: detail.userInfo
    // })
    // app.globalData.userInfo = this.data.userInfo

    wx.getUserProfile({
      desc: '用于登录使用', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        let { avatarUrl, nickName } = res.userInfo
        avatarUrl = avatarUrl.replace(/132/, '0')
        Http.postjson('/users/setuserInfo', {
          id: this.data.userInfo._id,
          headurl: res.userInfo.avatarUrl.replace(/132/, '0'),
          nick: res.userInfo.nickName
        }).then((result) => {
          this.setData({
            userInfo: result.data
          })
        })
      }
    })
  },
  handleClick({ currentTarget }) {
    if (currentTarget.dataset.path) {
      wx.navigateTo({
        url: currentTarget.dataset.path
      })
    } else {
      wx.showToast({
        title: `模块正在开发中,敬请期待`,
        icon: 'none',
        duration: 2000
      })
    }
  },
  wxlogin: function () {
    // setTimeout(() => {
    //   if (app.globalData.userInfo) {
    //     this.setData({
    //       userInfo: app.globalData.userInfo
    //     })
    //   }
    // }, 100)
    let _this = this
    wx.login({
      success(res) {
        if (res.code) {
          Http.postjson('/users/getcodebdq', {
            code: res.code
          }).then((res) => {
            _this.setData({
              userInfo: res.data
            })
            app.globalData.userInfo = _this.data.userInfo
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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
  async onShow() {
    await this.wxlogin()
  },

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
