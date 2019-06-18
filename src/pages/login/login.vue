<template>
  <div class="counter-warp">
    <button @click="get">GET1</button>
    <button @click="post">POST</button>
    <button @click="put">PUT</button>
    <button @click="delete1">DELETE</button>
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
    get() {
      // this.kk.ref();
      kk.ref();
      fly
        .get(`${url}/test`, this.params, {
          withCredentials: true //跨域时是否发送cookie
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.error(error, `http error`));
    },
    post() {
      fly
        .post(`${url}/test`, this.params)
        .then(res => {
          console.log(res);
        })
        .catch(error => console.error(error, `http error`));
    },
    put() {
      fly
        .put(`${url}/test`, this.params, {
          withCredentials: false //跨域时是否发送cookie
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.error(error, `http error`));
    },

    delete1() {
      fly
        .delete(`${url}/test`, this.params)
        .then(res => {
          console.log(res);
        })
        .catch(error => console.error(error, `http error`));
    }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
</style>
