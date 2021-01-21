<template>
	<view class="Updateproject">
		<u-popup v-model="show" mode="center" width=700  border-radius=20 >
			<view class="title" style="text-align: center;">
				修改项目经历
			</view>
			<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="home" label-width="180" :label-position="labelPosition" label="项目名称" prop="project">
					<u-input :border="border"  v-model="model.project" type="text" ></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="项目描述" prop="description" label-width="150">
					<u-input type="textarea" :border="border"  v-model="model.description" />
				</u-form-item>
				<u-form-item  label-width="150" :label-position="labelPosition" label="项目链接" prop="url">
					<u-input :border="border"  v-model="model.url" type="text" ></u-input>
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
					project:'',
					description:'',
					url:''
				}
			}
		},
		created() {
			this.getResume1()
		},
		onLoad() {
			this.update()
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
								this.model.project =  res.data.data.resumes[0].projectEXP[0].project_name,
								this.model.url =  res.data.data.resumes[0].projectEXP[0].project_link,
								this.model.description =  res.data.data.resumes[0].projectEXP[0].project_description
								},
			 // 修改工作经历
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
								"projectEXP": [
									{
										"project_id":5,
										"project_name":this.model.project,
										"project_link":this.model.url,
										"project_description":this.model.description
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
