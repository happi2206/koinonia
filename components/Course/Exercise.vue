<template>
  <div v-observe-visibility="getAllAssignments">
    <preloader :show="addPreloader" />
    <filter-component
      @search="SearchText"
      @view-by="sortInstructors"
      v-show="open"
    >
      <template #besideFilterButton>
        <div class="ml-3" @click="openForm">
          <button class="btn btn-height mainbtndashboard medbrownparagraph">
            New Exercise
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
    </filter-component>

    <div v-show="showForm">
      <div>
        <!-- ****************************************************************************************** -->

        <div class="site-container font14">
          <div class="conatiner">
            <div class="m-3" @click="closeForm">
              <button
                class="btn btn-height mainbtndashboard medbrownparagraph"
                style="text-align: center; max-width: 160px"
              >
                Back to Exercises
              </button>
            </div>

            <div class="card bg-white mb-3">
              <div class="pt-4 pl-4 pb-0">
                <div class="card-title text-16 ml-0">Create Exercise</div>
              </div>
              <div class="pl-0 ml-0">
                <ValidationObserver v-slot="{ validate }">
                  <form class="px-4 mx-3">
                    <div class="row mt-4 w-100">
                      <div class="w-100">
                        <div class="mb-2">
                          <label class="form-control-label text-12"
                            >Exercise Name
                            <span class="font10 small" style="color: red"
                              >*</span
                            ></label
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
                        <div class="mb-2 w-100">
                          <label class="form-control-label text-12"
                            >Exercise Instruction
                            <span class="font10 small" style="color: red"
                              >*</span
                            ></label
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
                          <div class="col-md-6 padding-fix mb-2">
                            <label class="form-control-label text-12"
                              >Exercise Type
                              <span class="font10 small" style="color: red"
                                >*</span
                              >
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
                              <span class="font10 small" style="color: red"
                                >*</span
                              >
                            </label>
                            <validation-provider
                              rules="required|numeric"
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
                              <span class="font10 small" style="color: red"
                                >*</span
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
                                :min-date="new Date()"
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
                              <span class="font10 small" style="color: red"
                                >*</span
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
                                :min-date="new Date()"
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
                              >Set duration(minutes)
                            </label>
                            <validation-provider
                              rules="numeric"
                              v-slot="{ errors }"
                            >
                              <input
                                v-model="set_duration"
                                type="text"
                                class="form-control border-right text-12"
                                style="height: 35px"
                                placeholder="eg. 30"
                              />
                              <span class="text-12" style="color: red">{{
                                errors[0]
                              }}</span>
                            </validation-provider>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 px-0">
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
                            accept=".pptx,.doc, application/pdf, application/vnd.ms-excel, image/*, "
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
                            <span v-else class="text-16">Click to Upload</span>
                          </div>
                          <p class="text-grey text-14">
                            Formats: PPTX, DOC, PDF, XLXS, e.t.c
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex conned justify-content-end">
                      <b-dropdown
                        text="Save"
                        size="md"
                        class="m-4 text-14 fmbt"
                        variant="warning"
                      >
                        <b-dropdown-item-button>
                          <button
                            @click.prevent="draftAssignment"
                            class="text-14"
                            type="submit"
                          >
                            Save as Draft
                          </button></b-dropdown-item-button
                        >
                        <b-dropdown-item-button>
                          <button
                            @click.prevent="publishAssignment"
                            class="text-14"
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
        placeholder: 'Exercise Instruction',
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

      addPreloader: false,
      file: null,
      course_id: this.$route.params.id,
      name: '',
      instruction: '',
      type: '',
      available_date: '',
      due_date: '',
      obtainable_score: '',
      status: '',
      start_date: '',
      set_duration: '',
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
    async getAllAssignments() {
      try {
        let response = await this.$axios.get(
          `course-v/get-all-course-assignment?course_id=${this.$route.params.id}`
        )
        this.assignments = response.data
      } catch (error) {
        console.log(error)
      }
    },
    openForm() {
      this.showForm = true
      this.open = false
    },
    closeForm() {
      this.showForm = false
      this.open = true
      this.name = ''
      this.instruction = ''
      this.type = ''
      this.available_date = ''
      this.due_date = ''
      this.obtainable_score = ''
      this.status = ''
      this.start_date = ''
      this.set_duration = ''
      this.file = null
    },

    showDate() {
      if (this.type === 'offline') {
        this.dateHandle = true
      } else {
        this.dateHandle = false
      }
    },

    onRowClicked(e) {
      this.$router.push(`assignment/${this.$route.params.id}/${e.id}`)
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
        this.due_date !== ''
      ) {
        try {
          this.addPreloader = true
          let attachedFile = new FormData()
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
            isoFirstDate = ''
          }

          if (this.due_date !== '') {
            let end = this.due_date
            let dateString = end
            let secondDate = new Date(dateString)
            isoSecondDate = secondDate.toISOString()
          } else {
            isoSecondDate = ''
          }

          if (this.start_date !== '') {
            let end = this.start_date
            let dateString = end
            let startDate = new Date(dateString)
            isoStartDate = startDate.toISOString()
          } else {
            isoStartDate = ''
          }

          if (this.file !== null) {
            attachedFile.append('file', this.file)
            attachedFile.append('file_name', this.file.name)
          }

          if (this.start_date !== '') {
            attachedFile.append('start_date', isoStartDate)
          }

          if (this.set_duration !== '') {
            attachedFile.append('set_duration', this.set_duration)
          }

          attachedFile.append('course_id', this.course_id)
          attachedFile.append('name', this.name)
          attachedFile.append('instruction', this.instruction)
          attachedFile.append('type', this.type)
          attachedFile.append('available_date', isoFirstDate)
          attachedFile.append('due_date', isoSecondDate)
          attachedFile.append('obtainable_score', this.obtainable_score)
          attachedFile.append('status', this.status)

          let response = await this.$axios.post(
            `course-v/add-assignment`,
            attachedFile,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )

          this.$toast.success(response.data.message)
        } catch (error) {
          this.$toast.error('Assignment could not be created')
        } finally {
          this.getAllAssignments()
          this.addPreloader = false
          this.open = true
          this.showForm = false
          this.name = ''
          this.instruction = ''
          this.type = ''
          this.available_date = ''
          this.due_date = ''
          this.obtainable_score = ''
          this.status = ''
          this.start_date = ''
          this.set_duration = ''
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
        this.due_date !== ''
      ) {
        try {
          this.addPreloader = true
          let attachedFile = new FormData()
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
            isoFirstDate = ''
          }

          if (this.due_date !== '') {
            let end = this.due_date
            let dateString = end
            let secondDate = new Date(dateString)
            isoSecondDate = secondDate.toISOString()
          } else {
            isoSecondDate = ''
          }

          if (this.start_date !== '') {
            let end = this.start_date
            let dateString = end
            let startDate = new Date(dateString)
            isoStartDate = startDate.toISOString()
          } else {
            isoStartDate = ''
          }

          if (this.file !== null) {
            attachedFile.append('file', this.file)
            attachedFile.append('file_name', this.file.name)
          }

          if (this.start_date !== '') {
            attachedFile.append('start_date', isoStartDate)
          }

          if (this.set_duration !== '') {
            attachedFile.append('set_duration', this.set_duration)
          }

          attachedFile.append('course_id', this.course_id)
          attachedFile.append('name', this.name)
          attachedFile.append('instruction', this.instruction)
          attachedFile.append('type', this.type)
          attachedFile.append('available_date', isoFirstDate)
          attachedFile.append('due_date', isoSecondDate)
          attachedFile.append('obtainable_score', this.obtainable_score)
          attachedFile.append('status', this.status)

          let response = await this.$axios.post(
            `course-v/add-assignment`,
            attachedFile,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )

          this.$toast.success(response.data.message)
        } catch (error) {
          this.$toast.error('Assignment could not be created')
        } finally {
          this.getAllAssignments()
          this.addPreloader = false
          this.open = true
          this.showForm = false
          this.name = ''
          this.instruction = ''
          this.type = ''
          this.available_date = ''
          this.due_date = ''
          this.obtainable_score = ''
          this.status = ''
          this.start_date = ''
          this.set_duration = ''
        }
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
.custom-tabs {
  border-bottom: 0.2px solid #828282;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  flex-wrap: nowrap !important;
}
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  position: relative;
  width: 100%;
  /* padding-right: 15px; */
  /* padding-left: 15px; */
}
.col-6 {
  position: relative;
  width: 100%;
  /* padding-right: 15px; */
  /* padding-left: 15px; */
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
  width: 97%;
}
.fix {
  width: 100%;
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
.padding-fix {
  padding: 0;
}

@media screen and (max-width: 992px) {
  .mx-3 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

@media screen and (max-width: 393px) {
  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }
  .px-4 {
    padding-left: 1rem;
    /* padding-right: 1rem; */
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
}

@media screen and (max-width: 382px) {
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
  .w-25 {
    width: 50% !important;
  }
}
</style>