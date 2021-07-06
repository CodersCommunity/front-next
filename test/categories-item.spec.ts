import { mount, shallowMount } from '@vue/test-utils'
import Categories from '@/components/categories.vue'
import CategoriesItem from '@/components/categories-item.vue'
import { CategoryDto } from '~/services/__generated-api'

const exampleCategory: CategoryDto = {
  id: 1,
  title: 'category title',
  description: 'category-description',
  path: 'category-path',
  slug: 'category-slug',
  questionsCount: 12,
  subcategories: [],
}

const propsData = {
  depth: 0,
  category: exampleCategory,
}

describe('CategoriesItem', () => {
  test('is a list item', () => {
    const wrapper = shallowMount(CategoriesItem, { propsData })
    expect(wrapper.element.tagName).toBe('LI')
  })

  test('has title', () => {
    const wrapper = shallowMount(CategoriesItem, { propsData })
    expect(wrapper.text()).toContain(exampleCategory.title)
  })

  test('has questions count', () => {
    const wrapper = shallowMount(CategoriesItem, { propsData })
    expect(wrapper.text()).toContain(`${exampleCategory.questionsCount}`)
  })

  test('has description', () => {
    const wrapper = shallowMount(CategoriesItem, { propsData })
    expect(wrapper.text()).toContain(exampleCategory.description)
  })

  test('has subcategories', () => {
    const wrapper = mount(CategoriesItem, { propsData })
    expect(wrapper.findComponent(Categories).exists()).toBe(true)
  })

  test('has heading with level based on depth', () => {
    for (let i = 0; i < 5; i++) {
      const wrapper = mount(CategoriesItem, {
        propsData: {
          depth: i,
          category: exampleCategory,
        },
      })

      expect(wrapper.find(`h${i + 2}`).exists()).toBe(true)
    }
  })

  test.todo('links to questions by category slug')
})
