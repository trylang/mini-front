<template name="recommend">
  <scroll-view class="news-list" style="height:500px" scroll-y="true"  @scrolltolower="loadMore" >
    <navigator class="news-list-item"  v-for="(item, index) in newsLists"  :key="index"  url="/pages/home/recommend/recommendDetail">
      <view class="news-list-item-lf">
        <text class="news-item-title">{{item.title}}</text>
        <view class="news-item-date">发布时间：<text>{{item.date}}</text></view>
      </view>
      <view class="news-list-item-rg">
        <img :src="item.imgUrl" />
      </view>
    </navigator>
  </scroll-view>
</template>

<script>

  export default {
    config: {
      navigationBarTitleText: '为你推荐'
    },
    data(){
      return{
        newsLists:[
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },{
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信助力山东新旧动能转换 浪潮牵头成立现代信助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          },
          {
            "title":"助力山东新旧动能转换 浪潮牵头成立现代信",
            "date":"2019-03-01",
            "imgUrl":"https://cloud.inspur.com/images/2019/05/20190507095954271.jpg",
          }

        ]
      }
    },
    methods: {
      home () {
        console.log('home-浪潮云')
      },
      loadMore(){
        this.newsLists = this.newsLists.concat(this.newsLists);
        console.log(11111)
      }
    }
  }
</script>

<style>
  .news-list{
    padding:10px 15px;
    background:#F6F6F6;
    box-sizing: border-box;
  }
  .news-list-item{
    padding:12px 14px;
    background:#fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
    box-sizing: border-box;
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
