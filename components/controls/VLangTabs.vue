<template>
  <div>
    <nav class="flex flex-col sm:flex-row justify-between items-center">
      <label class="uppercase tracking-wide text-gray-700 text-xs font-bold align-middle">
        {{ label }}
      </label>
      <div class="flex flex-wrap">
        <button v-for="(value, index) in name"
                @click="SET_LANG(index)"
                class="text-gray-600 py-1 px-6 block hover:text-blue-500 focus:outline-none"
                :class="index === lang ? 'text-indigo-500 border-b-2 font-medium border-indigo-500' : ''">
          {{ index }}
        </button>
      </div>
    </nav>
    <div class="w-full" v-for="(value, index) in name">
      <div v-if="lang === index" class="pt-4">
        <template v-if="type == 'textarea'">
          <textarea v-model="name[index]" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    rows="4"></textarea>

        </template>
        <template v-else>
          <input type="text"
                 v-model="name[index]"
                 class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                 :placeholder="label"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "VLangTabs",
  props: [
    'name',
    'label',
    'type',
  ],
  data() {
    return {
      active: 'en',
    }
  },
  computed:{
    ...mapGetters({
      lang: 'app/getLang',
    }),
  },
  methods: {
    ...mapMutations('app', ['SET_HEADER_TITLE', 'SET_LANG']),
  }
}
</script>

<style scoped>

</style>
