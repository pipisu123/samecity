<template>
	<view class="tabbar">
		<view class="wrap" @click="btn(item.company_id)">
				<u-row gutter="16">
					<u-col span="2">
						<view class="demo-layout bg-purple">
							<image src="../../../static/card.png" mode="" style="width: 100rpx;height: 80rpx;"></image>
						</view>
					</u-col>
					<u-col span="8">
						<view class="demo-layout bg-purple-light" text-align="center">
							<text>{{item.company.company_name}}</text>
						</view>
					</u-col>
					<u-col span="2" text-align="right">
						<view class="demo-layout bg-purple-dark">
							<u-icon name="arrow-right"></u-icon>
						</view>
					</u-col>
				</u-row>		
			</view>
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
		components:{
			
			
		},
		methods: {
         btn(company_id){
			this.$emit('itemClick',company_id) 
		 }
		}
	}
</script>

<style lang="scss">
.tabbar{
	border-bottom: 3rpx solid #F1F1F1;
	border: 1rpx solid #F1F1F1;
}
.wrap {
		padding: 15rpx;
	}

	.u-row {
		margin: 43rpx 0;
	}

	.demo-layout {
		height: 90rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #FFFFFF;
		border: 1rpx solid #F1F1F1;
		padding: 1rpx;
	}

	.bg-purple-light {
		background: #FFFFFF;
		padding: 20rpx;
	}

	.bg-purple-dark {
		background: #FFFFFF;
		padding: 20rpx;
	}
</style>
