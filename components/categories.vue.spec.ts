import { shallowMount } from '@vue/test-utils'
import Categories from '@/components/categories.vue'
import CategoriesItem from '@/components/categories-item.vue'
import Vue from 'vue'

beforeAll(() => {
  Vue.component('CategoriesItem', CategoriesItem)
})

describe('Categories', () => {
  test('is a list', () => {
    const wrapper = shallowMount(Categories, {
      propsData: {
        categories: [{}],
      },
    })

    expect(wrapper.element.tagName).toBe('UL')
  })

  test('renders nothing when the list is empty', () => {
    const wrapper = shallowMount(Categories, {
      propsData: {
        categories: [],
      },
    })

    expect(wrapper.html()).toBe('')
  })

  test('has category items with proper depth', () => {
    const wrapper = shallowMount(Categories, {
      stubs: {
        CategoriesItem: true,
      },
      propsData: {
        depth: 1,
        categories: [{}],
      },
    })

    expect(wrapper.findComponent(CategoriesItem).attributes('depth')).toBe('1')
  })
})
