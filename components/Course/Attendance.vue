<template>
  <div v-observe-visibility="get_all_course_events">
    <preloader :show="addPreloader" />
    <filter-component
      @search="SearchText"
      @view-by="sortEvents"
      @searchtag="querytag"
    >
      <template #graphicon>
        <span class="iconify" data-icon="system-uicons:graph-bar"></span>
      </template>
      <template #besideFilterButton>
        <div class="ml-3">
          <button
            class="btn py-2 btn-height mainbtndashboard medbrownparagraph text"
            v-b-modal.addEvent
          >
            Add Event
          </button>

          <!-- add event -->
          <b-modal id="addEvent" centered title="Create Event" hide-footer>
            <preloader :show="is_creating" />
            <form class="modabody" @submit.prevent="createEvent">
              <div class="row px-4">
                <div class="col-12">
                  <div class="my-2">
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
                </div>

                <div class="col-12" v-if="eventDescriptionAdded">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
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
                </div>

                <div class="col-12">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
                      >Start Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      v-model="event.start_date"
                      placeholder="Start Date"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
                      >End Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      v-model="event.end_date"
                      placeholder="Start Date"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>

                <div class="my-4 col-12">
                  <div class="d-flex justify-content-center">
                    <button
                      :disabled="is_creating"
                      class="
                        btn
                        px-md-4 px-3
                        py-2
                        mainbtndashboard
                        medbrownparagraph
                      "
                    >
                      Add Event
                    </button>
                  </div>
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
          @Print_qr_code="downloadQr"
          @Download_as_excel="downloadexcel"
          @row-clicked="onRowClicked"
          :busy="busy"
          @page-changed="handlePage"
          @Edit="handleEdit"
          :perPage="perPage"
          :totalItems="totalItems"
        >
          <template #no_of_students="{ data }">
            <span>{{ data }}</span>
          </template>

          <template #Progress="{ data }">
            <b-progress class="mt-2" :max="10">
              <b-progress-bar
                :value="data.item.no_of_students_present"
                variant="success"
              ></b-progress-bar>
              <b-progress-bar
                :value="
                  data.item.total_number_of_student -
                  data.item.no_of_students_present
                "
                variant="danger"
              ></b-progress-bar>
            </b-progress>
          </template>
        </table-component>

        <div v-else>
          <progress-component :events="events"> </progress-component>
        </div>
      </template>
    </filter-component>
    <div ref="my-component" v-show="openComponent">
      <QRGenerator
        id="printMe"
        :courseId="$route.params.course"
        :eventId="eventId"
        ref="qcode"
        :eventData="qrEvent"
      ></QRGenerator>
    </div>

    <b-modal id="editEvent" centered title="Edit Event" hide-footer>
      <preloader :show="is_creating" />
      <form class="modabody">
        <div class="row px-4">
          <div class="col-12">
            <div class="my-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Event Name
              </label>

              <input
                type="text"
                v-model="currentEvent.name"
                required
                placeholder="Event Name"
                class="forminputs text-dark"
              />
            </div>
          </div>

          <div class="col-12" v-if="eventDescriptionAdded">
            <div class="my-2">
              <label for="" class="medbrownparagraph graytext"
                >Event Description
              </label>

              <input
                type="text"
                v-model="currentEvent.description"
                required
                placeholder="Event Description"
                class="forminputs text-dark"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="my-2">
              <label for="" class="medbrownparagraph graytext"
                >Start Date and Time
              </label>
              <input
                type="datetime-local"
                required
                v-model="currentEvent.start_date"
                placeholder="Start Date"
                class="forminputs text-dark"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="my-2">
              <label for="" class="medbrownparagraph graytext"
                >End Date and Time
              </label>
              <input
                type="datetime-local"
                required
                v-model="currentEvent.end_date"
                placeholder="Start Date"
                class="forminputs text-dark"
              />
            </div>
          </div>

          <div class="my-4 col-12">
            <div class="d-flex justify-content-center">
              <button
                @click.prevent="submitEditedEvent"
                :disabled="is_creating"
                class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
              >
                Edit Event
              </button>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
    <div>
      <downloadexcel ref="excel" :fetch="fetchData">&nbsp; </downloadexcel>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import downloadexcel from 'vue-json-excel'
