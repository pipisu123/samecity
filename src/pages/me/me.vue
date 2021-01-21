<template>
	<view class="center">
		<view class="center_top">
			<view class="mask"></view>
		</view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base">
					<view class="profily_header">
                    <image :src="src" mode="" style="width: 120upx;height: 120upx;" class="img"></image>
					</view>
					<!-- 微信一键登陆 -->
					<view class="login" @click="login" v-if="show">
						<text>点击登录</text>
					</view>
					<view class="wechatname" v-else>
						<text>{{wechatname}}</text>
					</view>
					<image src="../../static/setting.png" mode=""></image>
				</view>
				<view class="order_status">
					<view class="status" v-for="item in status">
						<image class="icon" :src="item.url" mode="aspectFill"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="baiban">

			</view>
			<view class="center_menu">
				<view class="menu_item" v-for="item in menus" @click="btn(item.path)">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:null,
				show:true,
				wechatname:null,
				status: [{
						key: 1,
						name: '待发货',
						url: '../../static/one.png'
					
					},
					{
						key: 2,
						name: '待收货',
						url: '../../static/2.png'
					},
					{
						key: 3,
						name: '待评价',
						url: '../../static/3.png'
					},
					{
						key: 4,
						name: '全部订单',
						url: '../../static/4.png'
					}
				],
				menus: [{
						name: '我的简历',
						icon: '../../static/5.png',
						key: 1,
						path: '/pages/CreateResume/CreateResume'
					},
					{
						name: '地址管理',
						icon: '../../static/6.png',
						key: 2,
					},
					{
						name: '我的公司',
						icon: '../../static/7.png',
						key: 3,
						path:'/pages/companyDetail/companyDetail'
					},
					{
						name: '帮助中心',
						icon: '../../static/8.png',
						key: 4,
					},
					{
						name: '意见反馈',
						icon: '../../static/9.png',
						key: 5,
					},
					{
						name: '关于我们',
						icon: '../../static/10.png',
						key: 6,
					}

				]
			};
		},
		onShow() {
			this.src=this.$store.state.avatar,
			this.wechatname = this.$store.state.wechatname
			
			
		},
		methods: {
		// 我的简历路由
        btn(url){
			console.log(url)
			uni.navigateTo({
			   url
			})
		},
		// 微信登录
		login(){
			uni.navigateTo({
				url:'/pages/login/login'
			})
		 this.show = false
		}
		},
		computed: {
        
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.profily,
	.profily_header {
		border-radius: 8px;
	}

	.center {
		height: 100%;

		&_top {
			height: 18%;
			background: #5785E5;
			background-size: cover;

			// background: #E6E6E6;
			// .mask {
			// 	background: rgba(0, 0, 0, .4);
			// 	height: 100%;
			// }
		}

		&_box_bg {
			background: #F9F9F9;
			position: relative;

			.profily {
				position: absolute;
				width: 90%;
				// border:1px solid #F7F7F7;
				margin: 0 auto;
				top: -100upx;
				left: 5%;
				background: #FEFEFE;
				padding: 35upx;
				box-sizing: border-box;
				box-shadow: 0px 2px 5px #EDEDED;
			}
		}
	}

	.base {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #F6F6F6;
		padding-bottom: 35upx;
		position: relative;
		.profily_header {
			height: 120upx;
			width: 120upx;
			// background-image: url('../../static/header.jpg');
			background-size: 100%;
		}
		text {
			margin-left: 20px;
			font-size: 30upx;
		}
		
		image{
			position: absolute;
			height: 40upx;
			width: 40upx;
			right: 0px;
			top:0px;
		}
	}
    .img{
		position: absolute;
		left: 0px;
		top:0px;
	}
	.order_status {
		display: flex;
		justify-content: space-between;
		margin-top: 35upx;

		.status {
			width: 140upx;
			font-size: 24upx;
			text-align: center;
			letter-spacing: .5px;
			display: flex;
			flex-direction: column;
			.icon {
				width: 50upx;
				height: 50upx;
				margin: 0 auto;
				margin-bottom: 5px;
				
			}
		}
	}

	.baiban {
		background: #FEFEFE;
		height: 300upx;
	}

	.center_menu {
		width: 100%;
		display: inline-block;

		.menu_item {
			font-size: 28upx;
			letter-spacing: 1px;
			padding: 14px 5%;
			background: #FEFEFE;
			overflow: hidden;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px solid #EFEFEF;

			&:hover {
				background: #F6F6F6 !important;
			}

			&::after {
				content: '';
				width: 30upx;
				height: 30upx;
				position: absolute;
				right: 5%;
				background: url('../../static/right.png') no-repeat;
				background-size: 100%;
			}

			text:nth-of-type(1) {
				margin-left: 10px;
			}

			image {
				width: 40upx;
				height: 40upx;
			}

			&:nth-of-type(4) {
				margin-top: 10px;
			}
		}
	}
</style>
