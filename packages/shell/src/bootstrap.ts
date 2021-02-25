import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const shellApp = createApp(App)
shellApp.use(router)

import('auth/Installer').then((auth) => {
  const option: AuthPluginOptions = {
    router: router
  }

  shellApp.use(auth, option)
  shellApp.mount('#app')
})
