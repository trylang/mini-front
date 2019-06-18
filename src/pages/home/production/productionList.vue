<template>
    <div>
      <!--banner图开始-->
      <swiper :indicator-dots="indicatorDots" :circular="circular" previous-margin="10px" next-margin="20px"
              :autoplay="autoplay" :interval="interval" :duration="duration">
        <block  v-for="(item, index) in imgUrls"  :key="index" >
          <swiper-item class="banner-item">
            <image :src="item" class="slide-image" width="355" height="150"/>
          </swiper-item>
        </block>
      </swiper>
      <!--banner图结束-->
      <view class="productions">
        <view class="panel-title"><text class="h2">云产品</text><text class="more" @click="">更多</text></view>
        <view class="productions-list">
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont iconyunfuwuqiECS"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">云服务器ECS</text>
            </view>
          </view>
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont iconyunyingpanEBS"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">云硬盘EBS</text>
            </view>
          </view>
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont iconduixiangcunchuOSS"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">对象存储OSS</text>
            </view>
          </view>
        </view>
        <view class="productions-list">
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont iconxunisiyouwangluo"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">虚拟私有网络</text>
            </view>
          </view>
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont icondanxinggongwangIPEIP"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">弹性公网IPEIP</text>
            </view>
          </view>
          <view class="productions-list-item">
            <view class="productions-item-tp">
              <i class="iconfont iconyunyingpanEBS"></i>
            </view>
            <view class="productions-item-btm">
              <text class="h3">内容分发网络</text>
            </view>
          </view>
        </view>
        <view class="productions-list">
          <view class="productions-list-item">
              <text class="h3">更多</text>
          </view>
        </view>
      </view>
    </div>
</template>

<script>
    export default {
        name: "index",
      config: {
        navigationBarTitleText: '云产品'
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
  .banner-item{
    padding:0 10px;
    box-sizing: border-box;
    width:100%;
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
    boder-bottom:none;
  }
  .productions-list .productions-list-item:nth-child(3n){
    border-right:none;
  }
  .productions-list-item{
    box-sizing: border-box;
    padding:20px 0 23px;
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
    line-height:20px;
    color:#333;
    font-weight:bold;
    margin-bottom:12px;
    display:block;
  }
</style>
