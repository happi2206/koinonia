<template>
  <div>
    <div class="container w-100 text-14 mb-2">
      <b-card class="w-100">
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

            <h3 class="text-16 m-2">{{ sec.objective }}</h3>
          </div>
        </div>

        <b-collapse id="collapse-909848923" class="mt-2">
          <!-- <div
            v-for="(subsec, index) in subsection"
            :key="index"
            class="mx-3 p-0 controlborder d-flex"
          >
            <p class="text-14 mb-2" style="font-weight: 600">
              {{ subsec.title }}: &nbsp;
            </p>
            <p class="text-14 mb-2">{{ subsec.objective }}</p>
          </div> -->

          <div class="d-flex p-2 bg-light" style="overflow-x: auto">
            <button
              class="btn mainbtndashboard mr-3 btn-width"
              v-for="(tab, index) in subsection"
              :key="index"
              @click="switchTab(index)"
            >
              {{ tab.title }}
            </button>
          </div>

          <div class="w-100 mt-2" v-for="(sec, id) in subsection" :key="id">
            <b-card :id="id" v-show="display">
              <div class="text-16 full pb-2 row justify-content-between px-3">
                {{ sec.objective }}
                <div @click="closeTab(id)" style="cursor: pointer">
                  <span
                    class="iconify"
                    data-icon="icon-park:preview-close"
                    style="color: #2f2f2f"
                    data-width="16"
                    data-height="16"
                  ></span>
                </div>
              </div>

              <div
                v-for="(item, index) in sec.items"
                :key="index"
                class="text-16 py-2"
              >
                {{ item.title }}:
                <span class="text-14">{{ item.description }}</span>
              </div>
            </b-card>
          </div>
        </b-collapse>
      </b-card>
    </div>
    <!-- <button @click="chagger('second')">switch</button>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive> -->
  </div>
</template>

<script>
// import first from '~/components/mainFooter.vue'
// import second from '~/components/uploadFile.vue'
export default {
  //   components: {
  //     first,
  //     second,
  //   },
  data() {
    return {
      subsection: [],
      display: false,
      hide: '',
      //   currentTabComponent: 'first',
    }
  },
  created() {
    this.getSchemeOfWork()
  },
  methods: {
    chagger(e) {
      this.currentTabComponent = e
    },
    switchTab(i) {
      if (this.display === false) {
        this.display = true
        document.getElementById(i).style.display = 'block'

        this.display = false
      } else if (this.display === true) {
        document.getElementById(i).style.display = 'none'
        // this.display = false
      }
    },
    closeTab(i) {
      document.getElementById(i).style.display = 'none'
    },
    async getSchemeOfWork() {
      try {
        let response = await this.$axios.$get(
          `course-v/get-scheme-of-work?course_id=${this.$route.params.id}`
        )
        this.subsection = response.section[0].section
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
.schemeTitle {
  text-align: center;
}
.full {
  border-bottom: 1px solid #dfdfdf;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.8rem;
}
.btn-width {
  width: 100px;
  text-align: center;
  overflow-x: hidden;
}
.hide {
  display: none;
}
.block {
  display: block;
}
</style>