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
      <div class="my-2 d-flex flex-md-row flex-column">
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
          <span class="lightgraytext"> Student Present: {{  present }}</span>
          <span class=""> </span>
        </p>
        <p  v-if="eventDetail.students" class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Student Absent: {{ eventDetail.students.length - present  }}</span>
          <span class=""> </span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded p-md-3 my-2">
      <filter-component>
        <template #default="{ visualization }">
          <table-component
          :busy="busy"
            :items="studentArray"
            v-if="visualization === 'list'"
            :fields="fields"
          >
            <template #status="{ data }">
              <b-form-checkbox
              button-variant="success"
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
      busy: false,
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
      this.busy = true;
      const student = await this.$axios.$get(
        `course-v/get-all-students-in-an-event?course_id=${this.$route.params.event}&event_id=${this.$route.params.eventclicked}&page=1&size=50`
      )

      this.studentArray = student.items
    
    } catch (e) {
      console.log(e)
    }finally{
      this.busy = false
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
         
        )
          this.$fetch()
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
       present(){
        if(!this.busy){
           let students =  this.eventDetail.students.filter(i=>{
           return i.status
         });

         return students.length
        }
       }
  },

  mounted() {},
}
</script>

<style></style>
