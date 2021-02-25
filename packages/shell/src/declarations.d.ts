/* eslint-disable */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*/Installer' {
  import { PluginFunction } from 'vue'
  export const install: PluginFunction
}

type AuthPluginOptions = {
  router: Router
}
