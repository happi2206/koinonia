<template>
  <div>
    <div>
      <div>
        <div class="mx-3 my-2 d-flex justify-content-end">
          <div class="mr-2" @click="editItem">
            <span style="cursor: pointer"
              ><span class="iconify" data-icon="bxs:pencil"></span>
            </span>
          </div>
          <div @click="deleteItem">
            <span
              style="cursor: pointer"
              class="iconify"
              data-icon="bxs:trash-alt"
            ></span>
          </div>
        </div>
        <div class="newLecture bg-primary fullborder text-14 ml-5 mb-5">
          <div
            v-b-toggle="`collapse-${index}`"
            class="py-3 px-4 d-flex align-items-center justify-content-between"
          >
            <div>
              <span style="font-weight: 600" class="text-16">
                {{ item.title }}
              </span>
            </div>
            <span
              class="iconify"
              data-icon="ph:caret-down"
              data-width="22"
              data-height="22"
            ></span>
          </div>
          <b-collapse :id="`collapse-${index}`" class="mt-2">
            <b-card class="mx-3 bg-primary controlborder">
              <p class="text-14">{{ item.objective }}</p>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    editItem() {
      this.$emit('editItem', true)
    },
    deleteItem() {
      this.$emit('deleteItem', this.index)
    },
  },
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style>
</style>