<template>
	<view class="goodlist">
		<view class="gooditem" v-for="item in list" :key="item">
			<image :src="item.src" mode=""></image>
			<view class="price">
				<text>￥{{item.price}}</text>
				<text></text>
			</view>
			<view class="decriction">
				<text>{{item.dec}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				list:[
					{
						src:'https://res.vmallres.com/pimages//product/6972453166814/428_428_5C88586132AFB20CF1901D312AE38439B2638AD331DBADE7mp.png',
						price:'2000',
						dec: '【不分期优惠300元】华为/HUAWEI P40 5G手机mate30pro5G版正品官方旗舰店P30直降mate40折叠x新款'
					},
					{
						src:'https://img.alicdn.com/imgextra/i1/2939922051/O1CN01Sdelms1R1OyQ4UBL8_!!2939922051.jpg_430x430q90.jpg',
						price:'2000',
						dec: '越南芒果进口青芒10斤新鲜水果包邮当季整箱应季特大甜心芒青皮'
					},
					{
						src:'https://img.alicdn.com/imgextra/i2/1729128393/O1CN01jiUhOj2Bs2ogojvl6_!!0-item_pic.jpg_430x430q90.jpg',
						price:'67.9',
						dec: '【不分期优惠300元】华为/HUAWEI P40 5G手机mate30pro5G版正品官方旗舰店P30直降mate40折叠x新款'
					},
					{
						src:'https://img.alicdn.com/imgextra/i3/700459267/O1CN01gD1R6O2IKKz9gaOPq_!!0-item_pic.jpg_430x430q90.jpg',
						price:'50',
						dec: '多芬国潮款深层营润滋养美肤保湿沐浴露男女士清洁680G*2'
					},
				]
			}
		},
		onLoad() {
	
		},
		components:{
		},
		methods: {
			
		},
		created() {
		}
	}
</script>

<style lang="scss">
.goodlist{
	padding: 0 15rpx;
	background-color: #F1F1F1;
	justify-content: space-between;
	.gooditem{
		background: #fff;
		width: 730rpx;
		border: 2rpx solid #fff;
		border-radius: 5%;
		margin: 20rpx 0;
		padding: 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		image{
			width: 98%;
			height: 180px;
		}
		.price{
			color: #FF0000;
			font-size: 30rpx;
		}
	}
}
</style>
