<template>
  <div>

    {{ listFilter }}

  <nuxt-link to="filter/create"
             class="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span class="relative  flex items-center pr-3">
                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                  <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                          C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                          C15.952,9,16,9.447,16,10z"/>
                </svg>
            </span>
    Create New Filter
  </nuxt-link>
  </div>
</template>
<script>
import {mapMutations, mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      listFilter: 'filter/listFilter',
    }),
  },
  head() {
    return {}
     title: 'filter list'
  },
  methods: {
    ...mapMutations('app', ['SET_HEADER_TITLE']),
    ...mapActions({
      getFilters: 'filter/getFilters'
    }),
  },
  mounted() {
    this.SET_HEADER_TITLE('Filter List')
    this.getFilters()
  }
}
</script>
