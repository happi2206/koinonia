<template>
  <div>
    <div style="background: #e5e5e5">
      <filter-componentfor-students
        @view-by="filterCourseMates"
        @search="queryCourseMates"
        @emptySearch="forceSearch"
        :placeholder="placeholder"
      ></filter-componentfor-students>
      <div v-if="isLoading" class="p-5 w-75" style="margin: auto">
        <b-row>
          <b-col cols="4">
            <b-skeleton-img height="100%"></b-skeleton-img>
            <b-skeleton class="my-3" animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-col>
          <b-col cols="4">
            <b-skeleton-img height="100%"></b-skeleton-img>
            <b-skeleton class="my-3" animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-col>
          <b-col cols="4">
            <b-skeleton-img height="100%"></b-skeleton-img>
            <b-skeleton class="my-3" animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-col>
        </b-row>
      </div>

      <div
        v-else
        class="row gap-5 d-flex justify-content-center py-3 margin-fix"
      >
        <course-mate-grid
          v-for="(coursemate, index) in coursemates"
          :key="index"
          :coursemate="coursemate"
        ></course-mate-grid>
        <div
          style="text-align: center; margin: auto"
          class="w-50 p-5 d-flex justify-content-center"
          v-if="searchStudentQuery"
        >
          <p class="text-16">No Course mate matched your search parameters</p>
        </div>
        <div
          style="text-align: center; margin: auto"
          class="w-50 d-flex p-5"
          v-if="requestStudent"
        >
          <span
            class="iconify"
            data-icon="clarity:help-info-solid"
            style="color: #ffcd06"
            data-width="25"
            data-height="25"
          ></span>
          <p class="text-16">No Course mate linked to this course</p>
        </div>
      </div>
      <div style="padding: 0 7.7rem">
        <hr />
      </div>

      <b-pagination
        v-model="currentPage"
        :total-rows="totalItems"
        :per-page="perPage"
        align="center"
        class="my-0 pb-3"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import FilterComponentforStudents from '../filterComponentforStudents.vue'
import CourseMateGrid from './course-mate-grid.vue'
import instructorGrid from './instructor-grid.vue'
export default {
  components: { instructorGrid, FilterComponentforStudents, CourseMateGrid },
  data() {
    return {
      coursemates: [],
      placeholder: 'Course mates',
      isLoading: false,
      visualization: 'grid',
      currentPage: 1,
      perPage: 6,
      totalItems: 1,
      filterby: 6,
      searchStudentQuery: false,
      requestStudent: false,
      search: '',
    }
  },

  created() {
    this.get_all_course_students()
  },
  methods: {
    async get_all_course_students() {
      try {
        this.isLoading = true
        let uri = `course-v/get-my-course-mates?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`

        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const students = await this.$axios.$get(uri)
        this.coursemates = students.items

        if (this.search !== '' && students.items.length === 0) {
          this.searchStudentQuery = true
          this.requestStudent = false
        }

        this.perPage = students.size
        this.totalItems = students.total
        this.currentPage = students.page
      } catch (e) {
        console.log(e)
        this.$toast.error(e.data.detail)
        this.requestStudent = true
      } finally {
        this.isLoading = false
      }
    },
    filterCourseMates(e) {
      this.perPage = e
      this.get_all_course_students()
    },
    queryCourseMates(e) {
      this.search = e
      this.get_all_course_students()
    },
    forceSearch() {
      if (this.search !== '') {
        this.get_all_course_students()
        this.searchStudentQuery = false
      }
    },
  },
  watch: {
    currentPage() {
      this.get_all_course_students()
    },
  },
}
</script>

<style scoped>
.margin-fix {
  margin: 0 auto;
  max-width: 47.5rem;
}
</style>