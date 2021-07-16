// const baseurl = 'http://122.112.183.103:3000'
const baseurl = 'https://www.hellowelcome.cn/prod-api'
//等待login接口调用
var app = getApp()
let inithttp = false
let token = ''
function poll(resolve) {
  if (inithttp) {
    resolve()
  } else {
    setTimeout(() => {
      poll(resolve)
    }, 200)
  }
}

async function prores(data) {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  // let Authorization = getApp().globalData.token ? getApp().globalData.token : '';
  // data.header['Authorization'] = Authorization ? Authorization : ''
  return new Promise((resolve, reject) => {
    wx.request({
      ...data,
      success: (res) => {
        if (res.data.code == 401) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        resolve(res.data)
        wx.hideLoading()
      },
      fail: (res) => {
        //这里写调用接口失败之后所运行的函数
        reject(res)
        wx.hideLoading()
      }
    })
  })
}
module.exports = {
  postjson(url, data) {
    return prores({
      method: 'POST',
      url: baseurl + url,
      data: data,
      timeout: 10000,
      header: {
        'Content-Type': 'application/json'
      }
    })
  },
  post(url, data) {
    return prores({
      method: 'POST',
      url: baseurl + url,
      data,
      timeout: 10000,
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, data) {
    return prores({
      method: 'GET',
      url: baseurl + url,
      data, // get 请求时带的参数
      timeout: 10000,
      header: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  },
  put(url, data) {
    return prores({
      method: 'PUT',
      url: baseurl + url,
      data, // get 请求时带的参数
      timeout: 10000,
      header: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  },
  delete(url, data) {
    return prores({
      method: 'DELETE',
      url: baseurl + url,
      data, // get 请求时带的参数
      timeout: 10000,
      header: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
