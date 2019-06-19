<template>
  <div class="login-wrap">
    <view class="img-wrap">
      <image class="logo marg-b-10" src="/static/users/logo.svg" alt="" />
      <text>无处不在的计算</text>
    </view>
    <view class="action-wrap">

      <view>
        <xForm ref="xform" :model="formData" :rules="rules">
          <xFormItem label="" prop="name">
            <i class="iconfont iconicon-Username icon"></i>
            <xInput v-model="formData.name" placeholder="用户名或电子邮箱"/>
          </xFormItem>

          <xFormItem label="" prop="password">
            <i class="iconfont iconicon-Password icon"></i>
            <xInput v-model="formData.password" type="password" placeholder="密码"/>
          </xFormItem>
        </xForm>
      </view>

      <view class="action">
        <button class="btn" @click="handleLogin()">登录</button>
        <button class="btn" @click="handleReset()">重置</button>
        <view class="action-link">
          <a href="/pages/user/entry/register">忘记密码</a> 
          <a href="/pages/user/entry/register">立即注册</a> 
        </view>
      </view>

    </view>
  </div>
</template>

<script>
import xForm from '../components/form'
import xFormItem from '../components/formItem'
import xInput from '../components/input'

export default {
  config: {
    navigationBarTitleText: '浪潮云登录'
  },
  components: { xForm, xFormItem, xInput },
  data () {
    return {
      formData: {name: '', password: ''},
      rules: {
        name: [{required: true, message: '用户名或电子邮箱不能为空', trigger: 'blur'},
          {type: 'email', pattern: /^[a-z]+$/, message: '邮箱格式不正确', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', pattern: /^[a-z]+$/, message: '密码格式不正确', trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.xform.validate(valid => {
        if (valid) console.log('提交成功')
        else console.log('校验失败')
      })
      console.log(this.formData)
    },
    handleReset () {
      this.$refs.xform.resetFields()
    }
  }
}
</script>

<style lang="scss">
@import '@/css/common.scss';

.login-wrap {
  margin: 60rpx;
  @extend .vertical;
  .img-wrap {
    @extend .vertical;
    color: #7F7F7F;
    font-size: 24rpx;
    letter-spacing:22rpx;
    .logo {
      height: 60rpx;
    }
  }

  .action-wrap {
    width: 100%;
    margin-top: 50rpx;
    .item-wrap {
      padding: 20rpx 0 20rpx 0;
      display: flex;
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