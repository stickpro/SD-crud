import { set } from '@/utilits/vuex'
export const state = () => ({
  listFilter: [],
})

export const getters = {
  listFilter(state) {
    return state.listFilter
  },
}
export const mutations = {
  setListFilter: set('listFilter'),
}
 export const actions = {
  async getFilters({ commit }) {
    const { data } = await this.$axios.$get('/api/filters')
    commit('setListFilter', data)
  }
 }
