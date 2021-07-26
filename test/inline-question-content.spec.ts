import InlineQuestionContent from '@/components/inline-question-content.vue'
import { shallowMount } from '@vue/test-utils'
import { InlineQuestionDto } from '~/services/__generated-api'

describe('InlineQuestionContent', () => {
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
  it('Should have closed-question icon when question is closed', () => {
    const wrapper = shallowMount(InlineQuestionContent, {
      propsData: { question: { ...baseQuestionProp, closed: true } },
    })

    expect(
      wrapper.find('[data-test="question-closed-icon"]').exists()
    ).toBeTruthy()
  })
  it(' Should not have closed-question icon when question is not closed', () => {
    const wrapper = shallowMount(InlineQuestionContent, {
      propsData: { question: { ...baseQuestionProp, closed: false } },
    })

    expect(
      wrapper.find('[data-test="question-closed-icon"]').exists()
    ).toBeFalsy()
  })
})
