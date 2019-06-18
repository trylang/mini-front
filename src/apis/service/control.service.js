import common from '../common'

const request = common.request
const baseURL = common.baseURL

// 控制台模块，调用方法：this.$http.control.xx()
export default {
  control: {
    info: params => request.get(`${baseURL}/control/info`, params)
  }
}