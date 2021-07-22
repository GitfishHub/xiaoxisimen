Page({
  data: {
    random: '',
    trasn: 0,
    flag: true,
    reduceMark: 10,
    list: [],
    listOne: [
      {
        id: 1,
        content: '火锅'
      },
      {
        id: 2,
        content: '烤肉'
      },
      {
        id: 3,
        content: '肯德基'
      },
      {
        id: 4,
        content: '烧烤'
      },
      {
        id: 5,
        content: '炒菜'
      },
      {
        id: 6,
        content: '小龙虾'
      }
    ],
    menuVal: 1,
    menuList: [
      {
        id: 1,
        name: '夜宵类'
      },
      {
        id: 2,
        name: '正餐类'
      },
      {
        id: 3,
        name: '小吃类'
      }
    ],
    listTwo: [
      {
        id: 1,
        content: '各种煲'
      },
      {
        id: 2,
        content: '炒菜'
      },
      {
        id: 3,
        content: '火锅'
      },
      {
        id: 4,
        content: '自助餐'
      },
      {
        id: 5,
        content: '韩料'
      },
      {
        id: 6,
        content: '日料'
      }
    ],
    listThree: [
      {
        id: 1,
        content: '馄饨类'
      },
      {
        id: 2,
        content: '面食'
      },
      {
        id: 3,
        content: '麻辣烫'
      },
      {
        id: 4,
        content: '香锅类'
      },
      {
        id: 5,
        content: '串串'
      },
      {
        id: 6,
        content: '饭类'
      }
    ]
  },
  onLoad() {
    this.onChangeMenuVal({ detail: 1 })
  },
  onChangeMenuVal({ detail }) {
    switch (detail) {
      case 1:
        this.setData({
          list: this.data.listOne
        })
        break
      case 2:
        this.setData({
          list: this.data.listTwo
        })
        break
      case 3:
        this.setData({
          list: this.data.listThree
        })
        break

      default:
        break
    }
    this.setData({
      menuVal: detail
    })
  },
  //走你
  reduce() {
    this.data.flag = false
    let num = 0
    this.setData({
      random: Math.floor(Math.random() * 360),
      trasn: 0
    })
    let a = setInterval(() => {
      this.setData({
        trasn: this.data.trasn + 5
      })
      if (360 <= this.data.trasn) {
        this.data.trasn = 0
        num = num + 1
      }
      //转到6圈后停下
      if (num == 6) {
        this.currinl()
        this.data.flag = true
        clearInterval(a)
      }
    }, 5)
  },
  async zhuanin() {
    if (this.data.flag) {
      await this.reduce()
    } else {
      wx.showToast({
        title: '请勿一直重复点击',
        icon: 'none',
        duration: 2000
      })
    }
  },
  //得出结果
  addMark(mark) {
    wx.showToast({
      title: `勇敢牛牛,不怕困难,吃货们给我冲,老子今天要吃${mark}!!!`,
      icon: 'none',
      duration: 4000
    })
  },
  currinl() {
    let name = ''
    if (
      this.data.random == 30 ||
      this.data.random == 90 ||
      this.data.random == 150 ||
      this.data.random == 210 ||
      this.data.random == 330
    ) {
      this.setData({
        random: this.data.random + 5
      })
    }
    if (this.data.random < 30 || 330 < this.data.random) {
      name = this.data.list[0].content
    } else if (this.data.random > 30 && this.data.random < 90) {
      name = this.data.list[1].content
    } else if (this.data.random > 90 && this.data.random < 150) {
      name = this.data.list[2].content
    } else if (this.data.random > 150 && this.data.random < 210) {
      name = this.data.list[3].content
    } else if (this.data.random > 210 && this.data.random < 270) {
      name = this.data.list[4].content
    } else {
      name = this.data.list[5].content
    }
    let b = setInterval(async () => {
      this.setData({
        trasn: this.data.trasn + 2
      })
      if (this.data.random <= this.data.trasn) {
        clearInterval(b)
        await this.addMark(name)
      }
    }, 10)
  }
})
