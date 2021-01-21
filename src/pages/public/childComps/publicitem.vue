<template>
	<view class="publicitem">
		<view class="nav" >
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navclick(item.path)">
				<view>
					<image :src="item.src" mode="" style="width: 50rpx;height: 50rpx;"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs:[
					{
						src:'../../../static/car.png',
						title: '招聘人才',
						path: '/pages/PubRecruitment/PubRecruitment'
					},
					{
						src: '../../../static/card.png',
						title: '简历发布',
						path: '/pages/PubResume/PubResume'
					},
					{
						src: '../../../static/city.png',
						title: '公司发布',
						path: '/pages/PubCompany/PubCompany'
					},
					{
						src: '../../../static/market.png',
						title: '人人集市',
						path: '/pages/mall/mall'
					},
					{
						src: '../../../static/market.png',
						title: '商品发布',
						path: '/pages/mall/mall'
					}
				]
			}
		},
		methods: {
			navclick(url){
				console.log(url)
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.publicitem{
		background-color: #F1F1F1;
		height: 160px;
	}
	.nav{
		display: flex;
	    flex-wrap: wrap;
		.nav-item{
			width: 25%;
			text-align: center;
			view{
				width: 90rpx;
				height: 80rpx;
				background-color:#F1F1F1;
				margin: 8rpx auto;
				line-height: 110rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text{
				font-size: 20rpx;
			}
		}
	}
</style>
