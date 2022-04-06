<template>
  <div>
    <div>
      <div>
        <div>
          <div class="px-md-3 px-2 pb-3">
            <div class="my-3">
              <h1 class="brown24">Description</h1>
              <div class="text-14 pb-4">
                {{ courseDetail.description }}
              </div>
            </div>
            <hr />
            <h2 class="brown24 my-3 graytext">Scheme of work</h2>
            <p
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

            <div class="plus">
              <b-icon @click="createScheme()" icon="plus-square"></b-icon>
            </div>

            <scheme-input-field
              v-for="(sch, index) in section"
              :key="index"
              :index="index"
              :schema="section"
              :collapse="collapse"
              :showAddedScheme="showAddedScheme"
              @deleteScheme="deleteScheme($event)"
              @scheme="schemeAdd($event, index)"
            />
          </div>

          <div v-if="saveButton || init" class="d-flex justify-content-end">
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
              Save
            </button>
          </div>

          <div v-if="updateButton" class="d-flex justify-content-end">
            <button
              @click="updateSchema"
              class="
                btn
                text-14
                mr-4
                btn-height btn-width
                mb-3
                mainbtndashboard
              "
            >
              Update
            </button>
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
      init: false,
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
    async sendDataModel() {
      try {
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
      }
    },

    async updateSchema() {
      try {
        let updateDataModel = {
          course_id: `${this.$route.params.id}`,
          section: this.section,
        }
        console.log(updateDataModel)

        let response = await this.$axios.patch(
          `course-v/edit-scheme-of-work`,
          updateDataModel
        )
        this.$toast.success(response.data)
      } catch (error) {
        this.$toast.error(error)
        console.log(error)
      } finally {
        this.getSchemeOfWork()
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

        if (response.section.length !== 0) {
          this.updateButton = true
        }

        this.section = response.section

        console.log(this.sectionssss)
      } catch (error) {
        console.log(error)
      }
    },

    createScheme() {
      this.collapse = true
      this.section.push(this.scheme)
      if (this.section.length !== 0) {
        this.init = true
      }
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