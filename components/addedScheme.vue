<template>
  <div class="corner second-section mb-0">
    <div class="corner-2 align-items-center justify-content-between mb-1">
      <div class="d-flex justify-content-end">
        <div class="d-flex align-items-center">
          <span @click="editScheme" class="ml-5" style="cursor: pointer"
            ><span
              class="iconify"
              data-icon="bi:pencil-square"
              style="color: #2f2f2f"
              data-width="14"
              data-height="16"
            ></span
          ></span>
          <span @click="deleteScheme" class="ml-2 mr-2" style="cursor: pointer"
            ><span
              class="iconify"
              data-icon="bytesize:trash"
              style="color: #2f2f2f"
              data-width="16"
              data-height="16"
            ></span
          ></span>
        </div>
      </div>

      <div class="w-100 align-items-center">
        <h2 class="text-16 bold700 mb-2 mx-0">
          {{ scheme.title }}
        </h2>
        <div style="color: #333333" class="text-14 ml-3">
          {{ scheme.objective }}
        </div>
      </div>
    </div>

    <div class="my-2">
      <b-icon icon="plus-square" class="plus" @click="optionsDialogue"></b-icon>
    </div>

    <div class="pl-3 align-items-center">
      <div class="d-flex align-items-center" v-if="subSections">
        <span @click="closeDialogue" style="cursor: pointer"
          ><span
            class="iconify"
            data-icon="la:times"
            data-width="22"
            data-height="22"
          ></span
        ></span>
        <div
          class="
            row
            justify-content-center
            align-items-center
            heading
            headings-border
            fullborder
          "
        >
          <p @click="createInnerSection" class="size text-14 mb-0 bold700">
            Create New Section
          </p>
        </div>
      </div>
    </div>

    <!-- **************************************************** -->
    <subsection-input
      v-for="(sec, index) in sections"
      :key="index"
      :index="index"
      :sec="sections"
      :sectionx="sec"
      :subSection="subSection"
      @section="populateSection($event, index)"
      @item="populateItems($event, index)"
      @innerIndex="deleteInnerScheme($event)"
      @deleteInnerSection="deleteSubsection($event, index)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      subSection: false,
      subSections: false,
      showInnersection: false,
      section: {
        title: '',
        objective: '',
        items: [],
      },
      sections: [],
    }
  },
  created() {
    this.sections = this.scheme.section
  },
  methods: {
    populateSection(e, i) {
      this.sections[i] = e
      this.$emit('sections', this.sections)
      this.section = {
        title: '',
        objective: '',
        items: [],
      }
    },
    populateItems(e, i) {
      this.sections[i].item = e
    },
    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )

        for (const iterator of await response.section) {
          this.items.push(iterator.item)
          console.log(`itemInput`, iterator.item)
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    },
    deleteScheme() {
      this.$emit('deleteAddedScheme', this.index)
    },
    editScheme() {
      this.$emit('editScheme', true)
    },
    optionsDialogue() {
      this.subSections = true
    },
    closeDialogue() {
      this.subSections = false
    },
    createInnerSection() {
      this.subSection = true
      this.subSections = false
      this.sections.push(this.section)
    },
    deleteInnerScheme(e) {
      this.sections.splice(e, 1)
    },
    deleteSubsection(e) {
      console.log(e)
      console.log(this.sections)
      this.sections.splice(e, 1)
    },
    deleteInstance(e) {
      this.items.splice(e, 1)
    },
    deleteItemIndex(e) {
      this.items.splice(e, 1)
    },
  },
  props: {
    scheme: {
      type: Object,
    },
    showAddedScheme: {
      type: Boolean,
      default: true,
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
  border: 1px solid #aaa5a5;
  border-radius: 4px;
  padding: 1rem 1rem 0.5rem;
}
.corner-2 {
  border: 1px solid #aaa5a5;
  border-radius: 4px;
  padding: 0.3rem 1rem 0.5rem;
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
  /* margin-left: 3rem; */
}

.headings {
  font-size: 18px;
  color: #0734aa;
  cursor: pointer;
}
.heading {
  font-size: 18px;
  color: #0734aa;
}

.headings-border {
  border: 0.5px solid #333333;
  background: #fff8dc;
  border-radius: 4px;
  max-width: 170px;
  height: 45px;
}

.lecture-cover {
  background: #fff8dc;
  max-width: 95%;
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
.size {
  max-width: 10rem;
  text-align: center;
}
</style>