export default {
  components: {
    downloadexcel,
  },
  props: {
    events: {
      type: Array,
    },
  },
  data() {
    return {
      event: {
        name: '',
        description: '',
        start_date: '',
        end_date: '',
      },
      currentEvent: {},
      openComponent: false,
      dropdownItem: ['Edit', 'Print_qr_code', 'Download_as_excel'],
      fields: [
        { key: 'name', sortable: true },
        { key: 'start_date', label: 'Start Date/Time', sortable: true },
        { key: 'end_date', label: 'End Date/Time', sortable: true },
        {
          key: 'no_of_students_present',
          label: 'Students Present',
          sortable: true,
        },
        {
          key: 'total_number_of_student',
          label: 'Total Students',
          sortable: true,
        },
        {
          key: 'Progress',
          label: 'Progress',
          sortable: true,
          thStyle: { width: '150px' },
        },
        { key: 'dots', label: 'Action', sortable: false },
      ],

      eventDescriptionAdded: false,
      qrEvent: [],
      busy: false,
      events: [],
      is_creating: false,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
      courseId: '',
      eventId: '',
      studentPresent: '',
      studentAbsent: '',
      id: '',
      addPreloader: false,
    }
  },

  methods: {
    async createEvent() {
      try {
        this.is_creating = true
        await this.$axios.$post(
          `course-v/add-course-event?course_id=${this.$route.params.id}`,
          this.event
        )

        this.event.name = ''
        this.event.description = ''
        this.event.start_date = ''
        this.event.end_date = ''

        this.$bvModal.hide('addEvent')
        this.$toast.success('Event added Successfully')
        this.get_all_course_events()
      } catch (e) {
        this.$toast.error(e.data.detail.message)
      } finally {
        this.is_creating = false
      }
    },

    downloadQr(e) {
      console.log(e)
      this.qrEvent = e
      this.eventId = e.id
      this.$refs.qcode.$refs.html2Pdf.generatePdf()
    },

    async fetchData() {
      this.addPreloader = true
      let response = await this.$axios.get(
        `course-v/get-all-students-in-an-event?course_id=${this.$route.params.id}&event_id=${this.id}&pagination=false`
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
    async printQr(e) {
      // Pass the element id here
      await this.$htmlToPaper('printMe', { e })
    },

    // querytag(e) {
    //   this.get_all_course_events(e)
    // },
    handleEdit(e) {
      this.$bvModal.show('editEvent')
      const editForm = e
      this.currentEvent = editForm
      console.log(this.currentEvent)
      console.log(editForm)
    },
    downloadexcel(e) {
      this.id = e.id
      this.$refs.excel.$el.click()
    },

    async submitEditedEvent() {
      this.is_creating = true
      try {
        let response = await this.$axios.$patch(
          `course-v/update-course-event?course_id=${this.$route.params.id}&event_id=${this.currentEvent.id}`,
          this.currentEvent
        )
        this.is_creating = false
        this.$toast.success(response.message)
        this.$bvModal.hide('editEvent')
        this.get_all_course_events()
      } catch (e) {
        this.$toast.error(e)
      }
    },

    onRowClicked(e) {
      console.log(this.$route.params)
      this.$router.push(`course/${this.$route.params.id}/${e.id}`)
    },
    async get_all_course_events() {
      try {
        this.busy = true
        let uri = `course-v/get-all-course-event?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search !== '') {
          uri = uri + `&search=${this.search}`
        }
        const events = await this.$axios.$get(uri)

        console.log('events are ', events)

        this.events = events.items
        console.log(this.events)
        this.perPage = events.size
        this.totalItems = events.total
        this.currentPage = events.page
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    handlePage(e) {
      this.currentPage = e
      this.get_all_course_events()
    },
    SearchText(e) {
      this.search = e
      this.get_all_course_events()
    },

    sortEvents(e) {
      this.perPage = e
      this.get_all_course_events()
      console.log(e)
    },
    // getPresent(item) {
    //   return item.filter((t) => t.status === true).length
    // },
    // getAbsent(item) {
    //   return item.filter((t) => t.status === false).length
    // },
  },
}
</script>

<style>
</style>