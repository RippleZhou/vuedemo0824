// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banane from './components/banane'
import RedApple from './components/redApple'

Vue.use(VRouter)
let router = new VRouter({
	mode: 'history',
	routes: [
		{
			path:'/',
			redirect:'/apple'
		},
		{
			path: '/apple',
			component: Apple,
			name:'applePage',
			children: [
				{
					path:'red',
					component: RedApple
				}
			]
		},
		{
			path: '/banane',
			component: Banane,
		},
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
