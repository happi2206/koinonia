<template>
  <div>
    <div>
      <div class="mb-2">
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="text-14 mb-2" style="font-weight: 600">
              {{ item.title }}
            </p>
            <!-- <div class="d-flex">
              <span @click="editItem" class="mr-2" style="cursor: pointer"
                ><span
                  class="iconify"
                  data-icon="bi:pencil-square"
                  style="color: #2f2f2f"
                  data-width="14"
                  data-height="16"
                ></span
              ></span>
              <div @click="deleteItem" style="cursor: pointer">
                <span
                  class="iconify"
                  data-icon="bytesize:trash"
                  style="color: #2f2f2f"
                  data-width="16"
                  data-height="16"
                ></span>
              </div>
            </div> -->
          </div>

          <p class="text-14 mb-2">{{ item.description }}</p>
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
  },
  watch: {
    item: {
      handler(newVal) {
        this.item = newVal
        console.log(newVal)
      },
    },
  },
}
</script>

<style>
</style>