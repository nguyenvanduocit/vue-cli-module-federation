import { userListEnabledModule } from '@/api'
import { loadRemote } from '@/util/loadRemote'

// load all remote
const remotesToPreload = userListEnabledModule()
await Promise.all(remotesToPreload.map(loadRemote))

// lazy load bootstrap to ensure that all bootstrap's dependency will be resolved in realtime
import('./bootstrap')
