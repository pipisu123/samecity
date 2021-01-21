<template>
	<view class="ResumeDetail">
		<view class="person">
			<view class="intro">
				<view class="avatar">
					<u-avatar :src="avatar" show-sex=true :sex-icon="sex"></u-avatar>
					<view class="info">
						<text class="name">{{item.resume_name}}</text>
						<text class="info1">{{item.age}} 岁</text>
						<view class="info3">
							<text class="info2">{{item.max_degree}}</text>
							<view class="phone">
								<u-icon name="phone" color="#5785E5"></u-icon>
								<text class="info1">{{item.phone}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="intension">
			<view class="nav">
				<text>求职意向</text>
			</view>
			<view class="job">
				<view class="intro">
					<view class="">
						<u-icon name="account" color="#5785E5"></u-icon>
						<text>{{item.industry}}</text>
					</view>
					<view class="">
						<u-icon name="map" color="#5785E5"></u-icon>
						<text>{{item.work_city}}</text>
					</view>
					<view class="wages">
						<u-icon name="rmb-circle" color="#FF0000"></u-icon>
						<text>{{item.compensation}}</text>
					</view>
					<view class="">
						<u-icon name="file-text-fill" color="#5785E5"></u-icon>
						<text>{{item.work_type}}</text>
					</view>
				
				</view>
			</view>
		</view>
		<!-- 自我评价 -->
		<view class="comment">
			<view class="nav">
				<text>自我评价</text>
			</view>
			<view class="content">
				<text>{{item.introduction}}</text>
			</view>
		</view>
		<!-- 工作经历 -->
		<view class="work">
			<view class="nav">
				<text>工作经历</text>
			</view>
			<view class="experience">
				<view class="intro">
					<view class="">
						<u-icon name="home" color="#5785E5"></u-icon>
						<text>{{item.workEXP[0].company_name}}</text>
					</view>
					<view class="">
						<u-icon name="edit-pen" color="#5785E5"></u-icon>
						<text>{{item.workEXP[0].work_name}}</text>
					</view>
					<view class="dec">
						<text>工作描述</text>
						<text>{{item.workEXP[0].work_matter}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 教育经历 -->
		<view class="education">
			<view class="nav">
				<text>教育经历</text>
			</view>
			<view class="graduate">
				<text>毕业学校：</text>
				<text>{{item.educationalEXP[0].school_name}}</text>
			</view>
			<view class="graduate">
				<text>毕业时间：</text>
				<text>2021-07-10</text>
			</view>
			<view class="graduate">
				<text>最高学历：</text>
				<text>{{item.educationalEXP[0].degree}}</text>
			</view>
			<view class="graduate">
				<text>专业：</text>
				<text>{{item.educationalEXP[0].specialty}}</text>
			</view>
			<view class="graduate">
				<text>学校经历：</text>
				<text>{{item.educationalEXP[0].school_experience}}</text>
			</view>
			</view>
		<!-- 项目经历 -->
		<view class="projectexp">
			<view class="nav">
				<text>项目经历</text>
			</view>
			<view class="project">
				<text>项目名称：</text>
				<text>{{item.projectEXP[0].project_name}}</text>
			</view>
			<view class="project">
				<text>项目描述：</text>
				<text>{{item.projectEXP[0].project_description}}</text>
			</view>
			<view class="project">
				<text>项目链接：</text>
				<text>{{item.projectEXP[0].project_link}}</text>
				<!-- <u-link href="project.project_link" :under-line="true">{{project.project_link}}</u-link> -->
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '',
				sex: '',
				item: ''
				
				
			}
		},
		onLoad(options) {
			console.log(options)
			this.getDetail(options.resume_id)
		},
		methods: {
			 async getDetail(resume_id){
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"resume_id":resume_id,
						"paging":{
							"page":0
						}
					}),
					method: 'POST'
				})
				console.log(res.data.data.resumes[0])
				this.item = res.data.data.resumes[0];
				if(this.item.sex=='男'){
					this.sex = "man"
				}else{
					this.sex = "woman"
				}
			}
		}
	}
</script>

<style lang="scss">
// 个人资料
.person{
	border-bottom: 3rpx solid #F1F1F1;
	margin-top: 50rpx;
	.avatar{
		display: flex;
		padding: 8rpx;
		.info{
			padding-left: 20rpx;
		}
		.info1{
			font-size: 20rpx;
			color: #999999;
			margin-left: 10rpx;
		}
		.info2{
			font-size: 20rpx;
			color: #999999;
			margin-top: 3px;
		}
		.info3{
			display: flex;
			.phone{
				margin-left: 20rpx;
			}
		}
		.name{
			font-size: 30rpx;
			font-weight: bold;
		}
	}
}
// 求职意向
.intension{
	
	.job{
		display: flex;
		padding: 20rpx;
		text{
			margin-left: 15rpx;
			font-size: 25rpx;
			color: #999999;
		}
		border-bottom: 1rpx solid #F1F1F1;
	}
	.wages{
		text{
			color: #FF0000;
		}
	}
}
.nav{
	border-bottom: 1rpx solid #F1F1F1;
	padding: 15rpx;
	}
.content{
	display: flex;
	border-bottom: 5rpx solid #F1F1F1;
	padding: 20rpx;	
	text{
		color: #999999;
		font-size: 25rpx;
	}
}
// 工作经历
.work{
	border-bottom: 5rpx solid #F1F1F1;
	.intro{
		text{
			margin-left: 15rpx;
			font-size: 25rpx;
			color: #999999;
		}
		.dec{
			
		}
	}
}
// 教育经历
.education{
	border-bottom: 10rpx solid #F1F1F1;
	.graduate{
		display: flex;
		padding: 10rpx;
		text{
			font-size: 25rpx;
			color: #999999;
		}
	}
}
// 项目经历
.projectexp{
	padding: 10rpx;
	text{
		font-size: 25rpx;
		color: #999999;
	}
}
</style>
