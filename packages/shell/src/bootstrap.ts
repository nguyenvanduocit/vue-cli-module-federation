import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { userListEnabledModule } from '@/api'

const shellApp = createApp(App)
shellApp.use(router)
const remotesToPreload = userListEnabledModule()

remotesToPreload.forEach(async (modules) => {
  if (Object.prototype.hasOwnProperty.call(window, modules.name)) {
    // @ts-ignore
    const container = window[modules.name]
    // @ts-ignore
    const module = await container.get('./Installer')
    const option: AuthPluginOptions = {
      router: router
    }
    shellApp.use(module(), option)
  }

  shellApp.mount('#app')
})
