import {set} from '@/utilits/vuex'

export const state = () => ({
  portfolios: [],
  portfolio: {}
})
export const getters = {
  getPortfolios(state) {
    return state.portfolios
  },
  getPortfolio(state) {
    return state.portfolio
  }
}
export const mutations = {
  SET_PORTFOLIOS: set('portfolios'),
  SET_PORTFOLIO: set('portfolio'),
}

export const actions = {
  async loadPortfolios({commit}) {
    const { data } = await this.$axios.$get('/api/portfolios')
    commit('SET_PORTFOLIOS', data)
  },

  async loadPortfolio({commit}, id) {
    const { data } = await this.$axios.$get(`api/portfolios/${id}/edit`)
    commit('SET_PORTFOLIO', data)
  },

  async storePortfolio({ commit }, portfolio) {
    const {data} = await this.$axios.$post('api/portfolios', portfolio)
  }
}
