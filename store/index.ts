import { MutationTree, ActionTree } from 'vuex'
import { CategoryDto } from '~/services/__generated-api'
import { httpService } from '~/services/http.service'

export const state = () => ({
  categories: [] as CategoryDto[],
})

export type RootState = ReturnType<typeof state>

export enum mutationTypes {
  SetCategories = 'setCategories',
}

export const mutations: MutationTree<RootState> = {
  [mutationTypes.SetCategories](state, categories: CategoryDto[]) {
    state.categories = categories
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    commit(
      mutationTypes.SetCategories,
      await httpService.categories.getCategoriesList()
    )
  },
}
