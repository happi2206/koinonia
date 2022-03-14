<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-3 pt-lg-5 horizontalspacing">
      <div class="my-md-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph bold700 mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Courses
        </a>
      </div>

      <div v-if="isLoading">
        <b-row>
          <b-col cols="3">
            <b-skeleton-img height="70%"></b-skeleton-img>
          </b-col>

          <b-col cols="6" class="">
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
        <div>
          <header-card :courseDetail="courseDetail" />
        </div>
        <div class="card mt-3">
          <b-tabs content-class="mt-3" class="custom-tabs">
            <b-tab title="Course Overiew" active>
              <div>
                <course-overview :courseDetail="courseDetail"></course-overview>
              </div>
            </b-tab>
            <b-tab title="Instructors">
              <CourseInstructors />
            </b-tab>
            <b-tab title="Students">
              <CourseStudents />
            </b-tab>
            <b-tab title="Attendance" class="">
              <CourseAttendance />
            </b-tab>
            <b-tab title="Assignment" class="">
              <CourseAssignment />
            </b-tab>
            <b-tab title="Resources" class="">
              <CourseResources />
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var csv = require('csvtojson')
export default {
  layout: 'dashboard',
  scrollToTop: true,

  data() {
    return {
      dropdownItem: ['Delete'],
      courseDetail: {},
      schemeOfWork: [{ title: '', objective: 'objective' }],
      currentTab: 0,
      students: [],
      isLoading: false,
      // dropdownItem: [
      //   // 'Print_QR_Code',
      //   'Edit',
      //   // 'Download_As_PDF',
      //   // 'Download_As_XLS',
      //   // 'Download_As_CSV',
      // ],
      fields: [
        { key: 'Name', sortable: true },
        { key: 'Start Date', sortable: true },
        { key: 'End Date', sortable: true },
        { key: 'No of Students', sortable: true },
        {
          key: 'Progress',
          label: '',
          sortable: true,
          thStyle: { width: '200px' },
        },
        { key: 'dots', label: '', sortable: true },
      ],

      studentfields: [
        { key: 'other_name', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'gender', sortable: true },
        { key: 'phone no', sortable: true },
        { key: 'dots', label: 'Action', sortable: true },
      ],

      student: {
        other_name: '',
        surname: '',
        send_latest_updates: false,
        user_type: {
          user_type: 'flat_user',
          link_code: '',
          email: '',
          type: 'student',
        },
      },
      designations: ['Lead Instructor', 'Teacher'],

      addStudent: '',
      // event: {
      //   name: '',
      //   description: '',
      //   start_date: '',
      //   end_date: '',
      //   start_time: '',
      //   end_time: '',
      // },
    }
  },

  methods: {
    addScheme() {
      this.schemeOfWork.push({
        title: '',
        objective: '',
      })
    },

    addDescriptionField() {
      this.eventDescriptionAdded = !this.eventDescriptionAdded
    },
    onRowClicked(e) {
      console.log(e)

      this.$router.push(`courses/${this.$route.params.id}/${e.id}`)
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

        this.$bvModal.hide('editmodal')

        this.getAllCourses()
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

    // fetch data to get a course
    async get_a_course() {
      this.isLoading = true

      console.log(this.$route)

      try {
        const courses = await this.$axios.$get(
          `course-v/get-a-course?course_id=${this.$route.params.id}`
        )
        this.courseDetail = courses
        this.isLoading = false
      } catch (e) {
        console.log(e)
      }
    },

    //
    searchInstructors(e) {
      this.search_instructor = e
      this.get_all_course_instructors()
    },
  },
  mounted() {
    // this.getNextUsers()
    this.get_a_course()
  },
}
</script>

<style>
.classwidth {
  max-width: 300px !important;
}
</style>
