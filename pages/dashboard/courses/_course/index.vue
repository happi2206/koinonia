<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph bold700 mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Courses
        </a>
      </div>
      <header-card :courseDetail="courseDetail" />

      <!-- tabs -->
      <div class="bg-white p-5 mt-4">
        <ul
          class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 0"
              class="nav-link block font-medium text-xs leading-tight uppercase text-black cursor-pointer border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
              :class="{ active: currentTab == 0 }"
              >Course Overview</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 1"
              class="<!-- nav-link --> block font-medium text-xs leading-tight uppercase cursor-pointer border-x-0 border-t-0 border-transparent px-6 py-3 my-2 text-black hover:border-transparent hover:bg-gray-100 focus:border-transparent"
              :class="{ active: currentTab == 1 }"
              >Instructors</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 2"
              class="nav-link block font-medium text-xs leading-tight cursor-pointer uppercase text-black border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
              :class="{ active: currentTab == 2 }"
              >Students</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="currentTab = 3"
              class="nav-link block font-medium text-xs leading-tight cursor-pointer uppercase text-black border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
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
                  <b-modal
                    id="addInstructor"
                    centered
                    title="Add Instructor"
                    hide-footer
                  >
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
                  :fields="instructorfields"
                  v-if="visualization === 'list'"
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
              <template #besideFilterButton>
                <div class="ml-5">
                  <button
                    class="btn py-2 mainbtndashboard medbrownparagraph"
                    v-b-modal.addStudent
                  >
                    Add Student
                  </button>
                  <input
                    @change="uploadStudents"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    ref="uploadcsv"
                    type="file"
                    class="hidden"
                  />
                  <button
                    @click.prevent="$refs.uploadcsv.click()"
                    class="btn py-2 mainbtndashboard medbrownparagraph"
                  >
                    upload students
                  </button>
                  <b-modal
                    id="addStudent"
                    title="Create Student"
                    centered
                    hide-footer
                  >
                    <form class="modabody p-4" @submit.prevent="createStudent">
                      <div>
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Student Email
                        </label>

                        <input
                          type="text"
                          v-model="student.user_type.email"
                          required
                          placeholder="Email"
                          class="forminputs text-dark"
                        />
                      </div>
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Student Name
                        </label>

                        <input
                          type="text"
                          v-model="student.other_name"
                          required
                          placeholder="Name of student"
                          class="forminputs text-dark"
                        />
                      </div>
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Last Name
                        </label>
                        <input
                          type="text"
                          required
                          v-model="student.surname"
                          placeholder="Surname"
                          class="forminputs text-dark"
                        />
                      </div>

                      <!-- <div class="my-4">
                        <div class="form-check">
                          <label class="form-check-label medbrownparagraph">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              required
                              v-model="student.send_lastest_updates"
                            />
                          </label>
                        </div>
                      </div> -->

                      <div class="my-4">
                        <div class="d-flex justify-content-center">
                          <button
                            class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
                          >
                            Add Student
                          </button>
                        </div>
                      </div>
                    </form>
                  </b-modal>
                </div>
              </template>
              <template #default="{ visualization }">
                <table-component
                  :items="students"
                  :fields="studentfields"
                  v-if="visualization === 'list'"
                />

                <div class="row" v-else>
                  <grid-component
                    :data="students"
                    v-for="(student, index) in students"
                    :key="index"
                  ></grid-component>
                </div>
              </template>
            </filter-component>
          </div>
          <div
            v-show="currentTab == 3"
            :class="{ 'fade show': currentTab == 3 }"
          >
            <filter-component>
              <template #besideFilterButton>
                <div class="ml-5">
                  <button
                    class="btn py-2 mainbtndashboard medbrownparagraph"
                    v-b-modal.addEvent
                  >
                    Add Event
                  </button>
                  <b-modal id="addEvent" centered hide-header hide-footer>
                    <h2 class="largebrownparagraph bold700 my-3">
                      Create Event
                    </h2>
                    <form class="modabody" @submit.prevent="createEvent">
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Event Name
                        </label>

                        <input
                          type="text"
                          v-model="event.name"
                          required
                          placeholder="Event Name"
                          class="forminputs text-dark"
                        />
                      </div>
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Event Description
                        </label>

                        <input
                          type="text"
                          v-model="event.description"
                          required
                          placeholder="Event Description"
                          class="forminputs text-dark"
                        />
                      </div>
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >Start Date
                        </label>
                        <input
                          type="date"
                          required
                          v-model="event.start_date"
                          placeholder="Start Date"
                          class="forminputs text-dark"
                        />
                      </div>
                      <div class="my-4">
                        <label for="" class="d-block medbrownparagraph graytext"
                          >End Date
                        </label>
                        <input
                          type="date"
                          required
                          v-model="event.end_date"
                          placeholder="End Date"
                          class="forminputs text-dark"
                        />
                      </div>

                      <div class="my-4">
                        <div class="d-flex justify-content-center">
                          <button
                            class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
                          >
                            Add Event
                          </button>
                        </div>
                      </div>
                    </form>
                  </b-modal>
                </div>
              </template>
              <template #default="{ visualization }">
                <table-component
                  :items="events"
                  v-if="visualization === 'list'"
                  :fields="fields"
                  :dropdownItem="dropdownItem"
                  @row-clicked="onRowClicked"
                >
                </table-component>

                <div class="row" v-else>
                  <grid-component
                    :data="events"
                    v-for="(event, index) in events"
                    :key="index"
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
        { key: 'surname', sortable: true },
        { key: 'other_name', sortable: true },
        { key: 'email', sortable: true },
        { key: 'gender', sortable: true },
        { key: 'phone no', sortable: true },
        { key: 'designation', sortable: true },
        { key: 'dots', label: 'Action', sortable: true },
      ],
      studentfields: [
        { key: 'surname', sortable: true },
        { key: 'other_name', sortable: true },
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
      event: {
        name: '',
        description: '',
        start_date: '',
        end_date: '',
      },
      events: [],
    }
  },

  async fetch() {
    // console.log(this.$route.params.course)

    try {
      const courses = await this.$axios.$get(
        `course-v/get-a-course?course_id=${this.$route.params.course}`
      )
      this.courseDetail = courses
    } catch (e) {
      console.log(e)
    }

    try {
      const instructors = await this.$axios.$get(
        `instructors-v/get-all-instructors?page=1&size=50`
      )

      this.instructors = instructors.items

      // this.instructors.push(...instructors.items)
    } catch (e) {
      console.log(e)
    }
    try {
      const students = await this.$axios.$get(
        `course-v/get-all-course-students?course_id=${this.$route.params.course}&page=1&size=50`
      )

      this.students = students.items
    } catch (e) {
      console.log(e)
    }
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
  },
}
</script>

<style>
.classwidth {
  max-width: 300px !important;
}
</style>
