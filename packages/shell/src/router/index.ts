import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ViewHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
