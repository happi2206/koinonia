<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4 d-flex align-items-center">
        <b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon>
        <a
          href="#"
          @click.prevent="$router.go(-2)"
          class="brownparagraph bold700 mainbluecolor mb-0"
        >
          {{ courseTitle }}
        </a>
        <span
          class="iconify mainbluecolor"
          data-icon="dashicons:arrow-left-alt2"
        ></span>
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph bold700 mainbluecolor mb-0"
        >
          <span>
            {{ eventDetail.name }}
          </span>
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
      courseTitle: '',
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

    try {
      const courses = await this.$axios.$get(
        `course-v/get-a-course?course_id=${this.$route.params.event}`
      )

      this.courseTitle = courses.title
      console.log('courses', courses)
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
</style>