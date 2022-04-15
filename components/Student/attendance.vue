<template>
  <div>
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
          :items="events"
          v-if="visualization === 'list'"
          :fields="fields"
          :busy="busy"
          @page-changed="handlePage"
          :perPage="perPage"
          :totalItems="totalItems"
        >
          <template #cell(start_date_time)="data">
            <slot name="start_date_time" :data="data">
              <span>{{ data.item.start_date_time }}</span></slot
            >
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
  data() {
    return {
      placeholder: 'Attendance',
      fields: [
        { key: 'name', sortable: true },
        { key: 'start_date_time', label: 'Start Date/Time', sortable: true },
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
      is_creating: false,
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
      addPreloader: false,
    }
  },
  mounted() {
    this.get_all_course_events()
  },

  methods: {
    async get_all_course_events() {
      try {
        this.busy = true

        let uri = `course-v/get-my-event-record?course_id=${this.$route.params.id}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const events = await this.$axios.$get(uri)

        this.events = events

        console.log(this.events[3])
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
    },
  },
}
</script>

<style>
</style>