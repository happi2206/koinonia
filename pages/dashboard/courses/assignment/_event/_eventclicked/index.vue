<template>
  <div class="m-5">
    <preloader :show="addPreloader" />
    <div class="d-flex mynav align-items-center justify-content-between">
      <div class="d-flex">
        <span
          ><b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon
        ></span>
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="bold700 mainbluecolor mb-0 d-flex align-items-center"
        >
          <span>Assignment</span>
          <span
            class="iconify mainbluecolor"
            data-icon="dashicons:arrow-left-alt2"
          ></span>
        </a>
        <span class="mainbluecolor bold700">{{ name }}</span>
      </div>

      <div class="mr-4">
        <button
          v-b-modal.Edit-Assignment
          class="btn mx-2 mainbtndashboard medbrownparagraph"
        >
          Edit Assignment
        </button>
        <button
          v-b-modal.Delete-Assignment
          class="btn mainbtndashboard medbrownparagraph"
        >
          Delete Assignment
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
                  <h1>{{ name }}</h1>
                </div>
                <hr />
                <!-- ***************************************************************** -->
              </div>
            </div>

            <div class="row">
              <!-- <div class="col-md-6 mb-2 text-capitalize">Class: {{}}</div> -->
              <div class="col-md-6 mb-2 text-capitalize">Type: {{ type }}</div>
              <div class="col-md-6 mb-2 text-capitalize">
                Obtainable Score: {{ obtainable_score }}
              </div>
              <div class="col-md-6 mb-2 text-capitalize">
                Status: {{ status }}
              </div>
              <!-- <div class="col-md-4 mb-2 text-capitalize"></div>
              <div class="col-md-4 mb-2 text-capitalize"></div> -->
            </div>
          </div>
        </div>

        <!-- *********************************switch tabs**************************************** -->

        <div class="card mt-3">
          <b-tabs content-class="mt-3" class="custom-tabs">
            <b-tab title="Details" active>
              <div class="container p-3">
                <div>
                  <h3 class="m-0">Instruction</h3>
                  <p class="my-4">{{ instruction }}</p>
                </div>
              </div>
            </b-tab>
            <b-tab title="Attachments">
              <div class="pt-4 px-3 pb-5">
                <p>Offline Sample</p>
                <span class="d-flex align-items-center mb-2">
                  Click below to access file &nbsp;
                  <span
                    class="iconify"
                    data-icon="bi:arrow-down-circle-fill"
                  ></span>
                </span>

                <div class="d-flex">
                  <div class="text-center px-3 py-3 file-display">
                    <a :href="file_path" style="font-size: 1rem" target="_blank"
                      >Document</a
                    >
                  </div>
                </div>
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

            <textarea
              v-model="instruction"
              class="form-control"
              placeholder="Instruction"
            ></textarea>
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
              >Available Date
            </label>
            <input
              type="date"
              v-model="start_date"
              class="form-control border-right"
              placeholder="Available Date"
            />
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
          <div class="my-4" v-if="dateHandle">
            <label for="" class="d-block medbrownparagraph graytext"
              >Available Date
            </label>
            <input
              type="date"
              v-model="available_date"
              class="form-control border-right"
              placeholder="Available Date"
            />
          </div>
          <div class="my-4" v-if="dateHandle">
            <label for="" class="d-block medbrownparagraph graytext"
              >Available Date
            </label>
            <div class="input-group">
              <input
                v-model="due_date"
                type="date"
                class="form-control border-right"
                placeholder="Due Date"
              />
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
                class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
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
      id="Delete-Assignment"
      title="Delete Assignment"
      centered
      hide-footer
      ref="deletePromptModal"
    >
      <div>
        <p>Are you sure you sure you want to delete Assignment?</p>
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
            @click.prevent="deleteAssignment"
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
</template>

<script>
export default {
  layout: 'dashboard',
  scrollToTop: true,
  data() {
    return {
      file_path: '',
      instruction: '',
      name: '',
      obtainable_score: '',
      status: '',
      type: '',
      dateHandle: false,
      addPreloader: false,
      available_date: '',
      due_date: '',
      start_date: '',
      set_duration: 0,
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
      this.name = assignmentContent.name
      this.obtainable_score = assignmentContent.obtainable_score
      this.status = assignmentContent.status
      this.type = assignmentContent.type
    } catch (e) {
      console.log(e)
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

    async deleteAssignment() {
      try {
        let response = await this.$axios.delete(
          `course-v/delete-assignment?assignment_id=${this.$route.params.eventclicked}`
        )

        this.$toast.success(response.data.message)
        this.$refs['deletePromptModal'].hide()
        history.back()
      } catch (error) {
        this.$toast.error(error)
      }
    },

    closeModal() {
      this.$refs['deletePromptModal'].hide()
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
  margin-top: 7rem;
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
</style>