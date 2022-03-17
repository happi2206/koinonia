<template>
  <div v-observe-visibility="getAllAssignments">
    <preloader :show="addPreloader" />
    <filter-component
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
    </filter-component>

    <div v-show="showForm">
      <div>
        <!-- ****************************************************************************************** -->

        <div class="site-container font14">
          <div class="conatiner">
            <div class="m-3" @click="closeForm">
              <button class="btn mainbtndashboard medbrownparagraph">
                Back to exercises
              </button>
            </div>

            <div class="card bg-white mb-3">
              <div class="pt-4 pl-4 pb-0">
                <div class="card-title text-18 ml-0">Create Exercise</div>
              </div>
              <div class="pl-0 ml-0 d-flex">
                <form class="px-4 mx-3">
                  <div class="row mt-4">
                    <div class="fix-width">
                      <div class="mb-2">
                        <label class="form-control-label text-12"
                          >Exercise Name
                          <span class="font10 small">(Required)</span></label
                        >
                        <input
                          v-model="name"
                          class="form-control text-14"
                          style="background: #fbfdfe"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-control-label text-12"
                          >Exercise Instruction
                          <span class="font10 small">(Required)</span></label
                        >
                        <client-only>
                          <ckeditor-nuxt
                            v-model="instruction"
                            :config="editorConfigForSection"
                          />
                        </client-only>
                        <!-- <small class="text-dark"
                      >Let students know a little about the lesson in 500
                      characters or less.</small
                    > -->
                      </div>
                    </div>
                    <div class="col-12 pl-0">
                      <hr />
                    </div>
                    <div class="w-100">
                      <div class="row fix">
                        <div class="col-6 mb-2">
                          <label class="form-control-label text-12"
                            >Exercise Type
                          </label>
                          <v-select
                            v-model="type"
                            class="style-chooser font-14"
                            placeholder="Select exercise format"
                            label="text"
                            :reduce="(option) => option.value"
                            :options="[
                              { value: 'essay', text: 'Essay' },
                              { value: 'offline', text: 'Offline' },
                            ]"
                          ></v-select>
                        </div>

                        <div class="col-md-6 mb-2">
                          <label class="form-control-label text-12"
                            >Obtainable Score
                          </label>
                          <input
                            v-model="obtainable_score"
                            type="number"
                            class="form-control border-right text-12"
                            placeholder="eg 100"
                            required
                          />
                        </div>

                        <div class="col-md-6 mb-2">
                          <label class="form-control-label text-12"
                            >Available Date</label
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
                        </div>
                        <div class="col-md-6 mb-2">
                          <label class="form-control-label text-12"
                            >Due Date</label
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
                        </div>
                      </div>
                    </div>
                    <div class="col-12 pl-0">
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
                          <span>Click to Upload</span>
                        </div>
                        <p class="text-grey text-14">
                          Formats: PPT, DOC, PDF, JPEG
                        </p>
                      </div>
                    </div>
                    <div v-if="file" class="file-indicator w-25 ml-2">
                      <span class="cancel-btn" @click="deleteFile"
                        ><span
                          class="iconify"
                          data-icon="ic:baseline-cancel"
                          data-width="30"
                          data-height="30"
                        ></span
                      ></span>
                      <div class="d-flex justify-content-center p-3">
                        <span
                          class="iconify"
                          data-icon="akar-icons:file"
                          data-width="64"
                          data-height="64"
                        ></span>
                      </div>
                      <span
                        class="d-flex justify-content-center"
                        style="font-size: 14px"
                        >{{ file.name }}</span
                      >
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <b-dropdown
                      text="Save"
                      size="lg"
                      class="m-4 font-14 fmbt"
                      variant="warning"
                    >
                      <b-dropdown-item-button @click="draftAssignment">
                        Save as Draft
                      </b-dropdown-item-button>
                      <b-dropdown-item-button @click="publishAssignment">
                        Save and Publish
                      </b-dropdown-item-button>
                    </b-dropdown>
                  </div>
                </form>
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
      try {
        this.addPreloader = true
        let attachedFile = new FormData()
        let isoFirstDate
        let isoSecondDate

        if (this.available_date !== '') {
          let start = this.available_date
          let dateStr = start
          let date = new Date(dateStr)
          isoFirstDate = date.toISOString()
          console.log(isoFirstDate)
        } else {
          isoFirstDate = ''
        }

        if (this.due_date !== '') {
          let end = this.due_date
          let dateString = end
          let secondDate = new Date(dateString)
          isoSecondDate = secondDate.toISOString()
          console.log(isoSecondDate)
        } else {
          isoSecondDate = ''
        }

        this.status = 'draft'
        attachedFile.append('course_id', this.course_id)
        attachedFile.append('name', this.name)
        attachedFile.append('instruction', this.instruction)
        attachedFile.append('type', this.type)
        attachedFile.append('available_date', isoFirstDate)
        attachedFile.append('due_date', isoSecondDate)
        attachedFile.append('obtainable_score', this.obtainable_score)
        attachedFile.append('status', this.status)
        attachedFile.append('file', this.file)
        attachedFile.append('file_name', this.file.name)
        console.log(attachedFile)

        let response = await this.$axios.post(
          `course-v/add-assignment`,
          attachedFile,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        console.log(response.data.message)

        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error('Assignment could not be created')
      } finally {
        this.getAllAssignments()
        this.addPreloader = false
        this.open = true
        this.showForm = false
      }
    },

    async publishAssignment() {
      try {
        this.addPreloader = true
        let attachedFile = new FormData()
        let isoFirstDate
        let isoSecondDate

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

        this.status = 'publish'
        attachedFile.append('course_id', this.course_id)
        attachedFile.append('name', this.name)
        attachedFile.append('instruction', this.instruction)
        attachedFile.append('type', this.type)
        attachedFile.append('available_date', isoFirstDate)
        attachedFile.append('due_date', isoSecondDate)
        console.log(this.obtainable_score)
        return
        attachedFile.append('obtainable_score', this.obtainable_score)
        attachedFile.append('status', this.status)
        attachedFile.append('file', this.file)
        attachedFile.append('file_name', this.file.name)
        console.log(attachedFile)

        let response = await this.$axios.post(
          `course-v/add-assignment`,
          attachedFile,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        console.log(response.data.message)

        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error('Assignment could not be created')
      } finally {
        this.getAllAssignments()
        this.addPreloader = false
        this.open = true
        this.showForm = false
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

<style>
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
  width: 170px;
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
</style>