import { shallowMount } from '@vue/test-utils'
import AppLayout from '@/components/AppLayout.vue'

describe('AppLayout.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppLayout, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
