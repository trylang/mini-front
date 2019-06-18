import { api } from './api'

export function checkToken() {
  setInterval(() => {
    api.checkToken().then(res => {
      console.log(res)
    })
  }, 1000)  
}


