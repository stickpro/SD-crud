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
      <button class="btn" @click="sendTest">test</button>
    </div>
  </div>
</template>

<script>
import VLangTabs from "~/components/controls/VLangTabs";

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
    async sendTest() {
      const data  = await this.$axios.$post('/api/portfolios', {
        name: this.name
      })
    }
  }
}
</script>

<style scoped>

</style>
