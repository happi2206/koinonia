<template>
  <div style="background: #e5e5e5">
    <div class="py-3">
      <div v-if="isLoading" class="p-3">
        <b-row>
          <b-col cols="3">
            <b-skeleton-img height="100%"></b-skeleton-img>
          </b-col>

          <b-col cols="6" class="">
            <b-skeleton animation="wave" height="20%" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
            <b-skeleton animation="wave" width="60%"></b-skeleton>
            <b-skeleton animation="wave" width="45%"></b-skeleton>
          </b-col>
        </b-row>
      </div>

      <div
        v-if="noCourse"
        class="d-flex justify-content-center align-items-center p-4"
      >
        <div class="h-100">
          <h2 class="text-center header2 my-4">No Class found</h2>
          <p class="my-4 medbrownparagraph text-center">
            Link to a course by asking an administrator for the link code
          </p>
        </div>
      </div>
      <div class="row gap-5 align-items-center flex-wrap mx-4">
        <b-card
          v-for="(course, index) in courses"
          :key="index"
          class="col card-width"
          @click="gridClicked(index)"
        >
          <div class="row">
            <div class="col-md-6">
              <img
                class="img-fluid img-control m-0"
                :src="course ? course.feature_image : ''"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column">
                <h3 class="text-18">{{ course.title }}</h3>
                <p class="mb-1 medbrownparagraph">
                  <span class="lightgraytext">
                    Class code:
                    {{ course.course_code ? course.course_code : '' }}</span
                  >
                </p>
                <p class="my-md-2 my-0 medbrownparagraph">
                  <span class="lightgraytext">
                    Start Date:
                    {{ course.start_date | DateTimeFormat }}</span
                  >
                </p>
                <div class="van">
                  <p class="text-14">
                    {{ course ? course.description : '' }}
                  </p>
                </div>

                <p class="mb-0 mt-4 text-14">
                  {{ course ? course.number_of_student_enrolled : '' }} Enrolled
                </p>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalItems"
      :per-page="perPage"
      align="center"
      class="my-0 pb-3"
      @click="changePage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      noCourse: false,
      page: 1,
      perPage: 50,
      isLoading: false,
    }
  },
  mounted() {
    this.getAllCourse()
  },
  methods: {
    async getAllCourse() {
      this.isLoading = true
      try {
        const courses = await this.$axios.$get(
          `course-v/get-my-courses?=${this.page}&size=${this.perPage}`
        )
        this.courses = courses
        if (this.courses.length <= 0) {
          this.noCourse = true
        }
      } catch (e) {
        console.log(e)
        this.noCourse = true
      } finally {
        this.isLoading = false
      }
    },
    gridClicked(i) {
      console.log(this.courses[i]._id)
      this.$router.push(`myLearning/${this.courses[i]._id}`)
    },
  },
}
</script>

<style scoped>
.van {
  overflow: hidden;
  height: 40px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}
.custom-tabs {
  /* border-bottom: 0.2px solid #828282; */
  margin: 0rem 0rem;
  width: 100%;
  padding: 0;
  flex-wrap: nowrap !important;
  background: #e5e5e5;
}
.card-width {
  min-width: 365px;
  max-width: 610px;
  cursor: pointer;
}
.img-control {
  height: 100%;
}
</style>