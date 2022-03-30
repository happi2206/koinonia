<template>
  <div>
    <div>
      <div>
        <div>
          <div class="px-md-3 px-2 pb-3">
            <div class="my-3">
              <h1 class="brown24">Description</h1>
              <div class="text-14 pb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, consequatur. Laudantium quidem iure, dolores, at
                praesentium impedit nisi ratione velit porro soluta totam
                nostrum esse? Ducimus dignissimos blanditiis nam veritatis!
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
              <b-icon @click="createSection()" icon="plus-square"></b-icon>
            </div>

            <scheme-input-field
              v-for="(section, index) in sections"
              :key="index"
              :index="index"
              @i="deleteScheme($event)"
              @deleteEmit="deleteEmit"
              @section="sectionsfunc($event, index)"
              :sections="sections"
              v-show="renderScheme"
              @innerSections="innerSectionsFunc($event, index)"
              @items="itemsFunc($event, index)"
            />
          </div>

          <button @click="sendDataModel" class="btn mb-3 btn-outline-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addedSection: false,
      addSchemeType: false,
      sectionExist: false,
      addedInnerSection: true,
      sectionContent: false,
      renderScheme: true,
      sections: [],
      section: [],
      item: [],
      text: '',
      list: '',
      temp_index: null,
    }
  },
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async sendDataModel() {
      console.log(this.temp_index)
      for (let i = 0; i <= this.temp_index; i++) {
        this.sections[i].section = this.section
        this.sections[i].item = this.item
      }
      console.log(this.sections)
      return
      try {
        let dataModel = {
          course_id: this.$route.params.id,
          section: this.sections,
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
    createSection() {
      this.sections.push({
        title: '',
        objective: '',
        section: null,
        item: null,
      })
    },

    sectionsfunc(e, i) {
      this.sections[i].title = e.title
      this.sections[i].objective = e.objective
      this.temp_index = i
      console.log(this.temp_index)
    },

    innerSectionsFunc(e) {
      this.section = e
    },
    itemsFunc(e) {
      this.item = e
    },

    deleteScheme(e) {
      console.log(e)
      this.sections.splice(e, 1)
    },
    deleteEmit(e) {
      this.sections.splice(e, 1)
    },

    deleteInnerSection(index) {
      this.innerSection.splice(index, 1)
      if (this.innerSection.length === 0) {
        this.sectionContent = false
      }
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
</style>