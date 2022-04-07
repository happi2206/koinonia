<template>
  <div>
    <div>
      <div>
        <div>
          <div class="px-md-3 px-2 pb-3">
            <div class="my-3">
              <h1 class="brown24">Description</h1>
              <div class="text-14 pb-3">
                {{ courseDetail.description }}
              </div>
            </div>
            <hr class="my-2" />
            <h2 class="brown24 my-3 graytext">Scheme of work</h2>
            <p
              v-if="section.length === 0"
              class="lightgraytext medbrownparagraph d-flex align-items-center"
            >
              <span
                class="iconify"
                data-icon="dashicons:info"
                data-width="20"
                data-height="20"
              ></span>
              <span class="mx-2 text-12">
                Here’s where you add course content—like lectures, course
                sections, assignments, and more. Click a + icon on the left to
                get started.</span
              >
            </p>

            <!-- ************SchemeInputComponent************* -->

            <div v-if="section.length === 0">
              <b-icon
                class="plus"
                @click="createScheme()"
                icon="plus-square"
              ></b-icon>
            </div>
            <div
              v-if="updateButton && section.length > 0"
              class="d-flex justify-content-end"
            >
              <button
                @click.prevent="listView"
                class="
                  btn
                  text-14
                  btn-height btn-width
                  mr-0
                  mb-3
                  mainbtndashboard
                "
              >
                Preview
              </button>
            </div>
            <div v-if="showInput">
              <scheme-input-field
                v-for="(sch, index) in section"
                :key="index"
                :index="index"
                :schema="section"
                :collapse="collapse"
                :showAddedScheme="showAddedScheme"
                @deleteScheme="deleteScheme($event)"
                @scheme="schemeAdd($event, index)"
                @saveButton="saveButtonHandler"
              />
            </div>
          </div>

          <div v-if="saveButton" class="d-flex justify-content-end">
            <button
              @click="sendDataModel"
              class="
                btn
                text-14
                mr-4
                btn-height btn-width
                mb-3
                mainbtndashboard
              "
            >
              <span v-if="isbusyCreating">
                <b-spinner
                  label="loading"
                  variant="primary"
                  style="width: 1.5rem; height: 1.5rem"
                  class="text-center"
                >
                </b-spinner>
              </span>
              <span v-else> Save </span>
            </button>
          </div>

          <div
            v-if="updateButton && section.length > 0"
            class="d-flex justify-content-end"
          >
            <button
              @click.prevent="listView"
              class="
                btn
                text-14
                btn-height btn-width
                mr-3
                mb-3
                mainbtndashboard
              "
            >
              Preview
            </button>
            <button
              @click="updateSchema"
              class="
                btn
                text-14
                mx-3
                btn-height btn-width
                mb-3
                mainbtndashboard
              "
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
              <span v-else> Update </span>
            </button>
          </div>
        </div>
      </div>
      <!-- <list-scheme :section="section" /> -->
      <div v-if="this.section.length > 0">
        <div v-if="display">
          <render-scheme :section="section" @view="editMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listScheme from './listScheme.vue'
export default {
  components: { listScheme },
  data() {
    return {
      collapse: false,
      showAddedScheme: false,
      sectionContent: false,
      renderScheme: true,
      section: [],
      scheme: {
        title: '',
        objective: '',
        section: [],
      },
      updateButton: false,
      saveButton: false,
      display: true,
      showInput: false,
      isbusy: false,
      isbusyCreating: false,
      schemeId: '',
    }
  },
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },

  created() {
    this.getSchemeOfWork()
  },

  methods: {
    listView() {
      ;(this.display = !this.display) &&
        (this.updateButton = !this.updateButton)

      this.showInput = !this.showInput
    },
    saveButtonHandler(e) {
      this.saveButton = e
    },
    editMode(e) {
      this.updateButton = e
      this.display = false
      this.showInput = true
    },
    async sendDataModel() {
      try {
        this.isbusyCreating = true
        let dataModel = {
          course_id: this.$route.params.id,
          section: this.section,
        }
        let response = await this.$axios.post(
          `course-v/add-scheme-of-work`,
          dataModel
        )
        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.getSchemeOfWork()
        this.isbusyCreating = false
      }
    },

    async updateSchema() {
      try {
        this.isbusy = true
        let updateDataModel = {
          id: `${this.schemeId}`,
          section: this.section,
        }
        console.log(updateDataModel)

        let response = await this.$axios.patch(
          `course-v/edit-scheme-of-work`,
          updateDataModel
        )
        this.$toast.success(response.data.message)
      } catch (error) {
        this.$toast.error(error)
        console.log(error)
      } finally {
        this.getSchemeOfWork()
        this.isbusy = false
      }
    },

    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )

        if (response.section.length === 0) {
          this.saveButton = true
        }

        this.section = response.section
        this.schemeId = response.id
      } catch (error) {
        console.log(error)
      }
    },

    createScheme() {
      this.collapse = true
      this.showInput = true
      this.display = false
      this.saveButton = true
      this.section.push(this.scheme)
      // if (this.section.length !== 0) {
      //   this.init = true
      // }
    },
    schemeAdd(e, i) {
      this.section[i] = e
    },
    deleteScheme(e) {
      this.section.splice(e, 1)
    },
  },
}
</script>

<style scoped>
.grey {
  color: #828282;
}
.plus {
  cursor: pointer;
}
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
}

.headings {
  font-size: 18px;
  color: #0734aa;
  cursor: pointer;
}
.heading {
  font-size: 18px;
  color: #0734aa;
  cursor: pointer;
}

.headings-border {
  border: 0.5px solid #333333;
  background: #fff8dc;
  width: 797px;
  height: 45px;
  margin-left: 1rem;
}

.lecture-cover {
  background: #fff8dc;
  width: 95%;
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
  max-width: 98%;
}
.btn-width {
  width: 110px;
  text-align: center;
}
</style>