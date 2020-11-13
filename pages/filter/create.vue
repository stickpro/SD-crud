<template>
  <div class="px-5 py-10 mx-auto">
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="name" :label="$t('app.name')"/>
      </div>

    </div>
    <button
      :disabled="this.name.en.length == 0 || this.name.ru.length == 0"
      :class="this.name.en.length == 0 || this.name.ru.length == 0 ? 'opacity-50 cursor-not-allowed' : ''"
      class="flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      @click="sendCreateRequest">Create
    </button>
  </div>
</template>

<script>
import VLangTabs from "@/components/controls/VLangTabs";
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "create",
  head() {
    return {
      title: 'Create Filter'
    }
  },
  components: {
    VLangTabs
  },
  data: () => ({
    name: {
      ru: '',
      en: '',
    },
  }),
  methods: {
    ...mapMutations('app', ['setHeaderTitle']),
    ...mapActions({
      createFilter: 'filter/createFilter'
    }),
    async sendCreateRequest() {
      if (this.name.en.length > 0 && this.name.ru.length > 0) {
        try {
          await this.createFilter({name: this.name})
          await this.$toast.show({
            type: 'success',
            title: this.$t('app.successTitle'),
            message: this.$t('app.successDes'),
          })
          this.$router.push(this.localePath({ name: "filter"}));
        } catch {
          await this.$toast.show({
            type: 'danger',
            title: this.$t('app.errorTitle'),
            message: this.$t('app.errorDes'),
          })
        }
      }
    }
  },
  mounted() {
    this.setHeaderTitle('Create Filter')
  }
}
</script>

<style scoped>

</style>
