<template>
  <div class="px-5 py-10 mx-auto">
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <VLangTabs :name.sync="filter.name" :label="$t('app.name')"/>
      </div>

    </div>
    <button
      class="flex justify-center py-2 px-4 mt-5 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      @click="sendUpdate">
      <svg-icon name="save" class="h-5 w-5 mr-5" fill="#fff"/>
      {{ $t('app.update') }}
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import VLangTabs from "@/components/controls/VLangTabs";

export default {
  name: "EditFilter",
  head() {
    return {
      title: this.$t('filters.editTitle')
    }
  },
  components: {
    VLangTabs
  },
  async asyncData({store, params}) {
    await store.dispatch('filter/getFilter', params.id)
  },
  computed: {
    ...mapGetters({
      filter: 'filter/itemFilter'
    })
  },
  methods: {
    ...mapMutations('app', ['SET_HEADER_TITLE']),
    ...mapActions({
      updateFilter: 'filter/updateFilter'
    }),
    async sendUpdate() {
      try {
        await this.updateFilter(this.filter.id)
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
    },
  },
  mounted() {
    this.SET_HEADER_TITLE(this.$t('filters.editTitle'))
  }
}
</script>

<style scoped>

</style>
