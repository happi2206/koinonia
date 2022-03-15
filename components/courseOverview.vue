<template>
  <div>
    <div>
      <div>
        <div>
          <div class="px-md-5 px-3 pb-3">
            <h2 class="brown24 my-3 graytext">Scheme of work</h2>
            <p
              class="lightgraytext medbrownparagraph d-flex align-items-center"
            >
              <span
                class="iconify"
                data-icon="dashicons:info"
                data-width="20"
                data-height="20"
              ></span>
              <span class="mx-2">
                Here’s where you add course content—like lectures, course
                sections, assignments, and more. Click a + icon on the left to
                get started.</span
              >
            </p>
            <div>
              <div
                v-for="(section, index) in sections"
                :key="index"
                class="plus"
                @click="showSchemeOfWork = true"
              >
                <b-icon icon="plus-square"></b-icon>
              </div>
              <div>
                <div v-if="showSchemeOfWork" class="fullborder p-3 my-2">
                  <div>
                    <div class="row">
                      <div class="col-md-2">
                        <div class="d-flex align-items-center h-100">
                          <h2 class="brown18 bold700">New Section</h2>
                        </div>
                      </div>
                      <div class="form-group col-md-10" ref="clearscheme">
                        <div class="my-2">
                          <label>Title</label>
                          <input
                            v-model="sections.title"
                            type="text"
                            class="form-control"
                            placeholder="Enter A Title"
                          />
                        </div>
                        <div class="my-2">
                          <label>Objective</label>
                          <input
                            v-model="sections.objective"
                            type="text"
                            class="form-control"
                            placeholder="Objective"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="py-1 d-flex justify-content-end">
                      <button
                        class="btn medbrownparagraph"
                        @click="showSchemeOfWork = false"
                      >
                        Cancel
                      </button>
                      <button
                        class="btn mainbtn medbrownparagraph py-2 rounded px-3"
                        @click="handleAdd"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- added section -->
          <div class="corner second-section brown18 mb-4" v-if="sectionExist">
            <div class="d-flex align-items-center mb-4">
              <h2 class="brown18 bold700 mb-0 mx-3">{{ heading }}</h2>
              <span style="color: #333333">{{ body }}</span>
              <span class="ml-5" style="cursor: pointer"
                ><span class="iconify" data-icon="bxs:pencil"></span
              ></span>
              <span class="ml-2 mr-2" style="cursor: pointer"
                ><span class="iconify" data-icon="bxs:trash-alt"></span
              ></span>
            </div>

            <div v-if="addSchemeType" class="newLecture fullborder ml-5 mb-5">
              <div
                v-b-toggle.collapse-1
                class="
                  py-3
                  px-4
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div>
                  <span style="font-size: 16px; font-weight: 600">
                    lecture 1:
                  </span>
                  <span style="font-size: 16px" class="text-capitalize ml-3">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <span
                  class="iconify"
                  data-icon="ph:caret-down"
                  data-width="22"
                  data-height="22"
                ></span>
              </div>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card class="mx-3 controlborder">
                  <p class="card-text">Collapse contents Here</p>
                </b-card>
              </b-collapse>
            </div>

            <div class="plus mb-2">
              <b-icon icon="plus-square" @click="createLecture"></b-icon>
            </div>

            <!-- **************************************************************** -->
            <div class="d-flex align-items-center">
              <div
                class="d-flex align-items-center"
                v-if="lecture"
                style="cursor: pointer"
              >
                <span v-if="times" @click="cancelLecture"
                  ><span
                    class="iconify"
                    data-icon="la:times"
                    data-width="28"
                    data-height="28"
                  ></span
                ></span>
                <div
                  class="d-flex align-items-center headings-border fullborder"
                >
                  <p class="mb-0 heading bold700" @click="showLecture">
                    Lecture
                  </p>
                  <p class="mb-0 headings bold700" @click="showquiz">Quiz</p>
                  <p class="mb-0 headings bold700" @click="showAssignment">
                    Assignment
                  </p>
                </div>
              </div>
            </div>
            <!-- *********************************************************************** -->

            <div class="d-flex" v-if="lectureCover">
              <span
                v-if="times"
                class="plus mt-5 mr-3"
                @click="cancelAddLecture"
                ><span
                  class="iconify"
                  data-icon="la:times"
                  data-width="28"
                  data-height="28"
                ></span
              ></span>
              <div class="lecture-cover pl-3 pt-3 mt-3">
                <div class="d-flex">
                  <span style="font-size: 16px">Lecture: 1</span>
                  <input
                    v-model="lectureTitle"
                    placeholder="Enter a title"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="ml-5 mt-4">
                  <input
                    v-model="lectureDescription"
                    type="text"
                    class="form-control formfix"
                    placeholder="Description"
                  />
                </div>
                <div class="d-flex justify-content-end py-3">
                  <button
                    class="btn medbrownparagraph mr-3"
                    @click="hideLecture"
                  >
                    Cancel
                  </button>
                  <div class="mr-3">
                    <button
                      class="
                        btn
                        mainbtn
                        medbrownparagraph
                        mr-4
                        py-2
                        rounded
                        px-3
                      "
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- **************Quiz cover********************** -->

            <div class="d-flex" v-if="quizCover">
              <span v-if="times" class="plus mt-5 mr-3" @click="cancelAddQuiz"
                ><span
                  class="iconify"
                  data-icon="la:times"
                  data-width="28"
                  data-height="28"
                ></span
              ></span>
              <div class="lecture-cover pl-3 pt-3 mt-3">
                <div class="d-flex">
                  <span style="font-size: 16px">Quiz</span>
                  <input
                    v-model="quizTitle"
                    placeholder="Enter a title"
                    type="text"
                    class="form-control ml-2"
                  />
                </div>
                <div class="ml-5 mt-4">
                  <input
                    v-model="quizDescription"
                    type="text"
                    class="form-control"
                    placeholder="Description"
                  />
                </div>
                <div class="d-flex justify-content-end py-3">
                  <button class="btn medbrownparagraph mr-3" @click="hideQuiz">
                    Cancel
                  </button>
                  <div class="mr-5">
                    <button
                      class="
                        btn
                        mainbtn
                        medbrownparagraph
                        mr-5
                        py-2
                        rounded
                        px-3
                      "
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- *******************Assignmentcover****************** -->

            <div class="d-flex" v-if="assignmentCover">
              <span
                v-if="times"
                class="plus mt-5 mr-3"
                @click="cancelAddAssignment"
                ><span
                  class="iconify"
                  data-icon="la:times"
                  data-width="28"
                  data-height="28"
                ></span
              ></span>
              <div class="lecture-cover pl-3 pt-3 mt-3">
                <div class="d-flex">
                  <span style="font-size: 16px">Assignment</span>
                  <input
                    v-model="assignmentTitle"
                    placeholder="Enter a title"
                    type="text"
                    class="form-control ml-2"
                  />
                </div>
                <div class="ml-5 mt-4">
                  <div class="ml-3">
                    <input
                      v-model="assignmentDescription"
                      type="text"
                      class="form-control ml-5"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-end py-3">
                  <button
                    class="btn medbrownparagraph mr-3"
                    @click="hideAssignment"
                  >
                    Cancel
                  </button>
                  <div class="mr-3">
                    <button
                      class="
                        btn
                        mainbtn
                        medbrownparagraph
                        mr-4
                        py-2
                        rounded
                        px-3
                      "
                    >
                      Add
                    </button>
                  </div>
                </div>
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
      showSchemeOfWork: false,
      addedSection: false,
      addSchemeType: false,
      lectureCover: false,
      quizCover: false,
      assignmentCover: false,
      lecture: false,
      times: false,
      sectionExist: false,
      sectionBorder: true,
      heading: '',
      body: '',
      lectureTitle: '',
      lectureDescription: '',
      quizTitle: '',
      quizDescription: '',
      assignmentTitle: '',
      assignmentDescription: '',

      sections: [
        {
          title: '',
          objective: '',
          item: [
            {
              title: this.lectureTitle,
              description: this.lectureDescription,
            },
          ],
        },
      ],
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
    handleAdd() {
      this.heading = this.section[i].title
      this.body = this.section[i].objective
      this.sectionExist = true
      this.showSchemeOfWork = false
      this.sectionBorder = false
    },
    deletescheme() {
      this.schemeOfWork.title = ''
      this.schemeOfWork.objective = ''
      this.showSchemeOfWork = false
    },

    hideSection() {
      showSchemeOfWork = false
    },
    showLecture() {
      this.lectureCover = true
      this.quizCover = false
      this.assignmentCover = false
      this.lecture = false
    },
    showquiz() {
      this.quizCover = true
      this.lectureCover = false
      this.assignmentCover = false
      this.lecture = false
    },
    showAssignment() {
      this.assignmentCover = true
      this.lecture = false
      this.quizCover = false
      this.lectureCover = false
    },
    hideLecture() {
      this.lectureCover = false
    },
    hideQuiz() {
      this.quizCover = false
    },
    hideAssignment() {
      this.assignmentCover = false
    },

    createLecture() {
      this.lecture = true
      this.times = true
    },
    cancelLecture() {
      this.lecture = false
    },

    cancelAddLecture() {
      this.lectureCover = false
    },

    cancelAddQuiz() {
      this.quizCover = false
    },
    cancelAddAssignment() {
      this.assignmentCover = false
    },
  },
}
</script>

