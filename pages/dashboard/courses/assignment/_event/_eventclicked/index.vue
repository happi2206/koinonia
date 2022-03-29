<template>
  <div class="m-5">
    <preloader :show="addPreloader" />
    <div v-if="isLoading" style="margin-top: 10rem">
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <div class="d-flex mynav align-items-center justify-content-between">
        <div class="d-flex" style="font-size: 0.95rem; font-family: Brown">
          <span
            ><b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon
          ></span>
          <a
            href="#"
            @click.prevent="$router.go(-1)"
            class="bold700 mainbluecolor mb-0 d-flex align-items-center"
          >
            <span>Exercise</span>
            <span
              class="iconify mainbluecolor"
              data-icon="dashicons:arrow-left-alt2"
            ></span>
          </a>
          <span class="mainbluecolor bold700">{{ temp_name }}</span>
        </div>

        <div class="mr-4">
          <button
            v-b-modal.Edit-Assignment
            class="btn mx-2 mainbtndashboard medbrownparagraph"
          >
            Edit Exercise
          </button>
          <button
            v-b-modal.Publish-Assignment
            v-if="btnshow"
            class="btn mainbtndashboard medbrownparagraph"
          >
            Publish
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div class="container-fluid">
          <div class="card pt-4">
            <div class="card-body">
              <div class="d-flex align-content-center align-items-center">
                <div class="flex-grow-1">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      flex-wrap
                      mb-3
                    "
                  >
                    <div class="class-name">{{ temp_name }}</div>
                  </div>
                  <hr />
                  <!-- ***************************************************************** -->
                </div>
              </div>

              <div class="row text-14">
                <!-- <div class="col-md-6 mb-2 text-capitalize">Class: {{}}</div> -->
                <div class="col-md-6 mb-2 text-capitalize">
                  Type: {{ temp_type }}
                </div>
                <!-- <div class="col-md-6 mb-2 text-capitalize">
                  Obtainable Score: {{ obtainable_score }}
                </div> -->
                <div class="col-md-6 mb-2 text-capitalize">
                  Status: {{ temp_status }}
                </div>
                <div class="col-md-6 mb-2 text-capitalize">
                  Available Date: {{ temp_available_date | DateTimeFormat }}
                </div>
                <div class="col-md-6 mb-2 text-capitalize">
                  Due Date: {{ temp_due_date | DateTimeFormat }}
                </div>
                <!-- <div class="col-md-4 mb-2 text-capitalize"></div>
              <div class="col-md-4 mb-2 text-capitalize"></div> -->
              </div>
              <div><b-badge></b-badge></div>
            </div>
          </div>

          <!-- *********************************switch tabs**************************************** -->

          <div class="card mt-3">
            <b-tabs content-class="mt-3" class="custom-tabs">
              <b-tab title="Details" active>
                <div id="pills-tabContent" class="tab-content card-body">
                  <div>
                    <div>
                      <div class="row">
                        <div class="col-xl-7 mb-3 mb-xl-0">
                          <div class="mb-2" style="font-size: 0.95rem">
                            <label class="form-control-label mb-2"
                              >Instruction</label
                            >
                            <div class="descriptionContainer text-14 text-dark">
                              <span
                                ><p
                                  v-html="temp_instruction"
                                  style="font-size: 0.95rem"
                                ></p
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-5 border-xl-left border-gray">
                          <div class="row">
                            <div
                              class="col-xl-6 col-lg-4 col-md-3 col-sm-4 mb-3"
                            >
                              <div class="text-12 text-light">
                                Total Obtainable Score
                              </div>
                              <div class="text-14 text-dark">
                                {{ temp_obtainable_score }} Marks
                              </div>
                            </div>
                            <div
                              class="col-xl-6 col-lg-4 col-md-3 col-sm-4 mb-3"
                            >
                              <div class="text-12 text-light">
                                Students submitted
                              </div>
                              <div class="text-14 text-dark">
                                {{ temp_number_of_submission }} Student(s)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!---->
                  <!---->
                </div>
              </b-tab>
              <b-tab title="Attachments">
                <div class="pt-4 pb-5 text-14">
                  <!-- <p>Offline Sample</p>
                  <span class="d-flex align-items-center mb-2">
                    Click below to access file &nbsp;
                    <span
                      class="iconify"
                      data-icon="bi:arrow-down-circle-fill"
                    ></span>
                  </span>

                  <div class="d-flex">
                    <div class="text-center px-3 py-3 file-display">
                      <a
                        :href="file_path"
                        style="font-size: 1rem"
                        target="_blank"
                        >Document</a
                      >
                    </div>
                  </div> -->

                  <div v-if="file_path" class="file-indicator w-25 ml-2">
                    <a :href="file_path" target="_blank">
                      <div class="p-3">
                        <span
                          class="iconify"
                          data-icon="akar-icons:file"
                          data-width="64"
                          data-height="64"
                        ></span>
                      </div>
                    </a>
                    <span class="text-12">{{ file_name }}</span>
                  </div>

                  <div v-else>
                    <p class="text-14">No file attached to this exercise</p>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Submissions">
                <div class="pt-4 px-3 pb-5 text-14">
                  <table-component
                    :items="assignments"
                    :fields="assignmentFields"
                  >
                    <template #delete>
                      <span
                        class="iconify"
                        data-icon="gridicons:trash"
                        data-width="16"
                        data-height="16"
                      ></span>
                    </template>
                  </table-component>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>

        <b-modal
          id="Edit-Assignment"
          title="Edit Assignment"
          centered
          hide-footer
          ref="assignmentModal"
        >
          <form class="modabody p-4">
            <div>
              <label for="" class="d-block medbrownparagraph graytext"
                >Exercise Name
              </label>

              <input
                v-model="name"
                class="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Exercise Instruction
              </label>

              <client-only>
                <ckeditor-nuxt
                  v-model="instruction"
                  :config="editorConfigForSection"
                />
              </client-only>
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Exercise Type
              </label>
              <select
                class="form-control"
                aria-placeholder="Select excercise type"
                v-model="type"
              >
                <option value=""></option>
                <option value="essay">Essay</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Start Date
              </label>
              <v-date-picker
                v-model="start_date"
                :model-config="modelConfig"
                mode="date"
              >
                <template #default="{ togglePopover }">
                  <span @click="togglePopover()">
                    <input
                      v-model="start_date"
                      class="form-control form-control-md"
                      style="background: #fbfdfe"
                      placeholder="Start Date"
                    />
                  </span>
                </template>
              </v-date-picker>
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Obtainable Score
              </label>
              <input
                v-model="obtainable_score"
                type="number"
                class="form-control border-right"
                placeholder="eg 100"
              />
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Due Date
              </label>
              <v-date-picker
                v-model="due_date"
                :model-config="modelConfig"
                mode="date"
              >
                <template #default="{ togglePopover }">
                  <span @click="togglePopover()">
                    <input
                      v-model="due_date"
                      class="form-control form-control-md"
                      style="background: #fbfdfe"
                      placeholder="Due Date"
                    />
                  </span>
                </template>
              </v-date-picker>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Available Date
                </label>
                <v-date-picker
                  v-model="available_date"
                  :model-config="modelConfig"
                  mode="date"
                >
                  <template #default="{ togglePopover }">
                    <span @click="togglePopover()">
                      <input
                        v-model="available_date"
                        class="form-control form-control-md"
                        style="background: #fbfdfe"
                        placeholder="Available Date"
                      />
                    </span>
                  </template>
                </v-date-picker>
              </div>
            </div>
            <div class="my-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >Duraton
              </label>
              <div class="input-group">
                <input
                  v-model="set_duration"
                  type="number"
                  class="form-control border-right"
                  placeholder="Due Date"
                />
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
                  @click.prevent="editAssignment"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </b-modal>
      </div>

      <b-modal
        id="Publish-Assignment"
        title="Publish Exercise"
        centered
        hide-footer
        ref="publishPromptModal"
      >
        <div>
          <p>Are you sure you sure you want to publish exercise?</p>
          <div class="d-flex justify-content-center">
            <button
              class="
                btn
                px-md-4 px-3
                py-2
                mr-4
                mainbtndashboard
                medbrownparagraph
              "
              @click.prevent="makePublish"
            >
              Yes
            </button>

            <button
              class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
              @click="closeModal"
            >
              No
            </button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  scrollToTop: true,
  data() {
    return {
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      },
      components: {
        'ckeditor-nuxt': () => {
          if (process.client) {
            return import('@blowstack/ckeditor-nuxt')
          }
        },
      },

      editorConfigForSection: {
        title: {
          // placeholder: 'h1',
        },
        placeholder: 'Add Header / Description / Instruction',
        removePlugins: ['Title'],
      },
      isLoading: false,
      btnshow: true,
      file_path: '',
      instruction: '',
      name: '',
      temp_name: '',
      obtainable_score: '',
      temp_obtainable_score: '',
      status: '',
      temp_status: '',
      file_name: '',
      type: '',
      temp_type: '',
      dateHandle: false,
      addPreloader: false,
      available_date: '',
      temp_available_date: '',
      number_of_submission: '',
      temp_number_of_submission: '',
      due_date: '',
      temp_due_date: '',
      start_date: '',
      set_duration: 0,
      assignmentFields: [
        { key: 'Full Name', sortable: true },
        { key: 'Started Exercise', sortable: true },
        { key: 'Status', sortable: true },
        { key: 'Score', sortable: true },
      ],
    }
  },
  async fetch() {
    this.isLoading = true

    try {
      const assignment = await this.$axios.get(
        `course-v/get-an-assignment?assignment_id=${this.$route.params.eventclicked}`
      )

      let assignmentContent = assignment.data

      this.file_path = assignmentContent.file_path
      this.instruction = assignmentContent.instruction
      this.temp_instruction = assignmentContent.instruction
      this.name = assignmentContent.name
      this.temp_name = assignmentContent.name
      this.obtainable_score = assignmentContent.obtainable_score
      this.temp_obtainable_score = assignmentContent.obtainable_score
      // this.available_date = assignmentContent.available_date
      this.temp_available_date = assignmentContent.available_date
      this.status = assignmentContent.status
      this.temp_status = assignmentContent.status
      this.file_name = assignmentContent.file_name
      // this.due_date = assignmentContent.due_date
      this.temp_due_date = assignmentContent.due_date
      this.number_of_submission = assignmentContent.number_of_submission
      this.temp_number_of_submission = assignmentContent.number_of_submission
      console.log(this.status)
      this.type = assignmentContent.type
      this.temp_type = assignmentContent.type
      if (this.status === 'publish') {
        this.btnshow = false
        this.temp_status = 'Published'
      } else {
        this.btnshow = true
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    async editAssignment() {
      this.addPreloader = true
      console.log('yay')

      let isoFirstDate
      let isoSecondDate
      let isoThirdDate

      if (this.available_date !== '') {
        let start = this.available_date
        let dateStr = start
        let date = new Date(dateStr)
        isoFirstDate = date.toISOString()
      } else {
        isoFirstDate = null
      }

      if (this.due_date !== '') {
        let end = this.due_date
        let dateString = end
        let secondDate = new Date(dateString)
        isoSecondDate = secondDate.toISOString()
      } else {
        isoSecondDate = null
      }

      if (this.start_date !== '') {
        let end = this.start_date
        let dateString = end
        let secondDate = new Date(dateString)
        isoSecondDate = secondDate.toISOString()
      } else {
        isoSecondDate = null
      }

      try {
        let response = await this.$axios.patch(
          `course-v/edit-assignment?assignment_id=${this.$route.params.eventclicked}`,
          {
            name: this.name,
            instruction: this.instruction,
            type: this.type,
            start_date: isoThirdDate,
            due_date: isoSecondDate,
            available_date: isoFirstDate,
            set_duration: this.set_duration,
            obtainable_score: this.obtainable_score,
            status: this.status,
          }
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        console.log(error)
        this.$toast.error(error)
      } finally {
        this.addPreloader = false
        this.$refs['assignmentModal'].hide()
      }
    },

    async makePublish() {
      this.addPreloader = true

      try {
        await this.$axios.patch(
          `course-v/edit-assignment?assignment_id=${this.$route.params.eventclicked}`,
          {
            name: this.name,
            status: 'publish',
          }
        )

        this.$toast.success('Exercise published successfully')
      } catch (error) {
        console.log(error)
        this.$toast.error(error)
      } finally {
        this.addPreloader = false
        this.$refs['assignmentModal'].hide()
      }
    },

    // async deleteAssignment() {
    //   try {
    //     let response = await this.$axios.delete(
    //       `course-v/delete-assignment?assignment_id=${this.$route.params.eventclicked}`
    //     )

    //     this.$toast.success(response.data.message)
    //     this.$refs['publishPromptModal'].hide()
    //     history.back()
    //   } catch (error) {
    //     this.$toast.error(error)
    //   }
    // },

    closeModal() {
      this.$refs['publishPromptModal'].hide()
    },

    showDate() {
      if (this.type === 'offline') {
        this.dateHandle = true
      } else {
        this.dateHandle = false
      }
    },
  },

  watch: {
    type(value) {
      this.showDate()
    },
  },
}
</script>

<style scoped>
.mynav {
  margin-top: 6rem;
  padding-bottom: 2rem;
}

.file-display {
  background: #ecf7ff;
  border: 2px dashed #ffc107;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffc107;
}

.class-name {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
}

.form-control-label {
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #8f9aa3;
  margin-bottom: 0.25rem;
}
.text-light {
  color: #8f9aa3 !important;
}
.file-indicator {
  cursor: pointer;
}
</style>