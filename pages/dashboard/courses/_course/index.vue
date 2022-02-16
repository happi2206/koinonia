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
                  <b-icon icon="plus-square" @click="addScheme"></b-icon>

                  <div class="fullborder p-5 my-2"></div>
                </div></div
            ></b-tab>
            <b-tab title="Instructors" class="">
              <div class="mx-3">
                <filter-component>
                  <template #besideFilterButton>
                    <div>
                      <button
                        class="btn py-3 mainbtndashboard medbrownparagraph"
                        v-b-modal.addinstructor
                      >
                        Add Instructor
                      </button>

                      <b-modal
                        id="addinstructor"
                        centered
                        hide-header
                        hide-footer
                      >
                        <h2 class="brownparagraph bold700 text-center my-3">
                          Add Instructor
                        </h2>
                        <div class="content px-5">
                          <v-select :options="options"></v-select>
                        </div>

                        <div class="d-flex justify-content-center mx-5 my-3">
                          <button class="btn mainbtndashboard">
                            Add Instructor
                          </button>
                        </div>
                      </b-modal>
                    </div>
                  </template>
                </filter-component>

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
      schemeOfWork: [{ title: '', objective: 'objective' }],
      options: ['foo', 'bar', 'baz'],
    }
  },

  async fetch() {
    // console.log(this.$route.params.course)

    try {
      const courses = await this.$axios.$get(
        `course-v/get-a-course?course_id=${this.$route.params.course}`
      )
      this.courseDetail = courses
      console.log(this.courseDetail)
    } catch (e) {
      console.log(e)
    }

    try {
      const instructors = await this.$axios.$get(
        `instructors-v/get-all-instructors?page=1&size=50`
      )
      console.log(instructors)
    } catch (e) {
      console.log(e)
    }

    // console.log('instructors', instructors)

    console.log(courses)
  },

  methods: {
    addScheme() {
      this.schemeOfWork.push({
        title: '',
        objective: '',
      })
    },
  },
}
</script>

<style>
</style>