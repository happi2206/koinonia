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

          <b-modal id="addStudent" centered hide-header hide-footer>
            <h2 class="brownparagraph bold700 text-center my-3">Add Student</h2>
            <div class="content px-md-5 my-2">
              <v-select :options="options"></v-select>
            </div>
            <div class="content px-md-5 my-2">
              <v-select :options="options"></v-select>
            </div>

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
    return {}
  },

  async fetch() {
    try {
      const students = await this.$axios.$get(
        `course-v/get-all-course-student?course_id=${this.$route.params.course}&page=1&size=50`
      )
      console.log('students are', students)

      // this.$toast.success('courses')
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
</style>