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
    <div class="intro-y col-span-12 mx-2 lg:col-span-2">
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">
          Main image
        </label>
        <div
          class="mt-2 flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md text-center">
          <div class="text-center" v-if="!portfolio.image.id">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <article class="overflow-hidden rounded-lg shadow-lg">
              <cld-image
                :public-id="portfolio.image.slug"
                width="600"
                height="600"
                crop="fill"
                gravity="auto:subject"
                fetchFormat="auto"
                quality="auto"
                alt="An image example with Cloudinary"
                class="block h-auto w-full rounded-lg"
              />
            </article>
          </div>
          <Media  :target.sync="portfolio.image"/>
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
          <div class="text-center" v-if="!portfolio.mockup.id">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <article class="overflow-hidden rounded-lg shadow-lg">
              <cld-image
                :public-id="portfolio.mockup.slug"
                width="600"
                height="600"
                crop="fill"
                gravity="auto:subject"
                fetchFormat="auto"
                quality="auto"
                class="block h-auto w-full rounded-lg"
              />
            </article>
          </div>
          <Media :target.sync="portfolio.mockup" :multiple="false"/>
        </div>
      </div>
    </div>

    <div class="intro-y col-span-12 mx-2 lg:col-span-8">
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">
          Gallery
        </label>
        <div
          class="mt-2 flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md text-center">
          <div class="text-center" v-if="portfolio.images.length <= 0">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else class="flex">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6" v-for="image in portfolio.images" :key="image.id">
              <div class="hover:opacity-50 relative">
                <cld-image
                  :public-id="image.slug"
                  width="600"
                  height="600"
                  crop="fill"
                  gravity="auto:subject"
                  fetchFormat="auto"
                  quality="auto"
                  class="block h-auto w-full rounded-lg"
                />
                <button type="button"
                        @click="detach(image)"
                        class="absolute top-0 right-0 "
                        title="Detach file">
                  <svg-icon name="close" fill="red" width="25px" height="25px"/>
                </button>
              </div>
            </div>
          </div>
          <Media :gallery.sync="portfolio.images"  :multiple=true :portfolioId.sync="portfolio.id" />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="fixed right-0 mx-10 my-10 bottom-0">
        <button
          class="flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          @click="sendUpdateRequest">
          <svg-icon name="save" class="h-5 w-5 mr-5" fill="#fff"/>
          {{ $t('app.update') }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import VLangTabs from "@/components/controls/VLangTabs";
import Media from "@/components/Media";

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
    VSelect,
    Media
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
      updatePortfolio: 'portfolio/updatePortfolio',
      attachGallery: 'portfolio/attachGallery',
      detachGallery: 'portfolio/detachGallery',
    }),
    onValueSelect(value) {
      this.portfolio.filter = value;
    },
    async sendUpdateRequest() {
      // update state before send request
      this.portfolio.mockup_id = this.portfolio.mockup.id
      this.portfolio.image_id = this.portfolio.image.id

      try {
        await this.updatePortfolio(this.portfolio.id)
        await this.$toast.show({
          type: 'success',
          title: this.$t('app.successTitle'),
          message: this.$t('app.successDes'),
        })
      } catch {
        await this.$toast.show({
          type: 'danger',
          title: this.$t('app.errorTitle'),
          message: this.$t('app.errorDes'),
        })
      }
    },
    async detach(image) {
      try {
        await this.detachGallery(image.id)
        await this.portfolio.images.splice(this.portfolio.images.indexOf(image),1)
        await this.$toast.show({
          type: 'success',
          title: this.$t('app.successTitle'),
          message: this.$t('app.successDes'),
        })
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
    this.getFilters()
    this.$store.commit('app/SET_HEADER_TITLE', `${this.$t('app.edit')} ${this.$t('portfolios.title')}`)
  },
  async asyncData({store, params}) {
    await store.dispatch('portfolio/loadPortfolio', params.id)
  },
}
</script>
