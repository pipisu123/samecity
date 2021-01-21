<template>
	<view class="wrap">
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
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="行业" prop="industry">
				<u-input :border="border" placeholder="请输入行业" v-model="model.industry" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="简介" prop="intro">
				<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
			</u-form-item>
		</u-form>
		<u-button @click="submit" type="primary">提交</u-button>
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model:{
					name: '',
					age:'',
					sex:'',	
					phone:'',
					wechat:'',
					workType:'',
					industry:'',
					position:'',
					region:'',
					intro:''
					
					
				},
				rules:{
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
					]
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
						value: '弹性工作',
						label: '弹性工作'
					}
				],
				check: false,
				selectStatus: 'close',
				border: false,
				labelPosition: 'left',
				actionSheetShow: false,
				errorType: ['message'],
				pickerShow: false,
				selectShow: false,
			}
		},
		computed: {
			borderCurrent() {
				return this.border ? 0 : 1;
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {			  
						const res = this.$myRequest({
							url:'addResume',
							dataType: "json",
							header: {
							        'content-type': 'application/json', 
							        },
							data:JSON.stringify({ 
								"user_id":1,
								"resume_name":this.model.name,
								"age":this.model.age,							
								"sex":this.model.sex,
								"phone": this.model.phone,
								"wechat": this.model.wechat,
								"work_type":this.model.workType,
								"industy":this.model.industry,
								"position":this.model.position,
								"intrduction":this.model.intrduction
																
																// "company_id":1,
								//  "recruitment_title":this.model.name,
								//  // "sex": this.model.sex,
								//  // "work_types": this.model.selectList,
								//  "industry":this.model.goodsType,
								//  "experience":this.model.worktime,
								//  "address":this.model.region,
								//  "introduction": this.model.intro,
								//  // "position": this.model.region,
								//  "max_degree":this.model.worktime,
								//  "wages": this.model.wages,
								//  "poster_path": this.model.photo
							}),						
							method: 'POST'
						})
						console.log(res)								
						this.$refs.uToast.show({
							title: '提交成功',
							type: 'success',
							url: 'pages/public/public'							
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
			// 选择地区回调
			regionConfirm(e) {
				this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
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
</style>
