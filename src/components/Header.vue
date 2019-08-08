<template>
	<div>
		<div class="bg">
			<div class="tanslate_box">
				<div class="select_lang"><span class="lang_after">英汉</span></div>
				<router-link to="/search">
					<div class="input_box"><input class="input_content" type="text" placeholder="在此输入单词或句子"></div>
				</router-link>
			</div>
			<div class="lang_select"></div>
			<!-- <img class="" src="../../public/img/ic_camera_tranlate_red_small.png"> -->
			<div class="func_select">
				<div class="select_box">
					<div class="icon_bg">
						<img class="icon" src="../../public/img/ic_camera_tranlate_red_small.png">
					</div>
							拍照翻译
				</div>
				<div class="select_box">
					<div class="icon_bg">
						<img class="icon" src="../../public/img/ic_camera_tranlate_red_small.png">
					</div>
						对话翻译
				</div>
				<div class="select_box">
					<div class="icon_bg">
						<img class="icon" src="../../public/img/ic_camera_tranlate_red_small.png">
					</div>
					口语测试
				</div>
			</div>
		</div>
		
		<div class="today-open-cur">
			今日公开课
			<span class="more">查看更多</span>
		</div>
		
		<swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="banner.length!=0">
			<swiper-slide v-for="(item, index) in ji" :key="index">
				<div class="slide-box">
					<div class="borer-img">
						<img class="tec_aveter" :src="item">
						<div class="detail">
							<div class="nima"><span class="tit">2020年考研备考攻略</span></div>
							<div class="nima"><span class="cy">考研冲鸭</span></div>
							<div class="nima "><span class="bm">488已报名</span></div>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>

		
		<NewsList></NewsList>
	</div>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	
	import NewsList from './NewsList.vue'
	
	require("swiper/dist/css/swiper.css");
	components: {
		swiper,
		swiperSlide
	}

	export default {
		computed: {
			ji() {
				return this.banner
			}
		},
		data() {
			const that = this;
			return {
				banner: [
					'./img/pic_teacher_maxiu_small.png',


					'./img/pic_teacher_maxiu_small.png',


					'./img/pic_teacher_maxiu_small.png'

				],
				imgIndex: 1,
				swiperOption: {
					notNextTick: true,
					loop: true,
					initialSlide: 0,
					autoplay: {
						delay: 2500,
						stopOnLastSilde: false,
						disableOnInteraction: false
					},
					speed: 800,
					direction: "horizontal",
					grabCursor: true,
					on: {
						slideChangeTranstionStart: function() {
							that.imgIndex = this.realIndex - 1;
						}
					},

					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						type: "bullets"
					}
				}
			}
		},
		
		components:{
			NewsList
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.auto-img {
		width: 100px;
		display: block;
	}
	
	.today-open-cur{
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		margin-top: 20px;
		font-family: 'Apple LiGothic Medium';
		.more{
			font-size: 12px;
			color: #666;
			text-align: right;
			float: right;
			
		}
	}
	.select_lang{
		flex: 0 0 80px;
		text-align: center;
		font-size: 15px;
		line-height: 70px;
		font-weight: 500;
		
		color: #777;
		position: relative;
		
		.lang_after{
			position: relative
		}
		
		.lang_after::after{
			content: '';
			position: absolute;
			right: -40%;
			top: 50%;
			width: 0;
			height: 0;
			border-top: 3px solid #666;
			border-left: 3px solid transparent;
			border-right: 3px solid transparent;
			border-bottom: 3px solid transparent;
			
		}
	}
	
	

	.func_select {
		display: flex;
		width: 100%;
		height: 40px;
		margin: 20px 0 5px;

		.select_box {
			flex: 1;
			padding-left: 5px;
			color: #fff;
			height: 35px;
			font-size: 12px;
			font-weight: 600;
			line-height: 35px;
			
			
			
			
			.icon_bg {
				position: relative;
				width: 35px;
				height: 35px;
				border-radius: 50%;
				background: #fff;
				float: left;
				margin-right: 5px;
				
				.icon{
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto;
					width: 28px;
					height: 28px;
				}
				
				
			}
			
		
		}
	}

	.slide-box {
		width: 100%;
		height: 110px;
		padding: 15px;
		box-sizing: border-box;

		.borer-img {
			width: 100%;
			height: 100%;
			border-radius: 5px;
			box-shadow: 0 0 15px #ccc;
			
			.tec_aveter{
				width: 100px;
				height: 100%;
				float: left;
				
				
			}
			
			.detail{
				display: flex;
				width: 50%;
				height: 100%;
				flex-direction: column;
				
				.nima{
					flex: 0 0 20px;
				}
				.nima:first-child{
					flex: 0 0 20px;
					margin-top: 15px;
				}
				.tit{
					font-size: 14px;
				}
				.cy{
					background: #FFE8AF;
					display: inline-block;
					padding: 3px;
					box-sizing: border-box;
					font-size: 12px;
					color: #FF9500;
				}
				.bm{
					display: inline-block;
					color: #666;
					font-size: 12px;
				}
			}
		}

	}

	.bg {
		width: 100%;
		padding: 30px 15px 15px;
		box-sizing: border-box;
		background: url(../../public/img/bg_my_info.png) center center no-repeat;
		background-size: cover;
		font-family: 'Apple LiGothic Medium';

		.tanslate_box {
			display: flex;
			width: 100%;
			height: 70px;
			background: #fff;
			border-radius:5px;

			.select_box {
				flex: 0 0 20%;
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

				}
			}
		}
	}
</style>
