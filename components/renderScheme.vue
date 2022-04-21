<template>
  <div class="container w-100 mb-3">
    <div class="d-flex justify-content-end align-items-center">
      <div v-if="section.length > 0" class="d-none mb-3 mr-3">
        <div v-b-modal.delete-scheme style="cursor: pointer">
          <span
            class="iconify"
            data-icon="bytesize:trash"
            style="color: #2f2f2f"
            data-width="16"
            data-height="16"
          ></span>
        </div>
      </div>
      <button
        @click="switchView"
        class="btn text-14 btn-height btn-width mb-3 mainbtndashboard"
        style="width: 80px; text-align: center"
      >
        Edit
      </button>
    </div>
    <b-card>
      <div
        v-b-toggle="`collapse-909848923`"
        v-for="(sec, index) in section"
        :key="index"
      >
        <div class="">
          <div
            class="
              w-100
              d-flex
              justify-content-between
              align-items-start
              p-2
              mr-0
              full
            "
          >
            <div class="w-75">
              <h3 class="text-16 mb-2">{{ sec.title }}</h3>
            </div>
            <span
              class="iconify"
              data-icon="ph:caret-down"
              data-width="22"
              data-height="22"
            ></span>
          </div>
          <div class="d-flex align-items-center justify-content-between mx-2">
            <h3 class="text-14 my-2">{{ sec.objective }}</h3>
          </div>
        </div>
      </div>
      <!-- <ul>
        <li v-for="(section, index) in subsection" :key="index">
          {{ section.title }}

          <ul v-if="section.items.length > 0">
            <li v-for="(i, index2) in section.items" :key="index2">
              {{ i.title }}
            </li>
          </ul>
        </li>
      </ul> -->
      <b-collapse id="collapse-909848923" class="mt-2">
        <!-- <div class="text-16 mb-2 ml-2" style="text-decoration: underline">
          Sections
        </div> -->
        <div class="p-2 bg-light">
          <div v-for="(tab, index) in subsection" :key="index">
            <div
              class="text-16 p-2 m-2 row align-items-center"
              v-b-toggle="`collapse-${index}`"
            >
              <span
                class="iconify"
                data-icon="bxs:right-arrow"
                style="color: #2f2f2f"
                data-width="14"
                data-height="14"
              ></span>
              <div class="ml-2 text-14">
                {{ tab.title }}
              </div>
              <!-- <div>
                <span
                  class="iconify"
                  data-icon="ph:caret-down"
                  data-width="18"
                  data-height="18"
                ></span>
              </div> -->
            </div>

            <b-collapse class="w-100 mt-2" :id="`collapse-${index}`">
              <b-card class="card_body">
                <div
                  class="p-2 mb-2 bg-light text-14"
                  style="border-radius: 4px"
                >
                  {{ tab.objective }}
                </div>
                <ul
                  v-if="tab.items.length > 0"
                  class="text-16 pr-2"
                  style="list-style: none"
                >
                  <li v-for="(items, index2) in tab.items" :key="index2">
                    <!-- <transition name="slide"> -->
                    <div
                      class="mb-2 ml-1 row align-items-center"
                      v-b-toggle="`collapse-${index2 + 0.6273893534}`"
                    >
                      <span
                        class="iconify"
                        data-icon="bxs:right-arrow"
                        style="color: #2f2f2f"
                        data-width="12"
                        data-height="12"
                      ></span>

                      <div class="ml-2 text-14">
                        {{ items.title }}
                      </div>
                    </div>

                    <!-- </transition> -->
                    <b-collapse :id="`collapse-${index2 + 0.6273893534}`"
                      ><div class="text-14 m-2 ml-3 p-2 bg-light">
                        {{ items.description }}
                      </div></b-collapse
                    >
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </div>
        </div>
      </b-collapse>
    </b-card>
    <b-modal
      id="delete-scheme"
      title="Delete Scheme"
      centered
      hide-footer
      ref="deleteScheme"
    >
      <p class="text-16 text-center">
        Are you sure you want to delete existing scheme of work ?
      </p>
      <div class="p-3 d-flex justify-content-center">
        <button
          @click="closeModal"
          class="btn mainbtndashboard medbrownparagraph"
          style="height: 40px; width: 5rem; text-align: center"
        >
          No
        </button>
        <button
          @click="deleteSchemeOfWork"
          class="ml-5 btn mainbtndashboard medbrownparagraph"
          style="height: 40px; width: 5rem; text-align: center"
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
          <span v-else>Yes</span>
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subsection: [],
      items: [],
      view: true,
      rotateArrow: false,
      id: '',
      isbusy: false,
    }
  },
  created() {
    this.getSchemeOfWork()
  },
  methods: {
    closeModal() {
      this.$refs['deleteScheme'].hide()
    },
    switchView() {
      this.$emit('view', this.view)
    },
    toggleDiv() {
      this.rotateArrow = !this.rotateArrow
    },
    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )
        console.log(response.id)
        this.id = response.id
        this.subsection = response.section[0].section

        for (const iterator of this.subsection) {
          //   console.log(iterator.items)
          this.items = iterator.items
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteSchemeOfWork() {
      try {
        this.isbusy = true
        console.log(this.id)
        let response = await this.$axios.$get(
          `course-v/delete-scheme-of-work?scheme_id=${this.id}`
        )
        this.$toast.success(response)
      } catch (error) {
        this.$toast.error(error.data.detail)
      } finally {
        this.isbusy = false
        this.$refs['deleteScheme'].hide()
      }
    },
  },
  props: {
    section: {
      type: Array,
    },
  },
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.6rem;
}
.full {
  border-bottom: 1px solid #dfdfdf;
}
.fullborder {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
}
.card_body {
  margin: 0rem 0.5rem 0rem 1.5rem;
}
/* div.animated-div.active {
  transform: translateX(0);
} */
.slide-enter-active {
  animation: slider 2.5s forwards;
}

.slide-leave-active {
  animation: slider 2s reverse;
}
@keyframes slider {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(90deg);
  }
}
</style>