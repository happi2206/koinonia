<template>
  <div
    class="col-lg-4 col-6 my-3"
    @grid-clicked="$emit('grid-clicked', $event)"
  >
    <div class="bg-white rounded p-2">
      <div class="d-flex justify-content-center imgheight">
        <img :src="data.feature_image" alt="" class="img-fluid" />
      </div>

      <div class="mt-3">
        <h4 class="text-center brown20">{{ data.title }}</h4>
        <p class="text-center brownparagraph">
          {{ data.short_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    hambugmenu: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: null,
    },
  },

  // data() {
  //   return {
  //     populateData: this.data,
  //     test: 'test',
  //   }
  // },
}
</script>

<style  scoped>
.imgheight {
  height: 200px;
  object-fit: cover;
}
</style>
