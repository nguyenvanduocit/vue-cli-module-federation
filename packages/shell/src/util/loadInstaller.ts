import { Remote } from '@/util/loadRemote'
import { ModuleManifest } from '../../types/types'

export const loadInstaller = async (remote: Remote): Promise<ModuleManifest> => {
  if (Object.prototype.hasOwnProperty.call(window, remote.name)) {
    // @ts-ignore
    const container = window[remote.name]
    // @ts-ignore
    const factory = await container.get('./Manifest')
    return factory()
  }

  throw new Error('failed to load module')
}
