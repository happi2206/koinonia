<template>
  <div>
    <div>
      <filter-gradebook :placeholder="placeholder">
        <template #gradebookModal>
          <div class="ml-3">
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

                <th
                  v-for="(headers, index) in thisData.entries"
                  :key="index"
                  draggable="true"
                  @drop="onDrop($event, headers)"
                  @dragstart="startDrag($event, headers)"
                  @dragover.prevent
                  @dragenter.prevent
                  scope="col"
                  rowspan="2"
                  class="grade-col-head"
                >
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
                        class="iconify touch"
                        data-icon="bi:info-circle-fill"
                        style="color: #ffcd06"
                        data-width="16"
                        data-height="16"
                      ></span>
                    </div>
                  </div>
                  <div class="px-3 pb-3">
                    <div class="title-text mb-2">{{ headers.name }}</div>
                    <div class="score-text mb-2">
                      Score:
                      <span class="score-highlight">{{
                        headers.max_obtainable_score
                      }}</span>
                    </div>
                    <!-- <div class="period-text mb-1">1st Term</div> -->
                    <div class="period-text color text-12">12/17/22</div>
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
              <tr v-for="(student, index) in students" :key="index">
                <td>{{ student.firstname }}</td>
                <td>{{ student.surname }}</td>
                <template v-for="(entry, index2) in thisData.entries">
                  <td :key="index2" class="grade-col-data">
                    {{
                      getScores(entry.scores, student.class_student_id)
                        ? getScores(entry.scores, student.class_student_id)
                            .score
                        : '-'
                    }}
                  </td>
                </template>
              </tr>
              <tr></tr>
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
          <div class="px-2">
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
                @click="addGradeBook"
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
          </div>
        </ValidationObserver>
      </b-modal>
    </div>
  </div>
</template>

