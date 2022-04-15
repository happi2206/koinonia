<template>
  <div>
    <div style="background: #e5e5e5">
      <filter-componentfor-students
        @view-by="filterInstructors"
        @search="queryInstructors"
        :placeholder="placeholder"
      />
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

      <div v-else class="row gap-5 py-3 margin-fix">
        <instructor-grid
          v-for="(instructor, index) in instructors"
          :key="index"
          :instructor="instructor"
        ></instructor-grid>
        <div
          style="text-align: center; margin: auto"
          class="w-50 p-5"
          v-if="searchQuery"
        >
          <p class="text-16">No Instructor matched your search parameters</p>
        </div>
        <div
          style="text-align: center; margin: auto"
          class="w-50 p-5"
          v-if="Instructor && instructors.length === 0"
        >
          <p class="text-16">No Instructor linked to this course.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterComponentforStudents from '../filterComponentforStudents.vue'
import instructorGrid from './instructor-grid.vue'
export default {
  components: { instructorGrid, FilterComponentforStudents },
  data() {
    return {
      instructors: [],
      placeholder: 'Instructors',
      isLoading: false,
      Instructor: true,
      visualization: 'grid',
      currentPage: 1,
      perPage: 50,
      filterby: 6,
      searchQuery: false,
    }
  },
  props: {},
  created() {
    this.getAllInstructors()
  },
  methods: {
    async getAllInstructors() {
      try {
        this.isLoading = true
        let uri = `course-v/get-all-course-instructors?course_id=${this.$route.params.id}&page=${this.currentPage}&size=${this.perPage}`
        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const instructors = await this.$axios.$get(uri)
        if (instructors.items.length === 0) {
          this.searchQuery = true
        } else {
          this.searchQuery = false
        }
        console.log(instructors)
        this.instructors = instructors.items
        if (instructors.items.length !== 0) {
          this.Instructor = false
        } else {
          this.Instructor = true
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    filterInstructors(e) {
      this.perPage = e
      this.getAllInstructors()
    },
    queryInstructors(e) {
      this.search = e
      this.getAllInstructors()
    },
  },
}
</script>

<style scoped>
.margin-fix {
  margin: 0 auto;
  max-width: 47.5rem;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
  padding-top: 0;
}
</style>