<template>
  <div>
    <div>
      <div v-if="sectionContent">
        <div class="mx-3 my-2 d-flex justify-content-end">
          <span @click="editInnerSection" class="mr-2" style="cursor: pointer"
            ><span class="iconify" data-icon="bxs:pencil"></span
          ></span>
          <div @click="deleteInnerSection">
            <span
              style="cursor: pointer"
              class="iconify"
              data-icon="bxs:trash-alt"
            ></span>
          </div>
        </div>
        <div class="newLecture fullborder text-14 ml-5 mb-5">
          <div
            v-b-toggle="`collapse-${index}`"
            class="py-3 px-4 d-flex align-items-center justify-content-between"
          >
            <div>
              <span style="font-weight: 600" class="text-16">
                {{ innerSection.title }}
              </span>
            </div>
            <span
              class="iconify"
              data-icon="ph:caret-down"
              data-width="22"
              data-height="22"
            ></span>
          </div>
          <b-collapse :id="`collapse-${index}`" class="mt-2">
            <b-card class="mx-3 controlborder">
              <p class="text-14">{{ innerSection.objective }}</p>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionContent: true,
    }
  },
  methods: {
    deleteInnerSection() {
      console.log(this.index)
      this.$emit('deleteIndex', this.index)
    },
    editInnerSection() {
      this.$emit('editInnerSection', true)
    },
  },
  props: {
    innerSection: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
}
</script>

<style>
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