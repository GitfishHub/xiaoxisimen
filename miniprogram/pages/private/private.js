// miniprogram/pages/private/private.js
import pinyin from './../../filter/Convert_Pinyin.js'
const app = getApp()
var Http = app.require('http/http.js')
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
    let _this = this
    wx.showModal({
      title: '提示',
      content: `是否确认删除人员${currentTarget.dataset.detail.name}的信息?`,
      success(result) {
        if (result.confirm) {
          Http.post('/uncleinterface/deluser', {
            id: currentTarget.dataset.detail.id
          }).then((res) => {
            if (res.code == 200) {
              _this.init()
            }
          })
        }
      }
    })
  },
  init() {
    let list = new Array(26)
    this.data.indexList.forEach((element, index) => {
      list[index] = {
        type: element,
        list: []
      }
    })
    Http.get('/uncleinterface/userlist').then((res) => {
      if (res.code == 200) {
        res.data.forEach((ele) => {
          let firstName = pinyin.getCamelChars(ele.name).substring(0, 1)
          let index = this.data.indexList.indexOf(firstName)
          list[index].list.push({
            id: ele._id,
            name: ele.name,
            phone: ele.phone
          })
        })
      }
      this.setData({
        persionList: list
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  handleClickDetail({ currentTarget }) {
    wx.navigateTo({
      url: `/pages/private/detailpersion/detailpersion?id=${currentTarget.dataset.id}`
    })
  },
  handleClickAdd({ currentTarget }) {
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
  onShow: function () {
    this.init()
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
