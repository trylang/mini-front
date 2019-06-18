import request from './httpRequest'
const PROD_SERVICE = 'https://xxx/mini-app-srevice'
const DEV_SERVICE = 'https://localhost:8081/lawyer-card-service'

export let baseURL = DEV_SERVICE

export default {
  request: request,
  baseURL: baseURL
}
