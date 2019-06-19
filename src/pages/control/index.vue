<template>
  <div>
    <div class="header">
      <div class="header_con">
        <p>{{ balance }}</p>
        <span>余额</span>
      </div>
      <div class="header_con" @click="toBePaid()">
        <p>100,000</p>
        <span>待支付</span>
      </div>
      <div class="header_con" @click="workOrder()">
        <p>2</p>
        <span>工单</span>
      </div>
    </div>
    <div class="content">
      <div class="login">
        <div class="login_detail">
          <i>
            <img src="../../../static/images/未登录头象@2x.png" alt>
          </i>
          <span>登录浪潮云助手</span>
        </div>
        <div class="arrow">
          <i>></i>
        </div>
      </div>
      <div class="product">
        <ProList></ProList>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";
import ProList from "@/components/proList";

export default {
  config: {
    navigationBarTitleText: "控制台",
    navigationBarBackgroundColor: "#0062ac",
    navigationBarTextStyle: "white"
  },

  components: {
    card,
    ProList
  },

  data() {
    return {
      balance: "",
      logs: [],
      imgUrls: [
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870"
      ]
    };
  },

  created() {
    this.initData();
    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
    } else {
      logs = mpvue.getStorageSync("logs") || [];
    }
    this.logs = logs.map(log => formatTime(new Date(log)));
  },
  methods: {
    initData() {
      this.$http.control.balance().then(res => {
        this.balance = res.result.totalBalance;
      });
    },
    toBePaid() {
      this.initData(); // FIXME: rm me after debug
      // this.$router.push({ path: "/pages/control/toBePaid/toBePaid" });
    },
    workOrder() {
      this.$router.push({ path: "/pages/control/workOrder/workOrder" });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  height: 207rpx;
  padding: 45rpx 37rpx;
  box-sizing: border-box;
  background-color: #0062ac;
}
.header_con {
  width: 33.33%;
  text-align: center;
}
.header_con p {
  margin-bottom: 21rpx;
  color: #fff;
  font-size: 50rpx;
}
.header_con span {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.4);
}
.content {
  background: #f6f6f6;
  height: 100%;
  padding-top: 18rpx;
}
.login {
  display: flex;
  background: #fff;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24rpx 33rpx 34rpx 33rpx;
  margin-bottom: 18rpx;
}
.login_detail i {
  display: inline-block;
  width: 64rpx;
  height: 64rpx;
  margin-right: 18rpx;
}
.login_detail i img {
  width: 64rpx;
  height: 64rpx;
  vertical-align: middle;
}
.login_detail span {
  color: #333333;
  font-family: "微软雅黑";
  font-size: 32rpx;
}
.login_detail .arrow {
  width: 34rpx;
  height: 34rpx;
  font-size: 34rpx;
  color: #d1d1d6;
}
.product {
  display: flex;
  background-color: #fff;
  flex-wrap: wrap;
}
.module {
  width: 33.33%;
  height: 226rpx;
  box-sizing: border-box;
  padding: 54rpx 38rpx 45rpx 38rpx;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
}
.module div {
  width: 60rpx;
  margin-bottom: 32rpx;
  height: 60rpx;
  margin-left: 35%;
}
.module:nth-child(3n) {
  border-right: none;
}
.module div img {
  width: 60rpx;
  height: 60rpx;
}
.module span {
  font-size: 28rpx;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
</style>
