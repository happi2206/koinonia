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
        <div @click="showSchemeOfWork = true">
          <b-icon icon="plus-square"></b-icon>
        </div>

        <div class="fullborder p-3 my-2">
          <div class="row" v-if="showSchemeOfWork">
            <div class="col-md-2">
              <div class="d-flex align-items-center h-100">
                <h2 class="brown18 bold700">New Section</h2>
              </div>
            </div>
            <div class="form-group col-md-10" ref="clearscheme">
              <div class="my-2">
                <label>Title</label>
                <input
                  v-model="schemeOfWork.title"
                  type="text"
                  class="form-control"
                  placeholder="Enter A Title"
                />
              </div>
              <div class="my-2">
                <label>Objective</label>
                <input
                  v-model="schemeOfWork.objective"
                  type="text"
                  class="form-control"
                  placeholder="Objective"
                />
              </div>
            </div>
          </div>

          <div class="py-1 d-flex justify-content-end" v-if="showSchemeOfWork">
            <button class="btn medbrownparagraph" @click="deleteCurrent(index)">
              Cancel
            </button>
            <button
              class="btn mainbtn medbrownparagraph py-2 rounded px-3"
              @click="handleAdd"
            >
              Add
            </button>
          </div>

          <!-- add new section -->

          <div v-if="addedSection">
            <div class="d-flex align-items-center">
              <h2 class="brown18 bold700 mb-0 mx-3">New Section:</h2>

              <p class="brownparagraph mb-0 mx-3">{{ schemeOfWork.title }}</p>

              <span @click="showSchemeOfWork = true">
                <b-icon icon="pencil" class="mx-2"></b-icon
              ></span>
              <span @click="deletescheme">
                <b-icon icon="trash" class="mx-2"></b-icon
              ></span>
            </div>
            <div v-if="addSchemeType">
              <div class="d-flex align-items-center my-4">
                <div class="mx-3 brownparagraph bold700 mainbluecolor mb-0">
                  <span @click="lectureBox"> Lecture</span>

                  <div class="row" v-if="showLecture">
                    <div class="col-md-2">
                      <div class="d-flex align-items-center h-100">
                        <h2 class="brown18 bold700">Lecture 1:</h2>
                      </div>
                    </div>
                    <div class="form-group col-md-10" ref="clearscheme">
                      <div class="my-2">
                        <label>Title</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter A Title"
                        />
                      </div>
                      <div class="my-2">
                        <label>Objective</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Objective"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mx-3 brownparagraph bold700 mainbluecolor mb-0">
                  Quiz
                </div>
                <div class="mx-3 brownparagraph bold700 mainbluecolor mb-0">
                  Assignment
                </div>
              </div>

              <div @click="editSchemeType">
                <b-icon icon="plus-square"></b-icon>
              </div>
            </div>
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
      schemeOfWork: { title: '', objective: '' },
      addedScheme: [],
      showSchemeOfWork: false,
      addedSection: false,
      addSchemeType: true,
    }
  },
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    addScheme() {},
    deleteCurrent(index) {},
    handleAdd() {
      this.showSchemeOfWork = false
      this.addedSection = true
      console.log('added')
    },
    deletescheme() {
      this.schemeOfWork.title = ''
      this.schemeOfWork.objective = ''
      this.showSchemeOfWork = false
    },
  },
}
</script>

<style>
</style>