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
          <button class="btn mainbtndashboard medbrownparagraph">
            Add Assignment
          </button>
        </div>
      </template>

      <!-- <template #default="{ visualization }">
        <table-component
          :items="assignments"
          :fields="assignmentFields"
          @row-clicked="onRowClicked"
          v-if="visualization === 'list'"
        />

        <div class="row" v-else>
          <student-instructors-grid
            :data="instructors"
            v-for="(instructor, index) in course_instructors"
            :key="index"
          ></student-instructors-grid>
        </div>
      </template> -->

      <table-component
        :items="assignments"
        :fields="assignmentFields"
        @row-clicked="onRowClicked"
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
    </filter-component>

    <div v-show="showForm">
      <div>
        <!-- ****************************************************************************************** -->

        <div class="site-container">
          <div class="conatiner">
            <div class="m-3" @click="closeForm">
              <button class="btn mainbtndashboard medbrownparagraph">
                Back to assignments
              </button>
            </div>

            <div class="card bg-white mb-3">
              <div class="card-header pt-5 pb-0">
                <div class="card-title"><h3>Create Exercise</h3></div>
              </div>
              <div class="card-body ml-6 d-flex">
                <form>
                  <div class="row mt-4">
                    <div class="col-xl-6">
                      <div class="mb-2">
                        <label class="form-control-label"
                          >Exercise Name
                          <span class="font10 small">(Required)</span></label
                        >
                        <input
                          v-model="name"
                          class="form-control"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div class="mb-2">
                        <label class="form-control-label"
                          >Exercise Instruction
                          <span class="font10 small">(Required)</span></label
                        >
                        <textarea
                          v-model="instruction"
                          class="form-control"
                          placeholder="Instruction"
                          required
                        ></textarea>
                        <!-- <small class="text-dark"
                      >Let students know a little about the lesson in 500
                      characters or less.</small
                    > -->
                      </div>
                    </div>
                    <div class="col-12">
                      <hr />
                    </div>
                    <div class="">
                      <div class="row w-100" style="min-width: 800px">
                        <div class="col-6 mb-2">
                          <label class="form-control-label"
                            >Exercise Type
                            <span class="font10 small">(Required)</span></label
                          >
                          <select
                            class="form-control"
                            aria-placeholder="Select excercise type"
                            v-model="type"
                            required
                          >
                            <option value=""></option>
                            <option value="essay">Essay</option>
                            <option value="offline">Offline</option>
                          </select>
                        </div>
                        <div class="col-6 mb-2">
                          <label class="form-control-label"
                            >Obtainable Score
                            <span class="small">(Required)</span></label
                          >
                          <input
                            v-model="obtainable_score"
                            type="number"
                            class="form-control border-right"
                            placeholder="eg 100"
                            required
                          />
                        </div>
                        <div class="col-md-6 mb-2" v-if="dateHandle">
                          <label class="form-control-label"
                            >Available Date</label
                          >
                          <div class="input-group">
                            <input
                              type="date"
                              v-model="available_date"
                              class="form-control border-right"
                              placeholder="Available Date"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-2" v-if="dateHandle">
                          <label class="form-control-label">Due Date</label>
                          <div class="input-group">
                            <input
                              v-model="due_date"
                              type="date"
                              class="form-control border-right"
                              placeholder="Due Date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <hr />
                      <div class="my-4">
                        <p>
                          Upload Essay Sample
                          <span
                            ><span class="font10 small">(Required)</span></span
                          >
                        </p>

                        <input
                          type="file"
                          accept=".pptx,.xlsx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*, .pdf"
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
                        <p class="text-grey font10">
                          Formats: PPT, DOC, PDF, JPEG
                        </p>
                      </div>
                    </div>
                  </div>
                  <b-dropdown
                    text="Save"
                    size="lg"
                    class="m-4 fmbt"
                    variant="warning"
                  >
                    <b-dropdown-item-button @click="submitAssignment">
                      Publish
                    </b-dropdown-item-button>
                  </b-dropdown>
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
      assignmentFields: [
        { key: 'name', sortable: true },
        { key: 'instruction', sortable: true },
        { key: 'obtainable_score', sortable: true },
        { key: 'status', sortable: true },
        { key: 'type', sortable: true },
      ],
      open: true,
      dateHandle: false,
      showForm: false,
      assignments: [],

      addPreloader: false,
      file: null,
      course_id: this.$route.params.id,
      name: '',
      instruction: '',
      type: '',
      available_date: '',
      due_date: '',
      obtainable_score: '',
      status: 'publish',
    }
  },
  methods: {
    async getAllAssignments() {
      try {
        let response = await this.$axios.get(
          `course-v/get-all-course-assignment?course_id=${this.$route.params.id}`
        )
        this.assignments = response.data
        // console.log(this.assignments)
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
    },

    async submitAssignment() {
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

        attachedFile.append('course_id', this.course_id)
        attachedFile.append('name', this.name)
        attachedFile.append('instruction', this.instruction)
        attachedFile.append('type', this.type)
        attachedFile.append('available_date', isoFirstDate)
        attachedFile.append('due_date', isoSecondDate)
        attachedFile.append('obtainable_score', this.obtainable_score)
        attachedFile.append('status', this.status)
        attachedFile.append('file', this.file, this.file.name)
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
</style>