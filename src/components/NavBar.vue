<template>
	<div class="nav_bar">

		<div class="nav_item">
			<router-link to="/" exact tag="div">
				<div class="nav_img" v-if="koko == '/' ? false : true"><img class="auto-img" src="../../public/img/ic_dictionary_nonuse.png"></div>
				<div class="nav_img" v-else><img class="auto-img" src="../../public/img/ic_course_use.png"></div>
				<div class="nav_name" @click="jio">词典</div>
			</router-link>
		</div>


		<div class="nav_item">
			<router-link to="/translate" exact tag="div">
				<div class="nav_img" v-if="koko == '/translate' ? false : true"><img class="auto-img" src="../../public/img/ic_translate_nonuse.png"></div>
				<div class="nav_img" v-else><img class="auto-img" src="../../public/img/ic_translate_use.png"></div>
				<div class="nav_name">翻译</div>
			</router-link>
		</div>
		<div class="nav_item">
			<router-link to="/course" exact tag="div">
				<div class="nav_img" v-if="koko == '/course' ? false : true"><img class="auto-img" src="../../public/img/ic_course_nonuse.png"></div>
				<div class="nav_img" v-else><img class="auto-img" src="../../public/img/ic_course_use.png"></div>
				<div class="nav_name">精品课</div>
			</router-link>
		</div>
		<div class="nav_item">
			<router-link to="/discover" exact tag="div">
				<div class="nav_img" v-if="koko == '/discover' ? false : true"><img class="auto-img" src="../../public/img/ic_explore_nonuse.png"></div>
				<div class="nav_img" v-else><img class="auto-img" src="../../public/img/ic_explore_use.png"></div>
				<div class="nav_name">发现</div>
			</router-link>
		</div>
		<div class="nav_item">
			<router-link to="/mine" exact tag="div">
				<div class="nav_img" v-if="koko == '/mine' ? false : true"><img class="auto-img" src="../../public/img/ic_mine_nonuse.png"></div>
				<div class="nav_img" v-else><img class="auto-img" src="../../public/img/ic_mine_use.png"></div>
				<div class="nav_name">我的</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			koko() {
				return this.$route.path
			}
		},

		methods: {
			jio() {
				console.log(this.$route)
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	a {
		text-decoration: none;
	}

	.active {
		color: #E93941;
	}

	.nav_bar {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 50px;
		border-top: 1px solid #eee;
		background: #fff;
		z-index: 100;
		color: #999;

		.nav_item {
			flex: 1;


			.nav_img {
				width: 25px;
				margin: 5px auto 0;
			}

			.nav_name {
				font-size: 12px;
				text-align: center;
			}
		}
	}
</style>
