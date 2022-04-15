<template>
  <div>
    <preloader :show="addPreloader" />
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
          <div></div>
          <b-dropdown
            text="Actions"
            size="sm"
            class="m-4 fmbt accentcolorbg"
            variant="warning"
          >
            <b-dropdown-item-button>
              <downloadexcel :fetch="fetchData">
                <button class="button-height text-12">Download as excel</button>
              </downloadexcel>
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <button
                @click.prevent="$refs.uploadcsv.click()"
                class="button-height text-12"
              >
                Upload excel file
              </button>
            </b-dropdown-item-button>
          </b-dropdown>
        </div>
        <div class="my-2 d-flex flex-wrap">
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Course name:</span>
            <span class="">
              {{ eventDetail.course_name }}
            </span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Course code:</span>
            <span class="">
              {{ eventDetail.course_code }}
            </span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Start Date:</span>
            <span class="">
              {{ eventDetail.start_date | DateTimeFormat }}
            </span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> End Date:</span>
            <span class=""> </span>
            {{ eventDetail.end_date | DateTimeFormat }}
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> No in class:</span>
            <span class=""> {{ present + absent }}</span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Present: {{ present }}</span>
            <span class=""> </span>
          </p>
          <p class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Absent: {{ absent }}</span>
            <span class=""> </span>
          </p>
        </div>
      </div>
      <div class="bg-white rounded p-md-3 my-2">
        <filter-component @search="SearchText" @view-by="sortStudents">
          <template #filterby>
            <div class="records-count medbrownparagraph">
              <span class="medbrownparagraph">Filter by: </span>
              <select
                class="records-count medbrownparagraph medbrownparagraph"
                @change="sortBy($event.target.value)"
              >
                <option class="medbrownparagraph" value="all">All</option>
                <option class="medbrownparagraph" value="self">
                  Self Check-In
                </option>
                <option class="medbrownparagraph" value="admin">
                  Admin Check-In
                </option>
              </select>
            </div>
          </template>

          <template #default="{ visualization }">
            <table-component
              :paginate="true"
              :busy="busy"
              :items="itemsToShow"
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
            <b-overlay :show="newbusy" opacity="0.5"> </b-overlay>
          </template>

          <template #importButton>
            <input
              @change="importData"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              ref="uploadcsv"
              type="file"
              class="hidden"
            />
          </template>

          <template #uploadButton>
            <input
              @change="recieveUpdate"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              ref="uploadcsvs"
              type="file"
              class="hidden"
            />
            <button
              @click.prevent="$refs.uploadcsv.click()"
              style="max-width: 48px"
              class="accentcolorbg upload-margin button-height py-2 px-3 ml-3"
            >
              <span
                class="iconify"
                data-icon="fa-solid:file-import"
                data-width="16"
                data-height="16"
              ></span>
            </button>
            <!-- <button
              class="
                btn
                ml-5
                px-md-4 px-3
                py-2
                mainbtndashboard
                medbrownparagraph
              "
              @click="recieveUpdate"
            >
              <span class="iconify" data-icon="charm:upload"></span>
            </button> -->
          </template>
        </filter-component>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import downloadexcel from 'vue-json-excel'
// import JsonExcel from 'vue-json-excel'

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
      addPreloader: false,
      newData: [],
      busy: false,
      newbusy: false,
      students: [],
      studentelement: [],
      studentsInCourse: {},
      studentsTable: [],
      studentArray: [],
      isLoading: false,
      dropdownItem: ['Edit Event', 'Delete Event'],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'student.firstname', label: 'First Name', sortable: true },
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
      check_in_method: '',
    }
  },

  async fetch() {
    // this.isLoading = true
    try {
      this.busy = true
      // this.isLoading = true
      let uri = `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=${this.currentPage}&size=${this.perPage}`

      if (this.check_in_method) {
        uri = uri + `&check_in_method=${this.check_in_method}`
      }

      if (this.search) {
        uri = uri + `&search=${this.search}`
      }
      const student = await this.$axios.$get(uri)

      console.log(student)

      this.present = student.students_present
      this.absent = student.total_number_of_student - student.students_present
      this.isLoading = false
      this.studentArray = student.response.items
      // this.newStuff = student.response.items
      this.totalItems = student.response.total
    } catch (e) {
      this.$toast.error(e)
    } finally {
      this.busy = false
    }
  },
  methods: {
    async fetchData() {
      this.addPreloader = true
      let response = await this.$axios.get(
        `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&pagination=false`
      )

      let newArray = []

      for (const iterator of await response.data.response) {
        let timeIn = new Date(iterator.check_in)
        let year = timeIn.toDateString()
        let checkIn = year
        newArray.push({
          // by: iterator.by ? iterator.by : 'nill',
          Registration_number: iterator.student.registration_number,
          Surname: iterator.student.surname,
          Firstname: iterator.student.firstname,
          Time_in: iterator.check_in ? checkIn : 'nill',
        })
      }
      this.addPreloader = false
      return newArray
    },
    async importData(e) {
      let file = e.target.files[0]
      let students = await new Promise((resolve) => {
        if (file) {
          let fileReader = new FileReader()
          fileReader.readAsBinaryString(file)
          fileReader.onload = (event) => {
            let data = event.target.result
            let workbook = XLS.read(data, { type: 'binary' })
            workbook.SheetNames.forEach((sheet) => {
              let rowobject = XLS.utils.sheet_to_row_object_array(
                workbook.Sheets[sheet]
              )
              resolve(rowobject)
            })
          }
        }
      })
      console.log(students)

      let new_array = []
      for (const iterator of students) {
        if (iterator.check_in !== 'nill') {
          const toIso = new Date(iterator.check_in).toISOString()

          console.log(toIso)

          new_array.push({
            check_in: toIso,
            status: iterator['status'],
            by: iterator['by'],
            device_type: iterator['device_type'],
            registration_number: iterator['registration_number'],
          })
        }
      }

      console.log(new_array)
      this.addPreloader = true

      try {
        await this.$axios.$patch(
          `course-v/import-course-attendance?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`,
          new_array
        )
        this.$toast.success('Students added Successfully')
        this.addPreloader = false
        this.$fetch()
      } catch (e) {
        console.log(e)
      }
    },

    async recieveUpdate() {
      try {
        const response = await this.$axios.$get(
          `course-v/update-attendance-list?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`,
          this.studentArray
        )
        console.log(response)
        return response
      } catch (e) {
        console.log(e)
      }
    },
    sortBy(e) {
      if (e !== 'all') {
        this.check_in_method = e
        this.$fetch()
      }
      console.log(e)
    },

    sortStudents(e) {
      this.perPage = e
      this.$fetch()
    },
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
      console.log(student)
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
      this.currentPage = 1
      this.$fetch()
    },
  },
  computed: {
    itemsToShow() {
      if (this.newData.length) {
        return this.studentArray.concat(this.newData)
      } else {
        return this.studentArray
      }
    },
  },

  components: {
    downloadexcel,
  },

  mounted() {},
}
</script>

<style scoped>
.margin-fix {
  margin-right: 11rem;
}
.button-height {
  height: 2.6rem;
}
.btn-warning {
  color: #212529;
  background-color: #ffcd06;
  border-color: #ffcd06;
}

.fmbt {
  width: 100px;
  height: 35px;
  background: #ffcd06;
}

@media screen and (max-width: 1116px) {
  .margin-fix {
    margin-right: 11rem;
    margin-left: 0rem;
  }
  .upload-margin {
    margin: 0px;
  }
}
</style>