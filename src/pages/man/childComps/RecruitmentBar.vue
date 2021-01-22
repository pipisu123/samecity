<template>
	<view class="centerbar">
		<view class="wrap">
			<u-row gutter="18">
				<u-col span="3" text-align="center" @click="value = true">
					<view class="demo-layout bg-purple">{{input ? input : '区域'}}></view>
				</u-col>
				<u-col span="3" text-align="center" @click="statusChange">
					<view class="demo-layout bg-purple-light">{{input1 ? input1 : '薪资'}}></view>
				</u-col>
				<u-col span="3" text-align="center">
					<view class="demo-layout bg-purple-dark" @click="selectIndustry">{{input2 ? input2 : '行业'}}></view>
				</u-col>
				<u-col span="3" text-align="center">
					<view class="demo-layout bg-purple" @click="worktype">{{input3 ? input3 : '类型'}}></view>
				</u-col>
			</u-row>
		</view>
		<city-select v-model="value" @city-change="cityChange"></city-select>
		<u-picker
			:mode="mode"
			v-model="show"
			@confirm="confirm"
			:defaultSelector="defaultSelector"
			:range="range"
		></u-picker>
		<u-picker
			:mode="mode"
			v-model="show1"
			@confirm="confirm1"
			:defaultSelector="defaultSelector"
			:range="type"
		></u-picker>
		<u-select mode="mutil-column-auto" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
	</view>
</template>

<script>
	import citySelect from './u-city-select.vue';
	export default {
		data() {
			return {
				show:false,
				show1:false,
				value: false,
				input: '',
				input1: '',
				input2: '',
				input3:'',
				range: [
					'不限',
					'1000以下',
					'1000-2000',
					'2000-3000',
					'3000-5000',
					'5000-8000',
					'8000-12000',
					'12000-20000',
					'20000-25000',
					'25000以上',
				],
				type:[
					'全职',
					'兼职',
					'实习',
				],
				selectList:[
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
				mode: 'selector',
				defaultSelector: [0],
				selectShow:false
			}
		},
		components:{
			citySelect
		},
		methods: {
			cityChange(e) {
				this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
				this.$emit("cityChange",this.input = e.province.label + '-' + e.city.label + '-' + e.area.label)
			},
			selectIndustry(){
				this.selectShow = true
			},
			statusChange(e){
				this.show = true
			},
			worktype(e){
				this.show1 = true
			},
			confirm(e) {
				this.input1 = this.range[e[0]];
				this.$emit("wagesChange",this.input1)
			},
			confirm1(e) {
				this.input3 = this.type[e[0]];
				this.$emit("worktype",this.input3)
			},
			selectConfirm(e){
				this.input2 = '';
				e.map((val, index) => {
					this.input2 += this.input2 == '' ? val.label : '/' + val.label;
					this.$emit("industryselect",this.input2)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.centerbar{
		border-bottom: 1rpx solid #F1F1F1;
	}
	.wrap {
		padding: 15rpx;
	}
	
	.u-row {
		margin: 40rpx 0;
	}
	
	.demo-layout {
		height: 60rpx;
		border-radius: 8rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap; 
	}
	
	.bg-purple {
		background: #FFFFFF;
	}
	
	.bg-purple-light {
		background: #FFFFFF;
	}
	
	.bg-purple-dark {
		background: #FFFFFF;
	}
</style>
