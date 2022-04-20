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
      <!-- <table-component :items="events" :fields="fields"> </table-component> -->
      <!-- <grade-book-table /> -->

      <div>
        <div class="table-responsive">
          <table class="table gradebook-table border-bottom-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  colspan="2"
                  class="filter-wrapper pb-0 border-bottom-0"
                >
                  <div class="search-input d-flex align-items-center mb-2">
                    <button
                      class="accentcolorbg py-2 px-3"
                      style="height: 38px"
                    >
                      <b-icon icon="search"></b-icon>
                    </button>
                    <input
                      v-model="searchQuery"
                      type="text"
                      class="form-control text-16 w-100"
                      placeholder="Search for student"
                    />
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1 d-flex justify-content-between">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                    <div
                      @click="toolTip"
                      id="button-2"
                      variant="outline-success"
                      title="Tooltip directive content"
                      class="touch"
                    >
                      <b-tooltip class="d-flex" target="button-2">
                        <div class="d-flex text-start">
                          <p class="text-14">
                            click on the<span
                              class="iconify"
                              data-icon="fluent:re-order-dots-vertical-16-regular"
                              style="color: #fff"
                              data-width="16"
                              data-height="16"
                            ></span>
                            icon to drag the table columns
                          </p>
                        </div>
                      </b-tooltip>
                      <span
                        class="iconify"
                        data-icon="bi:info-circle-fill"
                        style="color: #ffcd06"
                        data-width="16"
                        data-height="16"
                      ></span>
                    </div>
                  </div>
                  <div class="px-3 pb-3">
                    <div class="title-text mb-2">Class work</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">30</span>
                    </div>
                    <!-- <div class="period-text mb-1">1st Term</div> -->
                    <div class="period-text color text-12">17/04/22</div>
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1 d-flex justify-content-between">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                    <div @click="toolTip" class="touch">
                      <span
                        class="iconify"
                        data-icon="bi:info-circle-fill"
                        style="color: #ffcd06"
                        data-width="16"
                        data-height="16"
                      ></span>
                    </div>
                  </div>
                  <div class="px-3 pb-3">
                    <div class="title-text mb-2">Project</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">30</span>
                    </div>
                    <!-- <div class="period-text mb-1">1st Term</div> -->
                    <div class="period-text color text-12">17/04/22</div>
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1 d-flex justify-content-between">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                    <div @click="toolTip" class="touch">
                      <span
                        class="iconify"
                        data-icon="bi:info-circle-fill"
                        style="color: #ffcd06"
                        data-width="16"
                        data-height="16"
                      ></span>
                    </div>
                  </div>
                  <!-- <div class="px-3 pb-3">
                    <div class="title-text mb-2">Class work</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">10</span>
                    </div>
                    <div class="period-text mb-1">1st Term</div>
                    <div class="period-text">12/02/21</div>
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                  </div>
                  <div class="px-3 pb-3">
                    <div class="title-text mb-2">Test 1</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">10</span>
                    </div>
                    <div class="period-text mb-1">1st Term</div>
                    <div class="period-text">12/02/21</div>
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                  </div> -->
                  <!-- <div class="px-3 pb-3">
                    <div class="title-text mb-2">Test 2</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">5</span>
                    </div>
                    <div class="period-text mb-1">1st Term</div>
                    <div class="period-text">12/02/21</div>
                  </div>
                </th>
                <th scope="col" rowspan="2" class="grade-col-head">
                  <div class="px-1 py-1">
                    <svg
                      class="pointer"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="5" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect y="10" width="3" height="3" rx="1" fill="#B7CCDC" />
                      <rect
                        x="4.5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="5"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                      <rect
                        x="4.5"
                        y="10"
                        width="3"
                        height="3"
                        rx="1"
                        fill="#B7CCDC"
                      />
                    </svg>
                  </div> -->
                  <div class="px-3 pb-3">
                    <div class="title-text mb-2">Exam</div>
                    <div class="score-text mb-2">
                      Score: <span class="score-highlight">60</span>
                    </div>
                    <!-- <div class="period-text mb-1">1st Term</div> -->
                    <div class="period-text color text-12">17/04/22</div>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" class="sortable">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <span class="sort-arrows">Surname</span>
                    <span
                      class="iconify"
                      data-icon="carbon:caret-sort"
                      data-width="13"
                      data-height="13"
                    ></span>
                  </div>
                </th>
                <th scope="col" class="sortable">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <span class="sort-arrows">First Name</span>
                    <span
                      class="iconify"
                      data-icon="carbon:caret-sort"
                      data-width="13"
                      data-height="13"
                    ></span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>James</td>
                <td>Chinwoku</td>
                <td class="grade-col-data">16</td>
                <td class="grade-col-data">24</td>

                <td class="grade-col-data">60</td>
              </tr>
              <tr>
                <td>Alex</td>
                <td>Azuike</td>

                <td class="grade-col-data">10</td>
                <td class="grade-col-data">4</td>
                <td class="grade-col-data">35</td>
              </tr>
              <tr>
                <td>Moses</td>
                <td>Sabinus</td>
                <td class="grade-col-data">16</td>
                <td class="grade-col-data">24</td>
                <td class="grade-col-data">17</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Michael</td>
                <td class="grade-col-data">16</td>
                <td class="grade-col-data">24</td>

                <td class="grade-col-data">55</td>
              </tr>
              <tr>
                <td>Vale</td>
                <td>Orthodox</td>
                <td class="grade-col-data">16</td>
                <td class="grade-col-data">24</td>

                <td class="grade-col-data">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <b-modal
        id="Add-Gradebook"
        title="Add Gradebook"
        centered
        hide-footer
        ref="gradeModal"
      >
        <ValidationObserver v-slot="{ validate }">
          <form @submit.prevent="addGradeBook" class="px-2">
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
    toolTip() {
      console.log(`yay`)
    },
  },
}
</script>

<style scoped>
.table th,
.table td {
  padding: 0.5rem;
  vertical-align: middle;
  /* border-top: 1px solid #dee2e6; */
}
.table th {
  padding: 0.5rem;
  vertical-align: middle;
  /* border-top: 1px solid #dee2e6; */
}
td,
th {
  border-left: 0.5px solid #dee2e6;
  border-right: 0.5px solid #dee2e6;
  border-bottom: 0.5px solid #dee2e6;
}
.color {
  color: #8f9aa3;
}
.grade-col-data {
  text-align: center;
  background: rgb(243, 245, 207) !important;
}
.touch {
  cursor: pointer;
}
</style>