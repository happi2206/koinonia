<template>
  <div v-if="Object.keys(courseDetail)" class="bg-white rounded py-3">
    <div class="grid grid-cols-5 gap-4">
      <div
        class="
          col-span-1
          courseplaceholder
          d-flex
          align-items-center
          px-3
          justify-content-center
        "
      >
<div class="w-64 h-48 border rounded">
 <img :src="courseDetail.feature_image" alt="" class="w-full h-full" />
</div>
        <!-- <b-avatar :size="150" rounded="lg" :src="courseDetail.feature_image"></b-avatar> -->
       
      </div>

      <div class="col-span-4">
        <div
          class="
            border-bottom
            d-flex
            align-items-center
            justify-content-between
          "
        >
          <h2 class="text-xl py-3 bold700 text-capitalize mb-0">
            {{ courseDetail.title }}
          </h2>
          <!-- <div class="dropdown account-dropdown">
            <a
              href="#"
              class="
                dropdown-toggle
                d-flex
                align-items-center
                medbrownparagraph
                text-dark
                mb-0
              "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span> Activity</span>
              <span
                class="iconify"
                data-icon="akar-icons:chevron-down"
                data-width="15"
                data-height="15"
              ></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item medbrownparagraph" href="#">Option 1</a>
              <a class="dropdown-item medbrownparagraph" href="#">Option 2</a>
            </div>
          </div> -->
        </div>
        <div class="my-2 row">
          <div class="col-lg-4 col-12">
            <p class="my-2 text-md">
              <span class="lightgraytext"> Class code:</span>
              {{ courseDetail.course_code }}
            </p>
            <p class="my-2 text-md">
              <span class="lightgraytext"> Start Date:</span>

              {{ courseDetail.start_date | DateFormat }}
            </p>
          </div>
          <div class="col-lg-4 col-6">
            <p class="my-2 text-md">
              <span class="lightgraytext"> No of student:</span>
              {{ courseDetail.no_of_students}}
            </p>
            <p class="my-2 text-md">
              <span class="lightgraytext"> End Date:</span>
              {{ courseDetail.end_date | DateFormat }}
            </p>
          </div>
          <div class="col-lg-12 col-12">
            
            <p class="my-2 text-md">
              {{ courseDetail.short_description }}
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

<style>
</style>