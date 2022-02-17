<template>
  <div class="mx-3">
    <filter-component>
      <template #besideFilterButton>
        <div>
          <button
            class="btn py-3 mainbtndashboard medbrownparagraph"
            v-b-modal.addinstructor
          >
            Add Instructor
          </button>

          <b-modal id="addinstructor" centered hide-header hide-footer>
            <h2 class="brownparagraph bold700 text-center my-3">
              Add Instructor
            </h2>
            <div class="content px-md-5 my-2">
              <v-select :options="options"></v-select>
            </div>
            <div class="content px-md-5 my-2">
              <v-select :options="options"></v-select>
            </div>

            <div class="d-flex justify-content-center mx-5 my-3">
              <button class="btn mainbtndashboard">Add Instructor</button>
            </div>
          </b-modal>
        </div>
      </template>

      <template #default="{ visualization }">
        <table-component
          :items="courses"
          v-if="visualization === 'list'"
          :fields="fields"
          :dropdownItem="dropdownItem"
          @row-clicked="onRowClicked"
          @Edit="handleEdit"
          @Delete="handleDelete"
        />
        <div class="row" v-else>
          <grid-component
            :data="courses"
            v-for="(courses, index) in courses"
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
      schemeOfWork: [{ title: '', objective: 'objective' }],
    }
  },
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    addScheme() {
      this.schemeOfWork.push({
        title: '',
        objective: '',
      })
      console.log(this.schemeOfWork)
    },
    deleteCurrent(index) {
      this.schemeOfWork.splice(index, 1)
    },
  },
}
</script>

<style>
</style>