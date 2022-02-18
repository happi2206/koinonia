<template>
  <div>
    <div class="bg-white rounded p-3 my-2">
      <pre>{{ eventDetail }}</pre>
      <div
        class="border-bottom d-flex align-items-center justify-content-between"
      >
        <h2 class="brown24 py-3 bold700 text-capitalize mb-0">
          {{ eventDetail.name }}
        </h2>
      </div>
      <div class="my-2 d-flex">
        <p class="my-2 medparagraph mx-3">
          Description:
          <span class="lightgraytext"> {{ eventDetail.description }}</span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Start Date:</span>
          <span class=""> {{ eventDetail.start_date }} </span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> End Date:</span>
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