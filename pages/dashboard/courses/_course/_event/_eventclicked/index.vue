<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph bold700 mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Event
        </a>
      </div>

      <events-header-card
        :eventDetail="eventDetail"
        :courseid="courseid"
        :eventid="eventid"
      />

      <div class="bg-white rounded p-3 my-2">
        <filter-component>
          <template #status>
            <toggleButton :value="data.value === 'status' ? true : false" />
          </template>
          <template #default="{ visualization }">
            <table-component
              :items="studentsInCourse"
              v-if="visualization === 'list'"
              :fields="fields"
              @row-clicked="onRowClicked"
            />
          </template>
        </filter-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      eventDetail: {},
      students: [],
      studentelement: [],
      studentsInCourse: [],
      fields: [
        { key: 'other_name', label: 'Other Name', sortable: true },
        { key: 'surname', label: 'Surname', sortable: true },
        { key: 'check_in', label: 'date/Time in', sortable: true },
        { key: '', label: 'Check in Method', sortable: true },
        { key: 'status', label: 'Status', sortable: false },
      ],
    }
  },

  async fetch() {
    console.log('routes are', this.$route.params)
    try {
      const events = await this.$axios.$get(
        `course-v/get-course-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`
      )
      this.courseid = this.$route.params.event
      this.eventid = this.$route.params.eventclicked
      console.log(events)
      this.eventDetail = events
      console.log(this.eventDetail)
    } catch (e) {
      console.log(e)
    }

    try {
      const student = await this.$axios.$get(
        `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=1&size=50`
      )

      const obj = student
      obj.items.map((el) => {
        console.log('el', el)
        this.studentsInCourse.push({
          status: el.status,
          by: el.by,
          check_in: el.check_in,
          other_name: el.student.other_name,
          surname: el.student.surname,
          email: el.student.email,
          id: el.student.id,
        })
      })
      console.log('ob is', obj)

      console.log(this.studentsInCourse)
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    onRowClicked(e) {
      this.$router.push(`student/${e.id}`)
    },
  },
}
</script>

<style>
</style>