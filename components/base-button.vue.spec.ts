import { mount } from '@vue/test-utils'
import BaseButton from '@/components/base-button.vue'

describe('BaseButton', () => {
  describe('color', () => {
    it('has class primary', () => {
      const wrapper = mount(BaseButton, {
        propsData: { color: 'primary' },
      })

      expect(wrapper.classes()).toContain('button--primary')
    })

    it('has class info', () => {
      const wrapper = mount(BaseButton, {
        propsData: { color: 'info' },
      })

      expect(wrapper.classes()).toContain('button--info')
    })

    it('has class success', () => {
      const wrapper = mount(BaseButton, {
        propsData: { color: 'success' },
      })

      expect(wrapper.classes()).toContain('button--success')
    })

    it('has class warning', () => {
      const wrapper = mount(BaseButton, {
        propsData: { color: 'warning' },
      })

      expect(wrapper.classes()).toContain('button--warning')
    })

    it('has class error', () => {
      const wrapper = mount(BaseButton, {
        propsData: { color: 'error' },
      })

      expect(wrapper.classes()).toContain('button--error')
    })
  })
})
