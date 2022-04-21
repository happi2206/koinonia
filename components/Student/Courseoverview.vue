<template>
  <div>
    <div class="ml-3">
      <h1 class="text-24">Description</h1>
      <p class="text-14">
        {{ courseDetails.description }}
      </p>
    </div>
    <div class="mt-4 mb-2" v-if="schemeExist">
      <h1 class="text-24 mb-3 ml-5">Scheme of work</h1>
      <list-schemefor-students :schemeOfWork="schemeOfWork" />
    </div>
    <div class="ml-3 pb-5 my-5 d-flex" v-else>
      <span
        class="iconify"
        data-icon="clarity:help-info-solid"
        style="color: #ffcd06"
        data-width="25"
        data-height="25"
      ></span>
      <span class="text-14 ml-4">No existing scheme of work</span>
    </div>
  </div>
</template>

<script>
import ListSchemeforStudents from '../listSchemeforStudents.vue'
export default {
  data() {
    return {
      isLoading: true,
      schemeExist: false,
      schemeOfWork: [],
    }
  },
  created() {
    this.schemeOfWork = this.courseDetails.scheme_of_works
    if (this.schemeOfWork !== 0) {
      this.schemeExist = true
    }
  },
  props: {
    courseDetails: {
      type: Object,
    },
  },
  components: { ListSchemeforStudents },
  methods: {
    showScheme(e) {
      this.schemeExist = e
    },
  },
}
</script>

<style>
</style>