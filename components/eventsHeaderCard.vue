<template>
  <div>
    <div class="bg-white rounded p-3 my-2">
      <pre>{{ studentsInCourse }}</pre>
      <pre>{{ studentsTable }}</pre>
      <div
        class="border-bottom d-flex align-items-center justify-content-between"
      >
        <h2 class="brown24 py-3 bold700 text-capitalize mb-0">
          {{ eventDetail.name }}
        </h2>
      </div>
      <div class="my-2 d-flex">
        <p class="my-2 medparagraph mx-3">
          Description:
          <span class="lightgraytext"> {{ eventDetail.description }}</span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Start Date:</span>
          <span class=""> {{ eventDetail.start_date }} </span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> End Date:</span>
          <span class=""> </span>
          {{ eventDetail.end_date }}
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> No in class:</span>
          <span class=""> {{ eventDetail.student }}</span>
        </p>
        <p class="my-2 medparagraph mx-3">
          <span class="lightgraytext"> Student Absent:</span>
          <span class=""> </span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded p-3 my-2">
      <filter-component>
        <template #status="{ data }">
          <toggleButton :value="data.value === 'status' ? true : false" />
        </template>
        <template #default="{ visualization }">
          <table-component
            :items="studentsInCourse"
            v-if="visualization === 'list'"
            :fields="fields"
          />
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
      studentsInCourse: [],
      studentsTable: [],
      test: 'hey',
      fields: [
        { key: 'other_name', label: 'Other Name', sortable: true },
        { key: 'surname', label: 'Surname', sortable: true },
        { key: 'check_in', label: 'date/Time in', sortable: true },
        { key: '', label: 'Check in Method', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
      ],
    }
  },

  async fetch() {
    console.log(this.courseid)
    try {
      const student = await this.$axios.$get(
        `course-v/get-all-students-in-an-event?course_id=${this.courseid}&event_id=${this.eventid}&page=1&size=50`
      )

      //   console.log(...student.items)
      //   this.studentsInCourse.push(...student.items)

      const obj = student
      obj.items.map((el) => {
        console.log('el', el)
        this.studentsInCourse.push({
          status: el.status,
          by: el.by,
          check_in: el.check_in,
          other_name: el.student.other_name,
          surname: el.student.surname,
          email: el.student.email,
          id: el.student.id,
        })
      })
      console.log('ob is', obj)

      console.log(this.studentsInCourse)
    } catch (e) {
      console.log(e)
    }
  },

  mounted() {
    // if (this.eventDetail.students) {
    //   console.log('mounted', this.eventDetail.students)
    //   this.eventDetail.students.forEach((element) => {
    //     this.studentelement.push(element)
    //     console.log(this.studentelement)
    //   })
    //   console.log('student', this.eventDetail.students)
    // }
  },
}
</script>

<style>
</style>