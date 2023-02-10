import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'
import Feedback from './views/feedback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
