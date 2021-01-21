<template>
	<view class="content">
		<view class="nav">
			<text>职位详情</text>
		</view>
		<u-read-more ref="uReadMore" text-indent="0" show-height="200" font-size="25" close-text="查看全部">
				<u-parse :html="item.introduction" @load="parseLoaded"></u-parse>
		</u-read-more>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default:null
			}
		},
		data() {
			return {
				
										
			}
		},
		methods: {
			parseLoaded() {
							this.$refs.uReadMore.init();
						}
		}
	}
</script>

<style lang="scss">
.content{
	border-bottom: 10rpx solid #F1F1F1;
	padding: 10rpx;
}
.nav{
	border-bottom: 1rpx solid #F1F1F1;
	padding: 10rpx;
}
</style>
