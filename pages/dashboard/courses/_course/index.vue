<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Courses
        </a>
      </div>
      <header-card :courseDetail="courseDetail" />

      <div class="card mt-3">
        <b-tabs content-class="mt-3" class="custom-tabs">
          <div class="">
            <b-tab title="Course Overiew" active>
              <div class="border-bottom py-4 px-md-5 px-3">
                <h2 class="brown24 my-3 graytext">Description</h2>
                <div
                  class="brownparagraph darktext"
                  v-html="courseDetail.long_description"
                ></div>
              </div>

              <div class="px-md-5 px-3 pb-5">
                <h2 class="brown24 my-3 graytext">Scheme of work</h2>

                <p
                  class="
                    lightgraytext
                    medbrownparagraph
                    d-flex
                    align-items-center
                  "
                >
                  <span
                    class="iconify"
                    data-icon="dashicons:info"
                    data-width="20"
                    data-height="20"
                  ></span>

                  <span class="mx-2">
                    Here’s where you add course content—like lectures, course
                    sections, assignments, and more. Click a + icon on the left
                    to get started.</span
                  >
                </p>
                <div>
                  <span
                    class="iconify"
                    data-icon="bi:plus-square-dotted"
                    data-width="20"
                    data-height="20"
                  ></span>

                  <div class="fullborder p-5 my-2"></div>
                </div></div
            ></b-tab>
            <b-tab title="Instructors" class="">
              <div class="mx-3">
                <div class="d-flex justify-content-between">
                  <filter-component> </filter-component>
                  <button class="btn py-1 mainbtndashboard medbrownparagraph">
                    Add Instructor
                  </button>
                </div>
                <table-component
                  :items="courses"
                  :fields="fields"
                  :dropdownItem="dropdownItem"
                  @row-clicked="onRowClicked"
                  @Edit="handleEdit"
                  @Delete="handleDelete"
                />
              </div>
            </b-tab>
            <b-tab title="Students" class=""> </b-tab>
            <b-tab title="Assignment" class=""> </b-tab>
            <b-tab title="Grade book" class=""> </b-tab>
            <b-tab title="Praticum" class=""> </b-tab>
            <b-tab title="Attendance" class=""> </b-tab>
          </div>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      courseDetail: {},
    }
  },

  async fetch() {
    // console.log(this.$route.params.course)
    const courses = await this.$axios.$get(
      `course-v/get-a-course?course_id=${this.$route.params.course}`
    )

    this.courseDetail = courses
    // const instructors = await this.$axios.$get(
    //   `get-all-course-instructors?course_id=${this.$route.params.course}&page=1&size=50`
    // )

    // console.log('instructors', instructors)

    console.log(courses)
  },
}
</script>

<style>
</style>