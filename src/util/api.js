export const BASE_URL = 'http://192.168.101.24:8081/'
export const myRequest = (options)=>{
	    let headers={}
		// headers["Content-Type"] = "application/json";
	    headers["enctype"] = "multipart/form-data";
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
            header: headers,
			method:options.method || 'GET',
			data: options.data || {},
			success: (res)=> {
				if(res.data.status ==0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err)=> {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}

