<template>
  <div class="all">
    <div>
      <div class="allList">
        <div class="list">
          <div class="clo1">
            <i v-if="!isSystem "></i>
            <i v-else></i>
          </div>
          <div class="clo2">
            <p>系统通知</p>
            <span>2019-03-01</span>
          </div>
          <div class="clo3">
            <b></b>
          </div>
        </div>
        <div class="list">
          <div class="clo1">
            <i v-if="isSystem "></i>
            <i v-else class="hh"></i>
          </div>
          <div class="clo2">
            <p>【系统消息】平台组建升级中心【系统消息】平台组建升级中心【系统消息】平台组建升级中心【系统消息】平台组建升级中心</p>
            <span>2019-03-01</span>
          </div>
          <div class="clo3">
            <b></b>
          </div>
        </div>
      </div>
    </div>
    <div class="noData" v-if="isNoData">
      <img src="../../../../static/images/未登录头象@2x.png" alt>
      <p>您没有待处理消息</p>
      <navigator url="/pages/user/index" open-type="switchTab">
        <button type="default">返回</button>
      </navigator>
    </div>
  </div>
</template>
<script>
export default {
  config: {
    navigationBarTitleText: "消息中心"
  },
  data: {
    isNoData: false,
    isSystem: false
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

.list {
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 32rpx;
  box-sizing: border-box;
  font-weight: 700;
  padding: 32rpx 40rpx;
}
.clo2 {
  width: 70%;
}
.clo2 span {
  color: #999;
  font-size: 28rpx;
  display: inline-block;
  margin-top: 8rpx;
}
.clo1 i {
  display: block;
  width: 96rpx;
  height: 96rpx;
  background-color: red;
}
.clo1 .hh {
  background-color: #342972;
}
.clo3 b {
  display: block;
  width: 16rpx;
  height: 16rpx;
  background: rgba(230, 23, 47, 1);
  border: 4rpx solid rgba(255, 255, 255, 1);
  margin-top: 20rpx;
  border-radius: 50%;
}
</style>

