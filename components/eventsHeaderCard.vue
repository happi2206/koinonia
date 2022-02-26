<template>
  <div>
    <div v-if="isLoading">
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <div class="bg-white rounded p-3 my-2">
        <div
          class="
            border-bottom
            d-flex
            align-items-center
            justify-content-between
          "
        >
          <h2 class="brown24 py-3 bold700 text-capitalize mb-0">
            {{ eventDetail.name }}
          </h2>
        </div>
        <div class="my-2 d-flex flex-md-row flex-column">
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Start Date:</span>
            <span class=""> {{ eventDetail.start_date | DateFormat }} </span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> End Date:</span>
            <span class=""> </span>
            {{ eventDetail.end_date | DateFormat }}
          </p>
          <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> No in class:</span>
            <span class=""> {{ present + absent }}</span>
          </p>
          <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Present: {{ present }}</span>
            <span class=""> </span>
          </p>
          <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Absent: {{ absent }}</span>
            <span class=""> </span>
          </p>
        </div>
      </div>
      <div class="bg-white rounded p-md-3 my-2">
        <filter-component @search="SearchText">
          <template #default="{ visualization }">
            <table-component
              :busy="busy"
              :items="studentArray"
              v-if="visualization === 'list'"
              :dropdownItem="dropdownItem"
              :fields="fields"
              @page-changed="handlePage"
              :perPage="perPage"
              :totalItems="totalItems"
            >
              <template #status="{ data }">
                <b-form-checkbox
                  :button-variant="'success'"
                  v-model="data.value"
                  @change="updateAttendance(data.item.student.id, $event)"
                  size="lg"
                  switch
                ></b-form-checkbox>
              </template>
            </table-component>
          </template>
        </filter-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventDetail: {
      type: Object,
      default: () => {},
    },
    courseid: {
      type: String,
    },
    eventid: {
      type: String,
    },
  },

  data() {
    return {
      busy: false,
      students: [],
      studentelement: [],
      studentsInCourse: {},
      studentsTable: [],
      studentArray: [],
      isLoading: false,
      dropdownItem: ['Edit Event', 'Delete Event'],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'student.other_name', label: 'First Name', sortable: true },
        { key: 'student.surname', label: 'Surname', sortable: true },
        {
          key: 'student.registration_number',
          label: 'Registration Number',
          sortable: true,
        },
        { key: 'check_in', label: 'Date/Time in', sortable: true },
        { key: 'by', label: 'Check in Method', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
      ],
      present: 0,
      absent: 0,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
    }
  },

  async fetch() {
    // this.isLoading = true
    try {
      this.busy = true
      // this.isLoading = true
      let uri = `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=${this.currentPage}&size=${this.perPage}`

      if (this.search) {
        uri = uri + `&search=${this.search}`
      }
      const student = await this.$axios.$get(uri)
      this.absent = student.total_number_of_student - student.students_present
      this.present = student.students_present
      this.isLoading = false
      this.studentArray = student.response.items
        this.totalItems = student.response.total
    } catch (e) {
      this.$toast.error(e)
    } finally {
      this.busy = false
    }
  },
  methods: {
    async getChecked() {
      try {
        let uri = `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const student = await this.$axios.$get(uri)
        this.absent = student.total_number_of_student - student.students_present
      this.present = student.students_present
      this.isLoading = false
      this.studentArray = student.response.items
        this.totalItems = student.response.total
      } catch (e) {
        console.log(e)
      } finally {
        this.busy = false
      }
    },
    async updateAttendance(student, status) {
      let url = status
        ? 'course-v/mark-attendance-event'
        : 'course-v/un-mark-attendance-event'
      try {
        await this.$axios.$patch(
          `${url}?student_id=${student}&event_id=${this.$route.params.eventclicked}&course_id=${this.$route.params.event}`
        )
        this.getChecked()
      } catch (error) {
        console.log(error)
      }
    },
    handlePage(e) {
      this.currentPage = e
      this.$fetch()
    },
    SearchText(e) {
      this.search = e
      this.$fetch()
    },
  },
  computed: {},

  mounted() {},
}
</script>

<style></style>
