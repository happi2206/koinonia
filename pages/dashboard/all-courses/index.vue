<template>
  <div class="mt-lg-5 horizontalspacing pt-lg-5">
    <div class="flex items-center pt-5 justify-between mb-4">
      <h2 class="largebrownparagraph bold700 mb-0">All Courses</h2>
      <button
        class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
        data-toggle="modal"
        data-target="#addCourse"
        v-b-modal.addcourse
      >
        Add Course
      </button>

      <!-- add course -->
      <b-modal id="addcourse" title="Add Course" hide-footer>
        <div class="modacontent">
          <form class="modabody px-4" @submit.prevent="addCourses">
            <div class="my-4">
              <label class="d-block medbrownparagraph graytext"
                >Course Name
              </label>
              <input
                type="text"
                v-model="courseData.title"
                required
                placeholder="e.g Alchemy"
                class="forminputs"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Subtitle
              </label>
              <input
                type="text"
                v-model="courseData.short_description"
                required
                placeholder="e.g Alchemy"
                class="forminputs"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Description
              </label>
              <input
                type="text"
                v-model="courseData.description"
                required
                placeholder="e.g Alchemy"
                class="forminputs"
              />
            </div>
            <div class="my-4">
              <div class="row">
                <div class="col-md-6">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Start Date
                  </label>
                  <input
                    type="date"
                    v-model="courseData.start_date"
                    required
                    placeholder="e.g DD/MM/YYYY"
                    class="forminputs text-dark"
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >End Date
                  </label>
                  <input
                    type="date"
                    v-model="courseData.end_date"
                    required
                    placeholder="e.g DD/MM/YYYY"
                    class="forminputs text-dark"
                  />
                </div>
              </div>
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Description
              </label>
              <VueEditor v-model="courseData.long_description" required>
              </VueEditor>
            </div>

            <div class="my-4">
              <p class="medbrownparagraph lightgraytext">
                Upload your course image here. It must meet our course image
                quality standards to be accepted. Important guidelines: 750x422
                pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
              </p>
            </div>

            <div class="my-4">
              <div class="flex gap-3 justify-content-center">
                <upload-file v-model="courseData.feature_image" />
                <input
                  class="
                    btn
                    px-md-4 px-3
                    py-2
                    mainbtndashboard
                    medbrownparagraph
                  "
                  type="submit"
                  value="Create Course"
                />
              </div>
            </div>
          </form>
        </div>
      </b-modal>

      <!-- edit course -->
      <b-modal id="editmodal" title="Edit Courses" hide-footer>
        <div class="modacontent">
          <form class="modabody" @submit.prevent="editCourse">
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Code
              </label>

              <input
                type="text"
                v-model="currentCourse.course_code"
                required
                placeholder="e.g ECO23"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Name
              </label>
              <input
                type="text"
                v-model="currentCourse.title"
                required
                placeholder="e.g Alchemy"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Subtitle
              </label>
              <input
                type="text"
                v-model="currentCourse.short_description"
                required
                placeholder="e.g Alchemy"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Description
              </label>
              <input
                type="text"
                v-model="currentCourse.description"
                required
                placeholder="e.g Alchemy"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-4">
              <div class="row">
                <div class="col-md-6">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Start Date
                  </label>
                  <input
                    type="text"
                    v-model="currentCourse.start_date"
                    required
                    placeholder="e.g DD/MM/YYYY"
                    class="forminputs text-dark"
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Start Date
                  </label>
                  <input
                    type="text"
                    v-model="currentCourse.end_date"
                    required
                    placeholder="e.g DD/MM/YYYY"
                    class="forminputs text-dark"
                  />
                </div>
              </div>
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Subtitle
              </label>
              <VueEditor v-model="currentCourse.long_description" required>
              </VueEditor>
            </div>

            <div class="my-2">
              <p class="medbrownparagraph lightgraytext">
                Upload your course image here. It must meet our course image
                quality standards to be accepted. Important guidelines: 750x422
                pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
              </p>
            </div>

            <div class="my-4 d-flex justify-content-end">
              <div class="upload-btn-wrapper">
                <button class="upbtn">Upload file</button>

                <input
                  type="file"
                  multiple
                  accept="image/png, image/gif, image/jpeg"
                  ref="fileup"
                  @change="handlefileupload($event)"
                />
                <!-- <input type="file" name="myfile" /> -->
              </div>
            </div>
            <div class="my-4">
              <div class="d-flex justify-content-center">
                <button
                  class="
                    btn
                    px-md-4 px-3
                    py-2
                    mainbtndashboard
                    medbrownparagraph
                  "
                >
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </b-modal>
    </div>

    <div class="bg-white p-md-5">
      <ul
        class="
          nav
          custom-tabs
          nav-tabs
          flex
          medbrownparagraph
          list-none
          pl-0
          mb-4
        "
        id="tabs-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            @click.prevent="setCourseParams('status')"
            class="
              nav-link
              medbrownparagraph
              leading-tight
              text-black
              cursor-pointer
              my-2
            "
            :class="{ active: status }"
            >All Status</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            @click.prevent="setCourseParams('open')"
            class="
              nav-link
              medbrownparagraph
              leading-tight
              cursor-pointer
              my-2
              text-black
            "
            :class="{ active: open }"
            >Open</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            @click.prevent="setCourseParams('on_going')"
            class="nav-link medbrownparagraph leading-tight cursor-pointer my-2"
            :class="{ active: on_going }"
            >On Going</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            @click.prevent="setCourseParams('archived')"
            class="
              nav-link
              disabled
              pointer-events-none
              text-black
              medbrownparagraph
              leading-tight
              cursor-pointer
              my-2
            "
            >Archived</a
          >
        </li>
      </ul>
      <div>
        <div :class="{ 'fade show': currentTab == 0 }">
          <filter-component>
            <template #default="{ visualization }">
              <table-component
                :items="courses"
                v-if="visualization === 'list'"
                :busy="busy"
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
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { mapGetters } from 'vuex'
import { VueEditor, Quill } from 'vue2-editor'

