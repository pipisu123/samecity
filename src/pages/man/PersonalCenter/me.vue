<template>
	<div class="vbox">
		<!-- <image class="top_back_img" src="../../../static/set-top-bg.png" mode="aspectFit"></image> -->
		<view class="top_back_img">

		</view>
		<view class="top">
			<view class="circle">
				<image class="head" :src="src" mode="widthFix"></image>
			</view>
			<view class="top-texts">
				<text class="name">酒馆</text>
				<image class="set-top-hr" src="../../../static/set-top-hr.png" mode=""></image>
				<view>
					<text>绑定手机：</text>
					<text>{{user.user_phone}}</text>
				</view>
			</view>
			<view class="top-changeInfo" @click="update">
				<text>完善资料</text>
			</view>
		</view>

		<!-- 中间部分 -->
		<view class="middle">
			<view class="middle-left">
				<image class="middle-icon" src="../../../static/cust.png"></image>
				<text>客户数：</text>
				<text class="middle-num">2302</text>
			</view>
			<view class="middle-line"></view>
			<view class="middle-right">
				<image class="middle-icon" src="../../../static/loan.png"></image>
				<text>我的积分：</text>
				<text class="middle-num">{{user.integral}}</text>
			</view>
		</view>

		<!-- 下半部分 -->
		<view class="index">
			<view class="cell" @click="myResume">
				<view class="cell-left">
					<image class="cell_icon" src="../../../static/card.png"></image>
					<text class="cell-text">我的简历</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../../static/right-arrow.png"></image>
				</view>
			</view>

			<view class="cell" @click="myCompany(user.company_id)">
				<view class="cell-left">
					<image class="cell_icon" src="../../../static/main_off.png"></image>
					<text class="cell-text">我的公司</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../../static/right-arrow.png"></image>
				</view>
			</view>

			<view class="cell" @click="myCollection">
				<view class="cell-left">
					<image class="cell_icon" src="../../../static/5.png"></image>
					<text class="cell-text">我的收藏</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../../static/right-arrow.png"></image>
				</view>
			</view>

			<view class="cell" @click="myPosition">
				<view class="cell-left">
					<image class="cell_icon" src="../../../static/4.png"></image>
					<text class="cell-text">我的职位</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../../static/right-arrow.png"></image>
				</view>
			</view>


			<view class="cell" @click="changeGray">
				<view class="cell-left">
					<image class="cell_icon" src="../../../static/account.png"></image>
					<text class="cell-text">关于</text>
				</view>
				<view class="cell-right">
					<image class="right-arrow" src="../../../static/right-arrow.png"></image>
				</view>
			</view>

		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				src: null,
				user:null,
				


			}
		},
		created() {
			this.src = this.$store.state.avatar,
			this.getUser()
		},
		onLoad() {
			
		},
		methods: {
			// 查询个人信息
			async getUser(){
				const res = await this.$myRequest({
					url:'findUser',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"user_id":1
					}),
					method: 'POST'
				})
				console.log(res.data.data.user[0])
				this.user = res.data.data.user[0]
				
				},

			// logout() {

			// 	uni.showModal({
			// 		title: '提示',
			// 		content: '确认退出登陆？',
			// 		success: function(res) {
			// 			if (res.confirm) {
			// 				uni.removeStorage({
			// 					key: 'token',
			// 					success(res) {
			// 						uni.redirectTo({
			// 							url: '/pages/login/login'
			// 						})
			// 					}
			// 				})
			// 			} else if (res.cancel) {
			// 				console.log('用户点击取消');
			// 			}
			// 		}
			// 	});


			// }
			// 我的职位
			myPosition(){
				uni.navigateTo({
					url:'/pages/man/PersonalCenter/myPosition/myPosition'
				})
			},
			// 我的公司
			myCompany(company_id) {
				console.log(company_id)
				uni.navigateTo({
					url: '/pages/myCompany/myCompany?company_id='+company_id
				})
			},
			// 我的简历
			myResume() {
				uni.navigateTo({
					url: '/pages/myResume/myResume'
				})
			},
			// 我的收藏
			myCollection(){
				uni.navigateTo({
					url:'/pages/man/PersonalCenter/myCollection/myCollection'
				})
			},
			// 完善资料
			update() {
				uni.navigateTo({
					url: '/pages/update/update'
				})
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.index {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: white;
		border-top: 1px solid #cccccc;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top_back_img {
		z-index: -1;
		position: absolute;
		top: 0upx;
		width: 100%;
		height: 420upx;
		background-color: #5785E5;

	}

	.top {
		display: flex;
		width: 100%;
		height: 420upx;
		align-items: center;
	}

	.circle {
		margin-left: 100upx;
		width: 120upx;
		height: 120upx;
		border: 10upx solid #a4f4f6;
		border-radius: 150upx;
		overflow: hidden;
	}

	.head {
		width: 120upx;
		height: 120upx;
		border-radius: 150upx;
	}

	.top-texts {
		display: flex;
		flex-direction: column;
		margin-left: 15upx;
		color: white;
	}

	.name {
		font-size: 36upx;
		font-weight: 500;
	}

	.set-top-hr {
		width: 210upx;
		height: 6upx;
	}

	.top-changeInfo {
		margin-top: 250upx;
		width: 150upx;
		height: 40upx;
		line-height: 28upx;
		background-color: #FFFFFF;
		border-radius: 15upx;
		padding: 10upx;
		color: #33dce8;
	}

	.middle {
		display: flex;
		align-items: center;
		position: relative;
		top: -50upx;
		width: 80%;
		height: 100upx;
		background-color: #F1F1F1;
		border-radius: 15upx;
	}

	.middle-line {
		width: 2upx;
		height: 80upx;
		background-color: #eeeeee;
	}

	.middle-left {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-right {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-icon {
		width: 40upx;
		height: 40upx;
		margin-left: 20upx;
	}

	.middle-num {
		color: #fcac45;
		-webkit-font-smoothing: antialiased;
	}

	.cell {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ccc;
		height: 90upx;
		align-items: center;
		justify-content: space-between;
	}

	.cell:active {
		background-color: #333;
		color: white;
		box-shadow: 1upx 1upx 35upx #ccc;
	}

	.cell-left {
		display: flex;
		align-items: center;
		margin-left: 65upx;
	}

	.cell-text {
		margin-left: 25upx;
	}

	.cell-right {
		margin-right: 45upx;
		height: 28upx;
	}

	.cell_icon {
		width: 40upx;
		height: 40upx;
		height: 40upx;
	}

	.right-arrow {
		color: #aaa;
		width: 15upx;
		height: 28upx;
	}
</style>
