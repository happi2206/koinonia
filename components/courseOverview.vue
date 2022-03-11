<template>
  <div>
    <div class="py-3 px-md-5 px-3">
      <h2 class="brown24 my-1 graytext">Description</h2>
      <div
        class="brownparagraph darktext"
        v-html="courseDetail.long_description"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseDetail: {
      type: Object,
      default: () => {
        return {
          long_description: '',
        }
      },
    },
  },
  data() {
    return {
      schemeOfWork: [{ title: '', objective: 'objective' }],
    }
  },
  methods: {
    addScheme() {
      this.schemeOfWork.push({
        title: '',
        objective: '',
      })
    },
  },
}
</script>