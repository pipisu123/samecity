<template>
		<view class="wrap">
			<u-swiper :list="list" effect3d="true" height=320 title=true effect3d-previous-margin=35></u-swiper>
		</view>
</template>

<script>
	export default {
			data() {
				return {
					list: [{
							image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4131853032,1581054439&fm=26&gp=0.jpg',
							title: '昨夜星辰昨夜风，画楼西畔桂堂东'
						},
						{
							image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=389570879,37586927&fm=15&gp=0.jpg',
							title: '身无彩凤双飞翼，心有灵犀一点通'
						},
						{
							image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361163180,2190078054&fm=15&gp=0.jpg',
							title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
						}
					],
				}
			},
			methods: {
	
			}
		}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx 10rpx;
	}
</style>
