import { mount } from '@vue/test-utils'

import InlineUser from '@/components/inline-user.vue'

describe('Inline user', () => {
  describe('User level coloring', () => {
    it('Should set username class when user.level is undefined', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
          },
        },
      })

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username'
      )
    })
    it('Should set username class when user.level is 0', () => {
      const wrapper = mount(InlineUser, {
        propsData: {
          user: {
            id: 1,
            name: 'aaa',
            points: 1000,
            level: 0,
          },
        },
      })

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username'
      )
    })
    it('Should set username--approved class when user.level is 20', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--approved'
      )
    })
    it('Should set username--expert class when user.level is 50', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--expert'
      )
    })
    it('Should set username--editor class when user.level is 50', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--editor'
      )
    })
    it('Should set username--moderator class when user.level is 80', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--moderator'
      )
    })
    it('Should set username--admin class when user.level is 100', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--admin'
      )
    })
    it('Should set username--super-admin class when user.level is 120', () => {
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

      expect(wrapper.find('[data-test="username"]').classes()).toContain(
        'username--super-admin'
      )
    })
  })
})
