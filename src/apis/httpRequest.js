import Fly from 'flyio/dist/npm/wx'
import { checkToken } from './auth'
import { api } from './api'

var fly = new Fly()

// checkToken();

let token = '';

fly.interceptors.request.use(request => {
  token = wx.getStorageSync('token')
  if (!token) {
    fly.lock();
    return api.checkToken().then(res => {
      token = res.data.data.token;
      request.headers = {
        'token': token,
        'content-type': 'application/json'
      }
      return request;
    }).finally(() => {
      fly.unlock();
    })
  } else {
    request.headers = {
      'token': token,
      'content-type': 'application/json'
    }
  }
  
  wx.showLoading({title: '加载中...'})
  
  return request
})

fly.interceptors.response.use(response => {
  wx.hideLoading()
  return response.data
}, err => {
  wx.hideLoading()
  if(err) {
    wx.showToast({
      title: err.message,
      icon: 'none',
      duration: 1000
    })
  }
})

// 设置超时
fly.config.timeout = 7000

export default fly


