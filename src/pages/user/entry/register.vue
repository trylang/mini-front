<template>
  <div class="register-wrap">
    <view class="title-wrap">
      <text>欢迎注册浪潮云</text>
    </view>
    <view class="action-wrap">
      <view class="item-wrap">
        <i class="iconfont iconicon-Cellphonenumber icon"></i>
        <text style="margin-right: 20rpx;">+86</text>
        <input placeholder-class="placeholder-class" placeholder="输入手机号码" auto-focus/>
      </view>

      <view class="item-wrap">
        <i class="iconfont iconicon-VerificationCode icon"></i>
        <input placeholder-class="placeholder-class" placeholder="输入验证码" auto-focus/>
        <a class="link" href="">获取验证码</a>
      </view>
      
      <view class="action">
        <button class="btn" @click="registerNext()">下一步</button>
      </view>

    </view>
  </div>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: '浪潮云注册'
  },
  data () {
    return {

    }
  },
  methods: {
    registerNext () {
      this.$router.push('register_next')
    }
  }
}
</script>

<style lang="scss">
@import '@/css/common.scss';

.register-wrap {
  margin: 60rpx;
  @extend .vertical;
  .title-wrap {
    @extend .vertical;
    color: #020202;
    font-size: 56rpx;
  }

  .action-wrap {
    width: 100%;
    margin-top: 50rpx;
    .item-wrap {
      padding: 20rpx 0 20rpx 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #D9D9D9;
      .icon {
        margin-right: 24rpx;
        color: #ccc;
      }
    }
  }

  .action {
    margin-top: 50rpx;
    .btn {
      height: 96rpx;
      color: #fff;
      font-size: 36rpx;
      background: #D9D9D9;
    }
    .action-link {
      margin-top: 20rpx; 
      display: flex;
      justify-content: space-between;
      @extend .link;
    }
  }
  
}

.placeholder-class {
  color: #ccc;
  font-size: 34rpx;
}


</style>