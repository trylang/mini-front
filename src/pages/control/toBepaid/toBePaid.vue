<template>
  <div class="all">
    <div>
      <div class="hasData">
        <div class="help">如需帮助请联系：400-607-6657</div>
      </div>
      <div class="allList">
        <div class="list">
          <p>您有待支付订单，请尽快登录https://cloud.inspur.com/处理。</p>
          <span>2019-03-01</span>
        </div>
        <div class="list">
          <p>您有待支付订单，请尽快登录https://cloud.inspur.com/处理。</p>
          <span>2019-03-01</span>
        </div>
      </div>
    </div>
    <div class="noData" v-if="isNoData">
      <img src="../../../../static/images/未登录头象@2x.png" alt>
      <p>您没有待支付订单</p>
      <navigator url="/pages/control/index" open-type="switchTab">
        <button type="default">返回</button>
      </navigator>
    </div>
  </div>
</template>
<script>
export default {
  config: {
    navigationBarTitleText: "待支付"
  },
  data() {
    return {
      isNoData: false
    };
  },
  methods: {}
};
</script>
<style scoped>
page {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(246, 246, 246, 1);
}
.all {
  /* position: relative; */
  width: 100%;
  height: 100%;
  background: rgba(246, 246, 246, 1);
}
.allList {
  padding: 0 30rpx;
  box-sizing: border-box;
}
.noData {
  width: 300rpx;
  height: 300rpx;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150rpx;
  margin-left: -150rpx;
  text-align: center;
}
.noData img {
  width: 107rpx;
  height: 91rpx;
}
.noData p {
  color: #666;
  font-size: 28rpx;
  margin: 37rpx 0;
}
.help {
  height: 80rpx;
  background: linear-gradient(
    180deg,
    rgba(251, 243, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: #fa6400;
  font-size: 28rpx;
  box-sizing: border-box;
  padding: 18rpx 0 0 30rpx;
}
.list {
  background-color: #fff;
  margin-top: 30rpx;
  color: #333;
  font-size: 30rpx;
  box-sizing: border-box;
  padding: 18rpx 24rpx;
}
.list span {
  color: #7f7f7f;
  font-size: 24rpx;
  display: inline-block;
  margin-top: 26rpx;
}
</style>

