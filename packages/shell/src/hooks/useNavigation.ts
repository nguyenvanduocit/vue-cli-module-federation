import { reactive, UnwrapRef } from 'vue'
import { PrimaryMenuItem } from '../../types/types'

const navigations = reactive<PrimaryMenuItem[]>([])

export function useNavigation (): UnwrapRef<PrimaryMenuItem[]> {
  return navigations
}

export function addNavigation (item: PrimaryMenuItem): void {
  navigations.push(reactive(item))
}
