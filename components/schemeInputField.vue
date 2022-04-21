<template>
  <div>
    <div v-if="showSchemeinputField">
      <div v-if="isLoading">
        <b-row>
          <b-col cols="12" class="">
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="">
            <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
          </b-col>
        </b-row>
      </div>
      <form>
        <div>
          <div class="fullborder p-1 my-0">
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
                      v-model="scheme.title"
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
                      v-model="scheme.objective"
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
    </div>

    <!-- *******************Output******************* -->
    <div v-else>
      <added-scheme
        :scheme="scheme"
        @editScheme="editScheme"
        :showAddedScheme="showAddedScheme"
        @deleteAddedScheme="deleteInstance"
        @innerSections="innerSectionsfunc"
        @items="itemsfunc"
        @sections="sectionsAdd"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scheme: {
        title: '',
        objective: '',
        section: [],
      },
      showAddedScheme: false,
      saveButton: false,
      isLoading: false,
    }
  },
  props: {
    index: {
      type: Number,
    },
    collapse: {
      type: Boolean,
    },
    schema: {
      type: Array,
    },
  },

  computed: {
    showSchemeinputField() {
      return this.collapse
    },
  },
  created() {
    this.scheme = this.schema[0]
    if (this.scheme.length > 0) {
      this.showAddedScheme = true
    }
  },
  methods: {
    addScheme() {
      this.$emit('toggle')

      this.showAddedScheme = true
      this.$emit('scheme', this.scheme)
    },
    sectionsAdd(e) {
      this.scheme.section = e
    },
    deleteScheme() {
      this.$emit('deleteScheme', this.index)
      this.$emit('saveButton', this.saveButton)
    },
    deleteInstance(e) {
      this.$emit('deleteEmit', e)
    },
    editScheme() {
      this.$emit('toggle')
      this.showAddedScheme = false
    },

    innerSectionsfunc(e) {
      this.$emit('innerSections', e)
    },
    itemsfunc(e) {
      this.$emit('items', e)
    },
  },
}
</script>