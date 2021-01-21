<template>

<view class="content">
	<!-- 创建公司 -->
	<view>
		<u-alert-tips @close="close" :closeAble="closeAble" :show="show1" @click="toCreate"
				:type="type" :title="title" :description="description" :showIcon="showIcon">
		</u-alert-tips>
	</view>
	<u-form :model="model" ref="uForm2">
		<u-form-item :label-position="labelPosition" label="选择发布" prop="publicType" label-width="150">
			<u-input :border="border" type="select" :select-open="selectShow3" v-model="public.publicType" placeholder="请选择发布类型" @click="selectShow3 = true"></u-input>
		</u-form-item>
		</u-form>
	<!-- 创建企业招聘信息 -->
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType" v-if="showview">
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="标题" prop="name">
				<u-input :border="border" placeholder="请输入标题" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="工作类型" prop="workType" label-width="150">
				<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="model.workType" placeholder="选择工作类型" @click="actionSheetShow = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="电话" prop="phone">
				<u-input :border="border" placeholder="请输入电话号码" v-model="model.phone" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="微信" prop="wechat">
				<u-input :border="border" placeholder="请输入微信号" v-model="model.wechat" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="选择薪资" prop="wagesType" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow1" v-model="model.wagesType" placeholder="请选择工作薪资" @click="selectShow1 = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="工作经验" prop="worktime">
				<u-input :border="border" placeholder="工作经验" v-model="model.worktime" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="选择行业" prop="industry" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow2" v-model="model.industry" placeholder="请选择行业" @click="selectShow2 = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="选择职位" prop="goodsType" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.goodsType" placeholder="请选择工作职位" @click="selectShow = true"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="简介" prop="intro">
				<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="所在地区" prop="region" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="180" :label-position="labelPosition" label="招聘最后期限" prop="lasttime">
				<u-input :border="border" placeholder="请输入招聘期限" v-model="model.lasttime" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="招聘人数" prop="count">
				<u-input :border="border" placeholder="请输入招聘人数" v-model="model.count" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="上传图片" prop="photo" label-width="150">
				<u-upload width="160" height="160" action="#"  ref="uUpload" :auto-upload="false" :before-upload="beforeUpload" max-count=1 :max-size="1 * 1024 * 1024" ></u-upload>
			</u-form-item>
			<text style="color: #999999;">只能上传一张图片</text>
		</u-form>
		<!-- 创建个体招聘信息 -->
		<PersonRecruitment v-else></PersonRecruitment>
		<view class="uploadfile" v-if="showview">
			<button  @click="click">上传</button>
		</view>
		<!-- <view class="public">
			<u-button @click="submit" type="primary">发布招聘</u-button>
		</view> -->
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-select mode="single-column" :list="selectList1" v-model="selectShow1" @confirm="selectConfirm1"></u-select>
		<u-select mode="single-column" :list="selectList3" v-model="selectShow3" @confirm="selectConfirm3" title="请选择要发布的类型"></u-select>
		<u-select mode="mutil-column-auto" :list="selectList2" v-model="selectShow2" @confirm="selectConfirm2"></u-select>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
		<u-toast ref="uToast" />
		<u-modal ref="uModal" v-model="show" :show-cancel-button="true"
			:show-title="showTitle" :async-close="asyncClose"
			@confirm="confirm" :content="content" confirm-text="前往创建公司" 
		>
		</u-modal>
		<u-button @click="submit(recruitment)" type="primary" v-if="showview">立即发布</u-button>
	</view>
</view>
	
</template>

<script>
	import PersonRecruitment from './childComps/PersonRecruitment.vue'
