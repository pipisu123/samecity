<template>
	<view class="Tocomfirm">
		<view class="card">
			<text>招聘详情</text>
			<u-read-more ref="uReadMore" text-indent="0" show-height="200" font-size="25" close-text="查看全部">
					<u-parse :html="PersonRecruitment.intro" @load="parseLoaded"></u-parse>
			</u-read-more>
		</view>
		<view class="phone">
			<u-icon name="phone" color="#5785E5" size=60></u-icon>
			<text>{{PersonRecruitment.phone}}</text>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude"></map>
		<u-toast ref="uToast" />	
		<u-button @click="create1" type="primary">立即发布</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:110.922477,
				latitude: 21.666885,
				PersonRecruitment:{
					intro:'',
					phone:'',
					address:''
				}
			}
		},
		onLoad(options) {
			const recruitment = JSON.parse(decodeURIComponent(options.PersonRecruitment));
			this.PersonRecruitment.intro = recruitment.intro
			this.PersonRecruitment.phone = recruitment.phone
			this.PersonRecruitment.address = recruitment.address
			console.log(recruitment)
		},
		methods: {
			parseLoaded() {
				this.$refs.uReadMore.init();
			},
			create1(){
				const res = this.$myRequest({
					url:'addRecruitment',
					dataType: "json",
					header: {
					        'content-type': 'application/json', 
					        },
					data:JSON.stringify({ 
						 "user_id":1,
						 "str":"个体发布",
						 "address":this.PersonRecruitment.address,
						 "introduction": this.PersonRecruitment.intro,
						"phone": this.PersonRecruitment.phone,
					}),						
					method: 'POST'
				})
				var a = Promise.resolve(res)
				a.then((res)=>{
					console.log(res)
				   if(res.statusCode===200){
				   		this.$refs.uToast.show({
				   			title: '发布成功',
				   			type: 'success',
							duration: 2500
				   		})
						uni.reLaunch({
							url:'/pages/man/man'
						})
				   	}else {
				   console.log("提交失败")
				   this.$refs.uToast.show({
				   	title: '发布失败，请重新发布',
				   	type: 'error',
				   	duration: 2500
				   								
				   })		
				   }
				})							
			}
		}
	}
</script>

<style lang="scss">
	.card{
		
	}
	.phone{
		height: 80rpx;
		background-color: #F1F1F1;
		border-radius: 5%;
		padding: 10rpx;
		text-align: center;
	}
	.map{
		width:98%;
		height: 400rpx;
		padding: 15rpx;
		margin-left: 10rpx;
		border-radius: 25%;
	}

</style>
