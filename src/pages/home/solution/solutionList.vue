<template>
  <div class="page">
    <!--banner图开始-->
    <swiper :indicator-dots="indicatorDots" :circular="circular" previous-margin="10px" next-margin="10px"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <block  v-for="(item, index) in imgUrls"  :key="index" >
        <swiper-item class="banner-item">
          <image :src="item" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <!--banner图结束-->
    <view class="productions">
      <view class="panel-title"><text class="h2">解决方案</text><navigator class="more" url="/pages/home/appIndex">更多</navigator></view>
      <view class="productions-list">
        <navigator class="productions-list-item" url="/pages/home/solution/constructSite">
          <view class="productions-item-tp">
            <i class="iconfont iconjianzhan"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">建站</text>
          </view>
        </navigator>
        <navigator class="productions-list-item" url="/pages/home/solution/accounting">
          <view class="productions-item-tp">
            <i class="iconfont iconyunhuiji"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">云会计</text>
          </view>
        </navigator>
        <navigator class="productions-list-item" url="/pages/home/solution/jxc">
          <view class="productions-item-tp">
            <i class="iconfont iconyunjinxiaocun"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">云进销存</text>
          </view>
        </navigator>
      </view>
      <view class="productions-list">
        <navigator class="productions-list-item" url="/pages/home/solution/hosting">
          <view class="productions-item-tp">
            <i class="iconfont iconyuntuoguan"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">云托管</text>
          </view>
        </navigator>
        <navigator class="productions-list-item" url="/pages/home/solution/fusionMedia">
          <view class="productions-item-tp">
            <i class="iconfont iconrongmeiti"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">融媒体</text>
          </view>
        </navigator>
        <navigator class="productions-list-item" url="/pages/home/solution/speedUp">
          <view class="productions-item-tp">
            <i class="iconfont iconjianzhan"></i>
          </view>
          <view class="productions-item-btm">
            <text class="h3">云加速</text>
          </view>
        </navigator>
      </view>
      <navigator class="productions-list" url="/pages/home/appIndex">
        <view class="productions-list-item">
          <text class="h3">更多</text>
        </view>
      </navigator>
    </view>
  </div>
</template>

<script>
  export default {
    name: "index",
    config: {
      navigationBarTitleText: '解决方案'
    },
    data(){
      return{
        imgUrls: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        indicatorDots: false,
        autoplay: false,
        circular:true,
        interval: 5000,
        duration: 1000,
      }
    }
  }
</script>

<style scoped>
  .page{
    height:100vh;
    background:#F6F6F6;
    padding-top:10px;
    box-sizing: border-box;
  }
  .banner-item{
    padding:0 5px;
    box-sizing: border-box;
    width:100%;
  }
  .banner-item image{
    width:100%;
    height:166px;
  }
  .productions{
    background:#F6F6F6;
    height:415px;
  }
  .panel-title{
    padding:23px 17px 9px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-title .h2{
    font-size:18px;
    line-height:25px;
    color:#333;
    font-weight:bold;
  }
  .panel-title .more{
    font-size:12px;
    line-height:17px;
    color:#666666;
  }
  .productions .productions-list{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    background:#fff;
    border-bottom:1px solid #D9D9D9;
  }
  .productions .productions-list:last-child{
    border-bottom:none;
  }
  .productions .productions-list:last-child{
    boder-bottom:none;
  }
  .productions-list .productions-list-item:nth-child(3n){
    border-right:none;
  }
  .productions-list-item{
    box-sizing: border-box;
    padding:28px 0 22px;
    height:113px;
    width:125px;
    border-right:1px solid #D9D9D9;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
  }
  .productions-item-tp{
    margin-bottom:16px;
  }
  .productions-item-btm{

  }
  .productions-list-item .h3{
    font-size:14px;
    color:#333;
    font-weight:bold;
    display:block;
  }
  .productions-list-item .iconfont{
    font-size:36px;
    color:#00A0EB;
  }
</style>
