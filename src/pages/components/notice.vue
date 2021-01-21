<template>
	<view class="border">
		<view class="content">
			<u-notice-bar mode="vertical" volume-size=50  :list="list" type="none" more-icon=ture></u-notice-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'尚途为友,前程无忧',
					'打造职业生涯,尚途梦想天下',
					'有才,有职,有尚途',
					'工作的问题,尚途来作答'
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.content{
	font-size: 100rpx;
	
}
.border{
	height: 100rpx;
	border-radius: 5%;
	border-color: #007AFF;
	border:  2rpx solid #F1F1F1;
	margin-left: 10rpx;
	margin-right: 10rpx;
}
</style>
