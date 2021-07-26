import InlineQuestion from '@/components/inline-question.vue'
import { shallowMount } from '@vue/test-utils'
import { InlineQuestionDto } from '~/services/__generated-api'

describe('InlineQuestion', () => {
  const baseQuestionProp: InlineQuestionDto = {
    id: 1,
    title: 'aaa',
    slug: 'aaa',
    answers: 22,
    votes: 38,
    views: 68,
    hasBestAnswer: false,
    tags: [{ name: 'bbb', favourite: false }],
    category: {
      id: 1,
      title: 'ccc',
      path: 'path-to-ccc',
      favourite: false,
    },
    change: {
      type: 'question_created',
      date: new Date().toDateString(),
      user: {
        id: 1,
        title: 'asdad',
        favourite: false,
        level: 0,
        name: 'Mirek',
        points: 10000,
      },
    },
    favourite: false,
    closed: false,
  }
  it('Should have class favourite when question is marked as favourite', () => {
    const wrapper = shallowMount(InlineQuestion, {
      propsData: { question: { ...baseQuestionProp, favourite: true } },
    })

    expect(
      wrapper.find('[data-test="question-container"]').classes()
    ).toContain('favourite')
  })
  it('Should not have class favourite when question is not marked as favourite', () => {
    const wrapper = shallowMount(InlineQuestion, {
      propsData: { question: { ...baseQuestionProp, favourite: false } },
    })

    expect(
      wrapper.find('[data-test="question-container"]').classes()
    ).not.toContain('favourite')
  })
})
