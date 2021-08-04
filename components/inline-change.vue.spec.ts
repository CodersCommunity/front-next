import { shallowMount } from '@vue/test-utils'
import InlineChange from '@/components/inline-change.vue'
import InlineCategory from '@/components/inline-category.vue'
import InlineUser from '@/components/inline-user.vue'
import { CategoryDto, InlineQuestionDto } from '~/services/__generated-api'

const change: InlineQuestionDto['change'] = {
  date: new Date().toString(),
  type: 'question_created',
  showItemId: 12,
  user: {
    favourite: false,
    id: 1,
    level: 10,
    name: 'username',
    points: 100,
    title: 'VIP',
  },
}

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

describe('inline-change', () => {
  it('shows type of change', () => {
    const wrapper = shallowMount(InlineChange, {
      propsData: { change },
      mocks: { $stringifyDate: () => {} },
    })

    expect(wrapper.text()).toContain('pytanie zadane')
  })

  it('shows category if provided', () => {
    const wrapper = shallowMount(InlineChange, {
      propsData: { change, category },
      mocks: { $stringifyDate: () => {} },
    })

    expect(wrapper.findComponent(InlineCategory).exists()).toBeTruthy()
  })

  it('does not show category if not provided', () => {
    const wrapper = shallowMount(InlineChange, {
      propsData: { change },
      mocks: { $stringifyDate: () => {} },
    })

    expect(wrapper.findComponent(InlineCategory).exists()).toBeFalsy()
  })

  it('shows user', () => {
    const wrapper = shallowMount(InlineChange, {
      propsData: { change },
      mocks: { $stringifyDate: () => {} },
    })

    expect(wrapper.findComponent(InlineUser).exists()).toBeTruthy()
  })
})
