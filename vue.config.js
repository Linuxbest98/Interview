
module.exports = {
	configureWebpack: {
		devServer:{
			proxy: {
				"/api" :{
					target: "https://openapi.youdao.com",
					secure: false,
					changeOrigin: true
				},
				
				"/news" :{
					target: "http://v.juhe.cn",
					secure: false,
					changeOrigin: true,
					pathRewrite: {'^/news' : ''}
				}
	
			}
		}
		
	}
}