<style scoped>
.grey {
  color: #828282;
}
.plus {
  cursor: pointer;
}
.corner {
  border: 1px solid #000000;
  padding: 1.5rem;
  margin-left: 1rem;
}
.corner input {
  width: 750px;
  height: 45px;
  border: 0.5px solid #ced4da;
  padding: 0 1rem;
  font-size: 16px;
}
.fix {
  margin-left: 6.4rem;
}
.lst-btn {
  margin-right: 2.2rem;
  width: 5rem;
  text-align: center;
}
.second-section {
  width: 950px;
  margin-left: 3rem;
}

.headings {
  font-size: 18px;
  color: #0734aa;
  margin-left: 5rem;
  cursor: pointer;
}
.heading {
  font-size: 18px;
  color: #0734aa;
  margin-left: 2rem;
  cursor: pointer;
}

.headings-border {
  border: 0.5px solid #333333;
  background: #fff8dc;
  width: 797px;
  height: 45px;
  margin-left: 1rem;
}

.lecture-cover {
  background: #fff8dc;
  width: 1000px;
  border: 0.5px solid #333333;
}

.lecture-cover input {
  width: 700px;
}
.formfix {
  margin-left: 2.2rem;
}

.controlborder {
  border-left: none;
  border-right: none;
  border-radius: 0;
}
</style>