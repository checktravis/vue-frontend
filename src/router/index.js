/**
 * Import Dependency
 */
import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'

/**
 * Import Component (.vue)
 * For Async Component Syntax
 * const X = () => import('@/pages/xxx/xxx.vue')
 */
import DASHBOARD from '@/pages/dashboard'
import About from '@/views/About.vue'

/**
 * Config
 */
Vue.use(Router)

/**
 * Declare Variable
 */
// const pageWhiteList = ['/', '/signin']

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: DASHBOARD
		},
		{
      path: '/about',
      name: 'about',
      component: About
		}
	]
})

export default router
