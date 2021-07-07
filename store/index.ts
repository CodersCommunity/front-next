import { MutationTree, ActionTree } from 'vuex'
import { getAccessorType } from 'typed-vuex'
import { CategoryDto, StatisticsDto } from '~/services/__generated-api'
import { httpService } from '~/services/http.service'

// Import all your submodules
// import * as submodule from '~/store/submodule'

export const state = () => ({
  categories: [] as CategoryDto[],
  statistics: null as StatisticsDto | null,
})

export type RootState = ReturnType<typeof state>

export enum mutationTypes {
  SetCategories = 'setCategories',
  SetStatistics = 'setStatistics',
}

export const mutations: MutationTree<RootState> = {
  [mutationTypes.SetCategories](state, categories: CategoryDto[]) {
    state.categories = categories
  },
  [mutationTypes.SetStatistics](state, statistics: StatisticsDto) {
    state.statistics = statistics
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const [categories, statistics] = await Promise.all([
      httpService.categories.getCategoriesList(),
      httpService.statistics.getStatistics(),
    ])

    commit(mutationTypes.SetCategories, categories)
    commit(mutationTypes.SetStatistics, statistics)
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
