<template>
	<view>
		<mark-slide-list :list="list" :button="buttonList" :border="true" @click="clickMethod" @change="changeMethod"></mark-slide-list>
	</view>
</template>

<script>
	import markSlideList from './childComps/mark-slide-list.vue'
	export default {
		data() {
			return {
				list : [
				                    {
				                        id: 1,
				                        image: 'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
				                        title: '张三',
				                        rightDetail: '2019-03-18',
				                        detail: '你收到一条消息',
				                        slide_x: 0
				                    },
									{
									    id: 2,
									    image: 'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
									    title: '李四',
									    rightDetail: '2019-03-18',
									    detail: '微信头像网为大家提供最好看的微信头像,微信情侣头像,微信个性头像',
									    slide_x: 0
									},
									{
									    id: 3,
									    image: 'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
									    title: '李先生',
									    rightDetail: '2019-03-18',
									    detail: '微信头像网为大家提供最好看的微信头像,微信情侣头像,微信个性头像',
									    slide_x: 0
									},
									{
									    id: 4,
									    image: 'https://seopic.699pic.com/photo/50056/2286.jpg_wh1200.jpg',
									    title: '晓明',
									    rightDetail: '2019-03-18',
									    detail: 'XXXXXXXXXXXXXXXXXXX公司',
									    slide_x: 0
									},
				                   
				                    
				                   
				                ],
				                buttonList: [
				                    {
				                        title: '分享',
				                        background: '#c4c7cd'
				                    },
				                    {
				                        title: '删除',
				                        background: '#ff3b32'
				                    }
				                ]
			}
		},
		components:{
			markSlideList
		},
		methods: {
			 changeMethod(data, button, index){
			                console.log('滑动按钮回调', data)
			                console.log('滑动按钮回调', button)
			            },
			            clickMethod(data){
			                console.log('点击行回调', data)
			            }
		}
	}
</script>

<style>

</style>
