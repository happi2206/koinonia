<template>
  <div v-observe-visibility="get_all_course_students">
    <filter-component @search="SearchText">
      <template #besideFilterButton>
        <div class="">
          <button
            class="btn py-2 mainbtndashboard medbrownparagraph ml-3"
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
            class="btn py-2 mainbtndashboard medbrownparagraph ml-3"
          >
            Bulk Upload
          </button>
          <b-modal id="addStudent" title="Create Student" centered hide-footer>
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
                    class="
                      btn
                      px-md-4 px-3
                      py-2
                      mainbtndashboard
                      medbrownparagraph
                    "
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
          :busy="busy"
          v-if="visualization === 'list'"
          @page-changed="handlePage"
          :perPage="perPage"
          :dropdownItem="dropdownItem"
          :totalItems="totalItems"
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
</template>

<script>
import { json2csv, csv2json } from 'json-2-csv'
var csv = require('csvtojson')
export default {
  data() {
    return {
      students: [],
      dropdownItem: ['Share Link Code', 'Share_QR_Code', 'Delete'],
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
      addStudent: '',
      studentfields: [
        { key: 'other_name', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'registration_number', sortable: true },
        { key: 'email', sortable: true },
        { key: 'link_code', sortable: true },
        // { key: 'gender', sortable: true },
        { key: 'phone no', sortable: true },
        { key: 'dots', label: 'Action', sortable: true },
      ],
      busy: false,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
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

      this.$toast.success('Students added Successfully')
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

    async get_all_course_students() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-students?course_id=${this.$route.params.course}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const students = await this.$axios.$get(uri)

        this.students = students.items.reverse()

        this.perPage = students.size
        this.totalItems = students.total
        this.currentPage = students.page
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    SearchText(e) {
      this.search = e
      this.currentPage = 1
      this.get_all_course_students()
    },
    handlePage(e) {
      this.currentPage = e
      this.get_all_course_students()
    },
  },
}
</script>

<style>
</style>