import { mount } from '@vue/test-utils'
import TitleContainer from '@/components/title-container.vue'

describe('TitleContainer', () => {
  test('renders slot', () => {
    const wrapper = mount(TitleContainer, {
      slots: {
        default: '<span id="slot"/>',
      },
    })

    expect(wrapper.find('#slot').exists()).toBe(true)
  })

  test('has css main-title class', () => {
    const wrapper = mount(TitleContainer, {
      propsData: {
        type: 'main-title',
      },
    })

    expect(wrapper.classes('title-container--main-title')).toBe(true)
  })

  test('has css answers class', () => {
    const wrapper = mount(TitleContainer, {
      propsData: {
        type: 'answers',
      },
    })

    expect(wrapper.classes('title-container--answers')).toBe(true)
  })

  test('has css similar-questions class', () => {
    const wrapper = mount(TitleContainer, {
      propsData: {
        type: 'similar-questions',
      },
    })

    expect(wrapper.classes('title-container--similar-questions')).toBe(true)
  })
})
