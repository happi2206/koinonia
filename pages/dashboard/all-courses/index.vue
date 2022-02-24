<template>
  <div>
    <div class="mt-5 horizontalspacing pt-3">
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
          <preloader :show="add_preloader" />
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
                  quality standards to be accepted. Important guidelines:
                  750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                  image.
                </p>
              </div>

              <div class="my-4 row">
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    col-md-5 col-12
                  "
                >
                  <img
                    :src="courseData.feature_image"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div
                  class="flex gap-3 justify-content-center my-4 col-md-7 col-12"
                >
                  <upload-file v-model="courseData.feature_image" />
                </div>
              </div>
              <div class="d-flex justify-content-center text-center mt-4">
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
            </form>
          </div>
        </b-modal>

        <!-- edit course -->
        <b-modal id="editmodal" title="Edit Course" hide-footer>
          <div class="modacontent">
            <form class="modabody" @submit.prevent="editCourse">
              <!-- <div class="my-4">
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
              </div> -->
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
                  <div class="col-md-6 my-2 my-md-0">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >Start Date
                    </label>
                    <input
                      type="date"
                      v-model="currentCourse.start_date"
                      required
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                  <div class="col-md-6 my-2 my-md-0">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Date
                    </label>
                    <input
                      type="date"
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
                  >Course Long Description
                </label>
                <VueEditor v-model="currentCourse.long_description" required>
                </VueEditor>
              </div>

              <div class="my-2">
                <p class="medbrownparagraph lightgraytext">
                  Upload your course image here. It must meet our course image
                  quality standards to be accepted. Important guidelines:
                  750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                  image.
                </p>
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
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
            <!-- 
            <div class="my-4 row">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  col-md-4 col-12
                "
              >
                <img
                  :src="currentCourse.feature_image"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div
                class="flex gap-3 justify-content-center my-4 col-md-8 col-12"
              >
                <upload-file v-model="currentCourse.feature_image" />
              </div>
            </div> -->
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
              @click.prevent="setCourseParams()"
              class="
                nav-link
                medbrownparagraph
                leading-tight
                text-black
                cursor-pointer
                my-2
              "
              :class="{ active: false }"
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
              class="
                nav-link
                medbrownparagraph
                leading-tight
                cursor-pointer
                my-2
              "
              :class="{ active: on_going }"
              >On Going</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="setCourseParams('archived')"
              class="
                nav-link
                medbrownparagraph
                leading-tight
                cursor-pointer
                my-2
              "
              :class="{ active: archived }"
              >Archived</a
            >
          </li>
        </ul>
        <div>
          <div :class="{ 'fade show': currentTab == 0 }">
            <filter-component @search="SearchText">
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
                  @page-changed="handlePage"
                  :perPage="perPage"
                  :totalItems="totalItems"
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
  computed: {},
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
        { key: '', sortable: false },
        { key: 'title', label: 'Name', sortable: true },
        { key: 'course_code', sortable: true },
        {
          key: 'no_of_students',
          label: 'No of Stud',

          sortable: true,
        },
        { key: 'start_date', sortable: true },
        { key: 'end_date', sortable: true },
        { key: 'dots', label: 'Action', sortable: false },
      ],
      status: true,
      on_going: false,
      open: false,
      archived: false,
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
      status: '',
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
      add_preloader: false,
    }
  },

  methods: {
    handlePage(e) {
      this.currentPage = e
      this.getAllCourses()
    },
    onRowClicked(e) {
      this.$router.push(`courses/${e.id}`)
    },
    onGridClicked(e) {
      this.$router.push(`courses/${e.id}`)
    },
    async addCourses() {
      try {
        this.add_preloader = true
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
        this.add_preloader = false
      }
    },
    async getAllCourses() {
      this.busy = true
      let uri = `course-v/get-all-course?page=${this.currentPage}&size=${this.perPage}`
      if (this.search) {
        uri = uri + `&search=${this.search}`
      }
      if (this.status) {
        uri = uri + `&status=${this.status}`
      }
      const courses = await this.$axios.$get(uri)
      courses.items = courses.items.reverse()
      this.courses = courses.items.map((e, i) => ({
        serial: i,
        check: '',
        dots: '',
        ...e,
      }))
      this.perPage = courses.size
      this.totalItems = courses.total
      this.currentPage = courses.page
      this.busy = false
    },
    // setfilter
    setCourseParams(payload) {
      // let params = ''

      // if (payload) {
      //   params = `&status=${payload}`
      //   ;(this.status = false),
      //     (this.on_going = false),
      //     (this.open = false),
      //     (this.archived = false),
      //     (this[payload] = !this[payload])

      //   console.log('payload is', payload)
      // }
      this.status = payload

      this.getAllCourses()
    },
    // search textsection
    SearchText(e) {
      this.search = e
      this.getAllCourses()
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
      console.log('do image here', e)
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
        this.getAllCourses()
        this.$bvModal.hide('editmodal')
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