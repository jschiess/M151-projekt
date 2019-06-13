
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App'
import Server from '../components/Server'
import Client from '../components/Client'
import test from '../components/test'


Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/test',
			name: 'start',
			component: test,
		},
		{
			path: '/',
			name: 'home',
			component: Server
		},
		{
			path: '/client',
			name: 'client',
			component: Client
		},

	]
})