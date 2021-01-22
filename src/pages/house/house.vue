<template>
	<view>
		
		<view class="search">
			<u-search placeholder="请输入房屋信息"></u-search>
		</view>
	<Grid></Grid>
	<swipper></swipper>
	<fz></fz>
	<ym></ym>
	<bar></bar>
		
	</view>
</template>

<script>
	import bar from './bar/bar.vue';
	import Grid from './bar/Grid.vue'
	import swipper from '../components/swipper.vue'
	import fz from './bar/fz.vue'
	import ym from './bar/ym.vue'
	
	
	export default {
		data() {
			return {
				
			}
		},
		 components: {
		          bar,
				  Grid,
				  swipper,
				  fz,
				  ym
				 
				
				 
		        },
		methods: {
			hreftwo(){
				this.$router.push({
					path:'/bar/fb.vue'
				})
			}
			
			
		}
	}
</script>

<style lang="scss">
	.search{
		border-color: #fff;
	    position: fixed;
	     left: 0;
	     right: 0;
	     top: 0;
	     z-index: 9;
		 background-color: #5785E5;
	     padding-bottom: 10rpx;
	}		
</style>