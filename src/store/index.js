import Vue from 'vue'
import Vuex from 'vuex'


 //安装插件
 Vue.use(Vuex)
 
 //创建对象
 const store = new Vuex.Store({
    state: {
		avatar:'',
		wechatname: '',
		show: false
	},
	mutations:{
		setavatar(state,data){
			state.avatar = data;
			// window.sessionStorage.setItem('avatar',data)
		},
		setwechatname(state,data){
			state.wechatname = data;
			// window.sessionStorage.setItem('wechatname',data)
		}
	},
	action:{
		
	}
 })
 
 //导出store独享
export default store