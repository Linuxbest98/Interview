<template>
	<div>
		<div class="bg">

			<div class="tanslate_box">
				<div @click="backOnePage" class="select_box">
					<div class="icon-arrow-left2"></div>
				</div>
				<div class="input_box"><input ref="inputBox" :value="query" autofocus class="input_content" type="text" placeholder="在此输入单词或句子"></div>
				<transition name="show">
					<div @click="delectQuery" v-if="isDelect" class="icon-cross"></div>
				</transition>


			</div>

			<div class="goods">
				<div class="lang_select" ref="menuWrapper">
					<div class="langwidth">
						<div @click="check(num)" ref="lang" :data-to="lang.to" class="lang" v-for="(lang , num) in langlist" :key="num">{{lang.name}}</div>
					</div>
				</div>
			</div>

		</div>

		<div class="from_origin" v-if="query">
			<div class="from_title">{{query}}</div>
			<div class="from_func">
				<!-- 收藏做判断 isAdded -->
				<div class="collect" v-if="isAdded"><img @click="addCancel" class="auto-img" src="../../public/img/ic_collect_border_red_pressed.png"></div>
				<div class="collect" v-else><img @click="addTo" class="auto-img" src="../../public/img/ic_collect_border_red_normal.png"></div>
				<div class="share"><img class="auto-img" src="../../public/img/ic_share_with_arrow.png"></div>
			</div>
		</div>

		<div class="from_speakUrl" v-if="basic">
			<div class="" v-if="basic.phonetic">
				<div class="volume_ico"><img class="auto-img" src="../../public/img/ic_volume_up_off.png"></div>
				<span>/{{basic.phonetic}}/</span>
			</div>

			<div class="" v-if="basic['uk-phonetic']">
				<audio src="" hidden="hidden" ref="audio"></audio>
				<div class="volume_ico"><img @click="playUK" ref="ukSpeech" :data-url="basic['uk-speech']" class="auto-img" src="../../public/img/ic_volume_up_off.png"></div>
				<span>英/{{basic['uk-phonetic']}}/</span>
			</div>

			<div class="" v-if="basic['us-phonetic']">
				<div class="volume_ico"><img @click="playUS" ref="usSpeech" :data-url="basic['us-speech']" class="auto-img" src="../../public/img/ic_volume_up_off.png"></div>
				<span>美/{{basic['us-phonetic']}}/</span>
			</div>
		</div>

		<div class="to_create" v-if="basic">
			<div class="to_create_bg" v-if="query">
				<div v-for="(explain, index) in basic.explains" :key="index+'c'">

					<span class="pos">{{explain.split(".")[0]}}. </span>
					<span class="pos_explains">{{explain.split(".")[1]}}</span>

				</div>

				<div class="web" v-if="web">
					<span class="tag">[网络] </span> <span class="net_explain" v-for="(value,index) in web[0].value" :key="index + 'net'">{{value}}</span>
				</div>

				<div class="web" v-if="basic.wfs">
					<span class="tagwfs" v-if="wfss.wf.name" v-for="(wfss, wfsnum) in basic.wfs" :key="wfsnum + 'wfs'">[{{wfss.wf.name}}]
						<span class="wfs">{{wfss.wf.value}}</span></span>
					<!-- <span class="tagwfs" v-if="basic.wfs[1].wf">[{{basic.wfs[1].wf.name}}]</span><span class="wfs">{{basic.wfs[1].wf.value}}</span> -->
				</div>
			</div>

		</div>
		<div class="to_create" v-else-if="query">
			<div class="to_create_bg">
				<audio src="" hidden="hidden" ref="audio"></audio>
				<div v-for="(translation, trans) in translation" :key="trans + 'trans'">
					<div class="volume_ico"><img v-if="tSpeakUrl" @click="playTS" ref="tspeakurl" :data-url="tSpeakUrl" class="auto-img"
						 src="../../public/img/ic_volume_up_off.png"></div>{{translation}}

				</div>
			</div>
		</div>
		<div class="history" v-else-if="history.length">
			<div class="history_word" v-for="(his, tor) in history" :key="tor + 'tor'">
				<span class="under_line" v-if="his.query">{{his.query}}
					<span v-if="his.explains" class="history_explain" v-for="bbb in his.explains">{{bbb}} </span>
					<span class="history_explain" v-for="bbb in his.translation"> {{bbb}}</span>
				</span>
			</div>

		</div>
		<div class="no_history" v-else>
			<div class="history_img"><img class="auto-img" src="../../public/img/history.png"></div>
		</div>
		<!-- <div >{{tSpeakUrl}}</div>
		<div >{{speakUrl}}</div> -->
		<!-- {{youdaotrans}} -->
		<!-- {{tSpeakUrl}} -->


	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	import {
		mapState
	} from 'vuex'
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				added: false,
				langlist: [{
					name: '英汉',
					from: 'auto',
					to: 'en'
				}, {
					name: '汉语',
					from: 'auto',
					to: 'zh-CHS'
				}, {
					name: '日汉',
					from: 'auto',
					to: 'ja'
				}, {
					name: '韩汉',
					from: 'auto',
					to: 'ko'
				}, {
					name: '法汉',
					from: 'auto',
					to: 'fr'
				}, {
					name: '德汉',
					from: 'auto',
					to: 'de'
				}, {
					name: '葡汉',
					from: 'auto',
					to: 'de'
				}, {
					name: '西汉',
					from: 'auto',
					to: 'es'
				}, {
					name: '俄汉',
					from: 'auto',
					to: 'ru'
				}, {
					name: '藏汉',
					from: 'auto',
					to: 'zh-CHS'
				}]
			}
		},
		created() {
			// this.$store.dispatch('getcities')
			this.$nextTick(() => { // 数据更新完毕后,组件重新渲染完毕
				this.initScroll()
			})

		},
		computed: {
			...mapState(['youdaotrans', 'add']),

			...mapGetters(['query', 'translation', 'tSpeakUrl', 'speakUrl', 'basic', 'web', 'history']), // 查询单词  翻译  翻译后语音  语音  音标

			isAdded() {
				if (!this.$store.state.add.length) {
					return false
				}
				for (let i = 0; i < this.$store.state.add.length; i++) {
					if (this.$store.getters.query == this.$store.state.add[i]) {
						return true
					}
				}

				return false
			},

			isDelect() {
				if (this.$store.getters.query != null) {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			initScroll() {
				// 避免内存泄露
				if (!this.menuScroll) {
					// 保证他是个单例
					this.menuScroll = new BScroll(this.$refs.menuWrapper, {
						click: true, // 允许点击
						scrollX: true, //横向滚动
					})
				} else {
					this.menuScroll.refresh() // 重新计算高度
				}
			},

			backOnePage() {
				this.$router.go(-1)
			},

			check(num) {
				// console.log(this.$refs.inputBox.value)		
				// this.$refs.bgImage.style.paddingTop

				for (let i = 0; i < this.$refs.lang.length; i++) {
					this.$refs.lang[i].style.fontWeight = 300;
				}
				this.$refs.lang[num].style.fontWeight = 700;

				if (this.$refs.inputBox.value == '') {
					return
				}

				this.$store.dispatch('youdaotrans', {
					q: this.$refs.inputBox.value, //传递input值
					to: this.$refs.lang[num].dataset.to //传递语言的to值
				})
			},

			playUK() {
				this.$refs.audio.src = this.$refs.ukSpeech.dataset.url
				this.$refs.audio.autoplay = 'autoplay'
			},

			playUS() {
				this.$refs.audio.src = this.$refs.usSpeech.dataset.url
				this.$refs.audio.autoplay = 'autoplay'
			},

			playTS() {
				// console.log(this.$store.getters.tSpeakUrl)
				this.$refs.audio.src = this.$store.getters.tSpeakUrl
				this.$refs.audio.autoplay = 'autoplay'
			},

			addTo() {
				this.added = true
				let index = this.$store.state.add.indexOf(this.$store.getters.query)
				if (index == -1) {
					this.$store.commit('addTo', {
						query: this.$store.getters.query
					})
				}
			},

			addCancel() {
				this.added = false
				let index = this.$store.state.add.indexOf(this.$store.getters.query)
				if (index != -1) {
					this.$store.commit('addCancel', index)
				}
			},

			delectQuery() {
				this.$store.commit('delect')
			}

		}

	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.history {
		position: fixed;
		width: 100%;
		height: 100%;
		display: inline-block;
		width: 100%;
		height: 100%;
		background: #eef2f3;
		z-index: -1;
		padding: 0 8px;
		box-sizing: border-box;

		.history_word {
			width: 100%;
			height: 50px;
			background: #fff;
			line-height: 50px;
			color: #000;
			padding: 0 0 0 20px;
			box-sizing: border-box;

			&:first-child {
				border-top-right-radius: 5px;
				border-top-left-radius: 5px;
				margin-top: 8px;
			}

			&:last-child {
				border-bottom-right-radius: 5px;
				border-bottom-left-radius: 5px;
			}

			.under_line {
				display: inline-block;
				width: 100%;
				border-bottom: 1px solid #eee;
			}

			.history_explain {
				color: #666666;
				margin-left: 20px;
			}

		}
	}

	.no_history {
		position: fixed;
		width: 100%;
		height: 100%;
		display: inline-block;
		width: 100%;
		height: 100%;
		background: #eef2f3;
		z-index: -1;
		text-align: center;

		.history_img {
			margin: 50px auto;
			width: 250px;
		}
	}

	.volume_ico {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 3px;
		vertical-align: middle;
	}

	.tag {
		font-size: 12px;
		color: #666;
		width: 30px;
		margin-right: 15px;
	}

	.tagwfs {
		font-size: 12px;
		color: #666;
		width: 30px;
	}

	.wfs {
		font-size: 12px;
		color: #333;
		padding-left: 13px;
	}

	.web {
		padding-top: 15px;

		.net_explain {
			margin-right: 5px;
			font-size: 13px;

		}

		.net_explain::after {
			content: ';'
		}

		.net_explain:last-child::after {
			content: ''
		}
	}

	.from_speakUrl {
		font-size: 13px;
		color: #222;
		padding: 5px 18px;

		&>div {
			display: inline-block;
			min-width: 30%;
		}

		span {}

	}

	.from_origin {
		display: flex;
		width: 100%;
		height: 50px;
		padding: 5px 8px;
		box-sizing: border-box;
		border-top: 1px solid #ccc;

		.from_title {
			flex: 1;
			height: 39px;
			font-weight: bold;
			font-size: 25px;
			line-height: 39px;
			box-sizing: border-box;
			margin-left: 10px;
		}

		.from_func {
			flex: 0 0 calc(25% + 2px);
			padding: 7px 7px;
			box-sizing: border-box;

			.collect {
				display: inline-block;
				width: 25px;
				margin-right: 7px;
			}

			.share {
				display: inline-block;
				width: 25px;
				margin-left: 7px;
			}
		}
	}

	.to_create {
		width: 100%;
		height: 100%;
		padding: 7px;
		box-sizing: border-box;
		background: #efefef;

		.to_create_bg {
			padding: 20px 15px;
			border-radius: 3px;
			background: #fff;

			.pos {
				display: inline-block;
				font-family: Times New Roman;
				min-width: 45px;
				margin-bottom: 10px;
			}

			.pos_explains {
				text-align: right;
				margin-bottom: 10px;
				font-size: 13px;
			}



		}
	}

	.auto-img {
		width: 100%;
		display: block;
	}

	.goods {
		display: flex;
		position: fixed;
		top: 82px;
		left: 0;
		bottom: 46px;
		width: 100%;
		height: 48px;
		overflow: hidden;
		border-bottom: 1px solid #eee;
	}

	.lang_select {
		flex: 0 0 100%;
		height: 50px;
		background: #fff;
	}

	.langwidth {
		height: 50px;
		width: 200%;
	}

	.lang {
		position: relative;
		width: 10%;
		height: 50px;
		box-sizing: border-box;
		display: inline-block;
		line-height: 50px;
		text-align: center;
	}



	.bg {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 130px;
		padding: 30px 8px 0;
		box-sizing: border-box;
		background: #fff;
		font-family: Microsoft YaHei;

		.tanslate_box {
			position: relative;
			display: flex;
			width: 100%;
			height: 50px;
			border: 1px solid #eee;
			background: #fff;

			.select_box {
				flex: 0 0 20%;
				text-align: center;

				.icon-arrow-left2 {
					width: 100%;
					height: 100%;
					font-size: 20px;
					line-height: 50px;
					color: #333;
				}
			}

			.input_box {
				flex: 1;
				height: 100%;

				.input_content {
					display: block;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					border: none;
					outline: none;
					color: #aaa;

					&:focus {
						color: #000;
					}
				}
			}

			.show-enter {
				transform: rotateZ(0);
			}

			.show-enter-to {
				transform: rotateZ(360deg);
			}

			.show-enter-active {
				transition: all .5s linear;
			}

			.icon-cross {
				position: absolute;
				right: 0;
				top: 0;
				display: inline-block;
				width: 50px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				font-size: 15px;
				color: #666;
			}
		}




		.history {
			width: 100%;
			height: 100%;
		}
	}
</style>
