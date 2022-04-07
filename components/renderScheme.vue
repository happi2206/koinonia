<template>
  <div class="container w-100 mb-3">
    <div class="d-flex justify-content-end">
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
              align-items-center
              p-2
              mr-0
              full
            "
          >
            <h3 class="text-18 mb-2">{{ sec.title }}</h3>
            <span
              class="iconify"
              data-icon="ph:caret-down"
              data-width="22"
              data-height="22"
            ></span>
          </div>

          <div
            class="text-18 m-2"
            style="text-align: center; text-decoration: underline"
          >
            Objective
          </div>
          <div class="d-flex align-items-center justify-content-between mx-2">
            <h3 class="text-14 my-2">{{ sec.objective }}</h3>
            <!-- <div class="">
              <span
                class="iconify"
                data-icon="ph:caret-down"
                data-width="18"
                data-height="18"
              ></span>
            </div> -->
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
        <div class="text-16 mb-2 ml-2" style="text-decoration: underline">
          Sections
        </div>
        <div class="p-2 bg-light">
          <div v-for="(tab, index) in subsection" :key="index">
            <div
              class="text-16 p-2 fullborder m-2 row justify-content-between"
              v-b-toggle="`collapse-${index}`"
            >
              <div>
                {{ tab.title }}
              </div>
              <div>
                <span
                  class="iconify"
                  data-icon="ph:caret-down"
                  data-width="18"
                  data-height="18"
                ></span>
              </div>
            </div>

            <b-collapse class="w-100 mt-2" :id="`collapse-${index}`">
              <b-card :id="id">
                <ul
                  v-if="tab.items.length > 0"
                  class="text-16 px-2"
                  style="list-style: disc"
                >
                  <li
                    v-for="(items, index2) in tab.items"
                    :key="index2"
                    class="ml-2 mb-2"
                  >
                    <div>{{ items.title }}</div>

                    <span class="text-14">{{ items.description }}</span>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </div>
        </div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subsection: [],
      items: [],
      view: true,
    }
  },
  created() {
    this.getSchemeOfWork()
  },
  methods: {
    switchView() {
      this.$emit('view', this.view)
    },
    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )
        this.subsection = response.section[0].section

        for (const iterator of this.subsection) {
          console.log(iterator.items)
          this.items = iterator.items
        }
      } catch (error) {
        console.log(error)
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
  padding: 0.8rem;
}
.full {
  border-bottom: 1px solid #dfdfdf;
}
.fullborder {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
}
</style>