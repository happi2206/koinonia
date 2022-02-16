<template>
  <div class="mt-5 horizontalspacing pt-md-5">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph mb-0">Courses</h2>
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
          <form class="modabody" @submit.prevent="addCourse">
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Code
              </label>
              <input
                type="text"
                v-model="courseData.course_code"
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
                v-model="courseData.title"
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
                v-model="courseData.short_description"
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
                v-model="courseData.description"
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
                    type="datetime-local"
                    v-model="courseData.start_date"
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
                    type="datetime-local"
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
                >Course Subtitle
              </label>
              <VueEditor v-model="courseData.long_description" required>
              </VueEditor>
            </div>

            <div class="my-2">
              <p class="medbrownparagraph lightgraytext">
                Upload your course image here. It must meet our course image
                quality standards to be accepted. Important guidelines: 750x422
                pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
              </p>
            </div>

            <pre>{{ imagedetail }}</pre>
            <div class="my-4 d-flex justify-content-end">
              <div class="upload-btn-wrapper">
                <button class="upbtn">Upload file</button>

                <input
                  type="file"
                  name="myfile"
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

      <!-- edit course -->
      <b-modal id="editmodal" title="Edit Courses" hide-footer>
        <div class="modacontent">
          <form class="modabody" @submit.prevent="editCourse">
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Course Code
              </label>

              <pre>{{ currentCourse }}</pre>
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

            <pre>{{ imagedetail }}</pre>
            <div class="my-4 d-flex justify-content-end">
              <div class="upload-btn-wrapper">
                <button class="upbtn">Upload file</button>

                <input
                  type="file"
                  name="myfile"
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

    <div class="card bg-white rounded pt-4">
      <b-tabs content-class="mt-3" class="custom-tabs">
        <b-tab title="All Status" active>
          <div class="mx-3">
            <filter-component> </filter-component>

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
        <b-tab title="Open" class=""><p>I'm the second tab</p></b-tab>
        <b-tab title="On-going">
          <div class="mx-3">
            <filter-component> </filter-component>

            <table-component
              :items="courses"
              :fields="fields"
              :dropdownItem="dropdownItem"
              @Edit="handleEdit"
              @Delete="handleDelete"
            />
          </div>
        </b-tab>
        <b-tab title="Archived">
          <div class="mx-3">
            <filter-component> </filter-component>

            <table-component
              :items="courses"
              :fields="fields"
              :dropdownItem="dropdownItem"
              @Edit="handleEdit"
              @Delete="handleDelete"
            />
          </div>
        </b-tab>
      </b-tabs>
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
      },
      fields: [
        { key: 'check', label: '', sortable: true },
        { key: 'title', label: 'Name', sortable: true },
        { key: 'course_code', sortable: true },
        { key: 'start_date', sortable: true },
        { key: 'end_date', sortable: true },
        { key: 'dots', label: '', sortable: true },
      ],
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
    }
  },

  async fetch() {
    let uri = (this.user.is_administrator)?"course-v/get-all-course?page=1&size=50":"course-v/get-current-instructor-courses?page=1&size=50"
    const courses = await this.$axios.$get(
      uri
    )

    this.courses = courses.items.map((e, i) => ({
      serial: i,
      check: '',
      dots: '',
      ...e,
    }))

    console.log(this.courses)
  },

  methods: {
    onRowClicked(e) {
      console.log(e)
      this.$router.push(`courses/${e.id}`)
    },
    async addCourse() {
      try {
        let start_date = new Date(this.courseData.start_date)
        this.courseData.start_date = start_date.toISOString()

        let end_date = new Date(this.courseData.end_date)
        this.courseData.end_date = end_date.toISOString()

        const response = await this.$axios.$post(
          `course-v/add-course`,
          this.courseData
        )

        console.log(response)
      } catch (e) {
        console.log(e)
      }
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
        this.$fetch()
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed:{
     ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      token: 'auth/token',
    }),
  }
}
</script>

<style>
</style>