<template>
  <div class="details">
    <h1>到期预警</h1>
    <p>2019-05-22 10:00:03</p>
    <span>尊敬的csg-shuziyingxiaobu：您的资源将于2019-05-29 00:00:00正式到期，截至目前仅剩7天（null,实例id: a8806aaa-e36e-42bd-ba77-91cd95f2014b）。请登录控制台进行续费。</span>
  </div>
</template>
<script>
export default {
  config: {
    navigationBarTitleText: "详情"
  },
  data: {},
  methods: {}
};
</script>
<style scoped>
.details {
  font-family: "微软雅黑";
  box-sizing: border-box;
  padding: 26rpx 30rpx;
}
.details h1 {
  font-size: 37rpx;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  line-height: 52rpx;
}
.details p {
  font-size: 22rpx;
  color: rgba(153, 153, 153, 1);
  line-height: 30rpx;
  padding: 10rpx 0;
}
.details span {
  font-size: 28rpx;
  color: rgba(53, 53, 53, 1);
  line-height: 44rpx;
}
</style>

