<template>
	<view class="page">
		<view class="wrap">
			<u-row gutter="16">
				<u-col span="10">
					<view class="demo-layout bg-purple">
						<text>{{company.company_name}}</text>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-dark">
						<u-avatar src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=294573266,3875936707&fm=11&gp=0.jpg" mode="square"></u-avatar>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="address">
			<view class="tit">
				<text>公司地址</text>
			</view>
			<view class="detailAddress">
				<u-icon name="map-fill" size="28"></u-icon>
				<text>{{company.company_address}}</text>
			</view>
		</view>
		<view class="intro">
			<text>公司简介</text>
			<u-read-more ref="uReadMore" text-indent="0" show-height="200" font-size="25" close-text="查看全部">
				<u-parse :html="html" @load="parseLoaded" font-size="15"></u-parse>
			</u-read-more>
		</view>
		<view class="welfare">
			<text>公司福利</text>
			<view class="fuli">
				<scroll-view scroll-x="true">
					<view class="item1">
					<text>	{{company.company_welfare}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="company_picture">
			<text>公司环境视频与相册</text>
			<scroll-view scroll-x="true">
				<video class="video" object-fit="fill" id="demoVideo" :controls="true" :enable-progress-gesture="false"
				 :show-center-play-btn="disable" autoplay=false :src="'http://192.168.101.24:8081/'+company.company_video.video_path">
				</video>
				<view class="item1" v-for="item in listimg" :key="item">
					<image :src="'http://192.168.101.24:8081/'+item.picture_path" mode="" @tap="_previewImage('http://192.168.101.24:8081/'+item.picture_path)" mode="heightFix;widthFix"></image>
				</view>
			</scroll-view>
		</view>
		<u-button size="default" @click="toUpdateCompany(company.company_id)">修改</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company:null,
				
				html: `广州xxxx系统工程有限公司成立于1989年，是一家专注于xx产品和xxx产品研究、开发、生产及销售的高科技企业，总部及研发基地设立于风景秀丽的广州软件园，并在全国各地设有分支机构。公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业。`,
				listimg: []
			}
		},
		onLoad(options) {
			console.log(options)
			this.getmyCompany(options.company_id)
		},
		methods: {
			// 查询我的公司
			async getmyCompany(company_id) {
				const res = await this.$myRequest({
					url: 'findCompany',
					dataType: "json",
					header: {
						'content-type': 'application/json',
					},
					data: JSON.stringify({
						"company_id":company_id
					}),
					method: 'POST'
				})
				console.log(res)
				this.company = res.data.data.companys[0]
				this.listimg = res.data.data.companys[0].company_picture
			},
			// 跳转到修改公司信息
			toUpdateCompany(company_id){
				uni.navigateTo({
					url:'/pages/myCompany/UpdateCompany/UpdateCompany?company_id='+company_id
				})
			},
			parseLoaded() {
				this.$refs.uReadMore.init();
			},
			_previewImage(image) {
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},

		}
	}
</script>

<style lang="scss">
	.page video {
		width: 50%;
		height: 250rpx;
	}

	.wrap {
		padding: 10rpx;
		border: 1rpx solid #F1F1F1;
	}

	.u-row {
		margin: 20rpx 0;
	}

	.demo-layout {
		height: 90rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #FFFFFF;
		margin-top: 15rpx;

		text {
			font-weight: bold;
			font-size: 35rpx;

		}

	}

	// 地址
	.address {
		padding: 15rpx;
		margin-top: 10rpx;
	}

	.detailAddress {
		margin-top: 10rpx;
		width: 700rpx;
		color: #C0C0C0;
	}

	// 简介
	.intro {
		padding: 15rpx;
		margin-top: 10rpx;
		border: 1rpx solid #F1F1F1;
	}

	.welfare {
		padding: 15rpx;
		margin-top: 10rpx;
	}

	.company_picture {
		padding: 15rpx;

		image {
			height: 150rpx;
			width: 25%;
			margin-top: 10rpx;
		}
	}

	scroll-view {
		width: 100%;
		height: 300rpx;
		white-space: nowrap;
	}

	.item1,
	.item2,
	.item3 {
		display: inline-block;
		width: 50%;
		height: 100%;
		padding: 5rpx;

		image {
			width: 100%;
			height: 250rpx;

		}
	}
</style>
