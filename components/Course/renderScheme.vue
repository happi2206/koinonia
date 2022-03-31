<template>
  <div class="corner second-section mb-4">
    <div class="d-flex corner align-items-center justify-content-between mb-4">
      <div class="d-flex align-items-center">
        <h2 class="text-16 bold700 mb-0 mx-3">{{ sectionTitle }}:</h2>
        <span style="color: #333333" class="text-14">{{ sectionTitle }}</span>
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

    <!-- <div class="plus mb-2">
      <b-icon icon="plus-square" @click="optionsDialogue"></b-icon>
    </div> -->

    <!-- <div class="pl-3 align-items-center">
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
    </div> -->

    <!-- **************************************************** -->
    <!-- <subsection-input
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
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderScheme: true,
    }
  },
  props: {
    sectionTitle: {
      type: String,
    },
    sectionObjective: {
      type: String,
    },
  },
}
</script>

<style>
</style>