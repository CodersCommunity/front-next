import { mount } from '@vue/test-utils'
import DynamicHeading from '@/components/dynamic-heading.vue'

describe('DynamicHeading', () => {
  test('renders heading based on prop', () => {
    for (let i = 1; i < 6; i++) {
      const wrapper = mount(DynamicHeading, {
        propsData: {
          level: i,
        },
      })

      expect(wrapper.find(`h${i}`).exists()).toBe(true)
    }
  })

  test('renders slot', () => {
    const wrapper = mount(DynamicHeading, {
      propsData: {
        level: 1,
      },
      slots: {
        default: '<span id="slot"/>',
      },
    })

    expect(wrapper.find('#slot').exists()).toBe(true)
  })
})
