
import homeApi from './service/home.service'
import controlApi from './service/control.service'
import userApi from './service/user.service'

import common from './common'

const request = common.request
const baseURL = common.baseURL

export const api = {
  // 公共模块， this.$http.checkToken(param)
  checkToken: params => request.post(`${baseURL}/token`, params),
  login: params => request.get(`${baseURL}/login`, params),

  ...homeApi,
  ...controlApi,
  ...userApi
}
