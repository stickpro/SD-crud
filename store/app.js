import { set } from '@/utilits/vuex'
export const state = () => ({
  headerTitle: 'Dashboard',
})

export const getters = {
  headerTitle(state) {
    return state.headerTitle
  },
}
export const mutations = {
  SET_HEADER_TITLE: set('headerTitle'),
}
