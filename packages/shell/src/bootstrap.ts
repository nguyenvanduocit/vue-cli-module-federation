import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import { userListEnabledModule } from '@/api'
import { loadInstaller } from '@/util/loadInstaller'
import { ModuleManifest } from '../types/types'
import { addNavigation } from '@/hooks/useNavigation'

const remotesToPreload = userListEnabledModule()
const modules = await Promise.all(remotesToPreload.map(loadInstaller))

modules.forEach((module: ModuleManifest) => {
  if (Object.prototype.hasOwnProperty.call(module, 'routes')) {
    module.routes.forEach(router.addRoute)
  }

  if (Object.prototype.hasOwnProperty.call(module, 'menus')) {
    module.menus.forEach(addNavigation)
  }
})

const shellApp = createApp(App)
shellApp.use(router)
shellApp.mount('#app')
