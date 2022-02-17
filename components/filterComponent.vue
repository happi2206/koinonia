<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap align-items-center justify-content-between">
        <div
          class="
            d-flex
            align-items-center
            justify-content-between justify-content-md-start
            flex-wrap
            my-3 my-lg-0
          "
        >
          <div class="mr-2">
            <div
              v-if="!disableVisualization"
              class="display-toggle d-flex align-items-center"
            >
              <div
                class="icon-wrapper"
                :class="[visualization === 'grid' ? 'active' : '']"
                @click="toggleVisualization()"
              >
                <b-icon icon="grid"></b-icon>
              </div>
              <div
                class="icon-wrapper"
                :class="[visualization === 'list' ? 'active' : '']"
                @click="toggleVisualization()"
              >
                <b-icon icon="card-list"></b-icon>
              </div>
            </div>
          </div>
          <div v-if="!disablePagination" class="records-count">
            <span>View by: </span>
            <select
              class="records-count"
              @change="$emit('view-by', $event.target.value)"
            >
              <option value="10">10 Records</option>
              <option value="20">20 Records</option>
              <option value="25">25 Records</option>
              <option value="50">50 Records</option>
              <option value="100">100 Records</option>
            </select>
          </div>
        </div>
        <div
          class="
            d-flex
            align-items-center
            justify-content-between justify-content-md-end
            flex-wrap
            mb-1 mb-md-0
          "
        >
          <div class="flex">
            <input
              type="text"
              required
              placeholder="Search "
              class="px-3 py-2 border"
            />

            <button class="bg-yellow-400 py-2 px-3">
              <b-icon icon="search"></b-icon>
            </button>
          </div>

          <!-- <div class="mx-5">
            <slot name="besideFilterButton"></slot>
          </div>
          <div id="filters-container" class="filters-container d-none">
            <div
              class="filter-closer"
              data-toggle-visibility="#filters-container"
            ></div>

            <div class="filters-container-content">
              <div class="search-input mb-2">
                <input
                  type="text"
                  class="forminputs"
                  placeholder="Search for class"
                />
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <hr />
      <slot :visualization="visualization"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

// type visualize = "grid" | "list" | any;

export default Vue.extend({
  props: {
    disablePagination: {
      type: Boolean,
      default: false,
    },
    disableVisualization: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visualization: 'list',
    }
  },
  methods: {
    toggleVisualization() {
      this.visualization = this.visualization === 'grid' ? 'list' : 'grid'
      this.$emit('visualization', this.visualization)
    },
  },
})
</script>

<style scoped>
.flwidth {
  width: 50%;
}
.display-toggle .icon-wrapper {
  background: #fbfdfe;
  /* Outline Color */

  border: 0.5px solid #e7e8eb;
  border-left: 0;
  border-radius: 0px;
  line-height: 0;
  padding: 10px 10px;
  height: 30px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.display-toggle .icon-wrapper:first-child {
  border-radius: 4px 0px 0px 4px;
  border-left: 0.5px solid #e7e8eb;
}
.display-toggle .icon-wrapper:last-child {
  border-radius: 0px 4px 4px 0px;
}
.display-toggle .icon-wrapper svg {
}
.display-toggle .icon-wrapper svg path {
  fill: #8f9aa3;
}
.display-toggle .icon-wrapper.active svg path {
  fill: #1070b7;
}
</style>
