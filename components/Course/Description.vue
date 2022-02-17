<template>
  <div v-if="Object.keys(courseDetail)">
    <div class="border-bottom py-4 px-md-5 px-3">
      <h2 class="brown24 my-3 graytext">Description</h2>
      <div
        class="brownparagraph darktext"
        v-html="courseDetail.long_description"
      ></div>
    </div>

    <div class="px-md-5 px-3 pb-5">
      <h2 class="brown24 my-3 graytext">Scheme of work</h2>

      <p class="lightgraytext medbrownparagraph d-flex align-items-center">
        <span
          class="iconify"
          data-icon="dashicons:info"
          data-width="20"
          data-height="20"
        ></span>

        <span class="mx-2">
          Here’s where you add course content—like lectures, course sections,
          assignments, and more. Click a + icon on the left to get
          started.</span
        >
      </p>
      <div>
        <div @click="addScheme">
          <b-icon icon="plus-square"></b-icon>
        </div>

        <div
          class="fullborder p-3 my-2"
          v-for="(scheme, index) in schemeOfWork"
          :key="index"
        >
          <div v-for="(newscheme, index) in addedScheme" :key="index">
            <div class="d-flex">
              {{ newscheme.name }}
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <div class="d-flex align-items-center h-100">
                <h2 class="brown18 bold700">New Section</h2>
              </div>
            </div>
            <div class="form-group col-md-10" ref="clearscheme">
              <div class="my-3">
                <label>Title</label>
                <input
                  v-model="scheme.title"
                  type="text"
                  class="form-control"
                  placeholder="Enter A Title"
                />
              </div>
              <div class="my-3">
                <label>Objective</label>
                <input
                  v-model="scheme.objective"
                  type="text"
                  class="form-control"
                  placeholder="Objective"
                />
              </div>
            </div>
          </div>

          <div class="py-3 d-flex justify-content-end">
            <button class="btn medbrownparagraph" @click="deleteCurrent(index)">
              Cancel
            </button>
            <button
              class="btn mainbtn medbrownparagraph py-2 rounded px-3"
              @click="postScheme"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schemeOfWork: [],
      addedScheme: [],
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
      const temp = this.schemeOfWork
      temp.push({
        title: '',
        objective: '',
      })

      this.schemeOfWork = temp
      console.log(this.schemeOfWork)
    },
    deleteCurrent(index) {
      this.schemeOfWork.splice(index, 1)
    },
    postScheme() {
      this.addedScheme.push({
        name: this.schemeOfWork.title,
      })
      console.log('added')
    },
  },
}
</script>

<style>
</style>