export default {
	data() {
		return {
			// action: 'C:/Users/angel/Desktop/新建文件夹 (2)',
			// url:null,
			showview: true,
			public:{
				publicType:''
			},
			recruitment:{
				name: '',
				workType: '',
				phone:'',
				wechat:'',
				wagesType: '',
				worktime: '',
				goodsType: '',
				intro: '',
				region: '',
				photo:'',
				lasttime: '',
				count: '',
				show: false,
				photourl:'',
				industry:''
			},
			model:{
				name: '',
				workType: '',
				phone:'',
				wechat:'',
				wagesType: '',
				worktime: '',
				goodsType: '',
				intro: '',
				region: '',
				photo:'',
				lasttime: '',
				count: '',
				industry:'',
			},
			rules:{
				name:[
					{
						required: true,
						message: '请输入标题',
						trigger: 'blur' ,
					}
				],
				wages: [
					{
						required: true,
						message: '请输入工资',
						trigger: 'blur' ,
					}
				],
				worktime: [
					{
						required: true,
						message: '请输入工作经验',
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
					goodsType: [
						{
							required: true,
							message: '请选择工作类型',
							trigger: 'change',
						}
					],
					photo:[
						{
							required: true,
							message: '请先上传图片',
							trigger: 'change',
						}
					],
					count:[
						{
							required: true,
							message: '人数不能为空',
							trigger: 'blur' ,
						}
					],
					lasttime:[
						{
							required: true,
							message: '最后期限不能为空',
							trigger: 'blur' ,
						}
					],
				
			},
			selectList: [
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
			selectList1: [
				{
					value: '不限',
					label: '不限'
				},
				{
					value: '1000以下',
					label: '1000以'
				},
				{
					value: '1000-2000',
					label: '1000-2000'
				},
				{
					value: '2000-3000',
					label: '2000-3000'
				},
				{
					value: '3000-5000',
					label: '3000-5000'
				},
				{
					value: '5000-8000',
					label: '5000-8000'
				},
				{
					value: '8000-12000',
					label: '8000-12000'
				},
				{
					value: '12000-20000',
					label: '12000-20000'
				},
				{
					value: '20000-25000',
					label: '20000-25000'
				},
				{
					value: '25000以上',
					label: '25000以上'
				}
			],
			selectList2:[
				{
					value: 1,
					label: '销售',
					children: [
						{
							value: 2,
							label: '销售代表',
						},
						{
							value: 3,
							label: '销售经理',
						},
						{
							value: 4,
							label: '销售部主管',
						},
						{
							value: 5,
							label: '销售总监',
						},
						{
							value: 6,
							label: '电话销售',
						},
						{
							value: 7,
							label: '汽车销售',
						},
						{
							value: 8,
							label: '房屋销售',
						},
						{
							value: 9,
							label: '销售支持',
						},
						
					]
				},
				{
					value: 10,
					label: '客服',
					children: [
						{
							value: 11,
							label: '客服专员',
						},
						{
							value: 12,
							label: '客服助理',
						},
						{
							value: 12,
							label: '客服专员',
						},
						{
							value: 13,
							label: '客服助理',
						},
						{
							value: 14,
							label: '客服专员',
						},
						{
							value: 15,
							label: '客服助理',
						},
						{
							value: 16,
							label: '客服专员',
						},
						{
							value: 17,
							label: '客服助理',
						},
						{
							value: 18,
							label: '客服专员',
						},
						{
							value: 19,
							label: '客服助理',
						},
						
					]
				}
			],
			selectList3:[
				{
					value: '公司发布',
					label: '公司发布'
				},
				{
					value: '个体发布',
					label: '个体发布'
				},
			],
			actionSheetList: [
				{
					text: '全职'
				},
				{
					text: '兼职'
				},
				{
					text: '实习'
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
			selectShow1:false,
			selectShow2:false,
			selectShow3:true,
			show: false,
			zoom: false,
			content: '你还没有创建公司信息，请先创建公司',
			contentSlot: false,
			showTitle: true,
			asyncClose: false,
			// 温馨提示
			title: '温馨提示',
			description: "如果还没有创建公司，可以先前往创建公司。",
			show1: true,
			closeAble: true,
			showIcon: true,
			type: 'warning',
		};
	},
	components:{
		PersonRecruitment
	},
	computed: {
		borderCurrent() {
			return this.border ? 0 : 1;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
		console.log("这是父组件")
	},
	onLoad() {
	   
	},
	
	methods:{
		// 关闭提示
		close() {
			this.show1 = false;
		},
		toCreate(){
			uni.navigateTo({
				url:'/pages/CreateCompany/CreateCompany'
			})
		},
		// 若不存在公司，则跳转创建公司
		asyncChange(index) {
			this.show = true;
			this.asyncClose = !index;
		},
		confirm() {
			uni.navigateTo({
				url:'/pages/CreateCompany/CreateCompany'
			})
			setTimeout(() => {
				this.show = false;
			}, 2000)
		},
		// 去创建公司
		ToCreate(){
			uni.navigateTo({
				url:'/pages/CreateCompany/CreateCompany'
			})
		},
		click(){
			let files = [];
			files = this.$refs.uUpload.lists;
			this.urlTobase64(files[0].url); 
			this.recruitment.photourl = files[0].url
			console.log(files[0].url);
			console.log(this.model.photo)
		},
		// 创建企业招聘信息
	    submit(recruitment) {
			
			this.$refs.uForm.validate(valid => {
					if (valid) {
						this.recruitment.wechat = this.model.wechat
						this.recruitment.name = this.model.name
						this.recruitment.phone = this.model.phone
						this.recruitment.wagesType = this.model.wagesType
						this.recruitment.worktime = this.model.worktime
						this.recruitment.intro = this.model.intro
						this.recruitment.lasttime = this.model.lasttime
						this.recruitment.count = this.model.count
						this.recruitment.region = this.model.region
						this.recruitment.photo = this.model.photo
						this.recruitment.goodsType = this.model.goodsType
						this.recruitment.workType = this.model.workType
						this.recruitment.industry = this.model.industry
						this.recruitment.show = true
						console.log(this.recruitment)
						uni.navigateTo({
							url:'/pages/PubRecruitment/ShowRcruitment/ShowRcruitment?recruitment='+encodeURIComponent(JSON.stringify(recruitment))
						})
					}
				 })	
		},
		// 上传图片回调转base64
		urlTobase64(url){
		 uni.request({
		 url: url,
		 method:'GET',
		 responseType: 'arraybuffer',
		 success: ress => {
		  let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
		  // base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
		  this.model.photo = base64			
		  
		 }
		    })
		},
		// 点击actionSheet回调
		actionSheetCallback(index) {
			uni.hideKeyboard();
			this.model.workType = this.actionSheetList[index].text;
		},
		// 选择职位类型回调
		selectConfirm(e) {
			this.model.goodsType = '';
			e.map((val, index) => {
				this.model.goodsType += this.model.goodsType == '' ? val.label : '-' + val.label;
			})
		},
		// 选择职位类型回调
		selectConfirm1(e) {
			this.model.wagesType = '';
			e.map((val, index) => {
				this.model.wagesType += this.model.wagesType == '' ? val.label : '-' + val.label;
			})
		},
		// 选择发布类型回调
		selectConfirm3(e) {
			let _this = this;
			this.public.publicType = '';
			e.map((val, index) => {
				this.public.publicType += this.public.publicType == '' ? val.label : '-' + val.label;
			})
			if(this.public.publicType=='个体发布'){
				this.showview = false
			}else{
				this.showview = true
			}
		},
		// 选择行业回调
		selectConfirm2(e){
			this.model.industry = '';
			e.map((val, index) => {
				this.model.industry += this.model.industry == '' ? val.label : '/' + val.label;
				
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
		popup(){
			this.show=true
		}
		
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 30rpx;
}

.title{
	text{
		color: #5785E5;
	}
}
.company{
	text-align: center;
}
.public{
	// width: 100%;
	// height: 44px;
	// position: fixed;
	// bottom: 0rpx;
	
}
.upload{
	width: 30%;
	height: 160rpx;
	background-color: #F1F1F1;
}

</style>
