<template>
  <div
    class="col-lg-4 col-6 my-3"
    @grid-clicked="$emit('grid-clicked', $event)"
  >
    <div class="bg-white rounded p-2">
      <div class="d-flex justify-content-center">
        <!-- <img
          src="~assets/images/carouselpeople1.png"
          alt=""
          class="img-fluid"
        /> -->
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
  },
}
</script>

<style lang="scss" scoped></style>
