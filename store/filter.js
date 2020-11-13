import {set} from '@/utilits/vuex'

export const state = () => ({
  listFilters: [],
  itemFilter: {}
})

export const getters = {
  listFilters(state) {
    return state.listFilters
  },
  itemFilter(state) {
    return state.itemFilter
  }
}
export const mutations = {
  SET_LIST_FILTERS: set('listFilters'),
  SET_ITEM_FILTER: set('itemFilter'),
  DELETE_ITEM_FILTERS (state, id) {
    state.listFilters = state.listFilters.filter(item => item.id != id)
  }
}
export const actions = {
  async getFilters({commit}) {
    const {data} = await this.$axios.$get('/api/filters')
    commit('SET_LIST_FILTERS', data)
  },
  async getFilter({commit}, id) {
    const {data} = await this.$axios.$get(`/api/filters/${id}/edit`)
    commit('SET_ITEM_FILTER', data)
  },
  async createFilter({ commit }, filter) {
    await this.$axios.$post(`/api/filters/`, filter)
  },
  async updateFilter({state}, id) {
    await this.$axios.$put(`/api/filters/${id}`, state.itemFilter)
  },
  async deleteFilter({ commit }, id) {
    await this.$axios.$delete(`/api/filters/${id}`)
    commit('DELETE_ITEM_FILTERS', id)
  }
}
