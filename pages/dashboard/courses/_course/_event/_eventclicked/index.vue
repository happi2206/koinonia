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
          {{eventDetail.name}}
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
    try {
      const events = await this.$axios.$get(
        `course-v/get-course-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`
      )
      this.courseid = this.$route.params.event
      this.eventid = this.$route.params.eventclicked
      this.eventDetail = events
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
</style>