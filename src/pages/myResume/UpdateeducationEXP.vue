<template>
	<view class="Updateeducation">
		<u-popup v-model="show" mode="center" width=700  border-radius=20 >
			<view class="title" style="text-align: center;">
				修改教育经历
			</view>
			<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="home" label-width="180" :label-position="labelPosition" label="毕业学校" prop="company">
					<u-input :border="border"  v-model="model.school" type="text" ></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="workname" label-width="150" :label-position="labelPosition" label="专业" prop="specialty">
					<u-input :border="border"  v-model="model.specialty" type="text" ></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="worktime" label-width="150" :label-position="labelPosition" label="学历" prop="degree">
					<u-input :border="border"  v-model="model.degree" type="text" ></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="学校经历" prop="experience" label-width="150">
					<u-input type="textarea" :border="border"  v-model="model.experience" />
				</u-form-item>
				</u-form>
				<view>
					<button type="default" @click="update">保存</button>
				</view>
				<u-toast ref="uToast" />
			</u-popup>
		<view class="button">
			<u-button size="mini" type="info" shape="circle" @click="open">修改</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {	
			return {
				show: false,
				model:{
					"school":'',
					"degree":'',
					"specialty":'',
					"experience":''
				}
			}
		},
		onLoad() {
		
			this.update()
		},
		created() {
			this.getResume1()
		},
		methods: {
			open() {
				this.show = true;
			},
			// 查询我的简历
			  async getResume1(){
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
					this.educationalEXP = res.data.data.resumes[0].educationalEXP[0],
					this.model.school =  res.data.data.resumes[0].educationalEXP[0].school_name,
					this.model.degree =  res.data.data.resumes[0].educationalEXP[0].degree,
					this.model.specialty =  res.data.data.resumes[0].educationalEXP[0].specialty,
					this.model.experience =  res.data.data.resumes[0].educationalEXP[0].school_experience
					},
					// 修改学校经历
					update(){
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
										"educationalEXP": [
											{
												"school_id":5,
												"school_name":this.model.school,
												"degree":this.model.degree,
												"specialty":this.model.specialty,
												"school_experience":this.model.experience
											}
										]
									}),
									
									method: 'POST'
								})
								console.log("修改成功")
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
								
		}
	}
</script>

<style lang="scss">
.button{
	margin-left: 665rpx;
}
</style>
