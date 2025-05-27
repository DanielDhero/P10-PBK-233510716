import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Akun from '../views/Akun.vue'
import Info from '../views/Informasi.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/akun', component: Akun },
  { path: '/info', component: Info }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router