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
      <form @submit.prevent="addResource" class="px-4 mx-3">
        <div class="row mt-4">
          <div class="fix-width">
            <div class="mb-2">
              <label class="form-control-label text-12"
                >Resource title
                <span class="font10 small">(Required)</span></label
              >
              <input
                v-model="title"
                class="form-control text-14"
                style="background: #fbfdfe"
                placeholder="Enter title"
                required
              />
            </div>
            <div class="mb-2">
              <label class="form-control-label text-12"
                >Resource description
                <span class="font10 small">(Required)</span></label
              >

              <textarea
                v-model="description"
                class="form-control"
                placeholder="Instruction"
                required
              ></textarea>
            </div>
          </div>
          <div class="col-12 pl-0">
            <hr />
          </div>
          <div class="w-100 fix">
            <div class="row">
              <div class="col mb-2">
                <label class="form-control-label text-12"
                  >Date published
                  <span class="font10 small">(Required)</span></label
                >
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
              </div>
            </div>
          </div>
          <div class="col-12 pl-0">
            <hr />
            <div class="my-3 ml-3">
              <p style="font-size: 0.95rem" class="m-0 form-control-label">
                Upload Resource Sample
                <span class="font10 small">(Required)</span>
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
                  w-75
                  mb-2
                  py-3
                  px-3
                  text-center
                  bg-white
                "
                @click.prevent="$refs.uploadfile.click()"
              >
                <span>Click to Upload</span>
              </div>
              <p class="text-grey text-14">Formats: PPT, DOC, PDF, JPEG</p>
            </div>
          </div>
          <div v-if="file" class="file-indicator w-75 ml-2">
            <span class="cancel-btn" @click="deleteFile"
              ><span
                class="iconify"
                data-icon="ic:baseline-cancel"
                data-width="30"
                data-height="30"
              ></span
            ></span>
            <div class="d-flex justify-content-start p-3">
              <span
                class="iconify"
                data-icon="akar-icons:file"
                data-width="64"
                data-height="64"
              ></span>
            </div>
            <span
              class="d-flex justify-content-start"
              style="font-size: 14px"
              >{{ file.name }}</span
            >
          </div>
        </div>
        <div class="m-3">
          <button class="btn mainbtndashboard medbrownparagraph">
            Add Resource
          </button>
        </div>
      </form>
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
        { key: 'published_at', label: 'Publish date', sortable: true },
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
      try {
        this.addPreloader = true
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
        console.log(error)
        this.$toast.error(error)
      } finally {
        this.getAllResources()
        this.addPreloader = false
        this.$refs['resourceModal'].hide()
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
        this.$toast.success(response.data.message)
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
      window.open(e.file_path)
    },
    downloadResource(e) {
      const link = document.createElement('a')
      link.style.display = 'none'
      console.log(e.file_path)
      link.href = URL.createObjectURL(file)
      link.href = `https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80`

      document.body.appendChild(link)
      link.click()

      setTimeout(() => {
        URL.revokeObjectURL(link.href)
        link.parentNode.removeChild(link)
      }, 0)

      const myFile = new File([`${new Date()}: Meow!`], 'my-cat.pdf')

      // Download it using our function
      downloadResource(myFile)
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