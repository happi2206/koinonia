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
          <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Present: </span>
            <span class=""> {{ present }}</span>
          </p>
          <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
            <span class="lightgraytext"> Student Absent:</span>
            <span class=""> {{ absent }}</span>
          </p>
        </div>
      </div>
      <div class="bg-white rounded p-md-3 my-2">
        <filter-component @search="SearchText" @view-by="sortStudents">
          <template #filterby>
            <div class="records-count medbrownparagraph">
              <span class="medbrownparagraph">Check in type: </span>
              <select
                class="records-count medbrownparagraph medbrownparagraph"
                @change="sortBy($event.target.value)"
              >
                <option class="medbrownparagraph" value="all">All</option>
                <option class="medbrownparagraph" value="self">Self</option>
                <option class="medbrownparagraph" value="admin">Admin</option>
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

          <template #exportButton>
            <button class="accentcolorbg button-height py-2 px-3 ml-3">
              <downloadexcel :fetch="exportData"
                ><span class="iconify" data-icon="entypo:export"></span>
              </downloadexcel>
            </button>
          </template>

          <template #importButton>
            <input
              @change="importData"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              ref="uploadcsv"
              type="file"
              class="hidden"
            />
            <button
              @click.prevent="$refs.uploadcsv.click()"
              class="accentcolorbg button-height py-2 px-3 ml-3"
            >
              <span
                class="iconify"
                data-icon="fa-solid:file-import"
                data-width="16"
                data-height="16"
              ></span>
            </button>
          </template>
        </filter-component>
      </div>
    </div>
  </div>
</template>

<script>
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
    async exportData() {
      try {
        const response = await this.$axios.$get(
          `course-v/export-course-attendance?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`,
          this.studentArray
        )
        console.log(response)
        return response
      } catch (e) {
        console.log(e)
      }
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
    },
    sortBy(e) {
      if (e !== 'all') {
        this.check_in_method = e
        this.$fetch()
      } else {
        this.check_in_method = ''
        this.$fetch()
      }

      this.$fetch()
    },

    // async fetchMore(e) {
    //   try {
    //     this.newbusy = true
    //     let uri = `course-v/get-all-students-in-an-event?course_id=${
    //       this.$route.params.event
    //     }&event_id=${this.$route.params.eventclicked}&page=${e + 1}&size=${
    //       this.perPage
    //     }&check_in_method=${this.check_in_method}`
    //     const results = await this.$axios.$get(uri)
    //     this.newData = results.response.items
    //     console.log(results.response.items)
    //     this.newbusy = false
    //   } catch (error) {}
    //   // alert(e)
    // },

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
.button-height {
  height: 2.6rem;
}
</style>