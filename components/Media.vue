<template>
  <div>
    <button @click="show = !show"
            class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
      Media Library
    </button>
    <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full "
         style="background-color: rgba(0,0,0,.5);" v-if="show" >

      <!-- A basic modal dialog with title, body and one button to close -->
      <div class="h-auto p-4 mx-2 text-left bg-white rounded shadow-xl md:p-6 lg:p-8 md:mx-10">
        <div class="flex mb-4">
          <div class="w-3/4">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Media library
              </h3>
              <VDrop />
              <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                           src="https://picsum.photos/600/400/?random">
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <article class="m-auto overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                     src="https://picsum.photos/600/400/?random">
              </a>
            </article>
            <div class="px-2 py-4">
              <div class="font-bold text-xl mb-2">demo-name.jpg</div>
              <label class="uppercase tracking-wide text-gray-700 text-xs font-bold align-middle">
                Title
              </label>
              <input type="text"
                     class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                     placeholder="Title"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VDrop from "@/components/controls/VDrop";
export default {
  name: "Media",
  components: {
    VDrop
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>

</style>
