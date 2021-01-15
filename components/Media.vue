<template>
  <div>
    <button @click="show = !show"
            class=" px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-gray-600 focus:outline-none focus:text-white focus:bg-gray-700">
      Media Library
    </button>
    <div class="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full "
         style="background-color: rgba(0,0,0,.5);" v-if="show">

      <!-- A basic modal dialog with title, body and one button to close -->
      <div class="h-auto p-4 mx-2 relative text-left w-3/4 bg-white rounded shadow-xl md:p-6 lg:p-8 md:mx-10">
        <button @click="show = !show" class="absolute top-0 right-0 p-3 bg-transparent"><svg-icon width="25px" height="25px" name="close"/></button>
        <div class="flex mb-4">
          <div class="w-3/4">
            <div class="mt-3 text-center mr-8 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Media library
              </h3>
              <VDrop/>
              <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 md:-mx-2">
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5" v-for="(image, i) in images" :key="i">
                  <article class="overflow-hidden rounded-lg shadow-lg relative">
                    <img alt="Placeholder" class="block h-auto w-full rounded-lg"
                         :src="image.slug"
                         @click="SET_ITEM_IMAGE(image)">
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/4" v-if="image.slug">
            <article class="m-auto overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block  object-cover h-48 w-full  rounded-lg"
                     :src="image.slug">
              </a>
            </article>
            <div class="px-2 py-4">
              <label class="font-bold text-xl mb-2">
                Title
              </label>
              <input type="text"
                     v-model="image.title"
                     class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                     placeholder="Title"/>
              <label class="font-bold text-xl mb-2">
                Alt
              </label>
              <input type="text"
                     v-model="image.alt"
                     class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                     placeholder="alt"/>
              <button
                class="inline-flex items-center justify-center mt-2 px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <svg-icon name="cloud-upload-outline" class="mr-4" width="20px" height="20px"/>
                Update
              </button>
              <button
                @click="attach"
                class="inline-flex items-center w-100 justify-center mt-2 px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <svg-icon name="attach" class="mr-4" width="20px" height="20px"/>
                Attach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VDrop from "@/components/controls/VDrop";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "Media",
  props: {
    target: {},
    multiple: {
      type: Boolean,
      default: false
    },
    gallery: {
      type: Array
    },
    portfolioId: {}
  },
  components: {
    VDrop
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters({
      images: 'image/listImages',
      image: 'image/itemImage'
    })
  },
  methods: {
    ...mapActions({
      getImages: 'image/getImages',
      attachGallery: 'portfolio/attachGallery'
    }),
    ...mapMutations('image', ['SET_ITEM_IMAGE', 'ADD_SELECT_IMAGES']),
    async attach() {
      if (this.multiple == false) {
        this.$emit('update:target', this.image)
        this.show = !this.show
      } else {
        try {
          await this.$emit('update:gallery', this.gallery.concat(this.image))
          await this.attachGallery(this.image.id)
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
  watch: {
    show() {
      if(this.show) {
        this.getImages()
      }
    }
  },

}
</script>

<style scoped>

</style>
