<script>
export default {
  // 公共UI组件放这里
  globalConfig: {
    usingComponents: {
      'w-button': 'wuss-weapp/dist/w-button/index',
      'w-dialog': 'wuss-weapp/dist/w-dialog/index',
      'w-popup': 'wuss-weapp/dist/w-popup/index',
      "w-cell": "wuss-weapp/dist/w-cell/index",
      "w-switch": "wuss-weapp/dist/w-switch/index",
      "w-pane": "wuss-weapp/dist/w-pane/index",
      "w-alert":"wuss-weapp/dist/w-alert/index",
      "w-icon": "wuss-weapp/dist/w-icon/index",
      "w-action-sheet":"wuss-weapp/dist/w-action-sheet/index"
    }
  },

  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
  page{
    border-top:1px solid #F6F6F6;
  }
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