export default {
  layout: 'dashboard',
  middleware: 'auth',
  components: { VueEditor },
  data() {
    return {
      busy: false,
      dropdownItem: ['Edit', 'Delete'],
      currentCourse: {
        title: '',
        short_description: '',
        long_description: '',
        description: '',
        course_code: '',
        feature_image: '',
        start_date: '',
        end_date: '',
        feature_image: '',
      },
      active: true,
      fields: [
        { key: 'check', label: '', sortable: true },
        { key: 'title', label: 'Name', sortable: true },
        { key: 'course_code', sortable: true },
        { key: 'no_of_students', sortable: true },
        { key: 'start_date', sortable: true },
        { key: 'end_date', sortable: true },
        { key: 'dots', label: '', sortable: true },
      ],
      status: true,
      on_going: false,
      open: false,
      courseData: {
        title: '',
        short_description: '',
        long_description: '',
        description: '',
        course_code: '',
        feature_image: '',
        start_date: '',
        end_date: '',
      },
      imagedetail: [],
      courses: [],
      currentTab: 0,
    }
  },

  methods: {
    onRowClicked(e) {
      console.log(e)
      this.$router.push(`courses/${e.id}`)
    },
    onGridClicked(e) {
      console.log(e)
      this.$router.push(`courses/${e.id}`)
    },
    async addCourses() {
      try {
        this.$nuxt.$loading.start()
        const response = await this.$axios.$post(
          `course-v/add-course`,
          this.courseData
        )

        if (response.message) {
          this.getAllCourses()
          this.$bvModal.hide('addcourse')
          Object.keys(this.courseData).forEach((i) => {
            this.courseData[i] = ''
          })
        }
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    async getAllCourses(payload = null) {
      this.busy = true
      let uri = 'course-v/get-all-course?page=1&size=50'
      if (payload) {
        uri = uri + payload
      }
      const courses = await this.$axios.$get(uri)
      courses.items = courses.items.reverse()
      this.courses = courses.items.map((e, i) => ({
        serial: i,
        check: '',
        dots: '',
        ...e,
      }))
      this.busy = false
    },
    // setfilter
    setCourseParams(payload) {
      let params = ''

      if (payload) {
        params = `&status=${payload}`
        ;(this.status = false),
          (this.on_going = false),
          (this.open = false),
          (this[payload] = !this[payload])

        console.log('payload is', payload)
      }

      this.getAllCourses(params)
    },
    handlefileupload(event) {
      const filedetail = []
      filedetail.push(event.target.files)

      const temp2 = []
      for (const file of filedetail) {
        temp2.push(...file)
        console.log(temp2)
      }

      temp2.forEach((e) =>
        this.imagedetail.push({
          filename: e.name,
          size: e.size,
          type: e.type,
        })
      )
    },

    handleEdit(e) {
      const tds = e
      console.log(e)
      this.currentCourse = tds
      console.log(this.currentCourse)
      this.$bvModal.show('editmodal')
    },

    async editCourse() {
      try {
        const forSubmit = this.currentCourse
        delete forSubmit.check
        delete forSubmit.serial
        delete forSubmit.dots

        await this.$axios.$patch(
          `course-v/edit-course?course_id=${forSubmit.id}`,
          forSubmit
        )
        this.$fetch()
        console.log(e)
      } catch (e) {
        console.error(e)
      }
    },
    async handleDelete(e) {
      try {
        await this.$axios.delete(`course-v/delete-course?course_id=${e.id}`)
        this.getAllCourses()
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      token: 'auth/token',
    }),
  },
  mounted() {
    this.getAllCourses()
  },
}
</script>

<style>
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border-radius: none;
}
</style>