import { RouteRecordRaw } from 'vue-router'
import { PrimaryMenuItem } from '@nguyenvanduocit/vue-cli-module-federation-shell'

export const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/ViewLogin.vue'),
    props: route => ({ appName: route.query.appName })
  }
]

export const menus: PrimaryMenuItem[] = [
  {
    title: 'Auth',
    path: '/auth?appName=a'
  },
  {
    title: 'Same auth',
    path: '/auth?appName=b'
  }
]
