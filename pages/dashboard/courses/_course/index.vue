<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Courses
        </a>
      </div>

      <!-- header card component -->
      <header-card :courseDetail="courseDetail" />

      <div class="card mt-3">
        <b-tabs content-class="mt-3" class="custom-tabs">
          <b-tab title="Course Overiew" active>
            <CourseDescription :courseDetail="courseDetail" />
          </b-tab>
          <b-tab title="Instructors" class="">
            <!-- <CourseInstructors /> -->
          </b-tab>
          <b-tab title="Students" class="">
            <CourseStudent />
          </b-tab>
          <b-tab title="Assignment" class=""> coming soon </b-tab>
          <b-tab title="Grade book" class=""> coming soon </b-tab>
          <b-tab title="Praticum" class=""> coming soon </b-tab>
          <b-tab title="Attendance" class="">
            <CourseAttendance @postEvent="addEvent" :allevents="allevents" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      courseDetail: {},
      allevents: [],

      options: ['foo', 'bar', 'baz'],
      instructorsInfo: {},
      students: [],
    }
  },

  async fetch() {
    try {
      const courses = await this.$axios.$get(
        `course-v/get-a-course?course_id=${this.$route.params.course}`
      )
      this.courseDetail = courses
      console.log(this.courseDetail)

      // this.$toast.success('courses')
    } catch (e) {
      console.log(e)
    }

    try {
      const students = await this.$axios.$get(
        `course-v/get-all-course-student?course_id=${this.$route.params.course}&page=1&size=50`
      )
      console.log('students from main are', students)
      this.students = students
    } catch (e) {
      console.log(e)
    }

    try {
      const events = await this.$axios.$get(
        `course-v/get-all-course-event?course_id=${this.$route.params.course}&page=1&size=50`
      )
      console.log('students from main are', events)
      this.allevents.push(events)
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    async addEvent() {
      try {
        await this.$axios.$post(
          `course-v/add-course-event?course_id=${this.$route.params.course}`
        )

        this.$toast.success('Event Added Successfully')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
</style>