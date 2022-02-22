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
            @click="get_all_course_instructors"
            class=""
          >
            <CourseInstructors :course_instructors="course_instructors" />
          </b-tab>
          <b-tab title="Students" @click="get_all_course_students" class="">
            <CourseStudents :students="students" />
          </b-tab>
          <b-tab title="Attendance" class="">
            <CourseAttendance :events="events" />
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
      instructors: [],
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
      instructorfields: [
        { key: 'other_name', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },

        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        {
          key: 'link_code',
          sortable: true,
        },
        // { key: 'dots', label: 'Action', sortable: true },
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
      addInstructor: '',
      addStudent: '',
      // event: {
      //   name: '',
      //   description: '',
      //   start_date: '',
      //   end_date: '',
      //   start_time: '',
      //   end_time: '',
      // },
      events: [],
      eventDescriptionAdded: false,
      busy: false,
      course_instructors: [],
      search_instructor: '',
      instructorPerPage: 30,
      instructorTotalItems: 0,
      instructorCurrentPage: 1,
    }
  },

  methods: {
    async uploadStudents(e) {
      let file = e.target.files[0]
      let students = await new Promise((resolve) => {
        if (file) {
          let fileReader = new FileReader()
          fileReader.readAsBinaryString(file)
          fileReader.onload = (event) => {
            let data = event.target.result
            let workbook = XLSX.read(data, { type: 'binary' })
            workbook.SheetNames.forEach((sheet) => {
              let rowobject = XLSX.utils.sheet_to_row_object_array(
                workbook.Sheets[sheet]
              )
              resolve(rowobject)
            })
          }
        }
      })

      let new_array = []
      for (const iterator of students) {
        new_array.push({
          other_name: iterator['First Name'],
          surname: iterator['Surname'],
          send_latest_updates: false,
          registration_number: iterator['Registration Number'],
          user_type: {
            user_type: 'flat_user',
            link_code: '',
            type: 'student',
          },
        })
      }
      console.log(new_array)

      await this.$axios.$post(
        `course-v/add-flat-students-to-a-course?course_id=${this.$route.params.course}`,
        new_array
      )
      this.$fetch()
      this.$toast.success('Students added Successfully')
    },
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
    async createStudent() {
      try {
        await this.$axios.$post(
          `course-v/add-flat-student-to-a-course?course_id=${this.$route.params.course}`,
          this.student
        )
        this.$fetch()
        this.$bvModal.hide('addStudent')
        this.$toast.success('Student added Successfully')
      } catch (e) {
        console.log(e)
      }
    },
    async createEvent() {
      try {
        console.log(this.event.end_date, this.event.start_date)

        await this.$axios.$post(
          `course-v/add-course-event?course_id=${this.$route.params.course}`,
          this.event
        )
        this.$fetch()
        this.$bvModal.hide('addEvent')
        this.$toast.success('Event added Successfully')
      } catch (e) {
        this.$toast.error(e.data.detail.message)
      }
    },
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
    async get_all_instructors() {
      try {
        const instructors = await this.$axios.$get(
          `instructors-v/get-all-instructors?page=1&size=50`
        )

        this.instructors = instructors.items
      } catch (e) {
        this.$toast.error(e)
      }
    },
    async get_all_course_instructors() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-instructors?course_id=${this.$route.params.course}&page=${this.instructorCurrentPage}&size=${this.instructorPerPage}`

        if (this.search_instructor) {
          uri = uri + `&search=${this.search_instructor}`
        }
        const instructors = await this.$axios.$get(uri)
        this.course_instructors = instructors.items.reverse()
        this.instructorPerPage = instructors.size
        this.instructorTotalItems = instructors.total
        this.instructorCurrentPage = instructors.page

      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    async get_all_course_students() {
      try {
        this.busy = true
        const students = await this.$axios.$get(
          `course-v/get-all-course-students?course_id=${this.$route.params.course}&page=1&size=50`
        )

        this.students = students.items
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    async get_all_course_events() {
      try {
        const events = await this.$axios.$get(
          `course-v/get-all-course-event?course_id=${this.$route.params.course}&page=1&size=50`
        )
        console.log('event is', events)
        this.events = events.items.map((e, i) => {
          let filterstudent = e.students.filter((i) => {
            return i.status == true
          })
          let number = e.students.length - filterstudent
          return {
            Name: e.name,
            'Start Date': e.start_date,
            'End Date': e.end_date,
            'No of Students': e.students.length,
            Progress: number,
            id: e.id,
          }
        })
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
    this.get_all_instructors()
  },
}
</script>

<style>
.classwidth {
  max-width: 300px !important;
}
</style>
