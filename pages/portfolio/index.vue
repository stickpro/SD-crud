<template>
  <div class="px-5 py-10 mx-auto">
  <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
    </div>

    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <Card />
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
