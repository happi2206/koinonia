<template>
  <div>
    <div>
      <div v-if="sectionContent">
        <div class="mx-3 my-1 d-flex justify-content-end">
          <span @click="editInnerSection" class="mr-2" style="cursor: pointer"
            ><span
              class="iconify"
              data-icon="bi:pencil-square"
              style="color: #2f2f2f"
              data-width="14"
              data-height="16"
            ></span
          ></span>
          <div @click="deleteInnerSection" style="cursor: pointer">
            <span
              class="iconify"
              data-icon="bytesize:trash"
              style="color: #2f2f2f"
              data-width="16"
              data-height="16"
            ></span>
          </div>
        </div>
        <div
          class="newLecture fullborder text-14 ml-4 mb-2"
          style="border-radius: 4px"
        >
          <div
            v-b-toggle="`collapse-${index}`"
            class="py-1 px-4 d-flex align-items-center justify-content-between"
          >
            <div>
              <div style="font-weight: 600" class="text-16">
                {{ section.title }}
              </div>
              <p class="text-14 mb-0">
                {{ section.objective }}
              </p>
            </div>
            <span
              class="iconify"
              data-icon="ph:caret-down"
              data-width="22"
              data-height="22"
            ></span>
          </div>
          <b-collapse :id="`collapse-${index}`" class="mt-2">
            <b-card
              v-for="(item, index) in items"
              :key="index"
              class="mx-3 controlborder"
            >
              <p class="text-14 mb-2" style="font-weight: 600">
                {{ item.title }}
              </p>
              <p class="text-14 mb-2">{{ item.description }}</p>
            </b-card>
          </b-collapse>
          <div class="plus mt-0 mb-1 ml-3">
            <b-icon @click="addItem()" icon="plus-square"></b-icon>
          </div>
          <items-input-field
            v-for="(item, index) in items"
            :itemz="item"
            :key="index"
            :showItemInput="showItemInput"
            @item="populateItem($event, index)"
            @emitIndex="deleteItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addedItem from './addedItem.vue'
export default {
  components: { addedItem },
  data() {
    return {
      sectionContent: true,
      showItemInput: false,
      item: {
        title: '',
        description: '',
      },
      items: [],
    }
  },
  mounted() {
    this.items = this.section.items
  },
  methods: {
    deleteInnerSection() {
      console.log(this.index)
      this.$emit('deleteIndex', this.index)
    },
    editInnerSection() {
      this.$emit('editInnerSection', true)
    },
    addItem() {
      this.showItemInput = true
      this.items.push(this.item)
    },
    populateItem(e, i) {
      this.items[i] = e
      this.item = {
        title: '',
        description: '',
      }
      this.$emit('items', this.items)
    },
    deleteItem(i) {
      this.items.splice(i, 1)
    },
  },

  props: {
    section: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
}
</script>

<style>
.second-section {
  max-width: 950px;
}
.plus {
  cursor: pointer;
}
.headings {
  font-size: 18px;
  color: #0734aa;
  cursor: pointer;
}
.heading {
  font-size: 18px;
  color: #0734aa;
  cursor: pointer;
}

.headings-border {
  border: 0.5px solid #333333;
  background: #fff8dc;
  width: 797px;
  height: 45px;
  margin-left: 1rem;
}
.lecture-cover {
  background: #fff8dc;
  width: 95%;
  border: 0.5px solid #333333;
}

.lecture-cover input {
  max-width: 700px;
}
.formfix {
  margin-left: 2.2rem;
}

.controlborder {
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.form-control-width {
  max-width: 98%;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}
</style>