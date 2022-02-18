<template>
  <div>
    <div class="bg-white rounded p-3 my-2">
      <div
        class="border-bottom d-flex align-items-center justify-content-between"
      >
        <h2 class="brown24 py-3 bold700 text-capitalize mb-0">placeholder</h2>
      </div>
      <div class="my-2 d-flex">
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Start Date:</span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Start Time:</span>
          <span class=""> </span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> End Time:</span>
          <span class=""> </span>
          2
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> No in class:</span>
          <span class=""> </span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Student Absent:</span>
          <span class=""> </span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded p-3 my-2">
      <filter-component :disablevisualization="true">
        <table-component
          :items="events"
          v-if="visualization === 'list'"
          :fields="fields"
        />
      </filter-component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventDetail: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>