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
    <!--导航开始-->
    <view class="nav">
      <view class="nav-item" @click="goActivities">
        <view class="nav-item-tp" ></view>
        <text class="nav-item-btm">热门活动</text>
      </view>
      <view class="nav-item" @click="goProduction">
        <view class="nav-item-tp"></view>
        <text class="nav-item-btm">云产品</text>
      </view>
      <view class="nav-item"  @click="goSolution">
        <view class="nav-item-tp"></view>
        <text class="nav-item-btm">解决方案</text>
      </view>
      <view class="nav-item">
        <view class="nav-item-tp"></view>
        <text class="nav-item-btm">在线客服</text>
      </view>
    </view>
    <!--导航结束-->
    <scroll-view class="news-list" style="height:500px" scroll-y="true"  @scrolltolower="loadMore" >
      <view class="recommend">
        <view class="panel-title"><text class="h2">为你推荐</text><text class="more" @click="goRecommend">更多</text></view>
        <view class="news-list">
          <view class="news-list-item" v-for="(item, index) in newsLists" :key="index" >
            <view class="news-list-item-lf">
              <text class="news-item-title">{{item.title}}</text>
              <view class="news-item-date">发布时间：<text>{{item.date}}</text></view>
            </view>
            <view class="news-list-item-rg">
              <img :src="item.imgUrl" />
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <!--<h1 @click="checkToken">home-浪潮云,点一下发送请求试试</h1>-->
    <!--<w-button type="warn" @click="buttonClick">跳转到控制台</w-button>-->
    <!--<w-button type="warn" @click="goRecommend">为你推荐</w-button>-->
  </div>
  
  
</template>

<script>

export default {
  config: {
    navigationBarTitleText: '浪潮云'
  },
  data () {
    return {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: false,
      autoplay: false,
      circular: true,
      interval: 5000,
      duration: 1000,
      newsLists: [
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        }, {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信助力山东新旧动能转换 浪潮牵头成立现代信助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        },
        {
          'title': '助力山东新旧动能转换 浪潮牵头成立现代信',
          'date': '2019-03-01',
          'imgUrl': 'https://cloud.inspur.com/images/2019/05/20190507095954271.jpg'
        }

      ]
    }
  },
  methods: {
    checkToken () {
      this.$http.user.info().then(res => {
        console.log(res)
      })
    },
    buttonClick () {
      this.$router.push({ path: '/pages/control/index', isTab: true })
    },
    goRecommend () {
      this.$router.push({ path: '/pages/home/recommend/recommendList'})
    },
    goActivities () {
      this.$router.push({ path: '/pages/home/activities/activitiesList'})
    },
    goProduction () {
      this.$router.push({ path: '/pages/home/production/productionList'})
    },
    goSolution () {
      this.$router.push({ path: '/pages/home/solution/solutionList'})
    },
    loadMore () {

    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
  .banner-item{
    padding:0 10px;
    box-sizing: border-box;
    width:100%;
  }
  .nav {
    height: 114px;
    width:325px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-item{
    padding-bottom:19px;
  }
  .nav-item-tp{
    margin-bottom:16px;
  }
  .nav-item-btm{
    color:#333;
    font-size:14px;
    line-height:20px;
  }
  .panel-title{
    padding:11px 16px 17px 0;
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
  .recommend{
    padding-left:19px;
    border-top:10px solid #F6F6F6;
  }
  .news-list-item{
    padding:12px 16px 12px 0;
    background:#fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #D9D9D9;
  }
  .news-list-item .news-list-item-lf{
    width:212px;
  }
  .news-list-item .news-list-item-lf .news-item-title{
    font-size:15px;
    line-height:21px;
    color:#333;
    margin-bottom:11px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .news-list-item .news-list-item-lf .news-item-date{
    color:#7F7F7F;
    font-size:12px;
    line-height:17px;
  }
  .news-list-item .news-list-item-rg img{
    width:95px;
    height:61px;
  }
</style>
