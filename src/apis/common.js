/* eslint-disable no-unused-vars */
import request from './httpRequest'
const PROD_SERVICE = 'http://10.221.2.6.xip.io:9080'
const DEV_SERVICE = 'http://117.50.44.72:7300/mock/5d01e94f42c56f375f4db989'

export let baseURL = DEV_SERVICE

export default {
  request: request,
  baseURL: baseURL
}
