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

                <div class="col-6">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
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
                </div>
                <div class="col-6">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
                      >Start Time
                    </label>
                    <input
                      type="time"
                      required
                      v-model="event.start_time"
                      placeholder="End Date"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="my-2">
                    <label for="" class="medbrownparagraph graytext"
                      >End Date
                    </label>
                    <input
                      type="date"
                      required
                      v-model="event.end_date"
                      placeholder="Start Date"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="my-2">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Time
                    </label>
                    <input
                      type="time"
                      required
                      v-model="event.end_time"
                      placeholder="End Date"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>

                <!-- <div class="col-12">
                  <div
                    class="d-flex justify-content-end"
                    @click="addDescriptionField"
                  >
                    <p class="medbrownparagraph">
                      <span v-if="!eventDescriptionAdded"> Add an </span>

                      <span v-else>Remove</span>
                      event description
                    </p>
                  </div>
                </div> -->

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
          @row-clicked="onRowClicked"
          :busy="busy"
          @page-changed="handlePage"
          :perPage="perPage"
          :totalItems="totalItems"
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
        start_time: '',
        end_time: '',
      },
      dropdownItem: ['Share_QR_Code', 'Delete', 'Edit'],
      fields: [
        { key: 'name', sortable: true },
        { key: 'start_date', sortable: true },
        { key: 'end_date', sortable: true },
        { key: 'No of Students', sortable: true },
        {
          key: 'Progress',
          label: 'Progress',
          sortable: true,
          thStyle: { width: '150px' },
        },
        { key: 'dots', label: '', sortable: true },
      ],
      eventDescriptionAdded: false,
      busy: false,
      events: [],
      is_creating: false,
      search: '',
      perPage: 5,
      totalItems: 0,
      currentPage: 1,
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
      } catch (e) {
        this.$toast.error(e.data.detail.message)
      } finally {
        this.is_creating = false
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

        this.events = events.items.reverse()
        this.perPage = events.size
        this.totalItems = events.total
        this.currentPage = events.page

        this.events = events.items.map((e, i) => {
          let filterstudent = e.students.filter((i) => {
            return i.status == true
          })

          let number = e.students.length - filterstudent
          return {
            Name: e.name,
            start_date: e.start_date,
            end_date: e.end_date,
            'No of Students': e.students.length,
            Progress: number,
            id: e.id,
          }
        })
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
    getPresent(item){
      return item.filter(t => t.status === true).length
    },
    getAbsent(item){
      return item.filter(t => t.status === false).length
    }
  },
}
</script>

<style>
</style>