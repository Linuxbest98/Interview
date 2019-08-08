<template>
	<div>
		<div class="header">
			<div class="app_logo"></div>
			<div class="search"></div>
		</div>
		
		<div class="main">
			<swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="banner.length!=0">
				<swiper-slide v-for="(item, index) in slide" :key="index">
					<div class="slide-box">
						<div class="borer-img">
							<div class="img_cut"><img class="tec_aveter" :src="item"></div>
							<div class="detail">
								<div class="info"><span class="tit">吃透听力,'听懂'四级四六级</span></div>
								<div class="info"><span class="cy">考神听力导师助你听力轻松提升</span></div>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
		
		<div class="stage_border"><div class="line"></div></div>
		<div class="stage">
				<div class="stage_view" ref="stageView">
					<div class="stage_content_width">
						<div class="box">
							<img class="state_icon" src="../../../public/img/xx.png">
							<div class="state_name">小学</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/cz.png">
							<div class="state_name">初中</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/gz.png">
							<div class="state_name">高中</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/sl.png">
							<div class="state_name">四六级</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/sy.png">
							<div class="state_name">实用英语</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/ky.png">
							<div class="state_name">考研</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/xqah.png">
							<div class="state_name">兴趣爱好</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/lj.png">
							<div class="state_name">逻辑英语</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/zszb.png">
							<div class="state_name">专四专八</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/jszgz.png">
							<div class="state_name">教师资格证</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/ystf.png">
							<div class="state_name">雅思托福</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/bc.png">
							<div class="state_name">编程开发</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/xyz.png">
							<div class="state_name">小语种</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/zy.png">
							<div class="state_name">职业</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/xqet.png">
							<div class="state_name">学前儿童</div>
						</div>
						<div class="box">
							<img class="state_icon" src="../../../public/img/jps.png">
							<div class="state_name">精品书</div>
						</div>
					</div>
				</div>
		</div>
		<div class="stage_border"><div class="line"></div></div>
		<NavBar></NavBar>
	</div>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	import BScroll from 'better-scroll'
	import NavBar from '../../components/NavBar.vue'
	export default{
		created() {
			this.$nextTick(() =>{
				this.stageScroll()
			})
			
		},
		computed: {
			slide() {
				return this.banner
			}
		},
		data() {
			const that = this;
			return {
				banner: [
					'./img/pl.png',
		
		
					'./img/lc.jpg',
		
		
					'./img/lt.jpg'
		
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
			NavBar
		},
		methods:{
			stageScroll() {
				// 避免内存泄露
				if (!this.stageView) {
					// 保证他是个单例
					this.stageView = new BScroll(this.$refs.stageView, {
						click: true, // 允许点击
						scrollX: true, //横向滚动
					})
				} else {
					this.stageView.refresh() // 重新计算高度
				}
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.auto-img{
		width: 100%;
		display: block;
	}
	.header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		display: flex;
		width: 100%;
		height: 55px;
		padding:15px;
		box-sizing: border-box;
		background: #fff;
		.app_logo{
			flex: 1;
			background: url(../../../public/img/bdapp.png) no-repeat;
			background-size: cover;
		}
		
		.search{
			flex: 0 0 50%;
			margin-left: 5%;
			
			.search_input{
				width: 100%;
				border: none;
				outline: none;
			}
		}
	}
	.main{
		width: 100%;
		padding: 55px 0 0;
		box-sizing: border-box;
		overflow: hidden;
	}
	.slide-box{
		margin: 0 10px;
	}
	.img_cut{
		width: 100%;
		height: 150px;
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 15px;
	}
	.tec_aveter{
		width: 100%;
	}
	.info{
		
		.cy{
			font-size: 12px;
			color: #999;
		}
	}
	.stage{
		width: 100%;
		box-sizing: border-box;
		
		.stage_view{
			width: 100%;
			overflow: hidden;
			
			.stage_content_width{
				display: flex;
				width: 350%;
				
				.box{
					flex: 1;
					
					.state_icon{
						margin: 0 auto 5px;
						display: block;
						width: 30px;
						height: 30px;
					}
					
					.state_name{
						text-align: center;
						font-size: 12px;
						color: #666
					}
				}
			}
		}
	}
	.stage_border{
		width: 100%;
		padding: 0 15px;
		margin: 15px 0;
		box-sizing: border-box;
		.line{
			width: 100%;
			border-bottom: 1px solid #eee;
		}
	}
</style>
