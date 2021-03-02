// https://github.com/royriojas/mfe-webpack-demo/blob/attempt_dynamic/packages/app-01/src/index.jsx

export type Remote = {
  url: string
  name: string
}

export const loadRemote = async (remote: Remote): Promise<HTMLScriptElement> => {
  const { name, url } = remote

  await loadJS(url)

  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  // @ts-ignore
  await __webpack_init_sharing__('default')
  // @ts-ignore
  const container = window[name] // or get the container somewhere else

  // @ts-ignore
  if (!container || !container.init) { throw new Error(`Cannot load external remote: ${name} from url: ${url}`) }

  // Initialize the container, it may provide shared modules
  // @ts-ignore
  await container.init(__webpack_share_scopes__.default)

  return container
}

const scriptsCache: Record<string, Promise<HTMLScriptElement>|null> = {}

const loadJS = async (src: string) => {
  if (scriptsCache[src]) {
    return scriptsCache
  }

  const dfd = deferred({ timeout: 30000, id: src })

  const { document: doc } = window

  const script = doc.createElement('script')

  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', src)

  script.addEventListener('error', err => {
    scriptsCache[src] = null
    // @ts-ignore
    dfd.reject(err)
  })

  script.addEventListener('load', () => {
    // @ts-ignore
    dfd.resolve(script)
  })

  doc.head.appendChild(script)

  scriptsCache[src] = dfd

  return dfd
}

type DeferredArgument = {
  id: string,
  timeout: number
}

const deferred = (args: DeferredArgument): Promise<HTMLScriptElement> => {
  args = args || {}

  const { timeout } = args

  let resolver: (value: HTMLScriptElement) => void
  let rejector: (reason?: ErrorEvent) => void
  const promise = new Promise<HTMLScriptElement>((resolve, reject) => {
    resolver = resolve
    rejector = reject
  })

  // @ts-ignore
  promise.resolve = (arg: HTMLScriptElement) => {
    clearTimeout(timeoutId)
    resolver(arg)
  }

  // @ts-ignore
  promise.reject = (arg: ErrorEvent) => {
    clearTimeout(timeoutId)
    rejector(arg)
  }

  const id = args.id || 'anonymous deferred'
  const timeoutId: number = setTimeout(
    () => rejector(new ErrorEvent(`timeout (${timeout}) reached on "${id}"`)),
    timeout
  )

  return promise
}
