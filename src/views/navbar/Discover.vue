<template>
	<div>
		<div class="disc">
			<div class="disc_title">壹句</div>

			<div class="goods">
				<div class="lang_select" ref="menuWrapper">
					<div class="langwidth">
						<div class="disc_item">
							<div class="disc_img"></div>
							<div class="disc_slogan">Don't let anyone tell you different.</div>
						</div>
						<div class="disc_item">
							<div class="disc_img"></div>
							<div class="disc_slogan">Don't let anyone tell you different.</div>
						</div>
						<div class="disc_item">
							<div class="disc_img"></div>
							<div class="disc_slogan">Don't let anyone tell you different.</div>
						</div>
						<div class="disc_item">
							<div class="disc_img"></div>
							<div class="disc_slogan">Don't let anyone tell you different.</div>
						</div>
					</div>
				</div>
			</div>

			<div class="disc_title">有道商城</div>

			<div class="goods">
				<div class="lang_select" ref="storeWrapper">
					<div class="store_width">
						<div class="store_item">
							<div class="asd"><img class="auto-img" src="../../../public/img/cet4.jpg"></div>
							<div class="store_slogan">备战四级</div>
						</div>
						<div class="store_item">
							<div class="asd"><img class="auto-img" src="../../../public/img/deli.jpg"></div>
							<div class="store_slogan">得力收纳盒</div>
						</div>
						<div class="store_item">
							<div class="asd"><img class="auto-img" src="../../../public/img/pen_of_king.png"></div>
							<div class="store_slogan">王笔组合</div>
						</div>
						<div class="store_item">
							<div class="asd"><img class="auto-img" src="../../../public/img/cet4.jpg"></div>
							<div class="store_slogan">备战专四</div>
						</div>
					</div>
				</div>
			</div>
		
			<div class="good_line">
				<div class="good_border"></div>
			</div>
		
			<div class="func">
				<div class="func_item"><img class="func_icon" src="../../../public/img/ic_wordbook.png"><div class="func_name">单词本</div></div>
				<div class="func_item"><img class="func_icon" src="../../../public/img/ic_professional_translate.png"><div class="func_name">人工翻译</div></div>
				<div class="func_item"><img class="func_icon" src="../../../public/img/ic_activity_center.png"><div class="func_name">活动中心</div></div>
			</div>
			
		</div>
		<NavBar></NavBar>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import NavBar from '../../components/NavBar.vue'
	export default {
		created() {
			this.$nextTick(() => {
				this.initScroll()
				this.storeScroll()
			})
		},

		components: {
			NavBar
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
			storeScroll() {
				// 避免内存泄露
				if (!this.storeWrapper) {
					// 保证他是个单例
					this.storeWrapper = new BScroll(this.$refs.storeWrapper, {
						click: true, // 允许点击
						scrollX: true, //横向滚动
					})
				} else {
					this.storeWrapper.refresh() // 重新计算高度
				}
			}
			
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.func{
		width: calc(100% - 15px);
		margin: 15px 0 10px;
		.func_item{
			width: 100%;
			padding: 10px 0;
			
			.func_name{
				height: 20px;
				line-height: 20px;
				color: #000;
				font-size: 15px;
			}
			.func_icon{
				width: 20px;
				margin-right: 25px;
				float: left;
			}
		}
		
	}
	
	
	.good_line{
		padding-right: 15px;
		box-sizing: border-box;
		overflow: hidden;
		width: calc(100% - 15px);
		
		
		.good_border{
			width: 100%;
			border-top: 1px solid #ddd;
		}
	}
	.goods {
		width: 100%;
		height: 150px;
		overflow: hidden;
	}

	.lang_select {
		flex: 0 0 100%;
		background: #fff;
	}

	.langwidth {
		height: 50px;
		width: 280%;
	}

	.auto-img {
		width: 100%;
		display: block;
	}

	.disc {
		width: 100%;
		padding: 15px 0 40px 15px;
		box-sizing: border-box;

		.disc_title {
			font-size: 20px;
			font-weight: bold;
			color: #000;
			width: calc(100% - 15px);
		}
	}

	.disc_item {
		width: calc(25% - 10px);
		display: inline-block;
		margin-right: 10px;

		.disc_img {
			width: 100%;
			height: 80px;
			background: url(../../../public/img/monseter.jpg) center center no-repeat;
			background-size: cover;
			border-radius: 5px;
			overflow: hidden;
			margin: 15px 15px 0 0
		}

		
	}
	
	.disc_slogan {
		font-size: 12px;
		color: #000;
		margin: 8px 0;
	}
	.store_width {
		width: 150%;
		height: 100px;
	}
	
	.store_item {
		width: calc(25% - 10px);
		display: inline-block;
		margin-right: 10px;
	}
	
	.store_slogan{
		margin: 8px 0;
		text-align: center;
		font-size: 12px;
		color: #000;
	}
	
	.asd{
		width: 100%;
		margin: 15px 0 0 0;
	}
</style>
