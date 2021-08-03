import InlineQuestion from '@/components/inline-question.vue'
import { shallowMount } from '@vue/test-utils'
import { InlineQuestionDto } from '~/services/__generated-api'

describe('InlineQuestion', () => {
  const baseQuestionProp: InlineQuestionDto = {
    id: 1,
    title: 'Question title',
    slug: 'question-slug',
    answers: 22,
    votes: 38,
    views: 68,
    hasBestAnswer: false,
    tags: [{ name: 'tag-name', favourite: false }],
    category: {
      id: 1,
      title: 'Category title',
      path: 'category-slug',
      favourite: false,
    },
    change: {
      type: 'question_created',
      date: new Date().toDateString(),
      user: {
        id: 1,
        title: 'User title',
        favourite: false,
        level: 0,
        name: 'User name',
        points: 10000,
      },
    },
    favourite: false,
    closed: false,
  }

  it('has closed-question icon when question is closed', () => {
    const wrapper = shallowMount(InlineQuestion, {
      stubs: ['router-link'],
      propsData: { question: { ...baseQuestionProp, closed: true } },
    })

    expect(
      wrapper.find('[data-test="question-closed-icon"]').exists()
    ).toBeTruthy()
  })

  it('has not closed-question icon when question is not closed', () => {
    const wrapper = shallowMount(InlineQuestion, {
      stubs: ['router-link'],
      propsData: { question: { ...baseQuestionProp, closed: false } },
    })

    expect(
      wrapper.find('[data-test="question-closed-icon"]').exists()
    ).toBeFalsy()
  })

  it('has closed-question icon when question is closed', () => {
    const wrapper = shallowMount(InlineQuestion, {
      stubs: ['router-link'],
      propsData: { question: { ...baseQuestionProp, favourite: true } },
    })

    expect(
      wrapper.find('[data-test="question-favourite-icon"]').exists()
    ).toBeTruthy()
  })

  it('has not closed-question icon when question is not closed', () => {
    const wrapper = shallowMount(InlineQuestion, {
      stubs: ['router-link'],
      propsData: { question: { ...baseQuestionProp, favourite: false } },
    })

    expect(
      wrapper.find('[data-test="question-favourite-icon"]').exists()
    ).toBeFalsy()
  })
})
