<template>
  <div class="mx-3">
    <filter-component>
      <template #besideFilterButton>
        <div>
          <button
            class="btn py-3 mainbtndashboard medbrownparagraph"
            v-b-modal.addStudent
          >
            Add Student
          </button>

          student: { other_name: '', avater: '', surname: '', status: '',
          gender: '', phone: '', salutation: '', send_latest_updates: false,
          user_type: { user_type: 'flat_user', link_code: 'string', email:
          'user@example.com', type: 'student', }, },

          <b-modal id="addStudent" centered hide-header hide-footer>
            <h2 class="largebrownparagraph bold700 my-3">Create Event</h2>
            <form class="modabody" @submit.prevent="addStudent">
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Student Name
                </label>

                <input
                  type="text"
                  v-model="student.other_name"
                  required
                  placeholder="Name of student"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Last Name
                </label>
                <input
                  type="text"
                  v-model="student.surname"
                  placeholder="Surname"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <div class="">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Marital status
                  </label>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marital-status"
                      v-model="student.status"
                      value="single"
                    />
                    <label class="form-check-label" for="single">Single</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marital-status"
                      v-model="student.status"
                      value="married"
                    />
                    <label class="form-check-label" for="married"
                      >Married</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marital-status"
                      v-model="student.status"
                      value="divorced"
                    />
                    <label class="form-check-label" for="divorced"
                      >Divorced</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="marital-status"
                      v-model="student.status"
                      value="widowed"
                    />
                    <label class="form-check-label" for="widowed"
                      >Widowed</label
                    >
                  </div>
                </div>
              </div>
              <div class="my-4">
                <div class="">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Gender
                  </label>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Male"
                      v-model="student.gender"
                      value="single"
                    />
                    <label class="form-check-label" for="single">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Female"
                      v-model="student.gender"
                      value="Female"
                    />
                    <label class="form-check-label" for="single">Female</label>
                  </div>
                </div>
              </div>

              <div class="my-4">
                <div class="d-flex justify-content-center">
                  <button
                    class="
                      btn
                      px-md-4 px-3
                      py-2
                      mainbtndashboard
                      medbrownparagraph
                    "
                  >
                    Add Student
                  </button>
                </div>
              </div>
            </form>
            <div class="d-flex justify-content-center mx-5 my-3">
              <button class="btn mainbtndashboard">Add Student</button>
            </div>
          </b-modal>
        </div>
      </template>

      <template #default="{ visualization }">
        <table-component
          :items="students"
          v-if="visualization === 'list'"
          :fields="fields"
          :dropdownItem="dropdownItem"
        />
        <div class="row" v-else>
          <grid-component
            :data="students"
            v-for="(students, index) in students"
            :key="index"
            @grid-clicked="onGridClicked"
          ></grid-component>
        </div>
      </template>
    </filter-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        other_name: '',
        surname: '',
        status: '',
      },
    }
  },

  async fetch() {
    try {
      const students = await this.$axios.$get(
        `course-v/get-all-course-student?course_id=${this.$route.params.course}&page=1&size=50`
      )
      console.log('students from component are', students)

      // this.$toast.success('courses')
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
</style>