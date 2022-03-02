<template>
  <div v-observe-visibility="get_all_course_instructors">
    <filter-component @search="SearchText" @view-by="sortInstructors">
      <template #besideFilterButton>
        <div class="ml-md-5">
          <button
            class="btn py-2 mainbtndashboard medbrownparagraph"
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
                  v-model="addInstructor"
                  placeholder="Select instructor"
                  :reduce="(option) => option.id"
                >
                  <template #option="{ surname, other_name }">
                    <span>{{ surname }} {{ other_name }}</span>
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
          :fields="instructorfields"
          :busy="busy"
          @page-changed="handlePage"
          :perPage="perPage"
          :totalItems="totalItems"
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
      instructorfields: [
        { key: 'firstname', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        {
          key: 'link_code',
          sortable: true,
        },
        // { key: 'dots', label: 'Action', sortable: true },
      ],

      instructors: [],
      course_instructors: [],
      busy: false,
      search: '',
      perPage: 10,
      totalItems: 0,
      currentPage: 1,
    }
  },
  methods: {
    sortInstructors(e) {
      this.perPage = e
      this.get_all_course_instructors()
    },
    async get_all_instructors() {
      try {
        const instructors = await this.$axios.$get(
          `instructors-v/get-all-instructors?page=1&size=50`
        )

        this.instructors = instructors.items
        console.log('instructors are', this.instructors)
      } catch (e) {
        this.$toast.error(e)
      }
    },
    async get_all_course_instructors() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-instructors?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const instructors = await this.$axios.$get(uri)

        console.log('instructors are ', instructors)
        this.instructors = instructors.items
        this.perPage = instructors.size
        // this.totalItems = instructors.total
        // this.currentPage = instructors.page
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    async addInstructortoCourse() {
      try {
        await this.$axios.$post(
          `course-v/add-instructor-to-a-course?course_id=${this.$route.params.id}`,
          {
            ids: [`${this.addInstructor}`],
          }
        )

        this.$toast.success('Instructor added Successfully')
      } catch (e) {
        console.log(e)
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
    this.get_all_instructors()
  },
}
</script>

<style>
</style>