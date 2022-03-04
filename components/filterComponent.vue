<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <div
          class="
            d-flex
            align-items-center
            justify-content-between justify-content-md-start
            flex-wrap
            firstwidth
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
                <slot name="graphicon"> <b-icon icon="grid"></b-icon></slot>
              </div>
              <div
                class="icon-wrapper"
                :class="[visualization === 'list' ? 'active' : '']"
                @click="toggleVisualization()"
              >
                <span class="iconify" data-icon="bi:list"></span>
              </div>
            </div>
          </div>
          <div
            v-if="!disablePagination"
            class="records-count medbrownparagraph"
          >
            <span class="medbrownparagraph">View by: </span>
            <select
              class="records-count medbrownparagraph medbrownparagraph"
              @change="$emit('view-by', $event.target.value)"
            >
              <option class="medbrownparagraph" value="10">10 Records</option>
              <option class="medbrownparagraph" value="20">20 Records</option>
              <option class="medbrownparagraph" value="25">25 Records</option>
              <option class="medbrownparagraph" value="50">50 Records</option>
              <option class="medbrownparagraph" value="100">100 Records</option>
            </select>
          </div>
        </div>

        <slot name="filterby"></slot>
        <div
          class="
            d-flex
            align-items-md-center
            justify-content-md-end
            flex-md-row flex-column
            secondwidth
            mb-1 mb-md-0
          "
        >
          <div class="flex width100 my-md-0 my-3">
            <input
              type="text"
              required
              placeholder="Search"
              @change="$emit('search', $event.target.value)"
              class="px-md-3 px-2 py-2 border rounded widthfullsearch"
            />

            <button class="accentcolorbg py-2 px-3">
              <b-icon icon="search"></b-icon>
            </button>
          </div>
          <!-- <div class="mx-2 bg-yellow-400 py-2 px-4">
            <slot></slot>
          </div> -->

          <div class="my-md-0">
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
          </div>
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

.firstwidth {
  width: 30%;
}
/* .secondwidth {
  width: 70%;
} */

@media (max-width: 900.5px) {
  .firstwidth {
    width: 20%;
  }
  .secondwidth {
    width: 80%;
  }
}
@media (max-width: 900.5px) {
  .firstwidth {
    width: 100%;
  }
  .secondwidth {
    width: 100%;
  }
}

@media (max-width: 767.5px) {
  .widthfullsearch {
    width: 100%;
  }

  .width100 {
    width: 100%;
  }
}
</style>
