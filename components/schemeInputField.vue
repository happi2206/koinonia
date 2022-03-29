<template>
  <div>
    <div>
      <form v-show="collapse">
        <div>
          <div class="fullborder p-3 my-2">
            <div>
              <div class="row">
                <div class="col p-0">
                  <div class="d-flex align-items-start pt-5 h-100">
                    <h2 class="text-16 ml-4 bold700">New Section :</h2>
                  </div>
                </div>
                <div class="form-group col-md-10 pl-0 pr-5" ref="clearscheme">
                  <div class="my-2 text-16">
                    <label>Title</label>
                    <input
                      v-model="section.title"
                      required
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000000; border-radius: 0rem"
                      placeholder="Enter A Title"
                    />
                  </div>
                  <div class="my-2 text-16">
                    <label>Objective</label>
                    <input
                      v-model="section.objective"
                      required
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000000; border-radius: 0rem"
                      placeholder="Objective"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="py-1 pr-4 d-flex justify-content-end">
              <button
                class="btn medbrownparagraph"
                style="border-radius: none; width: 102px; text-align: center"
                @click.prevent="deleteScheme"
              >
                Cancel
              </button>
              <button
                class="mainbtn rounded medbrownparagraph py-2 px-3"
                style="border-radius: none; width: 102px; text-align: center"
                @click.prevent="addScheme"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
      <added-scheme
        :section="section"
        @editScheme="editScheme"
        :showAddedScheme="showAddedScheme"
        @deleteAddedScheme="deleteInstance"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: true,
      showAddedScheme: false,
      section: {
        title: '',
        objective: '',
      },
    }
  },
  props: {
    index: {
      type: Number,
    },
    sections: {
      type: Array,
    },
  },
  methods: {
    addScheme() {
      this.collapse = false
      this.showAddedScheme = true
      this.$emit('switch', this.showScheme)
    },
    deleteScheme() {
      this.$emit('i', this.index)
    },
    deleteInstance(e) {
      this.$emit('deleteEmit', e)
    },
    editScheme(e) {
      this.collapse = e
      this.showAddedScheme = false
    },
  },

  watch: {
    section: {
      handler(newVal) {
        this.$emit('section', newVal)
      },
      deep: true,
    },
  },
}
</script>