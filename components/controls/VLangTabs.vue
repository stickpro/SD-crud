<template>
  <div>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      {{ label }}
    </label>
    <nav class="flex flex-col sm:flex-row" >
      <button  v-for="(value, index) in name"
               @click="activate(index)"
               class="text-gray-600 py-1 px-6 block hover:text-blue-500 focus:outline-none"
               :class="index === active ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''">
        {{ index }}
      </button>
    </nav>
    <div class="w-full"  v-for="(value, index) in name">
      <div  v-if="active === index" class="pt-4">
        <input type="text"
               v-model="name[index]"
               class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
               :placeholder="label" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VLangTabs",
  props: [
    'name',
    'label'
  ],
  data() {
    return {
      active: 'en',
    }
  },
  methods: {
    activate(index) {
      this.active = index;
    }
  }
}
</script>

<style scoped>

</style>
