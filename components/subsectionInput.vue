<template>
  <div>
    <div v-show="subSection">
      <div class="lecture-cover pl-3 pt-3 mt-3 mx-3">
        <div>
          <div>
            <div>
              <form>
                <div>
                  <div class="fullborder p-3 my-2" style="width: 98%">
                    <div>
                      <div class="row">
                        <div class="col p-0">
                          <div class="d-flex align-items-start h-100">
                            <h2
                              style="margin-bottom: 0"
                              class="text-16 ml-4 bold700"
                            >
                              New Section :
                            </h2>
                          </div>
                        </div>
                        <div
                          class="form-group col-md-10 pl-0 pr-2"
                          ref="clearscheme"
                        >
                          <div class="my-2 text-16">
                            <input
                              v-model="innerSection.title"
                              required
                              type="text"
                              class="form-control form-control-width"
                              style="
                                border: 1px solid #000000;
                                border-radius: 0rem;
                              "
                              placeholder="Enter A Title"
                            />
                          </div>
                          <div class="my-2 text-16">
                            <input
                              v-model="innerSection.objective"
                              required
                              type="text"
                              class="form-control form-control-width"
                              style="
                                border: 1px solid #000000;
                                border-radius: 0rem;
                              "
                              placeholder="Objective"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="py-1 pr-4 d-flex justify-content-end">
                        <button
                          class="btn medbrownparagraph"
                          style="
                            border-radius: none;
                            width: 102px;
                            text-align: center;
                          "
                          @click.prevent="removeInnerSection"
                        >
                          Cancel
                        </button>
                        <button
                          class="mainbtn rounded medbrownparagraph py-2 px-3"
                          style="
                            border-radius: none;
                            width: 102px;
                            text-align: center;
                          "
                          @click.prevent="openInnerSection"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <added-inner-section
      v-show="showInnerSection"
      :innerSection="innerSection"
      :innersections="innersections"
      :index="index"
      @deleteIndex="deleteHandler"
      @editInnerSection="editHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerSection: {
        title: '',
        objective: '',
      },
      innersections: [],
      showInnerSection: false,
      subSection: true,
    }
  },
  props: {
    index: {
      type: Number,
    },
  },
  // beforeCreate() {
  //   this.getSchemeOfWork()
  // },
  methods: {
    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )

        for (const iterator of await response.section) {
          this.innersections = iterator.section

          console.log(`subInput`, this.innersections)
        }

        if (this.innersections.length > 0) {
          this.subSection = false
          this.showInnerSection = true
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    },
    removeInnerSection() {
      this.$emit('innerIndex', this.innerIndex)
    },
    openInnerSection() {
      this.showInnerSection = true
      this.subSection = false
    },
    deleteHandler(e) {
      this.$emit('deleteInnerSection', e)
    },
    editHandler(e) {
      this.subSection = e
      this.showInnerSection = false
    },
  },
  watch: {
    innerSection: {
      handler(newVal) {
        this.$emit('innerSection', newVal)
      },
      deep: true,
    },
  },
}
</script>

<style>
.corner {
  border: 1px solid #000000;
  padding: 1.5rem;
  margin-left: 1rem;
}
.corner input {
  max-width: 750px;
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
  max-width: 950px;
  /* margin-left: 3rem; */
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
}

.lecture-cover {
  background: #fff8dc;
  max-width: 95%;
  border: 0.5px solid #333333;
}

.lecture-cover input {
  max-width: 700px;
}
.formfix {
  margin-left: 2.2rem;
}

.controlborder {
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.form-control-width {
  max-width: 50%;
}
</style>