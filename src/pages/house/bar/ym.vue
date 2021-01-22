<template>
	<view class="u-lazy-load">
		<u-lazy-load v-for="(item, index) in array" :key="index" :image="item.src"></u-lazy-load>
		<u-lazy-load>
			<image :src="item.src" mode="scaleToFill" style="width: 65rpx;height: 65rpx;"></image>
		</u-lazy-load>
		<view class="price">
			<text>￥{{item.price}}</text>
			<text></text>
		</view>
		<view class="decriction">
			<text>{{item.dec}}</text>
		</view>
		
		
	
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 设计成数组内嵌对象而不是纯数组形式，是考虑到真实环境后端返回的数据为如此形式
				array: [{
						src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.myfun7.com%2Foss%2Fonline%2FsearchPhotoLeaseZj%2F2018%2F06%2F17%2Fc0d51d5c0b1448afad14ed71038cfe71.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cm_fill%2Ch_421%2Cw_712%2Climit_0&refer=http%3A%2F%2Fpic.myfun7.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613803683&t=b2c65a31f3cc1e9a64083239d2195d4b",
						},
					{
						src: "https://pic.uj.cn/oss/online/tmp/2020/08/27/0edf431941414534808e4abde55117ea.jpg?x-oss-process=image/resize,m_fill,h_421,w_712,limit_0/watermark,image_d20vdWprMS5wbmc=,t_8,g_center",
					
					},
					{
						src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F273%2Fw640h433%2F20181219%2F888e-hqnkypr2092170.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613802866&t=ecb193c79aec484af7caea6c54f070fc",
						
					},
					{
						
						src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.58cdn.com.cn%2Fmobile%2Fbig%2Fn_v2f98be9eea9754303bcb234413e0a5259.jpg&refer=http%3A%2F%2Fpic2.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613803875&t=ad0c2ddd7896ec065c9cd2ad57aefb3a",
						
					},
				]
			}
		}
	}
</script>
<style lang="scss">
.u-lazy-load {
  background-color: #eee;
  overflow: hidden;
   width: 30%;
  -webkit-transform: transition3d(0, 0, 0);
          transform: transition3d(0, 0, 0);
  will-change: transform;
 margin-left: 26rpx;
  padding: 35rpx;


}	
	
	
</style>
