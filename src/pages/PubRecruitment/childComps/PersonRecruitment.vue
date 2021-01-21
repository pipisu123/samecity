<template>
	<view class="PersonRecruitment">
		<u-form :model="model" :rules="rules" ref="uForm1" :errorType="errorType">
			<u-form-item :label-position="labelPosition" label="简介" prop="intro">
				<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="电话" prop="phone">
				<u-input :border="border" placeholder="请输入电话号码" v-model="model.phone" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="地址" prop="address">
				<u-input :border="border" placeholder="请选择地址" v-model="model.address" type="select" @click="Toaddress"></u-input>
			</u-form-item>
			</u-form>
			<u-button type="primary" @click="create(PersonRecruitment)">立即发布</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType: ['message'],
				model:{
					intro:'',
					phone:'',
					address:''
				},
				PersonRecruitment:{
					intro:'',
					phone:'',
					address:''
				},
				rules:{
						phone: [
							{
								required: true,
								message: '请输入手机号码',
								trigger: 'blur'
							},
						],
				},
			}
		},
		onReady() {
			this.$refs.uForm1.setRules(this.rules);
			console.log("这是字组件")
		},
		methods: {
			Toaddress(){
				uni.chooseLocation({
						success:(res)=>{
							console.log('位置名称：' + res.name);
							console.log('详细地址：' + res.address);
							console.log('纬度：' + res.latitude);
							console.log('经度：' + res.longitude);
							let latitude = res.latitude; //纬度
							let longitude = res.longitude; //经度
							this.model.address = res.address
						}
						});
			},
			// 创建个体招聘信息
			create(PersonRecruitment){
				this.$refs.uForm1.validate(valid => {
					if (valid) {
						this.PersonRecruitment.intro = this.model.intro
						this.PersonRecruitment.phone = this.model.phone
						this.PersonRecruitment.address = this.model.address
						uni.navigateTo({
							url:'/pages/PubRecruitment/ShowPerson/ShowPerson?PersonRecruitment='+encodeURIComponent(JSON.stringify(PersonRecruitment))
						})
					}
				})
			},
			
		}
	}
</script>

<style lang="scss">
	
</style>
