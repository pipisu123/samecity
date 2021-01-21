<template>
	<view class="tabBar">
		<view class="wrap">
			<u-row gutter="18">
				<u-col span="3" text-align="center" @click="value = true">
					<view class="demo-layout bg-purple">{{input ? input : '城市'}}></view>
				</u-col>
				<u-col span="2" text-align="center" @click="statusChange">
					<view class="demo-layout bg-purple-light">{{input1 ? input1 : '薪资'}}></view>
				</u-col>
				<u-col span="3" text-align="center">
					<view class="demo-layout bg-purple-dark">{{input2 ? input2 : '行业'}}></view>
				</u-col>
				<u-col span="2" text-align="center">
					<view class="demo-layout bg-purple" @click="worktype">{{input3 ? input3 : '类型'}}></view>
				</u-col>
				<u-col span="2" text-align="center">
					<view class="demo-layout bg-purple" @click="selectsex">{{input4 ? input4 : '性别'}}></view>
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
		<u-picker
			:mode="mode"
			v-model="show2"
			@confirm="confirm2"
			:defaultSelector="defaultSelector"
			:range="sex"
		></u-picker>
	</view>
</template>

<script>
	import citySelect from '../../childComps/u-city-select.vue';
	export default {
		data() {
			return {
				show:false,
				show1:false,
				show2:false,
				value: false,
				input: '',
				input1: '',
				input3:'',
				input4:'',
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
				sex:[
					'男',
					'女',
					'保密'
				],
				mode: 'selector',
				defaultSelector: [0],
			}
		},
		components:{
			citySelect
		},
		methods: {
			// 城市选择
			cityChange(e) {
				this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
				this.$emit("cityChange",this.input = e.province.label + '-' + e.city.label + '-' + e.area.label)
			},
			// 选定工资
			statusChange(e){
				this.show = true
			},
			worktype(e){
				this.show1 = true
			},
			selectsex(){
				this.show2 = true
			},
			confirm(e) {
				this.input1 = this.range[e[0]];
				this.$emit("wagesChange",this.input1)
			},
			confirm1(e) {
				this.input3 = this.type[e[0]];
				this.$emit("worktype",this.input3)
			},
			confirm2(e) {
				this.input4 = this.sex[e[0]];
				this.$emit("selectsex",this.input4)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabBar{
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
