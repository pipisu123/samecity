<template>
	<view class="content">
		<swiper>
			<swiper-item>
					<view class="nav" >
						<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navclick(item.path)">
							<view>
								<image :src="item.src" mode="" style="width: 65rpx;height: 65rpx;"></image>
							</view>
							<text>{{item.title}}</text>
						</view>
					</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs:[
					{
						src:'../../static/towork.png',
						title: '招聘人才',
						path: '/pages/man/man'
					},
					{
						src: '../../static/city.png',
						title: '房屋出售',
						path: '/pages/house/house'
					},
					{
						src: '../../static/car.png',
						title: '二手转让',
						path: '/pages/car/car'
					},
					{
						src: '../../static/market.png',
						title: '人人集市',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/towork.png',
						title: '积分商城',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/discount.png',
						title: '优惠打折',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/jifen.png',
						title: '积分商城',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/more.png',
						title: '积分商城',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/more.png',
						title: '积分商城',
						path: '/pages/mall/mall'
					},
					{
						src: '../../static/more.png',
						title: '查看更多',
						path: '/pages/mall/mall'
					},
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
.nav{
	display: flex;
    flex-wrap: wrap;
	.nav-item{
		width: 20%;
		text-align: center;
		view{
			width: 90rpx;
			height: 80rpx;
			background-color:#F1F1F1;
			margin: 10rpx auto 10rpx;
			line-height: 120rpx;
			color: #fff;
			font-size: 50rpx;
		}
		text{
			font-size: 23rpx;
		}
	}
}
.content{
	margin-top: 55rpx;
	background-color: #F1F1F1;
}

</style>
