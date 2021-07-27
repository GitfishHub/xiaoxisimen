// miniprogram/pages/turntable/man/man.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    timer: null,
    btn: true,
    gridList: [],
    type: null
  },
  addList({ detail }) {
    this.data.gridList.push(detail.list)
    this.setData({
      gridList: this.data.gridList
    })
  },
  pressDelete({ currentTarget }) {
    let _this = this
    wx.showModal({
      title: '提示',
      content: `确定要删除${
        this.data.gridList[currentTarget.dataset.index].name
      }吗?`,
      success: (res) => {
        if (res.confirm) {
          this.data.gridList.splice(currentTarget.dataset.index, 1)
          this.setData({
            gridList: _this.data.gridList,
            currentIndex: 0
          })
        }
      }
    })
  },
  handleClickAdd() {
    this.item.open()
  },
  handleClickGo() {
    if (this.data.gridList.length > 1) {
      if (this.data.btn) {
        this.setData({
          timer: setInterval(() => {
            this.setData({
              currentIndex: Math.floor(
                Math.random() * this.data.gridList.length
              )
            })
          }, 40),
          btn: !this.data.btn
        })
      } else {
        clearInterval(this.data.timer)
        wx.showToast({
          title: `${this.data.gridList[this.data.currentIndex].name}`,
          icon: 'none',
          image:
            this.data.type == 1
              ? './../../../images/cry.png'
              : './../../../images/xiao.png',
          duration: 3000
        })
        this.setData({
          btn: !this.data.btn,
          timer: null
        })
      }
    } else {
      wx.showToast({
        title: '请先添加两个或者两个以上的内容',
        icon: 'none',
        duration: 3000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      gridList: JSON.parse(options.girdList),
      type: options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.item = this.selectComponent('#item')
  },

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
