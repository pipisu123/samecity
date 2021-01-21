<template>
	<view class="recommend">
		<view class="hot-recommend">
			<view class="left">
				<image class="hot-recommend-image" src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00167-300.jpg" mode="heightFix;widthFix"></image>
			</view>
			<view class="right">
				<image class="hot-recommend-image" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1411722287,1553020603&fm=26&gp=0.jpg" mode="heightFix;widthFix"></image>
				<image class="hot-recommend-image" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3222642489,3571657882&fm=26&gp=0.jpg" mode="heightFix;widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.hot-recommend {
		background-color: #FFFFFF;
		display: flex;
		padding: 10rpx 10rpx 0;
		.hot-recommend-image {
			width: 100%;
			height: 100%;
		}
		.left {
			flex: 3;
			height: 350upx;
			margin-right: 15upx;
		}
		.right {
			flex: 4;
			.hot-recommend-image {
				height: 170upx;
			}
		}
	}
</style>
