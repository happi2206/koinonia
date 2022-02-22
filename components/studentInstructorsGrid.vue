<template>
  <div
    class="col-lg-4 col-6 my-3"
    @grid-clicked="$emit('grid-clicked', $event)"
  >
    {{ data }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
