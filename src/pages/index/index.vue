<template>
	<view class="content">
	<view class="search">
		<u-search placeholder="请输入工作或房屋信息"></u-search>
	</view>
	<!-- 分类导航 -->
	<categoryitem></categoryitem>
		<!-- 轮播图 -->
	   <swipper></swipper>
	   <!-- 广告信息 -->
	  <notice></notice>
	  <!-- 爆款推荐 -->
	  <recommend></recommend>
	  <!-- 商品列表 -->
	  <view class="goods">
	  	<view class="title">
			商品推荐
		</view>
	  </view>
	  <goodlist></goodlist>
	   <!-- 列表测试 -->
	   <list></list>
	   
	</view>
</template>

<script>
	import swipper from '../components/swipper.vue'
	import list from '../components/list.vue'
	import notice from '../components/notice.vue'
	import categoryitem from '../components/categoryitem.vue'
	import recommend from './childComps/recommend.vue'
	import goodlist from './childComps/goodslist.vue'

	export default {
		data() {
			return {
				current: 0,
				
			}
		},
		onLoad() {

		},
		components:{
         swipper,
		 list,
		 notice,
		 categoryitem,
		 recommend,
		 goodlist
		},
		methods: {
          change(e) {
				this.current = e.detail.current;
			}
			
		},
		created() {
		}
	}
</script>

<style scoped lang="scss">
	.content {
	
	}
	.search{
		border-color: #fff;
        position: fixed;
         left: 0;
         right: 0;
         top: 0;
         z-index: 9;
		 background-color: #5785E5;
         padding-bottom: 10rpx;
	}		
.swiper {
	height: 300rpx;
			
}
.goods{
	background-color: #C8C7CC;
	overflow: hidden;
	margin-top: 10rpx;
	.title{
		height: 70rpx;
		line-height: 70rpx;
		background-color: #fff;
		text-align: center;
		letter-spacing: 20rpx;
		margin: 3rpx 0;
	}
}		


</style>
