<template>
  <div class="card px-0">
    <div class="card-body">
      <div class="">
        <div class="firstwidth">
          <div class="my-2 secondwidth mb-1">
            <div class="d-flex flex-wrap justify-content-between">
              <slot name="gradebookModal"></slot>
              <div class="d-flex justify-content-end">
                <input
                  type="text"
                  :placeholder="`Search ${placeholder}`"
                  @change="$emit('search', $event.target.value)"
                  class="px-md-3 px-2 py-2 border rounded"
                />

                <button class="accentcolorbg py-2 px-3">
                  <b-icon icon="search"></b-icon>
                </button>
              </div>
            </div>
            <!-- <div class="mx-2 bg-yellow-400 py-2 px-4">
            <slot></slot>
          </div> -->

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
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

// type visualize = "grid" | "list" | any;

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      visualization: 'list',
    }
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

/* .firstwidth {
  width: 30%;
} */
/* .secondwidth {
  width: 70%;
} */

/* @media (max-width: 900.5px) {
  .firstwidth {
    width: 20%;
  }
  .secondwidth {
    width: 80%;
  }
} */
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
