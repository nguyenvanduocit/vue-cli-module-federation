import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppBootstrap from '../views/AppBootstrap.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'bootstrap',
    component: AppBootstrap
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
