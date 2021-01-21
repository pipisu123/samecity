<template>
	<view class="public">
		<!-- 发布导航栏 -->
		<view class="publicbar">
			<view class="title">
				<text>请选择要发布的栏目</text>
			</view>
		</view>
		<publicitem></publicitem>
	</view>
</template>

<script>
	import publicitem from './childComps/publicitem.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			publicitem
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.publicbar{
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
