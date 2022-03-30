<template>
  <div>
    <div v-observe-visibility="getAllResources"></div>
    <preloader :show="addPreloader" />
    <filter-component @search="SearchText" @view-by="sortInstructors">
      <template #besideFilterButton>
        <div class="ml-md-5" @click="openForm">
          <button
            v-b-modal.Add-resources
            class="btn btn-height mainbtndashboard medbrownparagraph"
          >
            Add Resources
          </button>
        </div>
      </template>

      <table-component
        :items="resources"
        :fields="resourcesFields"
        :dropdownItem="dropdownItem"
        @Delete="deleteResource"
        @Download="downloadResource"
        @View="viewResource"
        @row-clicked="viewResource"
      >
        <template #cell(published_at)="data">
          <span>{{ data.item.published_at | DateFormat }}</span>
        </template>
      </table-component>
    </filter-component>

    <b-modal
      id="Add-resources"
      title="Add Resources"
      centered
      hide-footer
      ref="resourceModal"
    >
      <ValidationObserver v-slot="{ validate }">
        <form @submit.prevent="addResource" class="px-4 mx-3">
          <div class="row mt-4">
            <div class="w-100">
              <div class="mb-2">
                <label class="form-control-label text-12"
                  >Resource title
                  <span class="font10 small" style="color: red">*</span></label
                >
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    v-model="title"
                    class="form-control text-14"
                    style="background: #fbfdfe"
                    placeholder="Enter title"
                    required
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div class="mb-2">
                <label class="form-control-label text-12"
                  >Resource description
                  <span class="font10 small" style="color: red">*</span></label
                >
                <validation-provider rules="required" v-slot="{ errors }">
                  <textarea
                    v-model="description"
                    class="form-control"
                    placeholder="Description"
                    required
                  ></textarea>
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-12 px-0"></div>
            <div class="w-100">
              <div class="row">
                <div class="col mb-2">
                  <label class="form-control-label text-12"
                    >Date published <span class="font10 small"></span
                  ></label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <v-date-picker
                      v-model="publish_date"
                      :model-config="modelConfig"
                      mode="date"
                    >
                      <template #default="{ togglePopover }">
                        <span @click="togglePopover()">
                          <input
                            v-model="publish_date"
                            class="form-control form-control-md"
                            style="background: #fbfdfe"
                            placeholder="Publish Date"
                          />
                        </span>
                      </template>
                    </v-date-picker>
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
              </div>
            </div>
            <div class="col-12 px-0">
              <div class="my-3">
                <p style="font-size: 0.95rem" class="m-0 form-control-label">
                  Upload Resource
                  <span class="font10 small" style="color: red">*</span>
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
                  class="file-type-display w-75 py-3 px-3 text-center bg-white"
                  @click.prevent="$refs.uploadfile.click()"
                >
                  <div v-if="file" class="file-indicator">
                    <span class="text-14">{{ file.name }}</span>
                  </div>
                  <span v-else>Click to Upload</span>
                </div>
                <p class="text-grey text-14">Formats: PPT, DOC, PDF, JPEG</p>
              </div>
            </div>
          </div>
          <div class="my-3 flex justify-content-end">
            <button
              class="btn mainbtndashboard medbrownparagraph"
              style="height: 40px; width: 9rem; text-align: center"
            >
              <span v-if="isbusy">
                <b-spinner
                  label="loading"
                  variant="primary"
                  style="width: 1.5rem; height: 1.5rem"
                  class="text-center"
                >
                </b-spinner>
              </span>
              <span v-else>Add Resource</span>
            </button>
          </div>
          <div
            type="button"
            ref="runValidation"
            id="runValidation"
            @click="validate"
          ></div>
        </form>
      </ValidationObserver>
    </b-modal>
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
      file: null,
      isbusy: false,
      publish_date: '',
      fileUpload: true,
      resources: '',
      title: '',
      description: '',
      dropdownItem: ['View', 'Download', 'Delete'],
      addPreloader: false,
      resourcesFields: [
        { key: 'title', sortable: true },
        { key: 'description', sortable: true },
        { key: 'published_at', label: 'Date published', sortable: true },
        { key: 'dots', label: 'Action', sortable: false },
      ],
    }
  },

  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0]
      console.log(this.file)
      this.fileUpload = false
    },

    async addResource() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click()
      }
      if (
        this.file !== null &&
        this.publish_date !== '' &&
        this.description !== '' &&
        this.title
      ) {
        try {
          this.isbusy = true
          let isoFirstDate
          let attachedFile = new FormData()
          if (this.publish_date !== '') {
            let start = this.publish_date
            let dateStr = start
            let date = new Date(dateStr)
            isoFirstDate = date.toISOString()
            console.log(isoFirstDate)
          } else {
            isoFirstDate = ''
          }

          attachedFile.append('created_at', isoFirstDate)
          attachedFile.append('description', this.description)
          attachedFile.append('title', this.title)
          attachedFile.append('file', this.file, this.file.name)

          let response = await this.$axios.post(
            `course-v/add-resource-to-a-course?course_id=${this.$route.params.id}`,
            attachedFile
          )

          this.$toast.success(response.data.message)
        } catch (error) {
          this.$toast.error(error)
        } finally {
          this.getAllResources()
          this.isbusy = false
          this.$refs['resourceModal'].hide()
        }
      }
    },

    async getAllResources() {
      try {
        let response = await this.$axios.get(
          `course-v/get-all-resource-in-a-course?course_id=${this.$route.params.id}`
        )

        this.resources = response.data
        console.log(this.resources)
      } catch (error) {
        this.$axios.error(error)
      }
    },

    async deleteResource(e) {
      this.addPreloader = true
      try {
        let response = await this.$axios.delete(
          `course-v/delete-a-resource-in-a-course?resource_id=${e.id}`
        )

        this.getAllResources()
        this.$toast.success(`Resource deleted successfully`)
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.addPreloader = false
      }
    },
    deleteFile() {
      this.file = null
      this.fileUpload = true
    },
    openForm() {
      this.showForm = true
      this.open = false
    },
    viewResource(e) {
      window.open(
        `https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80`
      )
    },
    async downloadResource(e) {
      // the response you get after submitting a file
      let first = e.file_path.charAt(e.file_path.length - 3)
      let second = e.file_path.charAt(e.file_path.length - 2)
      let third = e.file_path.charAt(e.file_path.length - 1)
      let extension = `${first}${second}${third}`
      console.log(extension)
      let replace = e.file_path.replace('.pdf', '')
      console.log(replace)
      try {
        this.addPreloader = true
        const response = await this.$axios.get(
          `https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80`,
          {
            responseType: 'blob',
          }
        )
        const blob = new Blob([response.data])
        const link = document.createElement('a')
        // ignore the above code if you already have a blob
        // if you have a base 64 image, convert it to a blob and continue
        link.href = URL.createObjectURL(blob)
        link.download = `Report card.jpg`
        link.click()
        URL.revokeObjectURL(link.href)
      } catch (e) {
        console.error(e)
      } finally {
        this.addPreloader = false
      }
    },
  },
}
</script>

<style scoped>
.p-3 {
  padding: 1rem !important;
}
.bg-white {
  background-color: #fff !important;
}

::-webkit-input-placeholder {
  /* Edge */
  font-family: 'Brown';
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: 'Brown';
}

::placeholder {
  font-family: 'Brown';
}
</style>