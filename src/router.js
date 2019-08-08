import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)


export default new Router({
	linkActiveClass: 'active',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/search',
			name: 'search',
			component: () => import('./views/Search.vue')
		},
		{
			path: '/discover',
			name: 'discover',
			component: () => import('./views/navbar/Discover.vue')
		},
		{
			path: '/translate',
			name: 'translate',
			component: () => import('./views/navbar/Translate.vue')
		},
		{
			path: '/course',
			name: 'course',
			component: () => import('./views/navbar/Course.vue')
		},
		{
			path: '/mine',
			name: 'mine',
			component: () => import('./views/navbar/Mine.vue')
		}
	]
})
