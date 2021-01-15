<template>
  <div class="grid grid-cols-12 mt-5">
    <div class="intro-y col-span-12 mx-2 lg:col-span-6">
      <div class="flex flex-wrap  overflow-hidden sm:-mx-1 md:-mx-2">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="title" label="Title"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="slug" label="Slug"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <VLangTabs :name.sync="seo_title" label="Seo title"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <VLangTabs :name.sync="seo_description" label="Seo Description" type="textarea"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <VLangTabs :name.sync="seo_keywords" label="Seo Keywords" type="textarea"/>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 mx-2 lg:col-span-6">
      <div class="flex flex-wrap -mx-3 sm:-mx-1 md:-mx-2">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full">
          <VLangTabs :name.sync="description" label="Description" type="textarea"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <label class="flex uppercase tracking-wide text-gray-700 text-xs font-bold align-middle mb-4">
            external_link
          </label>
          <input type="text"
                 v-model="external_link"
                 class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                 placeholder="external_link"/>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <label class="flex uppercase tracking-wide text-gray-700 text-xs font-bold align-middle mb-4">
            Select Filter
          </label>
          <VSelect :data="listFilters" v-model="filter" v-on:valueSelect="onValueSelect"/>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 mx-2 lg:col-span-2">
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">
          Main image
        </label>
        <div
          class="mt-2 flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md text-center">
          <div class="text-center" v-if="!mainImage.id">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="Placeholder" class="block object-cover h-48 w-full rounded-lg"
                   :src="mainImage.slug">
            </article>
          </div>
          <Media  :target.sync="mainImage"/>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 mx-2 lg:col-span-2">
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">
          Mockup image
        </label>
        <div
          class="mt-2 flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md text-center">
          <div class="text-center" v-if="!mockup.id">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="Placeholder" class="block object-cover h-48 w-full  rounded-lg"
                   :src="mockup.slug">
            </article>
          </div>
          <Media :target.sync="mockup"/>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 mx-2 lg:col-span-8">
      <div class="flex mt-12">
        <label class="flex items-center">
          <input type="checkbox" v-model="showHome" class="form-checkbox">
          <span class="ml-2">Показать на главной</span>
        </label>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="fixed right-0 mx-10 my-10 bottom-0">
        <button
          class="flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          @click="sendCreateRequest">Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import VLangTabs from "~/components/controls/VLangTabs";
import VSelect from "@/components/controls/VSelect";
import Media from "@/components/Media";

export default {
  name: "create",
  components: {
    VLangTabs,
    VSelect,
    Media
  },
  data() {
    return {
      title: {
        en: 'title',
        ru: 'title'
      },
      slug: {
        en: 'slug',
        ru: 'slug'
      },
      seo_title: {
        en: 'seo_title',
        ru: 'seo_title'
      },
      seo_description: {
        en: 'seo_description',
        ru: 'seo_description',
      },
      seo_keywords: {
        en: 'seo_keywords',
        ru: 'seo_keywords',
      },
      description: {
        en: 'description',
        ru: 'description',
      },
      filter: {
        name: 'Выбирите фильтр'
      },
      external_link: '',
      mainImage: {},
      mockup: {},
      gallery: [],
      showHome: true,
    }
  },
  computed: {
    ...mapGetters({
      listFilters: 'filter/listFilters',
    }),
  },
  methods: {
    ...mapMutations('app', ['SET_HEADER_TITLE']),
    ...mapActions({
      getFilters: 'filter/getFilters',
      storePortfolio: 'portfolio/storePortfolio'
    }),
    onValueSelect(value) {
      this.filter = value;
    },
    async sendCreateRequest() {
        try {
          let portfolio = {
            title: this.title,
            slug: this.slug,
            seo_title: this.seo_title,
            seo_description: this.seo_description,
            seo_keywords: this.seo_keywords,
            description: this.description,
            filter_id: this.filter.id,
            external_link: this.external_link,
            image_id: this.mainImage.id,
            mockup_id: this.mockup.id,
            show_home: this.showHome,
          }
          await this.storePortfolio(portfolio)
          await this.$toast.show({
            type: 'success',
            title: this.$t('app.successTitle'),
            message: this.$t('app.successDes'),
          })
          this.$router.push(this.localePath({ name: "portfolio"}));
        } catch {
          await this.$toast.show({
            type: 'danger',
            title: this.$t('app.errorTitle'),
            message: this.$t('app.errorDes'),
          })
        }

    }
  },
  mounted() {
    this.SET_HEADER_TITLE('Create Portfolios')
    this.getFilters()
  }
}
</script>

<style scoped>

</style>
