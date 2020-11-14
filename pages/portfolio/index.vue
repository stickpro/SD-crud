<template>
  <div class="px-5 py-10 mx-auto">
    <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
      <div class="fixed right-0 mx-10 my-10 bottom-0">
        <nuxt-link to="portfolio/create"
                   class="group flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span class="relative  flex items-center pr-3">
              <svg-icon name="add" class="w-5 h-5 inline-block text-white" fill="#fff" viewBox="0 0 20 20"/>
            </span>
          Create New Portfolio
        </nuxt-link>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <Card/>
      </div>

    </div>
  </div>
</template>
<script>
import Card from '@/components/portfolio/Card'

export default {
  name: 'Portfolio-List',
  components: {
    Card
  },
  head: () => ({
    title: 'Portfolio'
  }),
}
</script>
