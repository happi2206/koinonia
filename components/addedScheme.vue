<template>
  <div class="corner second-section mb-4" v-show="showAddedScheme">
    <div class="d-flex corner align-items-center justify-content-between mb-4">
      <div class="d-flex align-items-center">
        <h2 class="text-16 bold700 mb-0 mx-3">{{ section.title }}:</h2>
        <span style="color: #333333" class="text-14">{{
          section.objective
        }}</span>
      </div>
      <div class="d-flex align-items-center">
        <span @click="editScheme" class="ml-5" style="cursor: pointer"
          ><span class="iconify" data-icon="bxs:pencil"></span
        ></span>
        <span @click="deleteScheme" class="ml-2 mr-2" style="cursor: pointer"
          ><span class="iconify" data-icon="bxs:trash-alt"></span
        ></span>
      </div>
    </div>

    <div class="plus mb-2">
      <b-icon icon="plus-square" @click="optionsDialogue"></b-icon>
    </div>

    <div class="pl-3 align-items-center">
      <div
        class="d-flex align-items-center"
        v-if="subSection"
        style="cursor: pointer"
      >
        <span @click="closeDialogue"
          ><span
            class="iconify"
            data-icon="la:times"
            data-width="28"
            data-height="28"
          ></span
        ></span>
        <div class="row align-items-center heading headings-border fullborder">
          <p @click="createInnerSection" class="size text-16 mb-0 bold700">
            Section
          </p>
          <p @click="createItems" class="size mb-0 text-16 bold700">Items</p>
        </div>
      </div>
    </div>

    <!-- **************************************************** -->
    <subsection-input
      v-for="sec in innerSections"
      :key="sec.index"
      :index="sec.index"
      @innerSection="innerSectionfunc($event, sec.index)"
      @innerIndex="deleteInnerScheme($event)"
      @deleteInnerSection="deleteSubsection"
      v-show="showInnersection"
    />
    <items-input-field
      v-for="item in items"
      :key="item.index"
      :i="item.index"
      @item="itemFunc($event, item.index)"
      @emitIndex="deleteInstance($event)"
      @deleteItem="deleteItemIndex"
      v-show="showItems"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      subSection: false,
      showInnersection: true,
      showItems: true,
      innerSections: [],
      items: [],
    }
  },
  methods: {
    deleteScheme() {
      this.$emit('deleteAddedScheme', this.index)
    },
    editScheme() {
      this.$emit('editScheme', true)
    },
    optionsDialogue() {
      this.subSection = true
    },
    closeDialogue() {
      this.subSection = false
    },
    createInnerSection() {
      this.subSection = false
      const random = Math.random()

      this.innerSections.push({
        title: '',
        objective: '',
        index: random,
      })
    },
    createItems() {
      this.subSection = false
      const random = Math.random()
      this.items.push({
        title: '',
        objective: '',
        index: random,
      })
    },
    innerSectionfunc(e, i) {
      const item = this.innerSections.find((elem) => elem.index === i)
      item.title = e.title
      item.objective = e.objective
      this.$emit('innerSections', this.innerSections)
    },
    itemFunc(e, i) {
      const item = this.items.find((elem) => elem.index === i)
      item.title = e.title
      item.objective = e.objective
      this.$emit('items', this.items)
    },
    deleteInnerScheme(e) {
      this.innerSections.splice(e, 1)
    },
    deleteSubsection(e) {
      this.innerSections.splice(e, 1)
    },
    deleteInstance(e) {
      this.items.splice(e, 1)
    },
    deleteItemIndex(e) {
      this.items.splice(e, 1)
    },
  },
  props: {
    section: {
      type: Object,
    },
    showAddedScheme: {
      type: Boolean,
      default: false,
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
  cursor: pointer;
}

.headings-border {
  border: 0.5px solid #333333;
  background: #fff8dc;
  max-width: 228px;
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
  width: 7rem;
  text-align: center;
}
</style>