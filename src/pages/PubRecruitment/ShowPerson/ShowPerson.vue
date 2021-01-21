<template>
	<view>
		<swipper></swipper>
		<view class="news">
			<view class="new-items" @click="godetail(PersonRecruitment)">
				<!-- <image src="https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg" mode=""></image> -->
				<image src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1050564413,3771618612&fm=26&gp=0.jpg" mode=""></image>
				<view class="right">
					<view class="title">
						 <text>{{PersonRecruitment.intro}}</text>
					</view>
					<view class="industry">
					</view>
					<view class="phone">
						<u-icon name="phone" color="#5785E5"></u-icon>
						<text>电话：{{PersonRecruitment.phone}}</text>
					</view>
					<view class="address">{{PersonRecruitment.address}}</view>
				</view>
				<view>
					<view class="avatar">
						<u-avatar :src="src" size=55  show-level=true ></u-avatar>
					</view>
				</view>
			</view>
			<view class="new-items" v-for="item in list" :key="item">
					<!-- <image src="https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg" mode=""></image> -->
					<image :src="item.src" mode=""></image>
					<view class="right">
						<view class="title">
							 <text>网络销售</text>
							 <text class="worktype">实习</text>
						</view>
						<view class="industry">
							<text>职位：房屋销售</text>	
						</view>
						<view>广东省-茂名-茂南区</view>
						<view class="wages">薪资：5000-8000</view>
					</view>
					<view>
						<view class="avatar">
							<u-avatar :src="src" size=55  show-level=true ></u-avatar>
						</view>
					</view>
				</view>
			</view>
			<u-alert-tips @close="close" :closeAble="closeAble" :show="show1" @click="toCreate"
					:type="type" :title="title" :description="description" :showIcon="showIcon">
			</u-alert-tips>
	</view>
</template>

<script>
	import swipper from '../../components/swipper.vue'
	export default {
		data() {
			return {
				description:'点击查看招聘详情即可发布，赶紧去不发布吧',
				title: '温馨提示',
				show1: true,
				closeAble: true,
				showIcon: true,
				type: 'success',
				PersonRecruitment:{
					intro:'',
					phone:'',
					address:''
				},
				list:[
					{
						src:'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
					},
					{
						src:'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
					},
					{
						src:'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
					}
				]
			}
		},
		onLoad(options) {
			const recruitment = JSON.parse(decodeURIComponent(options.PersonRecruitment));
			this.PersonRecruitment.intro = recruitment.intro
			this.PersonRecruitment.phone = recruitment.phone
			this.PersonRecruitment.address = recruitment.address
			console.log(recruitment)
		},
		components:{
			swipper
		},
		methods: {
			godetail(PersonRecruitment){
				uni.navigateTo({
						url:'/pages/PubRecruitment/ToComfirmPerson/ToComfirmPerson?PersonRecruitment='+encodeURIComponent(JSON.stringify(PersonRecruitment))
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
			.new-items{
				display: flex;
				padding: 15rpx 20rpx;
				border-bottom: 2rpx solid #F1F1F1;
				image{
					min-width: 30rpx;
					max-width: 200rpx;
					min-height:30rpx;
					max-height: 160rpx;
				}
				.right{
					width: 400rpx;
					margin-left: 15rpx;
					margin-right: 40rpx;
					view{
							font-size: 23rpx;
					}
					.address{
						margin-top: 25rpx;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap; 
					}
					.phone{
						display: flex;
						margin-top: 25rpx;
					}
					.title{
						font-weight: bold;
						font-size: 28rpx;
						display: flex;
						overflow: hidden;
						/*超出隐藏*/
						display: -webkit-box;
						/*设置为弹性盒子*/
						-webkit-line-clamp: 2;
						/*最多显示x行*/
						text-overflow: ellipsis;
						/*超出显示为省略号*/
						-webkit-box-orient: vertical;
							.worktype{
								margin-left: 30rpx;
								color: #999999;
								font-size: 20rpx;
								padding: 3px;
							}
						
					}
				}
				
			}
		}
</style>
