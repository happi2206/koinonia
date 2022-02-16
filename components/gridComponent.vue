<template>
  <div
    class="col-lg-4 col-6 my-3"
    @grid-clicked="$emit('grid-clicked', $event)"
  >
    <div class="bg-white rounded p-2">
      <div class="d-flex justify-content-center studentimgcontainer">
        <!-- <img
          src="~assets/images/carouselpeople1.png"
          alt=""
          class="img-fluid"
        /> -->
      </div>

      <div class="mt-3">
        <h4 class="text-center brown20">{{ populateData.title }}</h4>
        <p class="text-center brownparagraph">
          {{ populateData.short_description }}
        </p>

        <div
          class="
            d-flex
            flex-md-row flex-column
            justify-content-md-between justify-content-center
            align-items-center
          "
        >
          <div class="d-flex">
            <div class="mx-2">
              <span
                class="iconify"
                data-icon="akar-icons:linkedin-box-fill"
                data-width="25"
                data-height="25"
              ></span>
            </div>
            <div class="mx-2">
              <span
                class="iconify"
                data-icon="akar-icons:twitter-fill"
                data-width="25"
                data-height="25"
              ></span>
            </div>
            <div class="mx-2">
              <span
                class="iconify"
                data-icon="entypo-social:facebook"
                data-width="25"
                data-height="25"
              ></span>
            </div>
          </div>

          <div>
            <a
              href="#"
              class="brownparagraph mainbluecolor text-md-left text-center"
            >
              <u> See More</u></a
            >
          </div>
        </div>
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

  data() {
    return {
      populateData: this.data,
      test: 'test',
    }
  },
}
</script>

<style lang="scss" scoped></style>
