<template>
  <filter-component @search="SearchText" @view-by="sortInstructors">
    <template #besideFilterButton>
      <div class="ml-md-5">
        <!-- <button class="btn py-2 mainbtndashboard medbrownparagraph">
          Add Assignment
        </button> -->

        <nuxt-link
          class="btn mainbtndashboard medbrownparagraph"
          to="/dashboard/courses/addAssignment"
          >Add Assignment</nuxt-link
        >
      </div>
    </template>

    <template #default="{ visualization }">
      <table-component
        :items="assignments"
        :fields="assignmentFields"
        :busy="busy"
        @page-changed="handlePage"
        :perPage="perPage"
        :totalItems="totalItems"
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
</template>

<script>
export default {
  data() {
    return {
      assignmentFields: [
        { key: 'Exercise Name', sortable: true },
        { key: 'Exercise Type', sortable: true },
        { key: 'Date Available', sortable: true },
        { key: 'Due Date', sortable: true },
        { key: 'Submissions', sortable: true },
      ],
    }
  },
}
</script>

<style>
</style>