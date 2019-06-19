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
      <view class="activities">
        <view class="panel-title"><text class="h2">热门活动</text><text class="more" @click="">更多</text></view>
        <view class="activities-list">
          <view class="activities-list-item">
            <view class="activities-item-lf">
              <img src="/static/images/icon-activity01.svg" />
            </view>
            <view class="activities-item-rg">
              <text class="h2">企业上云</text>
              <text class="memo">助力企业显著提高商业效益</text>
            </view>
          </view>
          <view class="activities-list-item">
            <view class="activities-item-lf">
              <img src="/static/images/icon-activity02.svg" />
            </view>
            <view class="activities-item-rg">
              <text class="h2">0元试用</text>
              <text class="memo">SaaS企业服务新引擎</text>
            </view>
          </view>
          <view class="activities-list-item">
            <view class="activities-item-lf">
              <img src="/static/images/icon-activity03.svg" />
            </view>
            <view class="activities-item-rg">
              <text class="h2">光速云计划</text>
              <text class="memo">光速助力中小企业数字化转型</text>
            </view>
          </view>
        </view>
      </view>
    </div>
</template>

<script>
    export default {
      name: "index",
      config: {
        navigationBarTitleText: '热门活动'
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
  .activities{
    padding:0 17px;
    height:350px;
  }
  .panel-title{
    padding-top:23px;
    padding-bottom:9px;
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
  .activities-list-item{
    padding:19px 26px 22px;
    margin-bottom:10px;
    background:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .activities-list .activities-list-item:nth-child(1) img{
     height:40px;
   }
  .activities-list .activities-list-item:nth-child(2) img{
    height:40px;
  }
  .activities-list .activities-list-item:nth-child(3) img{
    height:30px;
  }
  .activities-item-lf{
    margin-right:25px;
  }
  .activities-item-lf img{
    width:45px;

  }
  .activities-item-rg{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:196px;
  }
  .activities-item-rg .h2{
    font-size:18px;
    line-height:25px;
    color:#333;
    font-weight:bold;
    margin-bottom:12px;
  }
  .activities-item-rg .memo{
    font-size:14px;
    color:#333;
    line-height:20px;
  }
</style>
