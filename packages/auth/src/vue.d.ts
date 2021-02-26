/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface UserLoggedInEvent extends Event {
  detail: {
    username: string,
    password: string
  }
}
