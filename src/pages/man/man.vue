<template>
	<view>
		<!-- 招聘首页 -->
		<template v-if="show">
			<!-- 搜索栏 -->
			<view class="search">
				<u-search placeholder="请输入职位或公司名称"  v-model="value"  @custom="custom"></u-search>
			</view>
			<view class="top">
				<Recruitment></Recruitment>
			</view>
			<!-- 轮播图 -->
			<swipper></swipper>
			<!-- 广告通知 -->
			<notice></notice>
			<!-- 条件选择招聘列表 -->
			<RecruitmentBar @cityChange="cityChange" @wagesChange="wagesChange" @worktype="worktype" @industryselect="industryselect"></RecruitmentBar>
			<!-- 招聘发布列表 -->
			<view>
				<view v-if="list.length ===0">
					<u-empty text="暂无数据" mode="search" margin-top=200></u-empty>
				</view>
				<scroll-view scroll-y="true" class="scroll-Y"  @scrolltolower="lower">
				<Recruitmentlist :list="list" @itemClick="goDetail"></Recruitmentlist>
				 </scroll-view>
			</view>
		</template>
		
		<!-- 招聘人才库 -->
		<template v-else-if="show1">
			<view class="">
				<!-- 轮播图 -->
				<swipper></swipper>
				<!-- 个人简历列表 -->
				<ResumeList></ResumeList>
			</view>
		</template>
		<!-- 招聘发布 -->
		<template v-else-if="show2">
			<view>
				<Public></Public>
			</view>
		</template>
		<!-- 招聘职位 -->
		<template v-else-if="show3">
			<view class="ss">
				<Position></Position>
			</view>
		</template>
		<!-- 招聘个人中心 -->
		<template v-else-if="show4">
			<view class="me">
				<me></me>
			</view>
		</template>
		
		<!-- 底部导航栏 -->
		<Bottombar @Clickitem="Clickitem"></Bottombar>
	</view>
	
</template>

<script>
	import Recruitment from './childComps/Recruitment.vue';
	import swipper from '../components/swipper.vue'
	import notice from '../components/notice.vue'
	import RecruitmentBar from './childComps/RecruitmentBar.vue'
	import Recruitmentlist from './childComps/Recruitmentlist.vue'
	import Bottombar from './childComps/Bottombar.vue'
	import me from './PersonalCenter/me.vue'
	import ResumeList from './Talentpool/ResumeList.vue'
	import Position from './Position/position.vue'
	import Public from '../PubRecruitment/PubRecruitment.vue'
	
	export default {
		data() {
			return {
				value: '',
				list:[],
				show:true,
				show1:false,
			    show2:false,
				show3:false,
				show4:false,
				company:'',
				city:'',
				wages:'',
				work_types:'',
				page:0,
				count:'',
				
			}
		},
		components:{
		Recruitment,
		swipper,
		notice,
		RecruitmentBar,
		Recruitmentlist,
		Bottombar,
		ResumeList,
		me,
		Position,
		Public
		},
		onLoad() {
			this.getRecruitmentlist();
			this.cityChange();
			this.wagesChange()
		},
		created() {
			
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getRecruitmentlist()
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			// 触底分页查询
			lower(){
					this.page++
					console.log(this.page)
					 uni.showNavigationBarLoading();//显示加载动画
					// 查询招聘列表
						const res = this.$myRequest({
							url:'findRecruitment',
							dataType: "json",
							header: {
							        'content-type': 'application/json', 
							        },
							data:JSON.stringify({ 
								"str":this.value,
								"wages": this.wages,
								"address":this.city,
								"work_types":this.work_types,
								"paging":{
									"count":this.count,
									"page": this.page,
								}
								
							}),
							method: 'POST'
						})
						
						var a = Promise.resolve(res)
						a.then((res)=>{
							// console.log(res.data)
							console.log(this.list.length)
							console.log(res)
							if (res.data.code===20001) {//没有数据
									uni.hideNavigationBarLoading();//关闭加载动画
									return false;
										}
								this.list = this.list.concat(res.data.data.user_Recruitments);//将数据拼接在一起			
								uni.hideNavigationBarLoading();//关闭加载动画
						})
						// this.list = res.data.data.user_Recruitments
			},
			// 搜索招聘
			custom(value) {
				console.log(value)
				this.getRecruitmentlist()
			},
			// 跳转到招聘详情
			goDetail(recruitment_id){
				uni.navigateTo({
					url: '/pages/detail/detail?recruitment_id='+recruitment_id
				})
				console.log(recruitment_id)
				
			},
			Clickitem(index){
				console.log(index)
				switch(index){
					case 0 :
					this.show = true;
					this.show1 = false;
					this.show2 = false;
					this.show3 = false;
					this.show4 = false;
					break;
					case 1 :
					this.show =false;
					this.show1 = true;
					this.show2 = false;
					this.show3 = false;
					this.show4 = false;
					break;
					case 2 :
					this.show = false;
					this.show1 = false;
					this.show2 = true;
					this.show3 = false;
					this.show4 = false;
					break;
					case 3 :
					this.show = false;
					this.show1 = false;
					this.show2 = false;
					this.show3 = true;
					this.show4 = false;
					break;
					case 4 :
					this.show = false;
					this.show1 = false;
					this.show2 = false;
					this.show3 = false;
					this.show4 = true;
					break;
				}
			},
			// 根据工作类型查询
			async worktype(data){
				const res = await this.$myRequest({
					url:'findRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"wages": this.wages,
						"address":this.city,
						"work_types":data,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.work_types = data
				console.log(res.data.data.user_Recruitments)
				this.list = res.data.data.user_Recruitments;
			},
			// 根据行业查询
			async industryselect(data){
				const res = await this.$myRequest({
					url:'findRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"industry": data,
						"address":this.city,
						"work_types":this.work_types,
						"wages":this.wages,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.list = res.data.data.user_Recruitments;
				this.industry = data
			},
			// 根据工资来查询
			async wagesChange(data){
				const res = await this.$myRequest({
					url:'findRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"wages": data,
						"address":this.city,
						"work_types":this.work_types,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.list = res.data.data.user_Recruitments;
				this.wages = data
			},
			// 根据城市查询招聘列表
			async cityChange(data){
				const res = await this.$myRequest({
					url:'findRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"address": data,
						"wages": this.wages,
						"work_types":this.work_types,
						"paging":{
							"page":this.page
						}
						
					}),
					method: 'POST'
				})
				this.list = res.data.data.user_Recruitments;
				this.city = data
			},
			// 查询招聘列表
			async getRecruitmentlist(){
				const res = await this.$myRequest({
					url:'findRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						"str":this.value,
						"paging":{
							"page": this.page
						}
						
					}),
					method: 'POST'
				})
				console.log(res)
				var a = Promise.resolve(res)
				a.then((res)=>{
					// console.log(res.data)
					this.count = res.data.paging.count
				})
				this.list = res.data.data.user_Recruitments
				console.log(res.data.data.user_Recruitments)
				}
				
		}
	}
</script>

<style lang="scss" scoped>
.search{
	background-color: #5785E5;
	padding-bottom: 10rpx;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9;
}
.top{
	margin-top: 75rpx;
}
.button{
	margin-top: 600rpx;
	text-align: center;
}
scroll-view{
		height: 700rpx;
	}
</style>
