<template>
  <filter-component>
    <template #besideFilterButton>
      <div class="ml-5">
        <button
          class="btn py-2 mainbtndashboard medbrownparagraph"
          v-b-modal.addEvent
        >
          Add Event
        </button>
        <b-modal id="addEvent" centered title="Create Event" hide-footer>
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

              <div class="col-12">
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
              </div>

              <div class="my-4 col-12">
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
      eventDescriptionAdded: false,
      busy: false,
    }
  },

  methods: {
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
    onRowClicked(e) {
      console.log(e)

      this.$router.push(`courses/${this.$route.params.course}/${e.id}`)
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
  },
}
</script>

<style>
</style>