<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true" :before-switch="beforeSwitch" active-color="#5785E5"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '求职',
						isDot: true,
						customIcon: false,
						index:0
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '人才库',
						customIcon: false,
						index:1
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
						index:2
					},
					{
						iconPath: "chat",
						selectedIconPath: "chat-fill",
						text: '消息',
						count: 9,
						customIcon: false,
						index:3
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						isDot: false,
						customIcon: false,
						index:4
					},
				],
				current: ''
			}
		},
		methods:{
			beforeSwitch(index){
				// uni.redirectTo({
				// 	url: this.list[index].pagePath
				// })
				// console.log(this.list[index].pagePath)
				// console.log(this.list[index].index)
				this.$emit('Clickitem',this.list[index].index)
				if(this.list[index].index===0){
					this.current=0
				}
				if(this.list[index].index===1){
					this.current=1
				}
				if(this.list[index].index===2){
					this.current=2
				}
				if(this.list[index].index===3){
					this.current=3
				}
				if(this.list[index].index===4){
					this.current=4
				}
			},
			
		}
	}
</script>

<style>
</style>
