<template>
  <view class="page">
    <text class="h2">江西省召开2019年全省企业上云工作推进会 </text>
    <view class="public-date">
      <view class="public-date-lf">发布时间：<text>2019-2-18</text></view>
      <view class="public-date-rg"><i></i><button open-type='share'>分享</button></view>
    </view>
    <view class="content">
      <img src="https://cloud.inspur.com/images/2019/05/20190507095954271.jpg" />
      <text class="p">
        4月24日，2019年全省企业上云工作推进会在南昌召开，省工信厅王亦斌副厅长出席会议并讲话。王亦斌副厅长指出，要切实提高企业上云的思想认识，让企业了解上云的重要性和好处，明确任务目标，务实分类推进企业上云，强化供给服务，提高企业上云供给服务水平。会议通报了2018年全省企业上云情况，江西航天云网、江西联通等6家云服务机构和部分企业代表介绍了工作开展情况、存在的问题与建议等。 各设区市、省直管试点县（市）工信主管部门及赣江新区经发局负责人及业务科长，江西电信、江西移动、江西联通、航天云网、浪潮、用友等工业云服务商负责人，江西工业互联网研究院负责人，部分上云企业代表等共计80余人参加会议。
      </text>
    </view>
  </view>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            imgUrl:""
          }
      }
    }
</script>

<style scoped>
  .page{
    padding:28px 15px;
  }
  .h2{
    font-size:24px;
    color:#333;
    line-height:1.2;
  }
  .public-date{
    padding-top:11px;
    padding-bottom:15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#888888;
    font-size:15px;
  }
  .page img{
    display:block;
    width:100%;
    height:auto;
    margin-bottom:12px;
    margin-top:12px;
  }
  .page .p{
    font-size:16px;
    color:#111;
    line-height:30px;
  }
</style>
