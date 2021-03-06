import { mount } from '@vue/test-utils'
import PostStats from '~/components/post-stats.vue'

describe('PostStats', () => {
  it('does not render votes buttons if voting is disabled', () => {
    const wrapper = mount(PostStats, {
      propsData: { votesCount: 0, disableVotes: true },
      mocks: { $pluralization: () => {} },
    })

    expect(wrapper.find('.box--votes button').exists()).toBe(false)
  })

  describe('renders number', () => {
    it('votes', () => {
      const votesCount = 5436112354
      const wrapper = mount(PostStats, {
        propsData: { votesCount },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.text()).toContain(`${votesCount}`)
    })

    it('answers', () => {
      const answersCount = 5436112354
      const wrapper = mount(PostStats, {
        propsData: { answersCount, votesCount: 0 },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.text()).toContain(`${answersCount}`)
    })

    it('views', () => {
      const viewsCount = 5436112354
      const wrapper = mount(PostStats, {
        propsData: { viewsCount, votesCount: 0 },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.text()).toContain(`${viewsCount}`)
    })
  })

  describe('renders small number', () => {
    it('if votes number is longer than 2 chars', () => {
      const votesCount = -5436112354
      const wrapper = mount(PostStats, {
        propsData: { votesCount },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.find('[data-test="vote-number"]').classes()).toContain(
        'number--small'
      )
    })

    it('if answers number is longer than 2 chars', () => {
      const answersCount = 5436112354
      const wrapper = mount(PostStats, {
        propsData: { answersCount, votesCount: 0 },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.find('[data-test="answers-number"]').classes()).toContain(
        'number--small'
      )
    })
  })

  describe('colors boxes', () => {
    it('if there is a best answer', () => {
      const wrapper = mount(PostStats, {
        propsData: {
          hasBestAnswer: true,
          answersCount: 1,
          votesCount: 0,
        },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.find('.box--answers').classes()).toContain(
        'box--best-answer'
      )
    })

    it('if there is no answers', () => {
      const wrapper = mount(PostStats, {
        propsData: { votesCount: 0, answersCount: 0 },
        mocks: { $pluralization: () => {} },
      })

      expect(wrapper.find('.box--answers').classes()).toContain(
        'box--no-answers'
      )
    })
  })

  describe('emits', () => {
    it('vote up if user has not voted yet and clicks vote up', async () => {
      const wrapper = mount(PostStats, {
        propsData: { votesCount: 0, userVote: 0 },
        mocks: { $pluralization: () => {} },
      })

      await wrapper.find('[data-test="vote-up-button"]').trigger('click')
      expect(wrapper.emitted('user-vote')).toStrictEqual([[1]])
    })

    it('remove vote up if user has voted up and clicks vote up again', async () => {
      const wrapper = mount(PostStats, {
        propsData: { votesCount: 0, userVote: 1 },
        mocks: { $pluralization: () => {} },
      })

      await wrapper.find('[data-test="vote-up-button"]').trigger('click')
      expect(wrapper.emitted('user-vote')).toStrictEqual([[0]])
    })

    it('vote down if user has not voted yet and clicks vote down', async () => {
      const wrapper = mount(PostStats, {
        propsData: { votesCount: 0, userVote: 0 },
        mocks: { $pluralization: () => {} },
      })

      await wrapper.find('[data-test="vote-down-button"]').trigger('click')
      expect(wrapper.emitted('user-vote')).toStrictEqual([[-1]])
    })

    it('remove vote down if user has voted down and clicks vote down again', async () => {
      const wrapper = mount(PostStats, {
        propsData: { votesCount: 0, userVote: 1 },
        mocks: { $pluralization: () => {} },
      })

      await wrapper.find('[data-test="vote-down-button"]').trigger('click')
      expect(wrapper.emitted('user-vote')).toStrictEqual([[0]])
    })
  })
})
