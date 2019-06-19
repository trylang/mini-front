/* eslint-disable no-unused-vars */
import Fly from 'flyio/dist/npm/wx'
import cookies from 'weapp-cookie'


var fly = new Fly()

let token = cookies.get('inspur_token');   // TODO: 此处待确定token是否会随着每一次请求不同而重新生成

fly.interceptors.request.use(request => {
  if (!token) {
    console.log(`获取token失败`)
    // TODO: 通过 keycloakService 处理异常
    // fly.lock();
    // return api.checkToken().then(res => {
    //   token = res.data.data.token;
    //   request.headers = {
    //     'token': token,
    //     'content-type': 'application/json'
    //   }
    //   return request;
    // }).finally(() => {
    //   fly.unlock();
    // })
  }
  else {
    request.headers = {
      'Authorization': `bearer ${token}`,
      'content-type': 'application/json'
    }
  }
  wx.showLoading({ title: '加载中...' })

  return request
})

fly.interceptors.response.use(response => {
  wx.hideLoading()
  return response.data
}, err => {
  wx.hideLoading()
  if (err) {
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
