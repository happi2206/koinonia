<template>
  <div v-observe-visibility="get_all_course_instructors">
    <preloader :show="add_preloader" />
    <filter-component @search="SearchText" @view-by="sortInstructors">
      <template #besideFilterButton>
        <div class="ml-3">
          <button
            class="btn btn-height py-2 mainbtndashboard medbrownparagraph"
            v-b-modal.addInstructor
          >
            Add Instructor
          </button>
          <b-modal
            id="addInstructor"
            centered
            title="Add Instructor"
            hide-footer
          >
            <div class="content px-md-3 my-2">
              <div class="my-3">
                <v-select
                  :options="instructors"
                  label="firstname"
                  v-model="addInstructor"
                  placeholder="Select instructor"
                >
                  <template #option="{ surname, firstname }">
                    <span>{{ surname }} {{ firstname }}</span>
                  </template>
                </v-select>
              </div>
              <!-- <div class="my-3">
                        <label class="medbrownparagraph">Designation</label>
                        <v-select :options="designations"></v-select>
                      </div> -->
            </div>

            <div class="d-flex justify-content-center mx-5 my-3">
              <button
                class="btn btn-height mainbtndashboard"
                @click="addInstructortoCourse"
              >
                <span v-if="isbusy">
                  <b-spinner
                    label="loading"
                    variant="primary"
                    style="width: 1.5rem; height: 1.5rem"
                    class="text-center"
                  >
                  </b-spinner>
                </span>
                <span v-else>Add Instructor</span>
              </button>
            </div>
          </b-modal>
        </div>
      </template>

      <template #default="{ visualization }">
        <table-component
          :items="course_instructors"
          :fields="instructorfields"
          :busy="busy"
          @page-changed="handlePage"
          :perPage="perPage"
          :totalItems="totalItems"
          :dropdownItem="dropdownItem"
          @Remove_instructor="removeInstructorFromCourse"
          v-if="visualization === 'list'"
        />

        <div class="row" v-else>
          <student-instructors-grid
            :data="instructors"
            v-for="(instructor, index) in course_instructors"
            :key="index"
          ></student-instructors-grid>
        </div>
      </template>
    </filter-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addInstructor: '',
      isbusy: false,
      add_preloader: false,
      instructorfields: [
        { key: 'firstname', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        {
          key: 'link_code',
          sortable: true,
        },
        { key: 'dots', label: 'Action', sortable: true },
      ],

      instructors: [],
      course_instructors: [],
      dropdownItem: ['Remove_instructor'],
      busy: false,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
    }
  },
  methods: {
    sortInstructors(e) {
      this.perPage = e
      this.get_all_course_instructors()
    },

    async get_all_course_instructors() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-instructors?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const instructors = await this.$axios.$get(uri)

        this.course_instructors = instructors.items
        this.perPage = instructors.size
        // this.totalItems = instructors.total
        // this.currentPage = instructors.page
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },

    async getAllInstructors() {
      try {
        let response = await this.$axios.get(
          `instructors-v/get-all-instructors?page=${this.currentPage}&size=${this.perPage}`
        )
        this.instructors = response.data
        console.log(response.data)
      } catch (error) {}
    },
    async addInstructortoCourse() {
      try {
        this.isbusy = true
        let response = await this.$axios.$post(
          `course-v/add-instructor-to-a-course?course_id=${this.$route.params.id}&instructor_id=${this.addInstructor._id}`
        )
        console.log(response)
        this.$toast.success(response.message)
      } catch (error) {
        this.$toast.error(error.data.detail.message)
      } finally {
        this.isbusy = false
        this.get_all_course_instructors()
        this.$bvModal.hide('addInstructor')
      }
    },

    async removeInstructorFromCourse(e) {
      try {
        this.add_preloader = true
        let response = await this.$axios.$delete(
          `course-v/remove-instructor-from-a-course?course_id=${this.$route.params.id}&id=${e.id}`
        )

        this.$toast.success(response.message)
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.get_all_course_instructors()
        this.add_preloader = false
      }
    },
    handlePage(e) {
      this.currentPage = e
      this.get_all_course_instructors()
    },
    SearchText(e) {
      this.search = e
      this.get_all_course_instructors()
    },
  },
  mounted() {
    this.getAllInstructors()
  },
}
</script>

<style>
</style>