<template>
  <div>
    <div>
      <filter-gradebook :placeholder="placeholder">
        <template #gradebookModal>
          <div class="ml-3" @click="openForm">
            <button
              v-b-modal.Add-Gradebook
              class="btn btn-height mainbtndashboard medbrownparagraph"
            >
              Add Grade Entry
            </button>
          </div>
        </template>
      </filter-gradebook>
      <table-component :items="events" :fields="fields"> </table-component>

      <b-modal
        id="Add-Gradebook"
        title="Add Gradebook"
        centered
        hide-footer
        ref="gradeModal"
      >
        <ValidationObserver v-slot="{ validate }">
          <form @submit.prevent="addGradeBook" class="px-4 mx-3">
            <div class="row mt-4">
              <div class="w-100">
                <div class="mb-2">
                  <label class="form-control-label text-12"
                    >Grade Book Entry
                    <span class="font10 small" style="color: red"
                      >*</span
                    ></label
                  >
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      v-model="title"
                      class="form-control text-14"
                      style="background: #fbfdfe"
                      placeholder="Please enter this field"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="mb-2">
                  <label class="form-control-label text-12"
                    >Entry Type
                    <span class="font10 small" style="color: red"
                      >*</span
                    ></label
                  >
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      v-model="type"
                      class="form-control text-14"
                      style="background: #fbfdfe"
                      placeholder="Please enter this field"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="mb-2">
                  <label class="form-control-label text-12"
                    >Obtainable Score
                    <span class="font10 small" style="color: red"
                      >*</span
                    ></label
                  >
                  <validation-provider rules="numeric" v-slot="{ errors }">
                    <input
                      v-model="score"
                      class="form-control text-14"
                      type="number"
                      style="background: #fbfdfe"
                      placeholder="Please enter this field"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
              </div>
            </div>
            <div class="my-3 px-3 flex justify-content-between">
              <div
                class="
                  btn
                  d-flex
                  align-items-center
                  justify-content-center
                  mainbtndashboard
                  medbrownparagraph
                "
                style="height: 40px; width: 5rem; text-align: center"
                @click="closeModal"
              >
                <p class="mb-0">Cancel</p>
              </div>
              <button
                class="btn mainbtndashboard medbrownparagraph"
                style="height: 40px; width: 5rem; text-align: center"
              >
                <span v-if="isbusy">
                  <b-spinner
                    label="loading"
                    variant="primary"
                    style="width: 1.5rem; height: 1.5rem"
                    class="text-center"
                  >
                  </b-spinner>
                </span>
                <span v-else>Save</span>
              </button>
            </div>
            <div
              type="button"
              ref="runValidation"
              id="runValidation"
              @click="validate"
            ></div>
          </form>
        </ValidationObserver>
      </b-modal>
    </div>
  </div>
</template>

<script>
import FilterComponent from '../filterComponent.vue'
import FilterGradebook from '../filterGradebook.vue'
import tableComponent from '../tableComponent.vue'
export default {
  components: { tableComponent, FilterComponent, FilterGradebook },
  data() {
    return {
      title: '',
      score: null,
      type: '',
      isbusy: false,
      placeholder: 'Gradebook',
      fields: [
        { key: 'surname', label: 'Surname', sortable: true },
        { key: 'firstname', label: 'Firstname', sortable: true },
      ],
      events: [
        {
          surname: 'Riley',
          firstname: 'Mike',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$refs['gradeModal'].hide()
    },
    addGradeBook() {
      console.log(`yay`)
    },
  },
}
</script>

<style scoped>
</style>