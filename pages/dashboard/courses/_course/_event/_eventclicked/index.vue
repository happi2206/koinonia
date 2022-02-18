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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      eventDetail: {},
      courseid: '',
      eventid: '',
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
  },
}
</script>

<style>
</style>