<template>
  <div class="intro-y col-span-12 mx-2 lg:col-span-12">
    <div class="mt-6">
      <label class="block text-sm leading-5 font-medium text-gray-700">
        Cover photo
      </label>
      <div
        @dragover="dragover" @dragleave="dragleave" @drop="drop"
        :class="visualClass ? 'bg-indigo-200' : ''"
        class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <input type="file" multiple
               multiple="multiple"
               class="w-px h-px opacity-0 overflow-hidden absolute"
               @change="onChange"
               ref="file"
               accept=".pdf,.jpg,.jpeg,.png"/>
        <div class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
               v-if="fileList.length <= 0"
               viewBox="0 0 48 48">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="mt-1 text-sm text-gray-600" v-if="fileList.length <= 0">
            <button
              @click="$refs.file.click()"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
              Upload a file
            </button>
            or drag and drop
          </p>
          <p class="mt-1 text-xs text-gray-500" v-if="fileList.length <= 0">
            PNG, JPG, GIF up to 10MB
          </p>
          <div class="flex">

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5" v-for="(file, key) in fileList">
              <div class="hover:opacity-50 relative">
                <img class="block h-auto w-full rounded-lg " :ref="'image'+parseInt( key )"/>
                <button type="button" @click="remove(fileList.indexOf(file))"
                        class="absolute top-0 right-0 "
                        title="Remove file">
                  <svg-icon name="close" fill="red" width="25px" height="25px"/>
                </button>
              </div>
              {{ file.name }}
              <input type="text" placeholder="title" v-model="file.title" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" />
              <input type="text" placeholder="alt" v-model="file.alt" class="appearance-none rounded-md relative block w-full px-3 py-2 mt-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>
      </div>
      <button @click="load">Load</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "VDrop",
  data() {
    return {
      fileList: [],
      imageData: null,
      visualClass: false,
      files: [],
    }
  },
  methods: {
    ...mapActions({
      storeImage: 'image/storeImage',
    }),
    onChange() {
      this.fileList = [...this.$refs.file.files];
      this.getImagePreviews()
    },
    remove(i) {
      this.fileList.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      this.visualClass = true
    },
    dragleave() {
      this.visualClass = false
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
      this.visualClass = false
    },
    getImagePreviews() {
      for (let i = 0; i < this.fileList.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.fileList[i].name)) {
          let reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['image' + parseInt(i)][0].src = reader.result;
          }.bind(this), false);
          reader.readAsDataURL(this.fileList[i]);
        }
      }
    },
    load() {
      this.fileList.forEach((file, index) => {
        console.log(this.fileList[index])
        this.storeImage(this.fileList[index])
      })
    }
  }
}
</script>

<style scoped>

</style>
