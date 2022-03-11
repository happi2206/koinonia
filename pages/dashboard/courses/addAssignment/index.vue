<template>
  <div>
    <!-- ****************************************************************************************** -->
    <preloader :show="addPreloader" />
    <div class="site-container">
      <div class="conatiner">
        <div class="m-4">
          <a
            href="#"
            @click.prevent="$router.go(-1)"
            class="brownparagraph bold700 mainbluecolor"
          >
            <b-icon icon="arrow-left"></b-icon>
            Courses
          </a>
        </div>

        <div class="card bg-white mb-3">
          <div class="card-header pt-5 pb-0">
            <div class="card-title">Create Exercise</div>
          </div>
          <div class="card-body ml-6 d-flex">
            <form>
              <div class="row mt-4">
                <div class="col-xl-6">
                  <div class="mb-2">
                    <label class="form-control-label">Exercise Name</label>
                    <input
                      v-model="name"
                      class="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div class="mb-2">
                    <label class="form-control-label"
                      >Exercise Instruction</label
                    >
                    <textarea
                      v-model="instruction"
                      class="form-control"
                      placeholder="Instruction"
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
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <label class="form-control-label">Exercise Type</label>
                      <select
                        class="form-control w-100"
                        aria-placeholder="Select excercise type"
                        v-model="type"
                      >
                        <option value=""></option>
                        <option>Essay</option>
                        <option>Offline</option>
                      </select>
                    </div>

                    <div class="col-md-6 mb-2">
                      <label class="form-control-label">Available Date</label>
                      <div class="input-group">
                        <input
                          type="date"
                          v-model="available_date"
                          class="form-control border-right"
                          placeholder="Available Date"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <label class="form-control-label">Obtainable Score</label>
                      <input
                        v-model="obtainable_score"
                        type="number"
                        class="form-control border-right"
                        placeholder="eg 100"
                      />
                    </div>
                    <div class="col-md-6 mb-2">
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
                      <span class="text-grey">(Optional)</span>
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
                  </div>

                  <b-dropdown
                    text="Save"
                    size="lg"
                    class="m-4 fmbt"
                    variant="warning"
                  >
                    <b-dropdown-item-button @click.prevent="submitAssignment"
                      >Publish</b-dropdown-item-button
                    >
                  </b-dropdown>
                </div>
              </div>
            </form>
          </div>

          <div
            class="filters-container filter-wrapper d-none"
            id="filters-container"
          >
            <div
              class="filter-closer"
              data-toggle-visibility="#filters-container"
            >
              <span
                class="iconify"
                data-inline="false"
                data-icon="eva:close-outline"
              ></span>
            </div>

            <div class="filters-container-content">
              <div class="search-input mb-2">
                <span
                  class="iconify icon"
                  data-inline="false"
                  data-icon="carbon:search"
                ></span>
                <input
                  type="text"
                  class="form-control w-100"
                  placeholder="Search for class"
                />
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
      addPreloader: false,
      file: null,
      course_id: '621f8eaea716ba0ddc4b7ba0',
      name: '',
      instruction: '',
      type: '',
      available_date: '',
      due_date: '',
      obtainable_score: '',
      status: 'Publish',
    }
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },

    async submitAssignment() {
      this.addPreloader = true
      let attachedFile = new FormData()
      attachedFile.append('file', this.file, this.file.name)
      attachedFile.append('course_id', this.course_id)
      attachedFile.append('name', this.name)
      attachedFile.append('instruction', this.instruction)
      attachedFile.append('type', this.type)
      attachedFile.append('available_date', this.available_date)
      attachedFile.append('due_date', this.due_date)
      attachedFile.append('obtainable_score', this.obtainable_score)
      attachedFile.append('status', this.status)

      console.log(attachedFile.get('name'))
      console.log(attachedFile.get('obtainable_score'))

      try {
        console.log('YayS')
        let response = await this.$axios.post(`course-v/add-assignment`, {
          attachedFile,
          // course_id: this.course_id,
          // name: this.name,
          // instruction: this.instruction,
          // type: this.type,
          // available_date: this.available_date,
          // due_date: this.due_date,
          // obtainable_score: this.obtainable_score,
          // status: this.status,
        })

        this.$toast.success(response.data)
      } catch {
      } finally {
        this.addPreloader = false
      }
    },
  },
}
</script>

<style scoped>
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