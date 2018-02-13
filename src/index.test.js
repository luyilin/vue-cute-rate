import { mount } from 'vue-test-utils'
import Star from './'

test('it works', () => {
  const wrapper = mount(Star)
  expect(wrapper.isVueInstance()).toBe(true)
})
