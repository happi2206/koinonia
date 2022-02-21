<template>
  <div>
    <filter-component @search="searchInstructors">
      <template #besideFilterButton>
        <div class="ml-md-5">
          <button
            class="btn py-2 mainbtndashboard medbrownparagraph"
            v-b-modal.addInstructor
          >
            Add Instructor
          </button>
          <b-modal
            id="addInstructor"
            centered
            title="Add Instructor"
            hide-footer
          >
            <div class="content px-md-3 my-2">
              <div class="my-3">
                <v-select
                  :options="instructors"
                  v-model="addInstructor"
                  placeholder="Select instructor"
                  :reduce="(option) => option.id"
                >
                  <template #option="{ surname, other_name }">
                    <span>{{ surname }} {{ other_name }}</span>
                  </template>
                </v-select>
              </div>
              <!-- <div class="my-3">
                        <label class="medbrownparagraph">Designation</label>
                        <v-select :options="designations"></v-select>
                      </div> -->
            </div>

            <div class="d-flex justify-content-center mx-5 my-3">
              <button
                class="btn mainbtndashboard"
                @click="addInstructortoCourse"
              >
                Add Instructor
              </button>
            </div>
          </b-modal>
        </div>
      </template>
      <template #default="{ visualization }">
        <table-component
          :items="course_instructors"
          :fields="instructorfields"
          :busy="busy"
          v-if="visualization === 'list'"
        />

        <div class="row" v-else>
          <student-instructors-grid
            :data="instructors"
            v-for="(instructor, index) in course_instructors"
            :key="index"
          ></student-instructors-grid>
        </div>
      </template>
    </filter-component>
  </div>
</template>

<script>
export default {
  props: {
    course_instructors: {
      type: Object,
    },
  },
}
</script>

<style>
</style>