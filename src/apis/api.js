import homeApi from './service/home.service'
import controlApi from './service/control.service'
import userApi from './service/user.service'

import common from './common'

const request = common.request
const baseURL = common.baseURL

export const api = {
  // 公共模块， this.$http.checkToken(param)
  ...homeApi,
  ...controlApi,
  ...userApi
}
