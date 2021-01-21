<template>
	<view class="wrap">
		<!-- 个人信息 -->
		<view class="person">
		<view class="title">
			<text>个人信息</text>
		</view>
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="姓名" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="年龄" prop="age">
				<u-input :border="border" placeholder="请输入年龄" v-model="model.age" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="性别" prop="sex">
				<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="model.sex" placeholder="请选择性别" @click="actionSheetShow = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="电话" prop="phone">
				<u-input :border="border" placeholder="请输入电话号码" v-model="model.phone" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="微信" prop="wechat">
				<u-input :border="border" placeholder="请输入微信号" v-model="model.wechat" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="选择类型" prop="workType" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.workType" placeholder="请选择工作类型" @click="selectShow = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="学历" prop="maxdegree">
				<u-input :border="border" placeholder="请输入最高学历" v-model="model.maxdegree" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="行业" prop="industry">
				<u-input :border="border" placeholder="请输入行业" v-model="model.industry" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="毕业时间" prop="time" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow1" v-model="model.time" placeholder="请选择毕业时间" @click="pickerShow1 = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="简介" prop="intro">
				<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
			</u-form-item>
		</u-form>
		</view>
		<!-- 工作经历 -->
		<view class="work">
			<view class="title">
				<text>工作经历</text>
			</view>
			<u-form :model="model" :rules="rules" ref="uForm1" :errorType="errorType">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="公司名称" prop="Companyname">
					<u-input :border="border" placeholder="请输入公司名称" v-model="model.Companyname" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="选择职位" prop="workname" label-width="150">
					<u-input :border="border" type="select" :select-open="selectShow1" v-model="model.workname" placeholder="请选择公司职位" @click="selectShow1 = true"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="在职时间" prop="worktime">
					<u-input :border="border" placeholder="请输入在职时间" v-model="model.worktime" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="工作内容" prop="workmatter" label-width="150">
					<u-input type="textarea" :border="border" placeholder="请填写工作内容" v-model="model.workmatter" />
				</u-form-item>
			</u-form>	
		</view>
		<!-- 教育经历 -->
		<view class="education">
			<view class="title">
				<text>教育经历</text>
			</view>
			<u-form :model="model" :rules="rules" ref="uForm2" :errorType="errorType">
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="学校名称" prop="Schoolname">
				<u-input :border="border" placeholder="请输入学校名称" v-model="model.Schoolname" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="制度" prop="institution" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow3" v-model="model.institution" placeholder="请选择制度" @click="selectShow3 = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="120" :label-position="labelPosition" label="专业" prop="speciality">
				<u-input :border="border" placeholder="请输入专业名称" v-model="model.speciality" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="选择学历" prop="degree" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow2" v-model="model.degree" placeholder="请选择学历" @click="selectShow2 = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="学校经历" prop="shcoolexp" label-width="150">
				<u-input type="textarea" :border="border" placeholder="请填写学校经历" v-model="model.shcoolexp" />
			</u-form-item>
			</u-form>	
		</view>
		<!-- 项目经历 -->
		<view class="project">
		<view class="title">
			<text>项目经历</text>
		</view>
		<u-form :model="model" :rules="rules" ref="uForm3" :errorType="errorType">
		<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="项目名称" prop="Projectname">
			<u-input :border="border" placeholder="请输入项目名称" v-model="model.Projectname" type="text"></u-input>
		</u-form-item>
		<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="担任角色" prop="Proworkname">
			<u-input :border="border" placeholder="请输入担任角色" v-model="model.Proworkname" type="text"></u-input>
		</u-form-item>
		<u-form-item :label-position="labelPosition" label="项目描述" prop="Prodescribe" label-width="150">
			<u-input type="textarea" :border="border" placeholder="请填项目描述" v-model="model.Prodescribe" />
		</u-form-item>
		<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" label-width="150" :label-position="labelPosition" label="项目链接" prop="Projecturl">
			<u-input :border="border" placeholder="请输入项目url" v-model="model.Projecturl" type="text"></u-input>
		</u-form-item>
		</u-form>
			</view>
		<view class="create">
			<u-button @click="submit" type="primary">创建</u-button>
		</view>
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-select mode="single-column" :list="selectList1" v-model="selectShow1" @confirm="selectConfirm1"></u-select>
		<u-select mode="single-column" :list="selectList2" v-model="selectShow2" @confirm="selectConfirm2"></u-select>
		<u-select mode="single-column" :list="selectList3" v-model="selectShow3" @confirm="selectConfirm3"></u-select>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
		<u-picker mode="time" v-model="pickerShow1" @confirm="timeConfirm"></u-picker>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model:{
					// 个人信息
					name: '',
					age:'',
					sex:'',	
					phone:'',
					wechat:'',
					workType:'',
					maxdegree:'',
					industry:'',
					position:'',
					region:'',
					intro:'',
					time: '',
					// 工作经历
					Companyname:'',
					workname:'',
					worktime:'',
					workmatter: '',
					// 教育经历
					Schoolname: '',
					degree:'',
					speciality:'',
					institution:'',
					shcoolexp:'',
					// 项目经历
					Projectname:'',
					Proworkname:'',
					Prodescribe:'',
					Projecturl:''
				},
				rules:{
					// 个人信息
					name:[
						{
							required: true,
							message: '请输入姓名',
							trigger: 'blur' ,
						}
					],
					age:[
						{
							required: true,
							message: '请输入年龄',
							trigger: 'blur' ,
						}
					],
					sex: [
							{
								required: true,
								message: '请选择性别',
								trigger: 'change'
							},
						],
					phone: [
						{
							required: true,
							message: '请输入手机号码',
							trigger: 'blur'
						},
					],
					wechat:[
						{
							required: true,
							message: '请输入微信号',
							trigger: 'blur' ,
						}
					],
					workType:[
						{
							required: true,
							message: '请选择工作类型',
							trigger: 'change'
						},
					],
					industry:[
						{
							required: true,
							message: '请输入行业',
							trigger: 'blur' ,
						}
					],
					position:[
						{
							required: true,
							message: '请输入地址',
							trigger: 'blur' ,
						}
					],
					maxdegree:[
						{
							required: true,
							message: '请输入学历',
							trigger: 'blur' ,
						}
					],
					// 工作经历
					Companyname:[
						{
							required: true,
							message: '请输入公司名称',
							trigger: 'blur' ,
						}
					],
					worktime:[
						{
							required: true,
							message: '请输入在职时间',
							trigger: 'blur' ,
						}
					],
					// 教育经历
					Schoolname:[
						{
						required: true,
						message: '请输入学校名称',
						trigger: 'blur' ,	
						}
					],
					speciality:[
						{
						required: true,
						message: '请输入专业名称',
						trigger: 'blur' ,	
						}
					],
					// 项目经历
					Projectname:[
						{
						required: true,
						message: '请输入项目名称',
						trigger: 'blur' ,	
						}
					],
					Proworkname:[
						{
						required: true,
						message: '请输入担任角色',
						trigger: 'blur' ,	
						}
					],
					
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
				selectList: [
					{
						value: '全职',
						label: '全职'
					},
					{
						value: '兼职',
						label: '兼职'
					},
					{
						value: '其他',
						label: '其他'
					}
				],
				selectList1: [
					{
						value: '销售',
						label: '销售'
					},
					{
						value: '客服',
						label: '客服'
					},
					{
						value: '行政',
						label: '行政'
					},
					{
						value: '主管',
						label: '主管'
					},
					{
						value: '经理',
						label: '经理'
					},
					{
						value: '厨师',
						label: '厨师'
					},
					{
						value: '服务员',
						label: '服务员'
					},
					{
						value: '学徒',
						label: '学徒'
					},
					{
						value: '教练',
						label: '教练'
					},
					{
						value: '程序员',
						label: '程序员'
					},
					{
						value: '老师',
						label: '老师'
					}
				],
				selectList2:[
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
				selectList3:[
					{
						value: '全日制',
						label: '全日制'
					},
					{
						value: '非全日制',
						label: '非全日制'
					},
				],
				check: false,
				selectStatus: 'close',
				border: false,
				labelPosition: 'left',
				actionSheetShow: false,
				errorType: ['message'],
				pickerShow: false,
				pickerShow1: false,
				selectShow: false,
				selectShow1: false,
				selectShow2: false,
				selectShow3: false
			}
		},
		computed: {
			borderCurrent() {
				return this.border ? 0 : 1;
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.$refs.uForm1.setRules(this.rules);
			this.$refs.uForm2.setRules(this.rules);
			this.$refs.uForm3.setRules(this.rules);
		},
		methods: {
			submit() {
				this.$refs.uForm1.validate((valid) => { 
				                if (valid) {
				                  
				                }
				              });
				this.$refs.uForm2.validate((valid) => {
				                if (valid) {
				                  
				                }
				              });
			    this.$refs.uForm3.validate((valid) => {
							  if (valid) {
								
							  }
							});
				this.$refs.uForm.validate(valid => {
					if (valid) {			  
						const res = this.$myRequest({
							url:'addResume',
							dataType: "json",
							header: {
							        'content-type': 'application/json', 
							        },
							data:JSON.stringify({ 
								// 个人信息
								"user_id":1,
								"resume_name":this.model.name,
								"age":this.model.age,							
								"sex":this.model.sex,
								"phone": this.model.phone,
								"wechat": this.model.wechat,
								"work_type":this.model.workType,
								"industry":this.model.industry,
								"max_degree":this.model.maxdegree,
								"work_city":this.model.region,
								"graduation_time":this.model.time,
								"introduction":this.model.intro,
								// 工作经历
								"workEXP":[{
									"company_name":this.model.Companyname,
									"work_name":this.model.workname,
									"work_time":this.model.worktime,
									"work_matter":this.model.workmatter
								}],
								// 教育经历
								"educationalEXP":[
									{
										"school_name":this.model.Schoolname,
										"institution":this.model.institution,
										"degree":this.model.degree,
										"specialty":this.model.speciality,
										"school_experience":this.model.shcoolexp
									}
								],
								// 项目经历
								"projectEXP":[
									{
										"project_name":this.model.Projectname,
										"work_name":this.model.Proworkname,
										"project_description":this.model.Prodescribe,
										"project_link":this.model.Projecturl
									}
								]
							}),						
							method: 'POST'
						})
						console.log(res)								
						this.$refs.uToast.show({
							title: '提交成功',
							type: 'success',
							// url: 'pages/public/public'							
						})
										
					
					} else {
					console.log("提交失败")
					}
				});
			},
			// 点击actionSheet回调
			actionSheetCallback(index) {
				uni.hideKeyboard();
				this.model.sex = this.actionSheetList[index].text;
			},
			// 选择类型回调
			selectConfirm(e) {
				this.model.workType = '';
				e.map((val, index) => {
					this.model.workType += this.model.workType == '' ? val.label : '-' + val.label;
				})
			},
			// 选择公司职位回调
			selectConfirm1(e){
				this.model.workname = '';
				e.map((val, index) => {
					this.model.workname += this.model.workname == '' ? val.label : '-' + val.label;
				})
			},
			// 选择学历回调
			selectConfirm2(e){
				this.model.degree = '';
				e.map((val, index) => {
					this.model.degree += this.model.degree == '' ? val.label : '-' + val.label;
				})
			},
			// 选择制度回调
			selectConfirm3(e){
				this.model.institution = '';
				e.map((val, index) => {
					this.model.institution += this.model.institution == '' ? val.label : '-' + val.label;
				})
			},
			// 选择地区回调
			regionConfirm(e) {
				this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},
			// 选择毕业时间回调
			timeConfirm(e){
				this.model.time = e.year + '-' + e.month + '-' + e.day;
			},
			borderChange(index) {
				this.border = !index;
			},
			labelPositionChange(index) {
				this.labelPosition = index == 0 ? 'left' : 'top';
			},
			codeChange(text) {
				this.codeTips = text;
			},
		}
	}
</script>

<style lang="scss">
.wrap {
	padding: 30rpx;
}
.title{
	margin-top: 10rpx;
	font-size: 35rpx;
	font-weight: bold;
}
.create{
}
</style>
