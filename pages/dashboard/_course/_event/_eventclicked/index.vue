<template>
  <div class="bodylightgray">
    <div v-if="isLoading" class="mt-5 pt-md-5 horizontalspacing">
      <b-row>
        <b-col cols="3">
          <b-skeleton-img height="70%"></b-skeleton-img>
        </b-col>

        <b-col cols="6" class="">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </div>
    <div class="mt-5 pt-md-5 horizontalspacing" v-else>
      <div class="my-4 d-flex align-items-center">
        <b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon>
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="
            brownparagraph
            bold700
            mainbluecolor
            mb-0
            d-flex
            align-items-center
          "
        >
          <span>{{ courseTitle }}</span>
          <span
            class="iconify mainbluecolor"
            data-icon="dashicons:arrow-left-alt2"
          ></span>

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
      isLoading: false,
    }
  },

  async fetch() {
    this.isLoading = true
    try {
      const events = await this.$axios.$get(
        `course-v/get-course-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}`
      )
      this.courseid = this.$route.params.event
      this.eventid = this.$route.params.eventclicked
      this.eventDetail = events
      this.isLoading = false
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