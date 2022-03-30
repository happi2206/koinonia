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

          <b-modal
            id="editStudent"
            title="Edit Student"
            v-b-modal.editModal
            centered
            hide-footer
          >
            <form class="modabody p-4" @submit.prevent="editStudent">
              <div>
                <label for="" class="d-block medbrownparagraph graytext"
                  >Student Email
                </label>

                <input
                  type="email"
                  v-model="temp_student.email"
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
                  v-model="temp_student.firstname"
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
                  v-model="temp_student.surname"
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
                  v-model="temp_student.registration_number"
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
                  v-model="temp_student.phone"
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
                    @click="editStudent"
                    class="btn px-md-4 px-5 mainbtndashboard medbrownparagraph"
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
                    <span v-else> Update Student </span>
                  </button>
                </div>
              </div>
            </form>
          </b-modal>
        </div>
      </template>
      <template #default="{ visualization }">
        <table-component
          :key="index"
          :items="students"
          :fields="studentfields"
          :busy="busy"
          :paginate="true"
          v-if="visualization === 'list'"
          @page-changed="handlePage"
          :perPage="perPage"
          :dropdownItem="dropdownItem"
          :totalItems="totalItems"
          @delete_student="removeStudent"
          @Edit_student="openEditStudent"
        >
          <template #makecaptain="{ data }">
            <b-form-checkbox
              :button-variant="'success'"
              @change="sendId(data.item.id, $event)"
              v-model="data.item.is_course_rep"
              size="lg"
              switch
            ></b-form-checkbox>
          </template>
        </table-component>

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
import JsonExcel from 'vue-json-excel'
var csv = require('csvtojson')
export default {
  data() {
    return {
      students: [],
      dropdownItem: ['Edit_student', 'delete_student'],

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

      id: '',
      isbusy: false,

      student: {
        email: '',
        firstname: '',
        id: '',
        link_code: '',
        phone: '',
        registration_number: '',
        surname: '',
      },
      temp_student: {
        email: '',
        firstname: '',
        link_code: '',
        phone: '',
        registration_number: '',
        surname: '',
      },
      index: '',
      addStudent: '',
      studentfields: [
        { key: 'firstname', label: 'First name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'registration_number', sortable: true },
        // { key: 'email', sortable: true },
        { key: 'link_code', sortable: true },
        // { key: 'gender', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'makecaptain', label: 'Assign Captain', sortable: true },
        { key: 'dots', label: 'Action', sortable: false },
      ],
      busy: true,
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
      let default_value = 'Nill'
      for (const iterator of students) {
        let reg = iterator['Registration Number']
        if (reg) {
          if (!reg.includes('KSOM/2022/ABUJA/')) {
            reg = 'KSOM/2022/ABUJA/' + reg
          }
          new_array.push({
            surname: iterator['Surname'] || default_value,
            middlename: iterator['Middle Name'] || default_value,
            firstname: iterator['First Name'] || default_value,
            phone: iterator['Phone'] || default_value,
            email: iterator['Email'] || default_value,
            gender: iterator['Gender'] || default_value,
            registration_number: reg,
            photo: iterator['Photo'] || default_value
          })
        }
      }

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

        this.students = students.items
        // this.temp_students = students.items
        // this.temp_student = students.items[this.index]

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

    async removeStudent(e) {
      try {
        this.add_preloader = true
        let response = await this.$axios.delete(
          `course-v/remove-students-from-a-course?course_id=${this.$route.params.id}&id=${e.id}`
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.add_preloader = false
      }
    },

    async sendId(id, state) {
      let url = state
        ? 'course-v/assign-student-as-course-rep'
        : 'course-v/un-assign-student-as-course-rep'
      try {
        let response = await this.$axios.$post(
          `${url}?student_id=${id}&course_id=${this.$route.params.id}`
        )
        console.log(response)
        this.$toast.success(response.message)
        // this.get_all_course_students()
      } catch (error) {
        this.$toast.error(error.message)
      }
    },
    openEditStudent(e) {
      this.id = e.id
      this.temp_student.firstname = e.firstname
      this.temp_student.email = e.email
      this.temp_student.surname = e.surname
      this.temp_student.registration_number = e.registration_number
      this.temp_student.phone = e.phone
      this.$bvModal.show('editStudent')
    },

    async editStudent() {
      try {
        this.isbusy = true
        let response = await this.$axios.patch(
          `course-v/edit-student?student_id=${this.id}`,
          this.temp_student
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.isbusy = false
        this.get_all_course_students()
        this.$bvModal.hide('editStudent')
      }
    },
  },
}
</script>

<style>
</style>