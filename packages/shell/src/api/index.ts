import { Remote } from '@/util/loadRemote'

export function userListEnabledModule (): Remote[] {
  return [
    {
      name: 'auth',
      url: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/auth/remoteEntry.js' : 'http://localhost:3002/remoteEntry.js'
    }
  ]
}
