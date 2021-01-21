<template>
	<view>
		<button class="sys_btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">小程序登录授权</button>
		<image :src="src" mode=""></image>
		<text>{{name}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
				name: ''
			}
		},
		methods: {
			 appLoginWx(){
			                // #ifdef MP-WEIXIN
							 let _this = this;
			                    uni.getProvider({
			                      service: 'oauth',
			                      success: function (res) {
			                        if (~res.provider.indexOf('weixin')) {
			                            uni.login({
			                                provider: 'weixin',
			                                success: (res2) => {
			                                    
			                                    uni.getUserInfo({
			                                        provider: 'weixin',
			                                        success: (info) => {//这里请求接口
			                                            console.log(res2);
			                                            console.log(info.userInfo);
			                                          _this.name = info.userInfo.nickName,
													  _this.src = info.userInfo.avatarUrl
			                                        },
			                                        fail: () => {
			                                            uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                        }
			                                    })
			                            
			                                },
			                                fail: () => {
			                                    uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                }
			                            })
			                            
			                        }else{
			                            uni.showToast({
			                                title: '请先安装微信或升级版本',
			                                icon:"none"
			                            });
			                        }
			                      }
			                    });
			                    //#endif
			            }
		}
	}
</script>

<style>
	
</style>