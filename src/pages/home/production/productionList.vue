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
      <view class="panel-title"><text class="h2">云产品</text><navigator class="more" url="/pages/home/appIndex">更多</navigator></view>
      <!--banner图结束-->
      <!--云产品列表开始-->
      <ProList></ProList>
      <!--云产品列表结束-->
    </div>
</template>

<script>
  import ProList from "@/components/proList";
    export default {
      name: "index",
      config: {
        navigationBarTitleText: '云产品'
      },
      components:{ ProList },
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
  .panel-title{
    padding:23px 17px 9px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#F6F6F6;
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


</style>
