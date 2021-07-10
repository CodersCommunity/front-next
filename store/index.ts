import { MutationTree, ActionTree } from 'vuex'
import { getAccessorType } from 'typed-vuex'
import { Context as NuxtContext } from '@nuxt/types'
import {
  AccountDto,
  CategoryDto,
  StatisticsDto,
} from '~/services/__generated-api'

// Import all your submodules
// import * as submodule from '~/store/submodule'

export const state = () => ({
  categories: [] as CategoryDto[],
  statistics: null as StatisticsDto | null,
  currentUser: null as AccountDto | null,
})

export type RootState = ReturnType<typeof state>

export enum MutationTypes {
  SetCategories = 'setCategories',
  SetStatistics = 'setStatistics',
  SetCurrentUser = 'setCurrentUser',
}

export const mutations: MutationTree<RootState> = {
  [MutationTypes.SetCategories](state, categories: CategoryDto[]) {
    state.categories = categories
  },
  [MutationTypes.SetStatistics](state, statistics: StatisticsDto) {
    state.statistics = statistics
  },
  [MutationTypes.SetCurrentUser](state, user: AccountDto) {
    state.currentUser = user
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { $httpService }: NuxtContext) {
    const [categories, statistics, user] = await Promise.all([
      $httpService.categories.getCategoriesList(),
      $httpService.statistics.getStatistics(),
      $httpService.account.getAccountData().catch((err) => {
        if (err.response?.status === 401) return null
        throw err
      }),
    ])

    commit(MutationTypes.SetCategories, categories)
    commit(MutationTypes.SetStatistics, statistics)
    commit(MutationTypes.SetCurrentUser, user)
  },
}

export const accessorType = getAccessorType({
  state,
  // getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    // submodule,
  },
})
