<template>
  <div class="px-5 py-10 mx-auto">
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="name" label="Name"/>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="name" label="Name"/>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="name" label="Name"/>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="name" label="Name"/>
      </div>
    </div>
    <button class="flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
    @click="sendTest">Create</button>

  </div>
</template>

<script>
import VLangTabs from "~/components/controls/VLangTabs";
import { mapMutations } from 'vuex'


export default {
  name: "create",
  components: {
    VLangTabs
  },
  data() {
    return {
      name: {
        en: '123',
        ru: '1223'
      },
    }
  },
  methods: {
    ...mapMutations('app', ['SET_HEADER_TITLE']),
    async sendTest() {
      const data  = await this.$axios.$post('/api/portfolios', {
        name: this.name
      })
    }
  },
  mounted() {
    this.SET_HEADER_TITLE('Create Portfolios')
  }
}
</script>

<style scoped>

</style>
