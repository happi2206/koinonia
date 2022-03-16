<template>
  <div class="headerheight mb-3">
    <div
      v-if="Object.keys(courseDetail)"
      class="bg-white rounded pl-5 pt-3 pb-3 pr-3"
    >
      <div class="row">
        <div class="col-md-3 px-0 pl-md-3">
          <div class="rounded">
            <img
              :src="courseDetail.feature_image"
              alt=""
              class="img-fluid rounded customsizing"
            />
          </div>
        </div>
        <!-- <b-avatar :size="150" rounded="lg" :src="courseDetail.feature_image"></b-avatar> -->

        <div class="col-md-9 pl-4">
          <div
            class="
              border-bottom
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <h2 class="largebrownparagraph py-3 bold700 text-capitalize mb-0">
              {{ courseDetail.title }}
            </h2>
          </div>
          <div class="my-md-2 my-0 p-1 row">
            <div class="col-lg-4 col-6">
              <p class="my-md-2 my-0 p-1 medbrownparagraph">
                <span class="lightgraytext"> Course code:</span>
                {{ courseDetail.course_code }}
              </p>
              <p class="my-md-2 my-0 p-1 medbrownparagraph">
                <span class="lightgraytext"> Start Date:</span>

                {{ courseDetail.start_date | DateFormat }}
              </p>
            </div>
            <div class="col-lg-4 col-6">
              <p class="my-md-2 my-0 p-1 medbrownparagraph">
                <span class="lightgraytext"> No of student:</span>
                {{ courseDetail.no_of_students }}
              </p>
              <p class="my-md-2 my-0 p-1 medbrownparagraph">
                <span class="lightgraytext"> End Date:</span>
                {{ courseDetail.end_date | DateFormat }}
              </p>
            </div>
            <div class="col-lg-12 col-6">
              <p class="my-md-2 my-0 p-1 medbrownparagraph">
                {{ courseDetail.short_description | shortTextFilter }}
              </p>
            </div>
          </div>

          <!-- <div>
          <p class="medbrownparagraph">
            {{ courseDetail.short_description }}
          </p>
        </div> -->
        </div>
      </div>
    </div>
    <div v-else>no content</div>
  </div>
</template>

<script>
export default {
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
/* .headerheight {
  height: 200px;
} */
</style>