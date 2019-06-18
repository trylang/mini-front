import common from '../common'

const request = common.request
const baseURL = common.baseURL

// 首页模块，调用方法：this.$http.home.xx()
export default {
  home: {
    info: params => request.get(`${baseURL}/home/info`, params)
  }
}