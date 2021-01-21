<template>
	<view class="resume">
		<!-- 个人信息 -->
		<view class="person">
			<view class="tit">
				<image :src="src" mode="" style="width: 15rpx;height: 15rpx;"></image>
				<text>个人信息</text>
			</view>
			<view class="intro">
				<view class="avatar">
					<u-avatar :src="avatar" show-sex=true :sex-icon="sex"></u-avatar>
					<view class="info">
						<text class="name">{{resume.resume_name}}</text>
						<text class="info1">{{resume.age}} 岁</text>
						<view class="info3">
							<text class="info2">{{resume.max_degree}}</text>
							<view class="phone">
								<u-icon name="phone" color="#5785E5"></u-icon>
								<text class="info1">{{resume.phone}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="intro">
				<text>期望工作：</text>
			    <text>{{resume.industry}}</text>
			</view>
			<view class="introwages">
				<text>期望薪资：</text>
			    <text>{{resume.compensation}}</text>
			</view>
			<view class="intro">
				<view class="">
					<text>邮箱：</text>
					<text>15627534849</text>
				</view>
			</view>
			<view class="intro">
				<text>求职地区：</text>
			    <text>{{resume.work_city}}</text>
			</view>
			<view class="PersonInfo">
				<u-button size="mini" type="info" shape="circle" @click="open">修改</u-button>
			</view>
			<!-- 修改个人信息弹框 -->
			<u-popup v-model="show" mode="center" width=700 border-radius=20 >
				<view>
					<view class="title" style="text-align: center;">
						修改个人信息
					</view>
					<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="姓名" prop="name">
							<u-input :border="border"  v-model="model.name" type="text" ></u-input>
						</u-form-item>
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="年龄" prop="age">
							<u-input :border="border"  v-model="model.age" type="text"></u-input>
						</u-form-item>
						<u-form-item :label-position="labelPosition" label="性别" prop="sex">
							<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="model.sex"  @click="actionSheetShow = true"></u-input>
						</u-form-item>
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone" label-width="120" :label-position="labelPosition" label="电话" prop="phone">
							<u-input :border="border"  v-model="model.phone" type="text" ></u-input>
						</u-form-item>
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="期望薪资" prop="wages">
							<u-input :border="border"  v-model="model.wages" type="text" ></u-input>
						</u-form-item>
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="期望职位" prop="industry">
							<u-input :border="border"  v-model="model.industry" type="text" ></u-input>
						</u-form-item>
						<u-form-item :label-position="labelPosition" label="学历" prop="degree" label-width="120">
							<u-input :border="border" type="select" :select-open="selectShow" v-model="model.degree" placeholder="请选择学历" @click="selectShow = true"></u-input>
						</u-form-item>
						<u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="150">
							<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region"  @click="pickerShow = true"></u-input>
						</u-form-item>
						</u-form>
						<view>
							<button type="default" @click="updateResume">保存</button>
						</view>
						<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
						<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
						<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
						<u-toast ref="uToast" />
				</view>
			</u-popup>
		</view>
		<!-- 工作经验 -->
		<view class="workExp">
			<view class="tit">
				<image :src="src" mode="" style="width: 15rpx;height: 15rpx;"></image>
				<text>工作经验</text>
			</view>
			<view class="experience">
				<text>公司名称：</text>
				<text>{{workExp.company_name}}</text>
			</view>
			<view class="experience">
				<text>在公司担任职位：</text>
				<text>{{workExp.work_name}}</text>
			</view>
			<view class="experience">
				<text>就职时间：</text>
				<text>1年</text>
			</view>
			<view class="experience">
				<text>工作内容：</text>
				<text>{{workExp.work_matter}}</text>
			</view>
			<!-- 修改工作经历 -->
			<UpdateworkEXP :workExp="workExp"></UpdateworkEXP>
		</view>
		<!-- 教育经历 -->
		<view class="education">
			<view class="tit">
				<image :src="src" mode="" style="width: 15rpx;height: 15rpx;"></image>
				<text>教育经历</text>
			</view>
			<view class="graduate">
				<text>毕业学校：</text>
				<text>{{education.school_name}}</text>
			</view>
			<view class="graduate">
				<text>毕业时间：</text>
				<text>2021-07-10</text>
			</view>
			<view class="graduate">
				<text>最高学历：</text>
				<text>{{education.degree}}</text>
			</view>
			<view class="graduate">
				<text>专业：</text>
				<text>{{education.specialty}}</text>
			</view>
			<view class="graduate">
				<text>学校经历：</text>
				<text>{{education.school_experience}}</text>
			</view>
			<!-- 修改教育经历 -->
			<UpdateeducationEXP></UpdateeducationEXP>
		</view>
		<!-- 项目经历 -->
		<view class="project">
			<view class="tit">
				<image :src="src" mode="" style="width: 15rpx;height: 15rpx;"></image>
				<text>项目经历</text>
			</view>
			<view class="project">
				<text>项目名称：</text>
				<text>{{project.project_name}}</text>
			</view>
			<view class="project">
				<text>项目描述：</text>
				<text>{{project.project_description}}</text>
			</view>
			<view class="project">
				<text>项目链接：</text>
				<text>{{project.project_link}}</text>
				<!-- <u-link href="project.project_link" :under-line="true">{{project.project_link}}</u-link> -->
			</view>
		</view>
		<!-- 修改项目经历 -->
		<UpdateprojectEXP></UpdateprojectEXP>
	</view>
</template>

<script>
	import UpdateworkEXP from '../myResume/UpdateworkEXP.vue'
	import UpdateeducationEXP from '../myResume/UpdateeducationEXP.vue'
	import UpdateprojectEXP from '../myResume/UpdateProject.vue'
	export default {
		data() {
			return {
				src:'../../static/radius.png',
				avatar: '',
				resume:'',
				workExp:'',
				education:'',
				project: {},
				sex: '',
				show:false,
				model:{
					name:'',
					age:'',
					sex:'',
					phone:'',
					wages:'',
					degree:'',
					industry:'',
					region:''
				},
				actionSheetList: [
					{
						text: '男'
					},
					{
						text: '女'
					},
					{
						text: '保密'
					}
				],
				selectList:[
					{
						value: '高中',
						label: '高中'
					},
					{
						value: '大专',
						label: '大专'
					},
					{
						value: '本科',
						label: '本科'
					},
					{
						value: '研究生',
						label: '研究生'
					},
					{
						value: '博士',
						label: '博士'
					},
					{
						value: '其他',
						label: '其他'
					},
				],
				actionSheetShow: false,
				selectShow: false,
				pickerShow: false,
			}
		},
		components:{
			UpdateworkEXP,
			UpdateeducationEXP,
			UpdateprojectEXP
		},
		created() {
			this.avatar=this.$store.state.avatar
		},
	    onLoad() {
	    	this.getResume()
	    },
		methods: {
			// 点击actionSheet回调
			actionSheetCallback(index) {
				uni.hideKeyboard();
				this.model.sex = this.actionSheetList[index].text;
			},
			// 选择学历回调
			selectConfirm(e){
				this.model.degree = '';
				e.map((val, index) => {
					this.model.degree += this.model.degree == '' ? val.label : '-' + val.label;
				})
			},
			// 选择地区回调
			regionConfirm(e) {
				this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},
			open() {
					this.show = true;
					},
		// 查询我的简历
		  async getResume(){
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"user_id":1,
						"paging":{
							"page":0
						}
						
					}),
					
					method: 'POST'
				})
				console.log(res.data.data)
				this.resume = res.data.data.resumes[0],
				this.workExp = res.data.data.resumes[0].workEXP[0],
				this.education = res.data.data.resumes[0].educationalEXP[0],
				this.project = res.data.data.resumes[0].projectEXP[0],
				// 修改个人信息
				this.model.name = res.data.data.resumes[0].resume_name,
				this.model.age = res.data.data.resumes[0].age,
				this.model.sex = res.data.data.resumes[0].sex,
				this.model.phone = res.data.data.resumes[0].phone,
				this.model.wages = res.data.data.resumes[0].compensation,
				this.model.industry = res.data.data.resumes[0].industry,
				this.model.degree = res.data.data.resumes[0].max_degree,
				this.model.region = res.data.data.resumes[0].work_city
				if(this.resume.sex=='男'){
					this.sex = "man"
				}else{
					this.sex = "woman"
				}
				},
				// 修改个人信息
			     updateResume(){
					 this.$refs.uForm.validate(valid => {
					 if (valid) {
					const res = this.$myRequest({
						url:'updateResume',
						dataType: "json",
						header: {
						        'content-type': 'application/json', 
						        },
						data:JSON.stringify({ 
							"user_id":1,
							"resume_id":55,
							"resume_name":this.model.name,
							"age":this.model.age,
							"sex":this.model.sex,
							"phone":this.model.phone,
							"compensation":this.model.wages,
							"industry":this.model.industry,
							"max_degree":this.model.degree,
							"work_city":this.model.region
						}),
						
						method: 'POST'
					})
					this.$refs.uToast.show({
						title: '修改成功',
						type: 'success',				
					})
					uni.redirectTo({
					        url:'/pages/myResume/myResume'
					       });
				}else{
					this.$refs.uToast.show({
						title: '修改失败，请重新修改',
						type: 'error',
						duration: 2500
													
					})		
				}
				});
				}
			
		},
		
	}
</script>

<style lang="scss">
.tit{
	padding: 10rpx;
}
// 个人资料
.person{
	border-bottom: 10rpx solid #F1F1F1;
	height: 500rpx;
}	
.intro{
	display: flex;
	padding: 10rpx;
}
.introwages{
	display: flex;
	padding: 10rpx;
	color: #FF0000;
}
// 求职意向
.intention{
	border-bottom: 10rpx solid #F1F1F1;
	.work{
		display: flex;
		padding: 10rpx;
	}
}
// 教育经历
.education{
	border-bottom: 10rpx solid #F1F1F1;
	.graduate{
		display: flex;
		padding: 10rpx;
	}
}
// 工作经历
.workExp{
	border-bottom: 10rpx solid #F1F1F1;
	.experience{
		padding: 10rpx;
	}
}
// 项目经历
.project{
	padding: 10rpx;
}
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
.PersonInfo{
	float: right;
}
</style>