<script>
import FilterComponent from '../filterComponent.vue'
import FilterGradebook from '../filterGradebook.vue'
import tableComponent from '../tableComponent.vue'
import draggable from 'vuedraggable'
export default {
  components: { tableComponent, FilterComponent, FilterGradebook, draggable },
  data() {
    return {
      title: '',
      dragging: false,
      score: null,
      name: '',
      type: '',
      searchQuery: '',
      isbusy: false,
      placeholder: 'Gradebook',

      studentData: {
        students: [
          {
            admission_id: 'a106af99-7030-4cfa-bbcb-328501b526c1',
            class_student_id: '322bbd56-cb24-4d2c-822b-d676b475bb13',
            firstname: 'Range',
            surname: 'Episode',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: '522b7902-c1a1-4344-94b6-74702b827c4b',
            class_student_id: '8b0b86c9-d4be-4c69-8770-7e642632934a',
            firstname: 'Stephanie',
            surname: 'Adiele',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: '5c8e14c2-a90d-4e42-bca7-7b243474b0dc',
            class_student_id: '4b497b6d-5010-4027-adb7-6b4fcac57671',
            firstname: 'Jaden',
            surname: 'Cross',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: '0980a408-ee07-45bb-b28f-51465d1ab261',
            class_student_id: '9e056911-fcb3-4ccc-b9d7-fbf7f3cbe8e9',
            firstname: 'Scott',
            surname: 'Travis',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: 'f4610726-e106-4091-a041-d229f0c12537',
            class_student_id: '03ba5c3f-d52a-4a99-a882-e49827929e23',
            firstname: 'Happiness',
            surname: 'Adeboye',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: '10ca3141-4e26-4b77-9b20-711b763ed137',
            class_student_id: '82fd841d-6e5c-40ee-ba39-b38d7f755273',
            firstname: 'Moses',
            surname: 'Simon',
            gender: 'male',
            avatar: null,
          },
          {
            admission_id: 'e823e9a5-e223-4cbe-976e-bebbf69b70e0',
            class_student_id: '5703c61f-d5d3-454b-93b9-fd7d2e1c8a1d',
            firstname: 'Great',
            surname: 'Ben',
            gender: 'male',
            avatar: null,
          },
          {
            admission_id: '8b419d95-7b7a-455f-8304-54a62980fefe',
            class_student_id: 'e9520c69-910f-4c54-bb10-2264ea7546a1',
            firstname: 'Sabinus',
            surname: 'Gordons',
            gender: 'male',
            avatar: null,
          },
          {
            admission_id: 'a8de4097-1194-4443-83fc-004933320609',
            class_student_id: 'f5a6ee3e-a2ec-4531-a2ff-d79bf2fbffd9',
            firstname: 'Xavier',
            surname: 'Andres',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: 'e0ab5ca6-6c52-4b2f-9ddc-f9dfb943d9e5',
            class_student_id: 'f4f7639b-d47d-48a0-ae08-1f3d909aead4',
            firstname: 'Simmons',
            surname: 'Mike',
            gender: 'female',
            avatar: null,
          },
          {
            admission_id: '85ba6770-6561-4b75-bfbe-3e9d694d662c',
            class_student_id: '1d003b6f-b5fa-4684-97c2-419bec78e08e',
            firstname: 'Vale',
            surname: 'Orthodox',
            gender: 'male',
            avatar: null,
          },
        ],
      },

      thisData: {
        entries: [
          {
            id: '560608aa-162d-4f69-8a54-1bace0c24bc9',
            name: '1st CA',
            type: 'Entry',
            active: true,
            locked: false,
            max_obtainable_score: 20,
            scores: [
              {
                score: 18,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Abubakar',
                firstname: 'Memuna',
                admission_id: 'a106af99-7030-4cfa-bbcb-328501b526c1',
                class_student_id: '322bbd56-cb24-4d2c-822b-d676b475bb13',
              },
              {
                score: 13,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Adiele',
                firstname: 'Stephanie',
                admission_id: '522b7902-c1a1-4344-94b6-74702b827c4b',
                class_student_id: '8b0b86c9-d4be-4c69-8770-7e642632934a',
              },
              {
                score: 18,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Adu',
                firstname: 'Bolanle',
                admission_id: '5c8e14c2-a90d-4e42-bca7-7b243474b0dc',
                class_student_id: '4b497b6d-5010-4027-adb7-6b4fcac57671',
              },
              {
                score: 17,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Adu',
                firstname: 'Ireoluwa',
                admission_id: '0980a408-ee07-45bb-b28f-51465d1ab261',
                class_student_id: '9e056911-fcb3-4ccc-b9d7-fbf7f3cbe8e9',
              },
              {
                score: 11,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Bright',
                firstname: 'Lizzy',
                admission_id: 'f4610726-e106-4091-a041-d229f0c12537',
                class_student_id: '03ba5c3f-d52a-4a99-a882-e49827929e23',
              },
              {
                score: 19,
                avatar: null,
                gender: 'male',
                comment: '',
                surname: 'Makundu',
                firstname: 'Moses',
                admission_id: '10ca3141-4e26-4b77-9b20-711b763ed137',
                class_student_id: '82fd841d-6e5c-40ee-ba39-b38d7f755273',
              },
              {
                score: 18,
                avatar: null,
                gender: 'male',
                comment: '',
                surname: 'Nnamdi',
                firstname: 'Victor',
                admission_id: 'e823e9a5-e223-4cbe-976e-bebbf69b70e0',
                class_student_id: '5703c61f-d5d3-454b-93b9-fd7d2e1c8a1d',
              },
              {
                score: 14,
                avatar: null,
                gender: 'male',
                comment: '',
                surname: 'Olalekan',
                firstname: 'Yemi',
                admission_id: '8b419d95-7b7a-455f-8304-54a62980fefe',
                class_student_id: 'e9520c69-910f-4c54-bb10-2264ea7546a1',
              },
              {
                score: 20,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Suleiman',
                firstname: 'Lydia',
                admission_id: 'a8de4097-1194-4443-83fc-004933320609',
                class_student_id: 'f5a6ee3e-a2ec-4531-a2ff-d79bf2fbffd9',
              },
              {
                score: 5,
                avatar: null,
                gender: 'female',
                comment: '',
                surname: 'Ugwu',
                firstname: 'Mabel',
                admission_id: 'e0ab5ca6-6c52-4b2f-9ddc-f9dfb943d9e5',
                class_student_id: 'f4f7639b-d47d-48a0-ae08-1f3d909aead4',
              },
              {
                score: 9,
                avatar: null,
                gender: 'male',
                comment: '',
                surname: 'Umenyi',
                firstname: 'Mark',
                admission_id: '85ba6770-6561-4b75-bfbe-3e9d694d662c',
                class_student_id: '1d003b6f-b5fa-4684-97c2-419bec78e08e',
              },
            ],
          },
          {
            id: '5bbb0ec2-2cd9-46f3-9ad6-a9a84c3d1d8f',
            name: '2nd CA',
            type: 'Entry',
            max_obtainable_score: 20,
            active: true,
            locked: false,
            scores: [
              {
                score: 12,
                comment: '',
                surname: 'Abubakar',
                firstname: 'Memuna',
                admission_id: 'a106af99-7030-4cfa-bbcb-328501b526c1',
                class_student_id: '322bbd56-cb24-4d2c-822b-d676b475bb13',
              },
              {
                score: 18,
                comment: '',
                surname: 'Adiele',
                firstname: 'Stephanie',
                admission_id: '522b7902-c1a1-4344-94b6-74702b827c4b',
                class_student_id: '8b0b86c9-d4be-4c69-8770-7e642632934a',
              },
              {
                score: 19,
                comment: '',
                surname: 'Adu',
                firstname: 'Bolanle',
                admission_id: '5c8e14c2-a90d-4e42-bca7-7b243474b0dc',
                class_student_id: '4b497b6d-5010-4027-adb7-6b4fcac57671',
              },
              {
                score: 17,

                surname: 'Adu',
                firstname: 'Ireoluwa',
                admission_id: '0980a408-ee07-45bb-b28f-51465d1ab261',
                class_student_id: '9e056911-fcb3-4ccc-b9d7-fbf7f3cbe8e9',
              },
              {
                score: 19,

                surname: 'Bright',
                firstname: 'Lizzy',
                admission_id: 'f4610726-e106-4091-a041-d229f0c12537',
                class_student_id: '03ba5c3f-d52a-4a99-a882-e49827929e23',
              },
              {
                score: 11,

                surname: 'Makundu',
                firstname: 'Moses',
                admission_id: '10ca3141-4e26-4b77-9b20-711b763ed137',
                class_student_id: '82fd841d-6e5c-40ee-ba39-b38d7f755273',
              },
              {
                score: 16,

                surname: 'Nnamdi',
                firstname: 'Victor',
                admission_id: 'e823e9a5-e223-4cbe-976e-bebbf69b70e0',
                class_student_id: '5703c61f-d5d3-454b-93b9-fd7d2e1c8a1d',
              },
              {
                score: 15,

                surname: 'Olalekan',
                firstname: 'Yemi',
                admission_id: '8b419d95-7b7a-455f-8304-54a62980fefe',
                class_student_id: 'e9520c69-910f-4c54-bb10-2264ea7546a1',
              },
              {
                score: 18,

                surname: 'Suleiman',
                firstname: 'Lydia',
                admission_id: 'a8de4097-1194-4443-83fc-004933320609',
                class_student_id: 'f5a6ee3e-a2ec-4531-a2ff-d79bf2fbffd9',
              },
              {
                score: 18,

                surname: 'Ugwu',
                firstname: 'Mabel',
                admission_id: 'e0ab5ca6-6c52-4b2f-9ddc-f9dfb943d9e5',
                class_student_id: 'f4f7639b-d47d-48a0-ae08-1f3d909aead4',
              },
              {
                score: 10,

                surname: 'Umenyi',
                firstname: 'Mark',
                admission_id: '85ba6770-6561-4b75-bfbe-3e9d694d662c',
                class_student_id: '1d003b6f-b5fa-4684-97c2-419bec78e08e',
              },
            ],
          },
          {
            id: '958510c0-dd3c-4ec3-a9b5-a6f5074575f9',
            name: 'Assignment/Project',
            type: 'Entry',
            max_obtainable_score: 20,
            active: true,
            locked: false,
            scores: [
              {
                score: 12,

                surname: 'Abubakar',
                firstname: 'Memuna',
                admission_id: 'a106af99-7030-4cfa-bbcb-328501b526c1',
                class_student_id: '322bbd56-cb24-4d2c-822b-d676b475bb13',
              },
              {
                score: 18,

                surname: 'Adiele',
                firstname: 'Stephanie',
                admission_id: '522b7902-c1a1-4344-94b6-74702b827c4b',
                class_student_id: '8b0b86c9-d4be-4c69-8770-7e642632934a',
              },
              {
                score: 19,

                surname: 'Adu',
                firstname: 'Bolanle',
                admission_id: '5c8e14c2-a90d-4e42-bca7-7b243474b0dc',
                class_student_id: '4b497b6d-5010-4027-adb7-6b4fcac57671',
              },
              {
                score: 15,

                surname: 'Adu',
                firstname: 'Ireoluwa',
                admission_id: '0980a408-ee07-45bb-b28f-51465d1ab261',
                class_student_id: '9e056911-fcb3-4ccc-b9d7-fbf7f3cbe8e9',
              },
              {
                score: 17,

                surname: 'Bright',
                firstname: 'Lizzy',
                admission_id: 'f4610726-e106-4091-a041-d229f0c12537',
                class_student_id: '03ba5c3f-d52a-4a99-a882-e49827929e23',
              },
              {
                score: 16,

                surname: 'Makundu',
                firstname: 'Moses',
                admission_id: '10ca3141-4e26-4b77-9b20-711b763ed137',
                class_student_id: '82fd841d-6e5c-40ee-ba39-b38d7f755273',
              },
              {
                score: 19,

                surname: 'Nnamdi',
                firstname: 'Victor',
                admission_id: 'e823e9a5-e223-4cbe-976e-bebbf69b70e0',
                class_student_id: '5703c61f-d5d3-454b-93b9-fd7d2e1c8a1d',
              },
              {
                score: 14,

                surname: 'Olalekan',
                firstname: 'Yemi',
                admission_id: '8b419d95-7b7a-455f-8304-54a62980fefe',
                class_student_id: 'e9520c69-910f-4c54-bb10-2264ea7546a1',
              },
              {
                score: 13,

                surname: 'Suleiman',
                firstname: 'Lydia',
                admission_id: 'a8de4097-1194-4443-83fc-004933320609',
                class_student_id: 'f5a6ee3e-a2ec-4531-a2ff-d79bf2fbffd9',
              },
              {
                score: 18,

                surname: 'Ugwu',
                firstname: 'Mabel',
                admission_id: 'e0ab5ca6-6c52-4b2f-9ddc-f9dfb943d9e5',
                class_student_id: 'f4f7639b-d47d-48a0-ae08-1f3d909aead4',
              },
              {
                score: 18,

                surname: 'Umenyi',
                firstname: 'Mark',
                admission_id: '85ba6770-6561-4b75-bfbe-3e9d694d662c',
                class_student_id: '1d003b6f-b5fa-4684-97c2-419bec78e08e',
              },
            ],
          },
          {
            id: '2f59b3a8-603a-4891-acc5-c4c207a0f577',
            name: 'Exam',
            type: 'Entry',
            max_obtainable_score: 20,
            active: true,
            locked: false,
            scores: [
              {
                score: 32,

                surname: 'Abubakar',
                firstname: 'Memuna',
                admission_id: 'a106af99-7030-4cfa-bbcb-328501b526c1',
                class_student_id: '322bbd56-cb24-4d2c-822b-d676b475bb13',
              },
              {
                score: 30,

                surname: 'Adiele',
                firstname: 'Stephanie',
                admission_id: '522b7902-c1a1-4344-94b6-74702b827c4b',
                class_student_id: '8b0b86c9-d4be-4c69-8770-7e642632934a',
              },
              {
                score: 20,

                surname: 'Adu',
                firstname: 'Bolanle',
                admission_id: '5c8e14c2-a90d-4e42-bca7-7b243474b0dc',
                class_student_id: '4b497b6d-5010-4027-adb7-6b4fcac57671',
              },
              {
                score: 26,

                surname: 'Adu',
                firstname: 'Ireoluwa',
                admission_id: '0980a408-ee07-45bb-b28f-51465d1ab261',
                class_student_id: '9e056911-fcb3-4ccc-b9d7-fbf7f3cbe8e9',
              },
              {
                score: 34,

                surname: 'Bright',
                firstname: 'Lizzy',
                admission_id: 'f4610726-e106-4091-a041-d229f0c12537',
                class_student_id: '03ba5c3f-d52a-4a99-a882-e49827929e23',
              },
              {
                score: 37,

                surname: 'Makundu',
                firstname: 'Moses',
                admission_id: '10ca3141-4e26-4b77-9b20-711b763ed137',
                class_student_id: '82fd841d-6e5c-40ee-ba39-b38d7f755273',
              },
              {
                score: 29,

                surname: 'Nnamdi',
                firstname: 'Victor',
                admission_id: 'e823e9a5-e223-4cbe-976e-bebbf69b70e0',
                class_student_id: '5703c61f-d5d3-454b-93b9-fd7d2e1c8a1d',
              },
              {
                score: 32,

                surname: 'Olalekan',
                firstname: 'Yemi',
                admission_id: '8b419d95-7b7a-455f-8304-54a62980fefe',
                class_student_id: 'e9520c69-910f-4c54-bb10-2264ea7546a1',
              },
              {
                score: 21,

                surname: 'Suleiman',
                firstname: 'Lydia',
                admission_id: 'a8de4097-1194-4443-83fc-004933320609',
                class_student_id: 'f5a6ee3e-a2ec-4531-a2ff-d79bf2fbffd9',
              },
              {
                score: 31,

                surname: 'Ugwu',
                firstname: 'Mabel',
                admission_id: 'e0ab5ca6-6c52-4b2f-9ddc-f9dfb943d9e5',
                class_student_id: 'f4f7639b-d47d-48a0-ae08-1f3d909aead4',
              },
              {
                score: 37,

                surname: 'Umenyi',
                firstname: 'Mark',
                admission_id: '85ba6770-6561-4b75-bfbe-3e9d694d662c',
                class_student_id: '1d003b6f-b5fa-4684-97c2-419bec78e08e',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {
    getScores(scores, classId) {
      return scores.find((item) => item.class_student_id === classId)
    },
    closeModal() {
      this.$refs['gradeModal'].hide()
    },
    addGradeBook() {
      console.log(`yay`)
      return
      this.thisData.entries.push({
        name: this.title,
        score: this.score,
        date: '17/04/2022',
      })
      this.title = ''
      this.score = null
      this.type = ''
      this.$refs['gradeModal'].hide()
    },
    toolTip() {
      console.log(`yay`)
    },
    onDrop(e, newEntry) {
      const entry = e.dataTransfer.getData('text')
      const newEntryIndex = this.thisData.entries.findIndex(
        (item) => item === newEntry
      )

      const oldEntryIndex = Number(entry)
      const dataEntry = this.thisData
      // Swap item in array
      const temp = dataEntry.entries[oldEntryIndex]
      dataEntry.entries[oldEntryIndex] = dataEntry.entries[newEntryIndex]
      dataEntry.entries[newEntryIndex] = temp
      this.thisData = []
      this.thisData = dataEntry
    },
    startDrag(evt, entry) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      const index = this.thisData.entries.findIndex((item) => item === entry)
      evt.dataTransfer.setData('text/plain', index)
    },
  },
  watch: {
    thisData: {
      handler(newVal) {
        this.thisData = newVal
      },
      deep: true,
    },
  },
  computed: {
    students() {
      if (this.searchQuery) {
        return this.studentData.students.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every(
              (v) =>
                item.firstname.toLowerCase().includes(v) ||
                item.surname.toLowerCase().includes(v)
            )
        })
      } else {
        return this.studentData.students
      }
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
  cursor: move;
  /* border-top: 1px solid #dee2e6; */
}
th:nth-child(0) {
  cursor: default;
}
th:nth-child(1) {
  cursor: default;
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
  background: #f5f6fa !important;
}
.touch {
  cursor: pointer;
  display: none;
}
.custom-tabs {
  /* border-bottom: 0.2px solid #828282; */
  /* feffe7 */
  padding: 1rem 0.5rem;
  width: 100%;
  /* margin-bottom: 2rem; */
  flex-wrap: nowrap !important;
}
</style>