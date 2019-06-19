<template>
  <div class="user-warp">
    <view class="user-action" :style="{background: user.bg}">
      <button v-if="!userImg" class="action-btn" @click="handleAction">登录/注册</button>
      <view v-if="userImg" style="position:relative;">
        <image class="userImg marg-b-20" :src="userImg" @click="showDialog"></image>
        <image class=".user-anth" :src="user.auth"></image>
      </view>
      <text v-if="userImg">用户名</text>
    </view>
    
    <view class="info-list">
      <view class="info-item" v-for="(item, index) in userInfos" :key="index">
        <image v-if="item.value==null" class="img" :src="item.url"></image> 
        <text class="value">{{item.value}}</text> 
        <text class="text marg-t-10">{{item.label}}</text>
      </view>
    </view>
    <view class="action-list">
      <view class="action-item" v-for="(item, index) in actionList" :key="index" @click="goDetails(item.details)">
        <button class="kefu" v-if="item.details=='kefu'" open-type="contact" :session-from="sessionFrom" bindcontact="handleContact">
          在线客服
        </button>
        <view class="left">
          <image class="img" :src="item.url"></image> 
          <text class="text marg-l-10">{{item.label}}</text>
        </view>
        <view class="right">
          <text class="desc marg-r-10">{{item.desc}}</text>
          <image class="img" :src="item.url"></image> 
        </view>
      </view>
    </view>

    <w-dialog
      width="70%"
      :visible="showAuth"
      >
      <view class="auth-dialog" hover-class="none" hover-stop-propagation="false">
        <image class="auth-img marg-b-20" src="/static/users/auth.png" ></image>
        <text class="remind marg-b-20">实名提醒</text>
        <text class="remind-desc marg-b-20">请尽快登录浪潮云官网进行实名认证</text>
        <button class="remind-btn" @click="hideDialog" type="info">去实名</button>
      </view>
    </w-dialog>
  </div>
  
</template>

<script>

export default {
  config: {
    navigationBarBackgroundColor: '#0060B0',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '浪潮云助手'
  },

  data () {
    return {
      userInfo: mpvue.getStorageSync('userInfo'),
      showAuth: false,
      // userImg: '/static/users/user.png',
      userImg: '',
      userInfos: [{
        url: '/static/tabs/home.png',
        value: 1000.00,
        label: '余额'
      }, {
        url: '/static/tabs/home.png',
        value: 0,
        label: '待支付'
      }, {
        url: '/static/tabs/home.png',
        value: 1,
        label: '优惠券'
      }],

      actionList: [{
        url: '/static/tabs/home.png',
        label: '消息中心',
        details: '/pages/user/infoCenter/infoCenter'
      }, {
        url: '/static/tabs/home.png',
        label: 'MFA安全码'
      }, {
        url: '/static/tabs/home.png',
        label: '在线客服',
        desc: '快速1对1解答',
        details: 'kefu'
      }, {
        url: '/static/tabs/home.png',
        label: '分享小程序',
        details: 'share'
      }, {
        url: '/static/tabs/home.png',
        label: '联系电话',
        desc: '7*24小时服务',
        details: 'phone'
      }, {
        url: '/static/tabs/home.png',
        label: '设置',
        details: '/pages/user/setting'
      }]
    }
  },

  computed: {
    user () {
      return {
        bg: this.userImg ? '#0060B0' : '#F7F8FB',
        auth: !this.userImg ? '/static/users/real_name.png' : '/static/users/no_real_name.png'
      }
    },
    sessionFrom () {
      return `7moor|${this.userInfo.nickName}|${this.userInfo.avatarUrl}`
    }
  },
  methods: {
    showDialog () {
      this.showAuth = true
    },
    hideDialog () {
      this.showAuth = false
    },
    goDetails (e) {
      if (e === 'kefu') return
      if (e === 'share') {
        console.log('分享')
      } else if (e === 'phone') {
        console.log('联系电话')
      } else {
        this.$router.push({ path: e })
      }
    },
    handleAction () {
      this.$router.push({path: '/pages/user/entry/login'})
    },
    handleContact (e) {
      console.log(e.path)
      console.log(e.query)
    }
  }
}
</script>

<style lang="scss">
@import '@/css/common.scss';

.user-warp {
  text-align: center;
  background-color: #F2F2F2;
  
  .user-action {
    height: 256rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: #F7F8FB;
    font-size: 30rpx;
    color: #fff;
    .action-btn {
      width:200rpx;
      height:64rpx;
      background: $primary-color;
      color: #fff;
      font-size: 26rpx;
      border-radius: 0%;
    }
    .userImg {
      width: 114rpx;
      height: 114rpx;
      border-radius: 50%;
    }
    .user-anth {
      position: absolute;
      right: 0;
      bottom: 10%;
      width: 36rpx;
      height: 36rpx;
    }
  }

  .info-list {
    height: 150rpx;
    background: #fff;
    margin-bottom: 20rpx;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    .info-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26rpx;
      color: $text-color;
      .value {
        color: $primary-text-color;
        font-size: 46rpx;
        font-weight:500;
      }
    }
  }

  .action-list {
    padding: 0 30rpx;
    background: #fff;
    .action-item {
      position: relative;
      height: 100rpx;
      color: $text-color;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1rpx solid #D9D9D9;
      font-size: 30rpx;
      vertical-align: middle;
      .kefu {
        position: absolute;
        width: 100%;
        opacity: 0;
      }
      .desc {
        color: $desc-color;
      }
    }
    
  }

  .auth-dialog {
    width: 100%;
    height: 480rpx;
    // position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .auth-img {
      // position: absolute;
      // top: -50%;
      // left: 50%;
      width: 254rpx;
      height: 196rpx;
    }
    .remind {
      color: $text-color;
      font-size: 34rpx;
      font-weight:600;
    }

    .remind-desc {
      color: $text-color;
      font-size:26rpx;
    }

    .remind-btn {
      width:360rpx;
      height: 72rpx;
      font-size: 26rpx;
      background: $primary-color;
      color: #fff;
    }
  }

}
</style>

