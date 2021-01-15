<template>
  <article class="overflow-hidden rounded-lg shadow-lg">
    <nuxt-link :to="localePath({name: 'portfolio-id', params: { id: portfolio.id }})">
      <cld-image
        :public-id="portfolio.mockup.slug"
        width="600"
        height="600"
        crop="fill_pad"
        gravity="auto:subject"
        fetchFormat="auto"
        quality="auto"
        alt="An image example with Cloudinary"
        class="block h-auto w-full rounded-lg"
      />
    </nuxt-link>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a class="no-underline hover:underline text-black" href="#">
          {{ portfolio.title }}
        </a>
      </h1>
      <p class="text-grey-darker text-sm">
        {{ $dateFns.format(portfolio.updated_at, 'yyyy-MM-dd') }}
      </p>
    </header>

    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
        <span class="hidden">Like</span>
        <i class="fa fa-heart"></i>
      </a>
    </footer>
  </article>
</template>
<script>
export default {
  name: 'Card',
  props: ['portfolio']
}
</script>
