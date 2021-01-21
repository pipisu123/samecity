<template>
	<view class="collection">
		<view class="title">
			<text>网络销售</text>
		</view>
		<view class="wage">
			<text>3000-5000/月</text>
		</view>
		<u-line color="info" border-style="dotted"/>
		<view class="companyname">
			<text>联享科技有限公司</text>
			<view class="address">
				<text>茂名.茂南区</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.collection{
		padding: 15rpx;
		margin: 15rpx;
		background: #F1F1F1;
		border-radius: 5%;
		.title{
		    font-weight: bold;
			font-size: 30rpx;
			margin-bottom: 10rpx;
		}
		.wage{
			margin-bottom: 10rpx;
			color: #FF0000;
		}
	}
	.companyname{
		margin-top: 10rpx;
		display: flex;
		.address{
			margin-left: 300rpx;
		}
	}
    
	
</style>
