<template>
  <div v-observe-visibility="get_all_course_students">
    <preloader :show="add_preloader" />
    <filter-component @search="SearchText" @view-by="sortStudents">
      <template #besideFilterButton>
        <div class="d-flex flex-wrap">
          <button
            class="
              btn btn-height
              py-2
              mainbtndashboard
              medbrownparagraph
              ml-lg-3
            "
            v-b-modal.addStudent
          >
            Add Student
          </button>
          <button
            class="btn btn-height py-2 mainbtndashboard medbrownparagraph ml-3"
            v-b-modal.uploadModal
          >
            Bulk Upload
          </button>

          <input
            @change="uploadPhone"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            ref="uploadcsvphone"
            type="file"
            class="hidden"
          />

          <!-- <button
            @click.prevent="$refs.uploadcsvphone.click()"
            class="btn py-2 mainbtndashboard medbrownparagraph ml-3"
          >
            Upload Phone
          </button> -->

          <b-modal id="uploadModal" centered title="Bulk upload" hide-footer>
            <div>
              <p class="text-secondary">
                Before you upload your files below, make sure your file is ready
                to be imported
              </p>
            </div>

            <div class="mt-3 underline">
              <!-- <download-excel :data="json_data" name="bulkupload.xls">
                <button class="btn">
                  <p class="font-weight-bold">
                    <u> Download sample spreadsheet </u>
                  </p>
                </button>
              </download-excel> -->
            </div>

            <div class="d-flex justify-content-center">
              <div class="div">
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
                  Bulk Upload
                </button>
              </div>
            </div>
          </b-modal>

          <b-modal id="addStudent" title="Create Student" centered hide-footer>
            <form class="modabody p-4" @submit.prevent="createStudent">
              <div>
                <label for="" class="d-block medbrownparagraph graytext"
                  >Student Email
                </label>

                <input
                  type="email"
                  v-model="student.email"
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
                  v-model="student.firstname"
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
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Registration Number
                </label>
                <input
                  type="text"
                  required
                  v-model="student.registration_number"
                  placeholder="Registration Number"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Phone Number
                </label>
                <input
                  type="text"
                  required
                  v-model="student.phone"
                  placeholder="Phone Number"
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
          :paginate="true"
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
      <template #status="{ data }">
        {{ data }}
        <!-- <b-form-checkbox
          :button-variant="'success'"
          v-model=""
          
          size="lg"
          switch
        ></b-form-checkbox> -->
      </template>
    </filter-component>
  </div>
</template>

<script>
import { json2csv, csv2json } from 'json-2-csv'
import JsonExcel from 'vue-json-excel'
var csv = require('csvtojson')
export default {
  data() {
    return {
      students: [],
      dropdownItem: [
        'Share Link Code',
        'Edit',
        'Print_QR_Code',
        'Delete',
        'Edit',
      ],

      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15',
          phone: {
            mobile: '1-541-754-3010',
            landline: '(541) 754-3010',
          },
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23',
          phone: {
            mobile: '+1 855 275 5071',
            landline: '(2741) 2621-244',
          },
        },
      ],
      // {
      //   "surname": "string",
      //   "other_name": "string",
      //   "avatar": "string",
      //   "marital_status": "single",
      //   "gender": "male",
      //   "phone": "string",
      //   "registration_number": "string",
      //   "salutation": "string",
      //   "send_lastest_updates": false,
      //   "user_type": {
      //     "user_type": "flat_user",
      //     "link_code": "string",
      //     "type": "student",
      //     "email": "user@example.com"
      //   }
      // }

      student: {
        surname: '',
        middlename: '',
        firstname: '',
        phone: '',
        email: '',
        registration_number: '',
        // surname: '',
        // other_name: '',
        // avatar: '',
        // marital_status: 'single',
        // gender: 'male',
        // phone: 'string',
        // registration_number: '',
        // salutation: 'string',
        // send_latest_updates: false,
        // user_type: {
        //   user_type: 'flat_user',
        //   link_code: '',
        //   email: '',
        //   type: 'student',
        // },
      },
      addStudent: '',
      studentfields: [
        { key: 'firstname', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'registration_number', sortable: true },
        // { key: 'email', sortable: true },
        { key: 'link_code', sortable: true },
        // { key: 'gender', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'status', sortable: true },
      ],
      busy: false,
      search: '',
      perPage: 30,
      totalItems: 0,
      currentPage: 1,
      add_preloader: false,
    }
  },

  methods: {
    downloadSample() {},
    sortStudents(e) {
      this.perPage = e
      this.get_all_course_students()
    },

    async uploadPhone(e) {
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
        if (iterator['Phone']) {
          new_array.push({
            phone: iterator['Phone'],
            registration_number: iterator['Registration Number'],
            email: iterator['Email'],
          })
        }
      }
      this.add_preloader = true
      try {
        await this.$axios.$post(`course-v/add-bulk-students-updates`, new_array)
        this.$toast.success('update successful')

        this.add_preloader = false
        this.get_all_course_students()
      } catch (e) {
        console.log(e)
      }
    },
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
          surname: iterator['Surname'],
          middlename: iterator['Middle Name'],
          firstname: iterator['First Name'],
          phone: iterator['Phone'],
          // email: iterator['Email'],
          registration_number: iterator['Registration Number'],
        })
      }
      console.log(new_array)
      this.$bvModal.hide('uploadModal')
      this.add_preloader = true

      try {
        await this.$axios.$post(
          `course-v/add-flat-students-to-a-course?course_id=${this.$route.params.id}`,
          new_array
        )
        this.$toast.success('Students added Successfully')
        this.get_all_course_students()
        this.add_preloader = false
      } catch (e) {
        console.log(e)
      }
    },
    // async uploadPhone(e) {
    //   let file = e.target.files[0]
    //   let students = await new Promise((resolve) => {
    //     if (file) {
    //       let fileReader = new FileReader()
    //       fileReader.readAsBinaryString(file)
    //       fileReader.onload = (event) => {
    //         let data = event.target.result
    //         let workbook = XLSX.read(data, { type: 'binary' })
    //         workbook.SheetNames.forEach((sheet) => {
    //           let rowobject = XLSX.utils.sheet_to_row_object_array(
    //             workbook.Sheets[sheet]
    //           )
    //           resolve(rowobject)
    //         })
    //       }
    //     }
    //   })

    //   let new_array = []
    //   for (const iterator of students) {
    //     if (iterator['Phone']) {
    //       new_array.push({
    //         phone: iterator['Phone'],
    //         registration_number: iterator['Registration Number'],
    //       })
    //     }
    //   }

    //   await this.$axios.$post(
    //     `course-v/add-phone-numbers-to-a-course?course_id=${this.$route.params.course}`,
    //     new_array
    //   )

    //   this.$toast.success('Students added Successfully')
    // },

    sortStudents(e) {
      this.perPage = e
      this.get_all_course_students()
    },

    async createStudent() {
      try {
        await this.$axios.$post(
          `course-v/add-flat-student-to-a-course?course_id=${this.$route.params.id}`,
          this.student
        )
        this.get_all_course_students()

        this.$bvModal.hide('addStudent')
        this.$toast.success('Student added Successfully')
        this.student.surname = ''
        this.student.firstname = ''
        this.student.phone = ''
        this.student.email = ''
        this.student.registration_number = ''
      } catch (e) {
        console.log(e)
      }
    },

    async get_all_course_students() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-students?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const students = await this.$axios.$get(uri)

        console.log('students are ', students)

        this.students = students.items

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