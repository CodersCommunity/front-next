import { mount } from '@vue/test-utils'
import InlineUser from '@/components/inline-user.vue'

describe('Inline user', () => {
  it('handles deleted account', () => {
    const wrapper = mount(InlineUser, {
      propsData: { user: undefined },
    })

    expect(wrapper.text()).toContain('niezalogowany')
  })

  describe('user level coloring', () => {
    it('sets username--approved class when user.level is 20', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 10,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain(
        'username--approved'
      )
    })

    it('sets username--expert class when user.level is 50', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 20,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain('username--expert')
    })

    it('sets username--editor class when user.level is 50', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 50,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain('username--editor')
    })

    it('sets username--moderator class when user.level is 80', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 80,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain(
        'username--moderator'
      )
    })

    it('sets username--admin class when user.level is 100', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 100,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain('username--admin')
    })

    it('sets username--super-admin class when user.level is 120', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 120,
          },
        },
      })

      expect(wrapper.find('.username').classes()).toContain(
        'username--super-admin'
      )
    })
  })
})
