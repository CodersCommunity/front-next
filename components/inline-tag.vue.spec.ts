import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import InlineTag from '@/components/inline-tag.vue'
import { InlineTagDto } from '~/services/__generated-api'

const tag: InlineTagDto = {
  favourite: false,
  name: 'tag-name',
}

describe('InlineTag', () => {
  it('links to tag question list', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const wrapper = mount(InlineTag, {
      propsData: { tag },
      router: new VueRouter({
        mode: 'history',
        routes: [{ name: 'pytania', path: '/pytania' }],
      }),
      localVue,
    })

    expect(wrapper.find('a').attributes('href')).toBe(
      `/pytania?tag=${tag.name}`
    )
  })

  it('renders tag name', () => {
    const wrapper = mount(InlineTag, {
      stubs: ['router-link'],
      propsData: { tag },
    })

    expect(wrapper.text()).toContain(tag.name)
  })

  it('renders star if tag is favourite', () => {
    const wrapper = mount(InlineTag, {
      stubs: ['router-link'],
      propsData: {
        tag: { ...tag, favourite: true },
      },
    })

    expect(wrapper.text()).toContain('★')
  })

  it('does not render star if tag is not favourite', () => {
    const wrapper = mount(InlineTag, {
      stubs: ['router-link'],
      propsData: {
        tag: { ...tag, favourite: false },
      },
    })

    expect(wrapper.text()).not.toContain('★')
  })
})
