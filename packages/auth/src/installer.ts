import _Vue, { defineAsyncComponent } from 'vue'
import { Router } from 'vue-router'

type AuthPluginOptions = {
  router: Router
}

export function install (Vue: typeof _Vue, options: AuthPluginOptions): void {
  const { router } = options
  router.addRoute({
    path: '/auth',
    name: 'auth',
    component: () => import('@/components/HelloWorld.vue')
  })
}
