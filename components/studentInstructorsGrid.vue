<template>
  <div class="col-md-4 my-3" @grid-clicked="$emit('grid-clicked', $event)">
    <div v-for="(item, index) in data" :key="index">
      <div class="my-4">
        <p class="medbrownparagraph text-center">{{ item.email }}</p>
        <p class="medbrownparagraph text-center">
          {{ item.surname }} {{ item.other_name }}
        </p>
      </div>
    </div>
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
