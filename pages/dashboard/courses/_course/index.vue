<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="text-xl mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Courses
        </a>
      </div>
      <header-card :courseDetail="courseDetail" />

      <!-- tabs -->
      <div class="bg-white p-5 mt-4">
        <ul
          class="
            nav nav-tabs
            flex flex-col
            md:flex-row
            flex-wrap
            list-none
            border-b-0
            pl-0
            mb-4
          "
          id="tabs-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 0"
              class="
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                text-black
                cursor-pointer
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
              "
              :class="{ active: currentTab == 0 }"
              >Course Overview</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 1"
              class="
                <!--
                nav-link
                -->
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                cursor-pointer
                border-x-0 border-t-0 border-transparent
                px-6
                py-3
                my-2
                text-black
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
              "
              :class="{ active: currentTab == 1 }"
              >Instructors</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 2"
              class="
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                cursor-pointer
                uppercase
                text-black
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
              "
              :class="{ active: currentTab == 2 }"
              >Students</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 3"
              class="
                nav-link
                pointer-events-none
                block
                text-black
                font-medium
                text-xs
                leading-tight
                cursor-pointer
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
              "
              :class="{ active: currentTab == 3 }"
              >Attendance</a
            >
          </li>
        </ul>
        <div>
          <div
            v-show="currentTab == 0"
            :class="{ 'fade show': currentTab == 0 }"
          >
            <course-overview :courseDetail="courseDetail"></course-overview>
          </div>
          <div
            v-show="currentTab == 1"
            :class="{ 'fade show': currentTab == 1 }"
          >
            <filter-component>
              <template #besideFilterButton>
                <div class="ml-5">
                  <button
                    class="btn py-2 mainbtndashboard medbrownparagraph"
                    v-b-modal.addInstructor
                  >
                    Add Instructor
                  </button>
                  <b-modal id="addInstructor" centered hide-header hide-footer>
                    <h2 class="brownparagraph bold700 text-center my-3">
                      Add Instructor
                    </h2>

                    <div class="content px-md-5 my-2">
                      <div class="my-3">
                        <label class="medbrownparagraph">Instructor Name</label>
                        <v-select
                          :options="instructors"
                          v-model="addInstructor"
                          label="other_name"
                          :reduce="(option) => option.id"
                        ></v-select>
                      </div>
                      <div class="my-3">
                        <label class="medbrownparagraph">Designation</label>
                        <v-select :options="designations"></v-select>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-5 my-3">
                      <button
                        class="btn mainbtndashboard"
                        @click="addInstructortoCourse"
                      >
                        Add Instructor
                      </button>
                    </div>
                  </b-modal>
                </div>
              </template>
              <template #default="{ visualization }">
                <table-component
                  :items="instructors"
                  v-if="visualization === 'list'"
                  :fields="fields"
                />

                <div class="row" v-else>
                  <grid-component
                    :data="instructors"
                    v-for="(instructor, index) in instructors"
                    :key="index"
                  ></grid-component>
                </div>
              </template>
            </filter-component>
          </div>
          <div
            v-show="currentTab == 2"
            :class="{ 'fade show': currentTab == 2 }"
          >
            <filter-component>
              <template #default="{ visualization }">
                <table-component
                  :items="courses"
                  v-if="visualization === 'list'"
                  :fields="fields"
                  :dropdownItem="dropdownItem"
                  @row-clicked="onRowClicked"
                  @Edit="handleEdit"
                  @Delete="handleDelete"
                />

                <div class="row" v-else>
                  <grid-component
                    :data="courses"
                    v-for="(courses, index) in courses"
                    :key="index"
                    @grid-clicked="onGridClicked"
                  ></grid-component>
                </div>
              </template>
            </filter-component>
          </div>
          <div
            v-show="currentTab == 3"
            :class="{ 'fade show': currentTab == 3 }"
          >
            Tab 4 content
          </div>
        </div>
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
      currentTab: 0,
      instructors: [],
      designations: ['Lead Instructor', 'Teacher'],
      addInstructor: '',
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

      // console.log('here', instructors.items)

      this.instructors.push(...instructors.items)
    } catch (e) {
      console.log(e)
    }

    // console.log('instructors', instructors)

    console.log(courses)
  },

  methods: {
    async addInstructortoCourse() {
      try {
        await this.$axios.$post(
          `course-v/add-instructor-to-a-course?course_id=${this.$route.params.course}`,
          {
            ids: [`${this.addInstructor}`],
          }
        )

        this.$toast.success('Instructor added Successfully')
      } catch (e) {
        console.log(e)
      }
    },
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