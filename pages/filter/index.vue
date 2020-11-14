<template>
  <div class="px-5 py-10 mx-auto">
    <!--  todo create table component  -->
    <div class="flex">
      <div class=" w-full">
        <div class="py-2 align-middle inline-block min-w-full ">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
              <tr>
                <th v-for="(column, index) in filterColumns"
                    :key="column.name"
                    :class="index == filterColumns.length - 1 ? 'text-right' : 'text-left' "
                    class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  {{ column.label }}
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in listFilters">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900">{{ item.created_at.slice(0, 10) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <nuxt-link :to="localePath({name: 'filter-id', params: { id: item.id }})"
                             class="text-indigo-600 hover:text-indigo-900">
                    <svg-icon name="create" class="w-5 h-5 inline-block text-red-500" fill="#5A67D8"/>
                    {{ $t('app.edit') }}
                  </nuxt-link>
                  <button @click="remove(item)"
                          class="text-red-500 font-medium leading-5">
                    <svg-icon name="trash" class="w-5 h-5 inline-block text-red-500" fill="#E53E3E"/>
                    {{ $t('app.delete') }}
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="fixed right-0 mx-10 my-10 bottom-0">
        <nuxt-link :to="localePath({ name: 'filter-create', params: { slug: 'create' }})"
                   class="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span class="relative  flex items-center pr-3">
                  <svg-icon name="add" class="w-5 h-5 inline-block text-white" fill="#fff" viewBox="0 0 20 20"/>
            </span>
          Create New Filter
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapActions, mapGetters} from "vuex";
import VTable from "@/components/controls/VTable";

export default {
  head() {
    return {
      title: this.$t('filters.listTitle')
    }
  },
  components: {
    VTable,
  },
  data() {
    return {
      filterColumns: [
        {
          label: this.$t('app.name'),
          field: 'name',
        },
        {
          label: this.$t('app.date'),
          field: 'createdAt',
          type: 'date',
        },
        {
          label: this.$t('app.action'),
          field: 'score',
          type: 'action',
        },
      ],
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
      deleteFilter: 'filter/deleteFilter'
    }),
    remove(item) {
      this.$toast.show({
        title: this.$t('app.delete') + '?',
        message: `${this.$t('app.deleteDes')} ${item.name}`,
        primary: {label: this.$t('app.delete'), action: () => this.deleteFilter(item.id)},
        secondary: {label: this.$t('app.cancel'), action: () => null},
        timeout: false,
      })
    }
  },
  mounted() {
    this.SET_HEADER_TITLE(this.$t('filters.listTitle'))
    this.getFilters()
  }
}
</script>
