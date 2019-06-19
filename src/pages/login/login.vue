<template>
  <div class="counter-warp">
    <button @click="req1">登录</button>
    <!-- <button @click="req2">第二次请求token</button> -->
    <button @click="ref">手动刷新token</button>
    <button @click="autoRef">自动刷新token</button>
    <!-- <button @click="logout">退出登录</button> -->
    <!-- <button @click="logout">刷新userId/TODO</button> -->
  </div>
</template>

<script>
const url = `http://117.50.44.72:7300/mock/5d01e94f42c56f375f4db989`;

import Fly from "flyio/dist/npm/wx";
import KeycloakService from "../../apis/keycloak.service.js";

var kk = new KeycloakService();
var fly = new Fly();

// fly.config.withCredentials = false;

export default {
  data() {
    return {
      params: {
        value1: "sadds",
        value2: false,
        value3: {
          data: "yes"
        }
      }
    };
  },
  config: {
    navigationBarTitleText: "登录"
  },

  computed: {},
  methods: {
    req1() {
      kk.reqToken("luanxt", "12345678a");
    },
    // req2() {
    //   kk.updateToken();
    // },
    ref() {
      kk.refToken();
    },
    autoRef() {
      // kk.getUserInfo();
      kk.init();
    }
    // logout() {
    //   kk.refUserId();
    // }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
</style>
