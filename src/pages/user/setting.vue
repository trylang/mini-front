<template>
    <view class="page">
      <w-pane title="设置"  class="h1" tsize="32"/>
      <w-cell-group>
        <!--<view>-->
          <!--<text class="set-list-title">添加到桌面</text>-->
          <!--<text class="p">若无法添加成功，请设置系统或者安全软件权限</text>-->
        <!--</view>-->
        <w-cell
          desc="若无法添加成功，请设置系统或者安全软件权限"
          icon="home"
          class="wuss-cell-setting"
          v-if="isShow"
        >
          <view slot="label">
            添加到桌面
          </view>
          <view slot="content">
            <switch @change="handleChange" :checked="isAddTable" />
          </view>
        </w-cell>
        <w-cell
          isLink
          class="wuss-cell-setting"
          label="关注公众号"
          @click="concernOfficialAccount"
        />
        <w-cell
          class="wuss-cell-setting"
          isLink
          label="服务协议"
          link="/"
        />
        <w-cell
          class="wuss-cell-setting"
          isLink
          label="隐私政策"
          link="/"
        />
        <w-cell
          class="wuss-cell-setting"
          label="关于浪潮云助手"
          @click="concernOfficialAccount"
        />
      </w-cell-group>
      <w-alert id="wuss-alert" />
      <view :class="[{ hide: !isAddTable }, 'modal-bg']" @click="hideModal"></view>
      <view :class="[{ hide: !isAddTable }, 'modal-front']">
        <view class="modal-front-inner">
          <text>点击这里，添加快捷入口到桌面</text>
          <view class="arrow"><w-icon type="forward" color="#333" /></view>
        </view>
      </view>
    </view>
</template>

<script>
  import { Alert } from 'wuss-weapp/dist'
    export default {
      name: "setting",
      config: {
        navigationBarTitleText: '设置'
      },
      data(){
        return{
          isShow:true,
          isAddTable:false
        }
      },
      created(){
        wx.getSystemInfo({
          success :(res)=> {
            console.log(res.system)
            if(res.system.indexOf("Android") == -1){
              this.isShow = false;
            }
          }
        })
      },
      onShareAppMessage: function(options) {
        console.log('分享的代码！！')
        this.hideModal();
      },
      methods:{
        concernOfficialAccount(){
          Alert({
            title: '关注公众号',
            buttonColor: '#00A0EB',
            content: '进入客服会话，发送【0】即可关注进入客服会话，发送【0】即可关注\n',
            confirm: () => {
              console.log('ok');
            },
          });
        },
        handleChange(e){
          this.isAddTable = e.target.value;
          console.log(this.isAddTable)
        },
        hideModal(){
          this.isAddTable = false;
        }
      }
    }
</script>

<style scoped>

  .h1{
    color:#333;
    font-weight:bold;
    margin-top:-20px;
  }
  .set-list-item{
    padding:14px 0;
  }
  .set-list-title{
    font-size:16px;
    color:#333;
    line-height:24px;
    margin-bottom:2px;
  }
  .p{
    font-size:12px;
    color:#999999;
    line-height:17px;
  }
  .modal-bg{
    position:fixed;
    z-index:1000;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background:rgba(0, 0, 0, 0.6);
  }
  .modal-front{
    position:fixed;
    top:20px;
    right:50px;
    z-index:201;
  }
  .modal-front-inner{
    padding:12px 20px;
    color:#fff;
    background:#333;
    font-size:16px;
    postion:relative;
  }
  .arrow{
    position:absolute;
    right:20px;
    top:-20px;
    transform:rotate(-45deg);
  }
</style>
