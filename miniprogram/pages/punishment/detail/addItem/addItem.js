// pages/punishment/detail/addItem/addItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        show: false
      })
    },
    open() {
      this.setData({
        show: true
      })
    },
    handleInput({ detail }) {
      this.setData({
        content: detail.value
      })
    },
    async handleClickadd() {
      if (this.data.content) {
        await this.triggerEvent('addList', {
          list: {
            id: new Date().getTime(),
            name: this.data.content
          }
        })
      }
      this.onClose()
      this.setData({
        content: ''
      })
    }
  }
})
