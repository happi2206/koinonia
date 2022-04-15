<template>
  <div style="background: #e5e5e5">
    <div class="pt-5 mb-3 ml-3">
      <div
        @click.prevent="$router.go(-1)"
        class="d-flex pt-5"
        style="font-size: 0.95rem; font-family: Brown"
      >
        <span style="cursor: "
          ><b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon
        ></span>
        <a
          href="#"
          class="bold700 mainbluecolor mb-0 d-flex align-items-center"
        >
          <span>Classes</span>
        </a>
        <span class="mainbluecolor bold700"></span>
      </div>
    </div>

    <div class="pt-5 px-5" v-if="isLoading" style="background: #fff">
      <b-row>
        <b-col cols="3" class="p-4">
          <b-skeleton-img height="100%"></b-skeleton-img>
        </b-col>

        <b-col cols="6" class="p-4">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <b-card class="mx-4 mb-3">
        <studentheadercard :courseDetails="courseDetails" />
      </b-card>

      <b-card class="mx-4">
        <div>
          <b-tabs content-class="mt-3" class="custom-tabs">
            <b-tab title="Course Overview"
              ><StudentCourseoverview :courseDetails="courseDetails"
            /></b-tab>
            <b-tab title="Instructors"><StudentInstructors /></b-tab>
            <b-tab title="Course Mates"><student-courseMates /></b-tab>
            <b-tab title="Attendance"><student-attendance /></b-tab>
          </b-tabs>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Studentheadercard from '~/components/studentheadercard.vue'
export default {
  components: { Studentheadercard },
  data() {
    return {
      courseDetails: '',
      isLoading: false,
    }
  },
  created() {
    this.getCourseDetails()
  },

  methods: {
    async getCourseDetails() {
      this.isLoading = true
      try {
        const course = await this.$axios.$get(
          `course-v/get-my-course-details?course_id=${this.$route.params.id}`
        )
        this.courseDetails = course
        console.log('courses', course)
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
  padding-top: 0;
}
.custom-tabs {
  /* border-bottom: 0.2px solid #828282; */
  padding: 0rem;
  width: 100%;
  flex-wrap: nowrap !important;
}
</style>