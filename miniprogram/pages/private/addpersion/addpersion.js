// miniprogram/pages/private/addpersion/addpersion.js
const app = getApp()
var Http = app.require('http/http.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    banktype: '',
    bankcard: '',
    id: '',
    fileList: []
  },
  handleSave() {
    if (this.data.name && this.data.phone) {
      let url = this.data.id
        ? '/uncleinterface/rewriteuser'
        : '/uncleinterface/adduser'
      Http.post(url, this.data).then((res) => {
        if (res.code == 200) {
          wx.showToast({
            title: `保存成功`,
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 2100)
        }
      })
    } else {
      wx.showToast({
        title: `请输入名字和手机号`,
        icon: 'none',
        duration: 2000
      })
    }
  },
  beforeRead({ detail }) {
    this.data.fileList.push(detail.file)
    this.setData({
      fileList: this.data.fileList
    })
  },
  delete({ detail }) {
    this.data.fileList.splice(detail.index, 1)
    this.setData({
      fileList: this.data.fileList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      Http.post('/uncleinterface/searchuser', { id: options.id }).then(
        (res) => {
          if (res.code == 200) {
            this.setData({
              name: res.data.name,
              phone: res.data.phone,
              banktype: res.data.banktype,
              bankcard: res.data.bankcard,
              id: options.id
            })
          }
        }
      )
    }
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
