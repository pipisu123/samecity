<template>
	<view class="Resume">
		<!-- 中间导航 -->
		<tabBar @cityChange="cityChange" @wagesChange="wagesChange" @worktype="worktype" @selectsex="selectsex"></tabBar>
		<view class="resumelist" v-for="(item,index) in list" :key="index" @click="ResumeDetail(item.resume_id)">
			<u-avatar :src="item.src" size=100 show-sex=true :sex-icon="item.sex"></u-avatar>
			<view class="right">
				<view class="title">
					<text class="name">{{item.resume_name}}</text>
					<view class="time">
						<text>{{item.time}}</text>
					</view>
				</view>
				<view class="base">
					<view class="">
						<text>{{item.age}}岁-</text>
					</view>
					<view class="">
						<text>{{item.max_degree}}-</text>
					</view>
					<view class="">
						<text>{{item.work_city}}</text>
					</view>
					<view class="">
						<text>{{work_city}}</text>
					</view>
				</view>
				<view class="work">
					<text>职位：{{item.industry}}</text>
					<view class="worktype">
						<text>{{item.work_type}}</text>
					</view>
				</view>
				<view class="wages">
					<text>期望工资：{{item.compensation}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabBar from './tabBar/tabBar.vue'
	export default {
		data() {
			return {
				list:[],
				wages:'',
				work_types:'',
				city:'',
				sex:'',
				page:0
			}
		},
		created() {
		this.getResumelist()	
		},
		components:{
			tabBar
		},
		methods: {
			// 根据性别来查询
			async selectsex(data){
				console.log(data)
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"sex": data,
						"wages": this.wages,
						"work_type":this.work_types,
						"work_city":this.work_city,
						"paging":{
							"page":this.page
						}
					}),
					method: 'POST'
				})
				console.log(res)
				this.list = res.data.data.resumes;
				for(var i=0;i<this.list.length;i++){
						if(this.list[i].sex == '男'){
							 this.list[i].sex = "man"
							
						}else{
							 this.list[i].sex = "woman"
							
						}
						}
				this.sex = data
			},
			// 根据城市查询招聘列表
			async cityChange(data){
				console.log(data)
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"work_city": data,
						"wages": this.wages,
						"paging":{
							"page":this.page
						}
					}),
					method: 'POST'
				})
				console.log(res)
				this.list = res.data.data.resumes;
				for(var i=0;i<this.list.length;i++){
						if(this.list[i].sex == '男'){
							 this.list[i].sex = "man"
							
						}else{
							 this.list[i].sex = "woman"
							
						}
						}
				this.city = data
			},
			// 根据工资来查询
			async wagesChange(data){
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"compensation": data,
						"work_city":this.city,
						"work_types":this.work_types,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.list = res.data.data.resumes;
				this.wages = data
				for(var i=0;i<this.list.length;i++){
						if(this.list[i].sex == '男'){
							 this.list[i].sex = "man"
							
						}else{
							 this.list[i].sex = "woman"
							
						}
						}
			},
			// 根据工作类型查询简历
			async worktype(data){
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"compensation": this.wages,
						"work_city":this.city,
						"work_type":data,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.work_types = data
				this.list = res.data.data.resumes;
				for(var i=0;i<this.list.length;i++){
						if(this.list[i].sex == '男'){
							 this.list[i].sex = "man"
							
						}else{
							 this.list[i].sex = "woman"
							
						}
						}
			},
			// 查询简历列表
			async getResumelist(){
				const res = await this.$myRequest({
					url:'findResume',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"paging":{
							"page":0
						}
						
					}),
					
					method: 'POST'
				})
				console.log(res.data.data.resumes)
				this.list = res.data.data.resumes;
				for(var i=0;i<this.list.length;i++){
						if(this.list[i].sex == '男'){
							 this.list[i].sex = "man"
							
						}else{
							 this.list[i].sex = "woman"
							
						}
						
				}
				},
			ResumeDetail(resume_id){
				uni.navigateTo({
					url:'/pages/ResumeDeatil/ResumeDeatil?resume_id='+resume_id
				})
			}
		}
	}
</script>

<style lang="scss">
.Resume{
	.resumelist{
		display: flex;
		padding: 20rpx 20rpx;
		border-bottom: 2rpx solid #F1F1F1;
		.right{
			margin-left: 15rpx;
			margin-right: 40rpx;
			view{
					font-size: 25rpx;
					
			}
			.title{
				display: flex;
				.name{
					width: 300rpx;
					font-weight: bold;
					font-size: 30rpx;
				}
				.time{
					width: 300rpx;
					padding-left: 100rpx;
					font-size: 18rpx;
				}
			}
			.base{
				display: flex;
				view{
					margin: 0rpx 5rpx 0rpx;
				}
				
			}
			}
			.work{
				display: flex;
				.worktype{
					margin-left: 15rpx;
					font-size: 20rpx;
					color: #999999;
				}
			}
			.wages{
				color: #FF0000;
			}
	}
}

</style>
