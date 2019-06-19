import common from '../common'
import store from '@/store'

const request = common.request
const baseURL = common.baseURL

/** 获取 userId */
function getUserId() {
  return store.getters.getUserInfo.userId
}
// 控制台模块，调用方法：this.$http.control.xx().then(res => {})
export default {
  control: {
    info: params => request.get(`${baseURL}/control/info`, params),
    balance: () => request.get(`${baseURL}/account/${getUserId()}/balance`)
  }
}