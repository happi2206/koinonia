<template>
  <div class="card p-md-5 p-2">
    <!-- {{ value }} ssss -->

    <!-- <pre>{{ allstudents }}</pre> -->

    <div class="d-flex flex-md-row flex-column justify-content-center mb-4">
      <div class="d-flex align-items-center mx-3 my-2 my-md-0">
        <span class="lightgreen mx-2">
          <span
            class="iconify"
            data-icon="akar-icons:circle-fill"
            data-width="15"
            data-height="15"
          ></span>
        </span>

        <p class="smallbrownparagraph mb-0">
          Percentage of student who Attended
        </p>
      </div>
      <div class="d-flex align-items-center mx-3 my-2 my-md-0">
        <span class="lightred mx-2">
          <span class="iconify" data-icon="akar-icons:circle-fill"></span>
        </span>

        <p class="smallbrownparagraph mb-0">Percentage of student Absent</p>
      </div>
    </div>
    <div v-for="(event, i) in events" :key="i">
      <span class="smallbrownparagraph mb-0">{{ event.name }}</span>
      <b-progress
        class="my-2 fullprogress"
        :max="event.total_number_of_students"
        show-progress
      >
        <b-progress-bar
          :value="event.number_of_students_present"
          variant="success"
        ></b-progress-bar>
        <b-progress-bar
          :value="
            event.total_number_of_students - event.number_of_students_present
          "
          show-progress
          variant="danger"
        ></b-progress-bar>
      </b-progress>
    </div>

    <div class="d-flex justify-content-between border-top my-3">
      <div class="medbrownparagraph">0</div>
      <div class="medbrownparagraph">50</div>
      <div class="medbrownparagraph">100</div>
    </div>

    <!-- {{ Object.assign(events) }} -->
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
    },
  },

  data() {
    return {
      eventsFromProp: this.events,
    }
  },

  computed: {
    allstudents() {
      return this.eventsFromProp.map((e) => e.total_number_of_student)
    },
    // value() {
    //   return this.events.map((e) => ({
    //     total_number_of_student_in_percentage:
    //       e.total_number_of_student - e.no_of_students_present + '%',
    //   }))
    // },
  },
}
</script>

<style>
</style>