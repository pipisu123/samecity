<template>
		<view class="content">
			<view class="category" v-for="item in list" :key="item">
				<view>{{item}}</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'销售','客服','行政','主管','经理','厨师','服务员','学徒','杂工','保安','快递','老师','医生','奶妈'
				]
			}
		},
		components:{
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.content{
	display: flex;
	flex-wrap: wrap;
	background-color: #F8F8F8;
	view{
		width: 100rpx;
		height: 70rpx;
		margin: 8rpx auto;
	}
}
</style>
