import {set} from '@/utilits/vuex'

export const state = () => ({
  listImages: [],
  itemImage: {}
})

export const getters = {
  listImages(state) {
    return state.listImages
  },
  itemImage(state) {
    return state.itemImage
  }
}
export const mutations = {
  SET_LIST_IMAGES: set('itemImages'),
  SET_ITEM_IMAGE: set('itemImage'),
  ADD_LIST_IMAGE (state, data) {
    state.listImages.push(data)
  },
  DELETE_ITEM_FILTERS (state, id) {
    state.itemImages = state.itemImages.filter(item => item.id != id)
  }
}
export const actions = {
  async getImages({ commit }) {
    const { data } = await this.$axios.$get('/api/images')
    commit('SET_LIST_IMAGES', data)
  },
  async storeImage({ commit }, file) {
    let formData = new FormData()
    formData.append('title', file.title)
    formData.append('alt', file.alt)
    formData.append('image', file)
    const { data } = await this.$axios.$post('/api/images', formData)

    commit('ADD_LIST_IMAGE')
  }
}