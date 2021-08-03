import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import InlineCategory from '@/components/inline-category.vue'
import { CategoryDto } from '~/services/__generated-api'

const category: CategoryDto = {
  id: 1,
  title: 'Category title',
  description: 'category description',
  path: 'category-path',
  slug: 'category-slug',
  questionsCount: 100,
  subcategories: [],
  position: 1,
}

describe('InlineCategory', () => {
  it('links to category question list', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const wrapper = mount(InlineCategory, {
      propsData: { category },
      router: new VueRouter({
        mode: 'history',
        routes: [{ name: 'pytania', path: '/pytania' }],
      }),
      localVue,
    })

    expect(wrapper.find('a').attributes('href')).toBe(
      `/pytania?kategoria=${category.path}`
    )
  })

  it('renders category name', () => {
    const wrapper = mount(InlineCategory, {
      stubs: ['router-link'],
      propsData: { category },
    })

    expect(wrapper.text()).toContain(category.title)
  })

  it('renders icon if category is favourite', () => {
    const wrapper = mount(InlineCategory, {
      stubs: ['router-link'],
      propsData: {
        category: { ...category, favourite: true },
      },
    })

    expect(wrapper.find('.icon').exists()).toBe(true)
  })

  it('does not render icon if category is not favourite', () => {
    const wrapper = mount(InlineCategory, {
      stubs: ['router-link'],
      propsData: {
        category: { ...category, favourite: false },
      },
    })

    expect(wrapper.find('.icon').exists()).toBe(false)
  })
})
