<template>
  <div>
    <div class="bg-white rounded p-3 my-2">
      <div
        class="border-bottom d-flex align-items-center justify-content-between"
      >
        <h2 class="brown24 py-3 bold700 text-capitalize mb-0">
          {{ eventDetail.name }}
        </h2>
      </div>
      <div class="my-2 d-flex">
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Start Date:</span>
          <span class=""> {{ eventDetail.start_date | DateFormat}} </span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> End Date:</span>
          <span class=""> </span>
          {{ eventDetail.end_date | DateFormat }}
        </p>
        <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> No in class:</span>
          <span class=""> {{ eventDetail.students.length }}</span>
        </p>
        <p v-if="eventDetail.students" class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Student Absent: {{ eventDetail.students.length }}</span>
          <span class=""> </span>
        </p>
        <p  v-if="eventDetail.students" class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Student Absent: {{ eventDetail.students.length - eventDetail.students.length  }}</span>
          <span class=""> </span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded p-3 my-2">
      <filter-component>
        <template #default="{ visualization }">
          <table-component
            :items="studentArray"
            v-if="visualization === 'list'"
            :fields="fields"
          >
            <template #status="{ data }">
              <b-form-checkbox
                v-model="data.value"
                @change="updateAttendance(data.item.student.id, $event)"
                size="lg"
                switch
              ></b-form-checkbox>
            </template>
          </table-component>
        </template>
      </filter-component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventDetail: {
      type: Object,
      default: () => {},
    },
    courseid: {
      type: String,
    },
    eventid: {
      type: String,
    },
  },

  data() {
    return {
      students: [],
      studentelement: [],
      studentsInCourse: {},
      studentsTable: [],
      studentArray: [],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'student.surname', label: 'Surname', sortable: true },
        { key: 'student.other_name', label: 'Other Name', sortable: true },
        { key: 'student.email', label: 'Email', sortable: true },
        { key: 'check_in', label: 'Date/Time in', sortable: true },
        { key: 'by', label: 'Check in Method', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
      ],
    }
  },

  async fetch() {
    try {
      const student = await this.$axios.$get(
        `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=1&size=50`
      )

      this.studentArray = student.items
      // const temp = []
      // temp.push(...student.items)
      // temp.forEach((el) => (this.studentsInCourse = el))

      // this.studentsTable = Object.keys(this.studentsInCourse)

      // console.log(this.studentsInCourse)
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async updateAttendance(student, status) {
      let url = status
        ? 'course-v/mark-attendance-event'
        : 'course-v/un-mark-attendance-event'
      try {
        await this.$axios.$patch(
          `${url}?student_id=${student}&event_id=${this.$route.params.eventclicked}&course_id=${this.$route.params.event}`,
          {
            // params: {
            //   student_id: student,
            //   event_id: this.$route.params.eventclicked,
            //   course_id: this.$route.params.course,
            // },
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
  },

  mounted() {},
}
</script>

<style></style>
