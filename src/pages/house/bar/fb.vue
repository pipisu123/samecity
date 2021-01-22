<template>
	<view>
	    <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
	    	<u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="业主" prop="company">
	    			<u-input :border="border" placeholder="业主卖房" v-model="model.company" type="text"></u-input>
	    		</u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="经纪人" prop="welfare">
	    			<u-input :border="border" placeholder="经纪人卖房" v-model="model.welfare" type="text"></u-input>
	    		</u-form-item>
	    		<u-form-item :label-position="labelPosition" label="商铺" prop="intro">
	    			<u-input type="textarea" :border="border" placeholder="写字楼" v-model="model.intro" />
	    		</u-form-item>
	    		<u-form-item :leftIconStyle="{color: '#888', fontSize: '16rpx'}" label-width="130" :label-position="labelPosition" label="地址" prop="address">
	    			<u-input :border="border" placeholder="厂房" v-model="model.address" type="select" @click="Toaddress"></u-input>
	    		</u-form-item>
	    		<u-form-item :label-position="labelPosition" label="上传图片" prop="photo" label-width="150">
	    			<u-upload width="160" height="160" action="#"  ref="uUpload" :auto-upload="false" max-count=5 @on-remove="deleteImgs"></u-upload>
	    		</u-form-item>
				<text style="color: #999999;">最多只能上传5张图片</text>
	    	</u-form-item>
	    </u-form>
		<!-- 上传图片 -->
		<view class="uploadfile">
			<button  @click="click">上传</button>
		</view>
		<!-- 视频 -->
		<view class="uni-uploader__file" v-if="src1">
		    <view class="uploader_video">
		        <view class="icon-cuo" @tap="delectVideo">
					<u-icon name="close" size="28"></u-icon>
				</view>
		        <video :src="src1" class="video"></video>
		    </view>
		</view>
		<!-- 上传视频 -->
		<view class="uni-uploader__input" @tap="chooseVideo" >
			<button type="default">上传视频</button>
		</view>
	    <u-button @click="create" type="primary">创建</u-button>
	</view>
</template>

<script>
	var sourceType = [
	        ['camera'],
	        ['album'],
	        ['camera', 'album']
	    ]
	export default {
		data() {
			return {
				// show: false,
				    src1:"",//视频存放
					src2:'',
				    sourceTypeIndex: 2,
				    checkedValue:true,
				    checkedIndex:0,
				    sourceType: ['拍摄', '相册', '拍摄或相册'],
				    cameraList: [{
				            value: 'back',
				            name: '后置摄像头',
				            checked: 'true'
				        },
				        {
				            value: 'front',
				            name: '前置摄像头'
				        },
				    ],
				    cameraIndex: 0,
				    VideoOfImagesShow:true,
				// 上传表单信息
				model:{
					company:'',
					welfare:'',
					intro:'',
					address:'',
					photo: [
						
					]
				},
				rules:{
					
					welfare:[
						{
							required: true,
							message: '请输入业主姓名',
							trigger: 'blur' ,
						}
					],
					intro:[
						{
							required: true,
							message: '请输入经纪人姓名',
							trigger: 'blur' ,
						}
					],
					address:[
						{
							required: true,
							message: '请输入房子地址',
							trigger: 'blur' ,
						}
					],
					photo:[
						{
							required: true,
							message: '请先上传图片',
							trigger: 'change',
						}
					],
				},
				check: false,
				selectStatus: 'close',
				border: false,
				labelPosition: 'left',
				actionSheetShow: false,
				errorType: ['message'],
				pickerShow: false,
				selectShow: false,
			}
		},
		onUnload() {
		    this.src1 = '',
		    this.sourceTypeIndex = 2,
		    this.sourceType = ['拍摄', '相册', '拍摄或相册'];
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			
		},
		methods: {
			// 删除图片时触发事件
			deleteImgs(index,lists){
				console.log(index)
				console.log(lists)
			},
			Toaddress(){
				uni.chooseLocation({
						success:(res)=>{
							console.log('位置名称：' + res.name);
							console.log('详细地址：' + res.address);
							console.log('纬度：' + res.latitude);
							console.log('经度：' + res.longitude);
							let latitude = res.latitude; //纬度
							let longitude = res.longitude; //经度
							this.model.address = res.address
						}
						});
			},
			chooseVideo(){
				
				// 上传视频
				console.log('上传视频')
				uni.chooseVideo({
				    maxDuration:10,
				    count: 1,
				    camera: this.cameraList[this.cameraIndex].value,
				    sourceType: sourceType[this.sourceTypeIndex],
				    success: (res) => {
				        console.log(JSON.stringify(res.tempFilePath),'视频')
						console.log(res)
						this.src1 = res.tempFilePath;
				      uni.uploadFile({
				        url: 'http://192.168.101.24:8081/addVideo',
				        method: 'POST',           // 可用可不用
				        filePath: res.tempFilePath,
						header:{"Content-Type":"multipart/form-data"},
				        name: 'file',              // 服务器定义key字段名称
				        success: (res)=> {
						  var data= null;
				          console.log('视频上传成功');
						  // console.log(JSON.parse(res.data))
						  data = JSON.parse(res.data)
						  this.src2 = data.data.video.video_path
						 
				        },
				        fail: function() {
				          console.log('接口调用失败')
				        }
				      })
				    },
				})
				
			},
			// 删除视频
			delectVideo(){
			        uni.showModal({
			            title:"提示",
			            content:"是否要删除此视频",
			            success:(res) =>{
			                if(res.confirm){
								uni.request({
									url:'http://192.168.101.24:8081/deleteVideo',
									dataType: "json",
									header: {
									        'content-type': 'application/json', 
									        },
									data:JSON.stringify({ 
									"video_path":this.src2	
									}),
									method: 'POST',
									success: (res) =>{
									  console.log('删除成功');
									  console.log(res)
									  console.log(this.src2)
									},
								})
								 this.src1 = ''
								
			                }
			            }
			        })
			    },
			// 上传图片
			click(){
				let files = [];
				files = this.$refs.uUpload.lists;
				for(var i=0;i<files.length;i++){
					this.urlTobase64(files[i].url,i)
				   
					
				}
				 // console.log(this.model.photo)
			},
			// 上传图片回调转base64
			urlTobase64(url,i){
			 uni.request({
			 url: url,
			 method:'GET',
			 responseType: 'arraybuffer',
			 success: ress => {
			  let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
			  // this.model.photo[i] = base64	
			  // this.base = base64
			 var object = {}
			 object.picture_file = base64
			 this.model.photo.push(object)
			 }
			    })
			},
			// 创建公司
			create(){
				console.log(this.model.photo)
				let file = [];
				this.$refs.uForm.validate(valid => {
					if (valid) {
						const res = this.$myRequest({
							// 后端接口
							url:'addCompany',
							header: {
							        'content-type': 'application/json', 
							        },
							// data: formData,
							data:JSON.stringify({
								"user_id":1,
								"company_name":this.model.company,
								"company_welfare":this.model.welfare,
								"company_introduction":this.model.intro,
								"company_address":this.model.address,
								"company_picture": this.model.photo,
								"company_video":{
									"video_path": this.src2
								},
							}),					
							method: 'POST',
						})	
						
						console.log(res)
						 
						this.$refs.uToast.show({
							title: '提交成功',
							type: 'success',
														
						})
					} else {
					console.log("提交失败")
					}
				});
			},
		}
	}
