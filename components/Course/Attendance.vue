<template>
  <div class="mx-3">
    <filter-component :issearchdisabled="true">
      <template #besideFilterButton="">
        <div>
          <button
            class="btn py-3 mainbtndashboard medbrownparagraph"
            v-b-modal.addEvent
          >
            Add Event
          </button>

          <b-modal id="addEvent" centered hide-header hide-footer>
            <h2 class="largebrownparagraph bold700 my-3">Create Event</h2>
            <form class="modabody">
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Event Name
                </label>

                <input
                  type="text"
                  v-model="events.name"
                  required
                  placeholder="Event title"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Description
                </label>
                <input
                  type="text"
                  v-model="events.description"
                  placeholder="Description"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4">
                <div class="row">
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >Start Date
                    </label>
                    <input
                      type="date"
                      v-model="events.start_date"
                      required
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >Start Time
                    </label>
                    <input
                      type="time"
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>
              </div>
              <div class="my-4">
                <div class="row">
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Date
                    </label>
                    <input
                      type="date"
                      v-model="events.end_date"
                      required
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="" class="d-block medbrownparagraph graytext"
                      >End Time
                    </label>
                    <input
                      type="time"
                      placeholder="e.g DD/MM/YYYY"
                      class="forminputs text-dark"
                    />
                  </div>
                </div>
              </div>

              <div class="my-4">
                <div class="d-flex justify-content-center">
                  <button
                    class="
                      btn
                      px-md-4 px-3
                      py-2
                      mainbtndashboard
                      medbrownparagraph
                    "
                  >
                    Add Event
                  </button>
                </div>
              </div>
            </form>
          </b-modal>
        </div>
      </template>
      <template #belowFilterButton>
        <div class="d-flex align-items-center justify-content-between my-4">
          <div class="records-count medbrownparagraph">
            <span> Month: </span>
            <select class="records-count medbrownparagraph">
              <option value="Januray">Janurary</option>
            </select>
          </div>

          <div class="d-flex justify-content-end">
            <div class="col-lg-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >From
              </label>
              <input
                type="date"
                placeholder="e.g DD/MM/YYYY"
                class="forminputs text-dark py-2"
              />
            </div>
            <div class="col-lg-4">
              <label for="" class="d-block medbrownparagraph graytext"
                >From
              </label>
              <input
                type="date"
                placeholder="e.g DD/MM/YYYY"
                class="forminputs text-dark py-2"
              />
            </div>
          </div>
        </div>
      </template>

      <template #default="{ visualization }">
        <table-component
          :items="allevents"
          v-if="visualization === 'list'"
          :fields="fields"
          :dropdownItem="dropdownItem"
          @row-clicked="onRowClicked"
          @Edit="handleEdit"
          @Delete="handleDelete"
        />
        <div class="row" v-else>
          <grid-component
            :data="event"
            v-for="(event, index) in eventsdata"
            :key="index"
            @grid-clicked="onGridClicked"
          ></grid-component>
        </div>
      </template>
    </filter-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'name', sortable: true },
        { key: 'descriptiom', sortable: true },
        { key: 'start_date', sortable: true },
        { key: 'end_date', sortable: true },
        { key: 'dots', label: '', thStyle: { color: '#000' }, sortable: true },
      ],
      events: {
        name: '',
        description: '',
        start_date: '',
        end_date: '',
      },

      allevents: {},
    }
  },

  async fetch() {
    try {
      const events = await this.$axios.$get(
        `course-v/get-all-course-event?course_id=${this.$route.params.course}&page=1&size=50`
      )
      console.log('events are are', events)
      this.allevents = events
      this.$toast.success('courses')
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
</style>