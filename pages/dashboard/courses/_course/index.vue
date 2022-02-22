<template>
  <div class="bodylightgray">
    <div class="mt-md-5 mt-4 pt-md-5 horizontalspacing">
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

      <!-- <div >
        <PuSkeleton :count="3"> </PuSkeleton>
      </div> -->

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
          <b-tab
            title="Instructors"
          >
            <CourseInstructors  />
          </b-tab>
          <b-tab title="Students" >
            <CourseStudents  />
          </b-tab>
          <b-tab title="Attendance" class="">
            <CourseAttendance  />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { json2csv, csv2json } from 'json-2-csv'
var csv = require('csvtojson')
export default {
  layout: 'dashboard',

  data() {
    return {
      dropdownItem: ['Delete'],
      courseDetail: {},
      schemeOfWork: [{ title: '', objective: 'objective' }],
      currentTab: 0,
      students: [],
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

      this.$router.push(`courses/${this.$route.params.course}/${e.id}`)
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
    async get_a_course() {
      try {
        const courses = await this.$axios.$get(
          `course-v/get-a-course?course_id=${this.$route.params.course}`
        )
        this.courseDetail = courses
      } catch (e) {
        console.log(e)
      }
    },
   
   
    searchInstructors(e) {
      this.search_instructor = e
      this.get_all_course_instructors()
    },
  },
  mounted() {
    this.get_a_course()
  },
}
</script>

<style>
.classwidth {
  max-width: 300px !important;
}
</style>
