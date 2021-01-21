<template>
	<view>
		<view class="update">
			请选择要完善的资料
		</view>
		<view class="select">
			<view class="resume">
				<u-button type="primary" @click="createResume">填写简历信息</u-button>
			</view>
			<view class="company">
				<u-button type="primary"  @click="createCompany">填写公司信息</u-button>
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
			createResume(){
				uni.navigateTo({
					url:'/pages/CreateResume/CreateResume'
				})
			},
			createCompany(){
				uni.navigateTo({
					url:'/pages/CreateCompany/CreateCompany'
				})
			}
		}
	}
</script>

<style lang="scss">
.select{
	padding: 15rpx;
	margin-left: 10rpx;
	display: flex;
}
.company{
	margin-left: 20rpx;
}
</style>
