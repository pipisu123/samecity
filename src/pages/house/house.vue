<template>
	<view >
		<text>公司福利</text>
		<ld-select :multiple="true" :list="options"
		list-key="label" value-key="value"
		placeholder="请选择"
		clearable
		v-model="value2"
		@change="selectChange2"></ld-select>
		<swipper></swipper>
	</view>
	
</template>

<script>
	import ldSelect from './ld-select.vue'
	import swipper from '../components/swipper.vue'
	export default {
		data() {
			return {
				 value: '',
				                options: [{
				                  value: '选项1',
				                  label: '黄金糕'
				                }, {
				                  value: '选项2',
				                  label: '双皮奶'
				                }, {
				                  value: '选项3',
				                  label: '蚵仔煎'
				                }, {
				                  value: '选项4',
				                  label: '龙须面'
				                }, {
				                  value: '选项5',
				                  label: '北京烤鸭'
				                }],
				                value2: ['选项2','选项4'],
				                value3: ['选项1','选项2'],
				                value4: []
			}
		},
		 components: {
		            ldSelect,
					swipper
		        },
		methods: {
			 selectChange(val){
			                this.value = val
			            },
			            selectChange2(val){
			                this.value2 = val
			            },
			            selectChange4(val){
			                this.value4 = val
			            },
			            selectChange5(val){
			                this.value5 = val
			            }
		}
	}
</script>

<style>
	
</style>