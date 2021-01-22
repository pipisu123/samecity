<template>
	<view class="">
		<u-dropdown ref="uDropdown" @open="open" @close="close">
			<u-dropdown-item v-model="value1" title="区域" :options="options1" @change="change"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="租金" :options="options2"></u-dropdown-item>
		<u-dropdown-item v-model="value3" title="户型" :options="options3"></u-dropdown-item>
		<u-dropdown-item v-model="value4" title="更多" :options="options4"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 2,
				value3: 3,
				value4: 4,
				options1: [{
						label: '不限',
						value: 1,
					},
					{
						label: '电白县',
						value: 2,
					},
					{
						label: '高州县',
						value: 2,
					},
					{
						label: '茂南区',
						value: 2,
					},
					{
						label: '化州县',
						value: 2,
					},
					{
						label: '信宜县',
						value: 2,
					},
					
				],
				options2: [{
						label: '10万',
						value: 1,
					},
					{
						label: '80万',
						value: 2,
					},
				],
				options3: [{
						label: '不限',
						value: 1,
					},
					{
						label: '一室',
						value: 2,
					},
					{
						label: '二室',
						value: 2,
					},
					{
						label: '三室',
						value: 2,
					},
					{
						label: '四室',
						value: 2,
					},
					{
						label: '五室以上',
						value: 2,
					},
					
				],
			}
		},
		methods: {
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdown.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdown.highlight(index);
			},
			change() {
				// 更多的细节，如有需要请自行根据业务逻辑进行处理
				// this.$refs.uDropdown.highlight(xxx);
			}
		}
	}
</script>