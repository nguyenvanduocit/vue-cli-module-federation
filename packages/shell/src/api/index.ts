import { ref, Ref } from 'vue'

export function userListEnabledModule (): Ref<Map<string, string>> {
  const enabledModules = ref(new Map<string, string>())
  enabledModules.value.set('ButtonLogin', 'auth/ButtonLogin')
  return enabledModules
}
