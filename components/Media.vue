<template>
  <div>
    <button @click="show = !show"
      class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
      Media Library</button>
    <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full" style="background-color: rgba(0,0,0,.5);" v-if="show"  @click="show = !show">

      <!-- A basic modal dialog with title, body and one button to close -->
      <div class="h-auto p-4 mx-2 text-left bg-white rounded shadow-xl md:p-6 lg:p-8 md:mx-0">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Media library
          </h3>
          <div class="intro-y col-span-12 mx-2 lg:col-span-12">
            <div class="mt-6">
              <label class="block text-sm leading-5 font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p class="mt-1 text-sm text-gray-600">
                    <button class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                      Upload a file
                    </button>
                    or drag and drop
                  </p>
                  <p class="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full rounded-lg" src="https://picsum.photos/600/400/?random">
                </a>
              </article>
            </div>
          </div>

        </div>

        <!-- One big close button.  --->
        <div class="mt-5 sm:mt-6">
            <span class="flex w-full rounded-md shadow-sm">
              <button @click="show = !show" class="inline-flex justify-center w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                Close this modal!
              </button>
            </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media",
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>

</style>
