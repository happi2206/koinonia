<template>
  <div v-observe-visibility="fetch">
    <preloader :show="addPreloader" />
    <div v-if="isLoading" style="margin-top: 10rem; margin-left: 2rem">
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton animation="wave" width="70%"></b-skeleton>
          <b-skeleton animation="wave" width="50%"></b-skeleton>
          <b-skeleton animation="wave" width="20%"></b-skeleton>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </div>
    <!-- <filter-component
      @search="SearchText"
      @view-by="sortInstructors"
      v-show="open"
    >
      <template #besideFilterButton>
        <div class="ml-md-5" @click="openForm">
          <button class="btn btn-height mainbtndashboard medbrownparagraph">
            Add Exercise
          </button>
        </div>
      </template>

      <table-component
        :items="assignments"
        :fields="assignmentFields"
        @row-clicked="onRowClicked"
      >
        <template #name="{ data }">
          <span class="text-capitalize">{{ data.item.name }} </span>
        </template>
        <template #cell(check_in)="data">
          <span>{{ data.item.available_date | DateFormat }}</span>
        </template>
        <template #cell(due_date)="data">
          <span>{{ data.item.due_date | DateFormat }}</span>
        </template>
      </table-component>

      <template #status> {{ data.item.status }}</template>
    </filter-component> -->

    <div v-else>
      <div
        class="d-flex mynav text-14 align-items-center justify-content-between"
      >
        <div
          @click.prevent="$router.go(-1)"
          class="d-flex"
          style="font-size: 0.95rem; font-family: Brown"
        >
          <span style="cursor: "
            ><b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon
          ></span>
          <a
            href="#"
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
      </div>
      <div>
        <!-- ****************************************************************************************** -->

        <div class="site-container headerview font14">
          <div class="conatiner">
            <div class="card trojan bg-white mb-3">
              <div class="pt-6 pl-6 ml-4 mt-6 pb-0">
                <div class="card-title text-18 ml-0">Edit Exercise</div>
              </div>
              <div class="pl-0 ml-0 d-flex">
                <ValidationObserver v-slot="{ validate }">
                  <form class="pl-6 fix-width ml-6">
                    <div class="row mt-4" style="max-width: 1020px">
                      <div>
                        <div class="mb-2">
                          <label class="form-control-label text-12"
                            >Exercise Name
                            <span class="font10 small">(Required)</span></label
                          >
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <input
                              v-model="name"
                              name="name"
                              class="form-control text-14"
                              style="background: #fbfdfe"
                              placeholder="Enter Name"
                            />
                            <span class="text-12" style="color: red">{{
                              errors[0]
                            }}</span>
                          </validation-provider>
                        </div>
                        <div class="mb-2" style="max-width: 996px">
                          <label class="form-control-label text-12"
                            >Exercise Instruction
                            <span class="font10 small">(Required)</span></label
                          >
                          <validation-provider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <client-only>
                              <ckeditor-nuxt
                                v-model="instruction"
                                :config="editorConfigForSection"
                              />
                            </client-only>
                            <span class="text-12" style="color: red">{{
                              errors[0]
                            }}</span>
                          </validation-provider>
                          <!-- <small class="text-dark"
                      >Let students know a little about the lesson in 500
                      characters or less.</small
                    > -->
                        </div>
                      </div>
                      <div class="col-12 pr-0 pl-0">
                        <hr />
                      </div>
                      <div class="w-100">
                        <div class="row">
                          <div class="col-6 mb-2">
                            <label class="form-control-label text-12"
                              >Exercise Type
                              <span class="font10 small">(Required)</span>
                            </label>
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-select
                                v-model="type"
                                class="style-chooser font-14"
                                placeholder="Select exercise type"
                                label="text"
                                :reduce="(option) => option.value"
                                :options="[
                                  { value: 'essay', text: 'Essay' },
                                  { value: 'offline', text: 'Offline' },
                                ]"
                              ></v-select>
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>

                          <div class="col-md-6 mb-2">
                            <label class="form-control-label text-12"
                              >Obtainable Score
                              <span class="font10 small">(Required)</span>
                            </label>
                            <validation-provider
                              rules="required|digits"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="obtainable_score"
                                type="text"
                                class="form-control border-right text-12"
                                style="height: 35px"
                                placeholder="eg 100"
                              />
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>

                          <div class="col-md-6 mb-2">
                            <label class="form-control-label text-12"
                              >Available Date
                              <span class="font10 small"
                                >(Required)</span
                              ></label
                            >
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
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
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>
                          <div class="col-md-6 mb-2">
                            <label class="form-control-label text-12"
                              >Due Date
                              <span class="font10 small"
                                >(Required)</span
                              ></label
                            >
                            <validation-provider
                              rules="required"
                              v-slot="{ errors }"
                            >
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
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>

                          <div class="col-md-6 mb-2">
                            <label class="form-control-label text-12"
                              >Start Date</label
                            >
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

                          <div class="col-md-6 mb-2">
                            <label class="form-control-label text-12"
                              >Set duration
                            </label>
                            <validation-provider
                              rules="digits"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="set_duration"
                                type="digit"
                                class="form-control border-right text-12"
                                style="height: 35px"
                                placeholder="eg. 30mins"
                              />
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 pl-0 pr-0">
                        <hr />
                        <div class="my-3 ml-3">
                          <p
                            style="font-size: 0.95rem"
                            class="m-0 form-control-label"
                          >
                            Upload Essay Sample
                          </p>

                          <input
                            type="file"
                            accept=".pptx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*, .pdf"
                            class="invisible"
                            ref="uploadfile"
                            @change="handleFileUpload($event)"
                            required
                          />

                          <div
                            class="
                              file-type-display
                              w-25
                              py-3
                              px-3
                              text-center
                              bg-white
                            "
                            @click.prevent="$refs.uploadfile.click()"
                          >
                            <div v-if="file" class="file-indicator">
                              <!-- <span class="cancel-btn" @click="deleteFile"
                        ><span
                          class="iconify"
                          data-icon="ic:baseline-cancel"
                          data-width="30"
                          data-height="30"
                        ></span
                      ></span> -->
                              <!-- <div class="d-flex justify-content-center p-3">
                        <span
                          class="iconify"
                          data-icon="akar-icons:file"
                          data-width="64"
                          data-height="64"
                        ></span>
                      </div> -->
                              <span class="text-14">{{ file.name }}</span>
                            </div>
                            <span v-else>Click to Upload</span>
                          </div>
                          <p class="text-grey text-14">
                            Formats: PPT, DOC, PDF, JPEG, PNG
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <b-dropdown
                        text="Save"
                        size="md"
                        class="m-4 text-12 fmbt"
                        variant="warning"
                      >
                        <b-dropdown-item-button>
                          <button
                            @click="draftAssignment"
                            class="text-14"
                            type="submit"
                          >
                            Save as Draft
                          </button></b-dropdown-item-button
                        >
                        <b-dropdown-item-button>
                          <button
                            class="text-14"
                            @click="publishAssignment"
                            type="submit"
                          >
                            Save and Publish
                          </button>
                        </b-dropdown-item-button>
                      </b-dropdown>
                      <div
                        type="button"
                        ref="runValidation"
                        id="runValidation"
                        @click="validate"
                      ></div>
                    </div>
                  </form>
                </ValidationObserver>
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
  layout: 'dashboard',
  data() {
    return {
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      },
      editorConfigForSection: {
        title: {
          // placeholder: 'h1',
        },
        placeholder: 'Add Header / Description / Instruction',
        removePlugins: ['Title'],
      },
      assignmentFields: [
        { key: 'name', sortable: true },
        { key: 'type', sortable: true },
        { key: 'available_date', sortable: true },
        { key: 'due_date', sortable: true },
        {
          key: 'number_of_submission',
          label: 'Number of submissions',
          sortable: true,
        },
        { key: 'status', sortable: true },
      ],
      open: true,
      dateHandle: false,
      showForm: false,
      assignments: [],
      fileUpload: true,

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
      file: null,
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
    }
  },
  components: {
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  methods: {
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

        // **************convert due date iso to normal date***********
        if (assignmentContent.due_date) {
          let due_date = new Date(assignmentContent.due_date)

          let year = due_date.getFullYear()

          let month = due_date.getMonth() + 1

          let dt = due_date.getDate()
          if (dt < 10) {
            dt = 0 + dt
          }
          if (month < 10) {
            month = 0 + month
          }
          this.due_date = year + '-' + month + '-' + dt
          this.temp_due_date = year + '-' + month + '-' + dt
        }

        // **************convert available_date iso to normal date***********

        if (assignmentContent.available_date) {
          let available_date = new Date(assignmentContent.available_date)
          let year = available_date.getFullYear()
          let month = available_date.getMonth() + 1
          let dt = available_date.getDate()
          if (dt < 10) {
            dt = 0 + dt
          }
          if (month < 10) {
            month = 0 + month
          }
          this.available_date = year + '-' + month + '-' + dt
        }

        // **************convert available_date iso to normal date***********

        if (assignmentContent.start_date) {
          let start_date = new Date(assignmentContent.start_date)
          let year = start_date.getFullYear()
          let month = start_date.getMonth() + 1
          let dt = start_date.getDate()
          if (dt < 10) {
            dt = 0 + dt
          }
          if (month < 10) {
            month = 0 + month
          }
          this.start_date = year + '-' + month + '-' + dt
        }

        this.temp_available_date = assignmentContent.available_date
        this.status = assignmentContent.status
        this.temp_status = assignmentContent.status
        this.file_name = assignmentContent.file_name

        this.temp_due_date = assignmentContent.due_date
        this.number_of_submission = assignmentContent.number_of_submission
        this.temp_number_of_submission = assignmentContent.number_of_submission
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

    handleFileUpload(event) {
      this.file = event.target.files[0]
      this.fileUpload = false
    },
    deleteFile() {
      this.file = null
      this.fileUpload = true
    },

    async draftAssignment() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click()
      }

      if (
        this.name !== '' &&
        this.instruction !== '' &&
        this.type !== '' &&
        this.obtainable_score !== '' &&
        this.available_date !== '' &&
        this.due_date !== '' &&
        this.set_duration !== ''
      ) {
        try {
          this.addPreloader = true
          // let attachedFile = new FormData()
          this.status = 'draft'
          let isoFirstDate
          let isoSecondDate
          let isoStartDate

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
            let startDate = new Date(dateString)
            isoStartDate = startDate.toISOString()
          } else {
            isoStartDate = null
          }

          // if (this.file !== null) {
          //   attachedFile.append('file', this.file)
          //   attachedFile.append('file_name', this.file.name)
          // }

          // if (this.start_date !== '') {
          //   attachedFile.append('start_date', isoStartDate)
          // }

          // if (this.set_duration !== '') {
          //   attachedFile.append('set_duration', this.set_duration)
          // }

          // attachedFile.append('name', this.name)
          // attachedFile.append('instruction', this.instruction)
          // attachedFile.append('type', this.type)
          // attachedFile.append('available_date', isoFirstDate)
          // attachedFile.append('due_date', isoSecondDate)
          // attachedFile.append('obtainable_score', this.obtainable_score)
          // attachedFile.append('status', this.status)

          let response = await this.$axios.patch(
            `course-v/edit-assignment?assignment_id=${this.$route.params.eventclicked}`,
            {
              name: this.name,
              instruction: this.instruction,
              type: this.type,
              start_date: isoStartDate,
              due_date: isoSecondDate,
              available_date: isoFirstDate,
              set_duration: this.set_duration,
              obtainable_score: this.obtainable_score,
              status: this.status,
            }
          )

          this.$toast.success(response.data.message)
        } catch (error) {
          this.$toast.error(error)
        } finally {
          this.fetch()
          this.addPreloader = false
        }
      }
    },

    async publishAssignment() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click()
      }

      if (
        this.name !== '' &&
        this.instruction !== '' &&
        this.type !== '' &&
        this.obtainable_score !== '' &&
        this.available_date !== '' &&
        this.due_date !== '' &&
        this.set_duration !== ''
      ) {
        try {
          this.addPreloader = true
          // let attachedFile = new FormData()
          this.status = 'publish'
          let isoFirstDate
          let isoSecondDate
          let isoStartDate

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
            let startDate = new Date(dateString)
            isoStartDate = startDate.toISOString()
          } else {
            isoStartDate = null
          }

          // if (this.file !== null) {
          //   attachedFile.append('file', this.file)
          //   attachedFile.append('file_name', this.file.name)
          // }

          // if (this.start_date !== '') {
          //   attachedFile.append('start_date', isoStartDate)
          // }

          // if (this.set_duration !== '') {
          //   attachedFile.append('set_duration', this.set_duration)
          // }
          // attachedFile.append('name', this.name)
          // attachedFile.append('instruction', this.instruction)
          // attachedFile.append('type', this.type)
          // attachedFile.append('available_date', isoFirstDate)
          // attachedFile.append('due_date', isoSecondDate)
          // attachedFile.append('obtainable_score', this.obtainable_score)
          // attachedFile.append('status', this.status)

          let response = await this.$axios.patch(
            `course-v/edit-assignment?assignment_id=${this.$route.params.eventclicked}`,
            {
              name: this.name,
              instruction: this.instruction,
              type: this.type,
              start_date: isoStartDate,
              due_date: isoSecondDate,
              available_date: isoFirstDate,
              set_duration: this.set_duration,
              obtainable_score: this.obtainable_score,
              status: this.status,
            }
            // {
            //   headers: {
            //     'Content-Type': 'multipart/form-data',
            //   },
            // }
          )

          this.$toast.success(response.data.message)
        } catch (error) {
          this.$toast.error(error)
        } finally {
          this.fetch()
          this.addPreloader = false
        }
      }
    },
  },
}
</script>

<style>
.custom-tabs {
  border-bottom: 0.2px solid #828282;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  flex-wrap: nowrap !important;
}

.file-type-display {
  background: #ecf7ff;
  border: 2px dashed #ffc107;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #8b9eb0;
  cursor: pointer;
}

.submit-button {
  background: #ffc107;
}

.fmbt {
  width: 110px;
  height: 40px;
}

.fix-width {
  width: 90%;
  margin-left: 2.5rem;
}
/* .fix {
  width: 100%;
} */

.trojan {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 2rem;
}
.fileborder {
  border: 1px dashed #ffc107;
}

.cancel-btn {
  position: relative;
  top: 5px;
  left: 33px;
  cursor: pointer;
}

.form-control-label {
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #8f9aa3;
  margin-bottom: 0.25rem;
}
.headerview {
  margin-top: 4rem 0rem 0rem 30rem;
  max-width: 80rem;
  /* margin-left: 12rem; */
}
.mynav {
  margin-top: 6rem;
  margin-left: 2rem;
}
</style>