import common from '../common'

const request = common.request
const baseURL = common.baseURL

// 用户模块， 调用方法：this.$http.user.xx()
export default {
  user: {
    info: params => request.get(`${baseURL}/user/info`, params)
  }
}
