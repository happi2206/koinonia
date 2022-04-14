<template>
  <div v-observe-visibility="get_all_course_events">
    <preloader :show="addPreloader" />
    <filter-componentfor-students
      :placeholder="placeholder"
      @search="SearchText"
      @view-by="sortEvents"
    >
      <template #graphicon>
        <span class="iconify" data-icon="system-uicons:graph-bar"></span>
      </template>
      <template #default="{ visualization }">
        <table-component
          :items="myevents"
          v-if="visualization === 'list'"
          :fields="fields"
          :busy="busy"
          @page-changed="handlePage"
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
    </filter-componentfor-students>
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
      placeholder: 'Attendance',
      fields: [
        { key: 'name', sortable: true },
        { key: 'start_date', label: 'Start Date/Time', sortable: true },
        {
          key: 'check_in',
          label: 'Check in Time',
          sortable: true,
        },
        {
          key: 'check_method',
          label: 'Check in Method',
          sortable: true,
        },
      ],

      busy: false,
      events: [],
      myevents: [],
      is_creating: false,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
      addPreloader: false,
    }
  },
  mounted() {
    this.getMyEvents()
  },

  methods: {
    async get_all_course_events() {
      try {
        this.busy = true

        let uri = `course-v/get-all-course-event?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const events = await this.$axios.$get(uri)

        this.events = events.items
        this.perPage = events.size
        this.totalItems = events.total
        this.currentPage = events.page
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.busy = false
      }
    },
    async getMyEvents() {
      try {
        const events = await this.$axios.get(
          `get-my-event-record?course_id=${this.$route.params.id}`
        )
        this.myevents = events
        console.log(this.myevents)
      } catch (error) {
        console.warn(error)
      }
    },
    handlePage(e) {
      this.currentPage = e
      this.getMyEvents()
    },
    SearchText(e) {
      this.search = e
      this.getMyEvents()
    },

    sortEvents(e) {
      this.perPage = e
      this.getMyEvents()
    },
  },
}
</script>

<style>
</style>