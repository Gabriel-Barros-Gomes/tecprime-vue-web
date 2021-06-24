import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../core/views/Home.vue'
import Sign from '../core/views/Sign.vue'
import Login from '../core/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
