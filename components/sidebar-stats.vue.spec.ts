import SidebarStats from '@/components/sidebar-stats.vue'
import { shallowMount } from '@vue/test-utils'
import { StatisticsDto } from '~/services/__generated-api'

const statistics: StatisticsDto = {
  answersCount: 1234,
  commentsCount: 2345,
  questionsCount: 3456,
  usersCount: 4567,
}

function createWrapper() {
  return shallowMount(SidebarStats, {
    mocks: {
      $accessor: {
        statistics,
      },
    },
    computed: {
      statistics: () => statistics,
    },
  })
}

describe('SidebarStats', () => {
  test('shows number of answers', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain(`${statistics.answersCount}`)
  })

  test('shows number of comments', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain(`${statistics.commentsCount}`)
  })

  test('shows number of questions', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain(`${statistics.questionsCount}`)
  })

  test('shows number of users', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain(`${statistics.usersCount}`)
  })
})
