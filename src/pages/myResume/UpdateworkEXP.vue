<template>
	<view class="Updatework">
		<u-popup v-model="show" mode="center" width=700  border-radius=20 >
			<view class="title" style="text-align: center;"> 
				修改工作经历
			</view>
			<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="home" label-width="180" :label-position="labelPosition" label="公司名称" prop="company">
					<u-input :border="border"  v-model="model.company" type="text" ></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="workname" label-width="150" :label-position="labelPosition" label="担任角色" prop="company">
					<u-input :border="border"  v-model="model.workname" type="text" ></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="worktime" label-width="150" :label-position="labelPosition" label="工作时间" prop="company">
					<u-input :border="border"  v-model="model.worktime" type="text" ></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="工作内容" prop="workmatter" label-width="150">
					<u-input type="textarea" :border="border"  v-model="model.workmatter" />
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
					company: '',
					workname:'',
					worktime:'',
					workmatter:''
				},
				workExp:''
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
					this.workExp = res.data.data.resumes[0].workEXP[0],
					this.model.company =  res.data.data.resumes[0].workEXP[0].company_name,
					this.model.workname =  res.data.data.resumes[0].workEXP[0].work_name,
					this.model.workmatter =  res.data.data.resumes[0].workEXP[0].work_matter
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
					"workEXP": [
						{
							"work_id":5,
							"company_name":this.model.company,
							"work_name":this.model.workname,
							"work_matter":this.model.workmatter
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
