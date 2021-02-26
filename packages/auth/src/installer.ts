import _Vue from 'vue'
import { AuthPluginOptions } from '@/install'

export function install (Vue: typeof _Vue, options: AuthPluginOptions): void {
  const { router } = options
  router.addRoute({
    path: '/auth',
    name: 'auth',
    component: () => import('@/components/HelloWorld.vue')
  })
}
