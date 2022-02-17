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
            <h2 class="largebrownparagraph bold700 my-3">Create Event</h2>
            <form class="modabody" @submit.prevent="addEvent">
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Event Name
                </label>

                <input
                  type="text"
                  v-model="events.name"
                  required
                  placeholder="Event title"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Description
                </label>
                <input
                  type="text"
                  v-model="events.description"
                  placeholder="Description"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <div class="row">
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >Start Date
                    </label>
                    <input
                      type="date"
                      v-model="events.start_date"
                      required
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >Start Time
                    </label>
                    <input
                      type="time"
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>
              </div>
              <div class="my-4">
                <div class="row">
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Date
                    </label>
                    <input
                      type="date"
                      v-model="events.end_date"
                      required
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Time
                    </label>
                    <input
                      type="time"
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
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
                    @click="sendEvent"
                  >
                    Add Event
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
    return {}
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