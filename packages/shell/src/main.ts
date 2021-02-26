import { userListEnabledModule } from '@/api'
import { loadRemote } from '@/util'

const remotesToPreload = userListEnabledModule()
await Promise.all(remotesToPreload.map(loadRemote))
import('./bootstrap')
