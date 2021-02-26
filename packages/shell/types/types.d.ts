export declare type PrimaryMenuItem = {
  path: string
  title: string
}

export declare type ModuleManifest = {
  routes: RouteRecordRaw[]
  menus: PrimaryMenuItem[]
}

declare module '*/Manifest' {
  export const ModuleManifest
}
