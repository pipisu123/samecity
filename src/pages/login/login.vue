<template>
	<view>
		<button class="sys_btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">微信一键登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
				name: '',
				code:''
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
													uni.request({
														url:'http://192.168.101.24:8081/userLogOn',
														dataType: "json",
														header: {
														        'content-type': 'application/json', 
														        },
														data:JSON.stringify({ 
															"code":res2.code,
															"user_password":"123",
															"str":"15627534849"
															
														}),
														
														method: 'POST',
														success: function(res) {
															console.log(res)
														}
													})
													    // this.code = res2.code
			                                            console.log(res2.code);
			                                            console.log(info.userInfo);
												      _this.$store.commit('setavatar',info.userInfo.avatarUrl)
													  _this.$store.commit('setwechatname',info.userInfo.nickName)
													  uni.switchTab({
													  	url:'../me/me'
													  })
			            //                               _this.name = info.userInfo.nickName,
													  // _this.src = info.userInfo.avatarUrl
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