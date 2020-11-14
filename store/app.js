import { set } from '@/utilits/vuex'
export const state = () => ({
  headerTitle: 'Dashboard',
  lang: 'ru',
})

export const getters = {
  headerTitle(state) {
    return state.headerTitle
  },
  getLang(state) {
    return state.lang
  }
}
export const mutations = {
  SET_HEADER_TITLE: set('headerTitle'),
  SET_LANG: set('lang')
}
