import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
	sha256
} from 'js-sha256'
import jsonpAdapter from 'axios-jsonp'
import $ from 'jquery'
Vue.prototype.$ajax = axios

Vue.use(Vuex)

let store = new Vuex.Store({
	
	// youdaotrans 翻译数据
	// history 翻译后历史记录
	// add 收藏单词或句子
	// news 新闻数据
	
	state: {
		youdaotrans: {},
		history: [],
		add: [],
		news: {}
	},
	getters: {
		query: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.query
			}
		},
		translation: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.translation
			}
		},
		tSpeakUrl: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.tSpeakUrl
			}
		},
		speakUrl: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.speakUrl
			}
		},
		basic: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.basic
			}
		},
		web: state => {
			if (state.youdaotrans != {}) {
				return state.youdaotrans.web
			}
		},

		history: state => {
			if (state.history != {}) {
				return state.history.reverse()
			}
		},
		
		newsData: state => {
	
				return state.news
				
			
		}

	},
	mutations: {

		youdaotrans(state, res) {
		
				state.youdaotrans = res


					if (res.basic) {
						state.history.push({
							query: res.query,
							explains: res.basic.explains
						})
					} else {
						state.history.push({
							query: res.query,
							translation: res.translation
						})
					}
	
		},

		addTo(state, res) {
			state.add.push(res.query)
		},

		addCancel(state, res) {
			state.add.splice(res, 1)
		},

		delect(state) {
			state.youdaotrans = {}
		},
		
		// 获取新闻数据
		news(state, res) {
			state.news = res
		}

	},
	actions: {
		// 获取有道翻译API接口
		youdaotrans(context, data) {
			function getInput(input) {
				if (input.length == 0) {
					return null;
				}
				var result;
				var len = input.length;
				if (len <= 20) {
					result = input;
				} else {
					var startStr = input.substring(0, 10);
					var endStr = input.substring(len - 10, len);
					result = startStr + len + endStr;
				}
				return result;
			}
			
			// 参数配置
			var appKey = '2e28d6aa8571376d';
			var key = 'UacXUhrmPZd9pau4Le81JPyKb7AqWvfn';
			var salt = new Date().getTime();
			var curtime = Math.round(new Date().getTime() / 1000);
			var query = data.q;
			var from = from;
			var to = data.to;
			var str1 = appKey + getInput(query) + salt + curtime + key;
			var sign = sha256(str1);

			// 跨域请求
			$.ajax({
				url: 'http://openapi.youdao.com/api',
				type: 'post',
				dataType: 'jsonp',
				data: {
					q: query,
					appKey: appKey,
					salt: salt,
					from: from,
					to: to,
					curtime: curtime,
					sign: sign,
					signType: "v3"
				},
				success: function(data) {
					console.log(data);
					context.commit('youdaotrans', data)
				}
			});

		},
		
		// 获取新闻数据
		news(context){
			axios('/news/toutiao/index?type=top&key=651d937f7fc98cfc9897f78d7f172829').then((data) =>{
				context.commit('news', data.data.result.data)
			})
		}


	}
})

export default store
