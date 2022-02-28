<template>
  <div v-observe-visibility="get_all_course_events">
    <filter-component @search="SearchText">
      <template #besideFilterButton>
        <div class="ml-md-5">
          <button
            class="btn py-2 mainbtndashboard medbrownparagraph text"
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
          @Print_QR_Code="printQr"
          @row-clicked="onRowClicked"
          :busy="busy"
          @page-changed="handlePage"
          @Edit="handleEdit"
          :perPage="perPage"
          :totalItems="totalItems"
        >
          <!-- <template #no_of_students="{ data }">
            <span>{{ data.item.students.length }}</span>
          </template> -->

          <template #Progress="{ data }">
            <b-progress class="mt-2" :max="10">
              <b-progress-bar
                :value="data.item.number_of_students_present"
                variant="success"
              ></b-progress-bar>
              <b-progress-bar
                :value="
                  data.item.total_number_of_students -
                  data.item.number_of_students_present
                "
                variant="danger"
              ></b-progress-bar>
            </b-progress>
          </template>
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
    <div ref="my-component" v-show="openComponent">
      <QRGenerator
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
  </div>
</template>

<script>
export default {
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
      dropdownItem: [
        'Print_QR_Code',
        'Edit',
        'Download as PDF',
        'Download as XLS',
        'Download as CSV',
      ],
      fields: [
        { key: 'name', sortable: true },
        { key: 'start_date', label: 'Start Date/Time', sortable: true },
        { key: 'end_date', label: 'End Date/Time', sortable: true },
        {
          key: 'number_of_students_present',
          label: 'Students Present',
          sortable: true,
        },
        {
          key: 'total_number_of_students',
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
    }
  },

  methods: {
    async createEvent() {
      try {
        this.is_creating = true
        await this.$axios.$post(
          `course-v/add-course-event?course_id=${this.$route.params.course}`,
          this.event
        )

        this.$bvModal.hide('addEvent')
        this.$toast.success('Event added Successfully')
        this.get_all_course_events()
      } catch (e) {
        this.$toast.error(e.data.detail.message)
      } finally {
        this.is_creating = false
      }
    },

    printQr(e) {
      console.log(e)
      this.qrEvent = e
      this.eventId = e.id
      // this.openComponent = true
      this.$refs.qcode.$refs.html2Pdf.generatePdf()
      // this.$refs.qcode.html2Pdf.generatePdf()
      //console.log('object')
    },

    handleEdit(e) {
      this.$bvModal.show('editEvent')
      const editForm = e
      this.currentEvent = editForm
      console.log(editForm)
    },

    async submitEditedEvent() {
      try {
        await this.$axios.$patch(
          `course-v/update-course-event?course_id=${this.$route.params.course}`,
          this.currentEvent
        )

        // this.$bvModal.hide('editEvent')
      } catch (e) {
        console.log(e)
      }
    },

    onRowClicked(e) {
      this.$router.push(`courses/${this.$route.params.course}/${e.id}`)
    },
    async get_all_course_events() {
      try {
        this.busy = true

        let uri = `course-v/get-all-course-event?course_id=${this.$route.params.course}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const events = await this.$axios.$get(uri)

        // events.items.forEach((element) => {
        //   console.log(element.students.length)
        // })

        this.events = events.items

        //  this.events.map((element) => {
        //  this.events.push(element.students.length)
        //  })
        console.log(this.events)
        this.perPage = events.size
        this.totalItems = events.total
        this.currentPage = events.page

        //  this.events = events.items.map((e, i) => {
        //   let filterstudent = e.students.filter((i) => {
        //     return i.status == true
        //   })

        //   return {
        //     Name: e.name,
        //     start_date: e.start_date,
        //     end_date: e.end_date,
        //     'No of Students': e.students.length,
        //     id: e.id,
        //   }
        // })
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