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
      <events-header-card />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      eventDetail: {},
    }
  },

  async fetch() {
    console.log(this.$route.params)
    try {
      const events = await this.$axios.$get(
        `course-v/get-a-course-event?course_id=${this.$route.params.courses}&event_id=${this.$route.params.event}`
      )
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