</script>

<style lang="scss">
.burst-wrap{
    width: 100%;
    height: 100%;
}
/* .burst-wrap .burst-wrap-bg{
    position: relative;
    width: 100%;
    height: 320upx;
    background:linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    border-bottom-right-radius: 80upx;
    border-bottom-left-radius: 80upx;
} */
.burst-wrap .burst-wrap-bg>view{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 65upx;
    left: 0;
    right: 0;
}

.form-item{
    width: 100%;
}
.form-item textarea{
    display: block;
    height: 220upx;
    width: 100%;
    color: #AAAAAA;
    font-size: 28upx;
}
.uni-uploader__file,.uploader_video{
    position: relative;
    z-index: 1;
    width: 200upx;
    height: 200upx;
}
.uni-uploader__img {
    width: 200upx;
    height: 200upx;
}
.icon-cuo {
    position: absolute;
    right: 0;
    top: 5upx;
    background: linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    color: #FFFFFF;
    z-index: 999;
    border-top-right-radius: 5upx;
    border-bottom-left-radius: 5upx;
}
.video{
    width: 100%;
    height: 100%;
}

.login-input-box{
    position: relative;
    border-bottom: 1upx solid #EEEEEE;
}
.login-input-box .forget,.login-input-box .phone{
    position: absolute;
    top: 0;
    height: 100%;
    z-index: 100;
}
.login-input-box .phone{
    width: 100upx;
    left: 0;
    color: #666666;
    font-weight: bold;
}
.login-input-box .phone-input{
    padding-left: 100upx;
}
.address-wrap,.open-info{
    margin-top: 20upx;
}
.open-info>view:last-child{
    font-size: 28upx;
    color: #999999;
}
.address-wrap .address {
    background: #F2F2F2;
    border-radius: 40upx;
    padding: 0 20upx;
}
.user-set-btn{
    margin: 40upx;
    background: linear-gradient(90deg,rgba(251,91,80,1) 0%,rgba(240,45,51,1) 100%);
    color: #FFFFFF;
    text-align: center;
    height: 88upx;
    line-height: 88upx;
}
</style>
