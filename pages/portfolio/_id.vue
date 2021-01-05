<template>
  <div class="grid grid-cols-12 mt-5">
    <div class="intro-y col-span-12 mx-2 lg:col-span-6">
      <div class="flex flex-wrap  overflow-hidden sm:-mx-1 md:-mx-2">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="portfolio.title" label="Title"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="portfolio.slug" label="Slug"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="portfolio.seo_title" label="Seo title"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <VLangTabs :name.sync="portfolio.seo_description" label="Seo Description" type="textarea"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <VLangTabs :name.sync="portfolio.seo_keywords" label="Seo Keywords" type="textarea"/>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 mx-2 lg:col-span-6">
      <div class="flex flex-wrap -mx-3 sm:-mx-1 md:-mx-2">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full">
          <VLangTabs :name.sync="portfolio.description" label="Description" type="textarea"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <label class="flex uppercase tracking-wide text-gray-700 text-xs font-bold align-middle mb-4">
            external_link
          </label>
          <input type="text"
                 v-model="portfolio.external_link"
                 class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                 placeholder="external_link"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <label class="flex uppercase tracking-wide text-gray-700 text-xs font-bold align-middle mb-4">
            Select Filter
          </label>
          <VSelect :data="listFilters" v-model="portfolio.filter" v-on:valueSelect="onValueSelect"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import VLangTabs from "@/components/controls/VLangTabs";

import VSelect from "@/components/controls/VSelect";

export  default {
  name: "EditPortfolio",
  head() {
    return {
      title: `${this.$t('app.edit')} ${this.$t('portfolios.title')} `
    }
  },
  components: {
    VLangTabs,
    VSelect
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/getPortfolio',
      listFilters: 'filter/listFilters',
    }),
  },
  methods: {
    ...mapActions({
      getFilters: 'filter/getFilters',
    }),
    onValueSelect(value) {
      this.portfolio.filter = value;
    },
  },
  mounted() {
    this.getFilters()
    this.$store.commit('app/SET_HEADER_TITLE', `${this.$t('app.edit')} ${this.$t('portfolios.title')}`)
  },
  async asyncData({store, params}) {
    await store.dispatch('portfolio/loadPortfolio', params.id)
  },
}
</script>
