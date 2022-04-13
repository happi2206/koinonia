<template>
  <div>
    <div class="ml-3">
      <h1 class="text-24">Description</h1>
      <p class="text-14">
        {{ courseDetails.description }}
      </p>
    </div>
    <div class="mt-4 mb-2">
      <h1 class="text-24 mb-3 ml-3">Scheme of work</h1>
      <list-schemefor-students />
    </div>
  </div>
</template>

<script>
import ListSchemeforStudents from '../listSchemeforStudents.vue'
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  props: {
    courseDetails: {
      type: Object,
    },
  },
  components: { ListSchemeforStudents },
  // created() {
  //   this.getCourseDetails()
  // },
  // methods: {
  //   async getCourseDetails() {
  //     this.isLoading = true
  //     try {
  //       const course = await this.$axios.$get(
  //         `course-v/get-a-course?course_id=${this.$route.params.id}`
  //       )
  //       this.courseDetails = course
  //       console.log('courses', this.courseDetails)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // },
}
</script>

<style>
</style>