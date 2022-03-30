<template>
  <div class="custom-tabs mt-1 bg-white rounded">
    <ul
      class="nav px-md-4 px-3 justify-content-between flex-nowrap customscroll"
      id="pills-tab"
      role="tablist"
    >
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph active"
          id="pills-overview-tab"
          data-toggle="pill"
          href="#pills-overview"
          role="tab"
          aria-controls="pills-overview"
          aria-selected="true"
          >Course Overiew</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-instructors"
          data-toggle="pill"
          href="#pills-instructors"
          role="tab"
          aria-controls="pills-instructors"
          aria-selected="false"
          >Instructors</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-students-tab"
          data-toggle="pill"
          href="#pills-students"
          role="tab"
          aria-controls="pills-students"
          aria-selected="false"
          >Students</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-assignments-tab"
          data-toggle="pill"
          href="#pills-assignments"
          role="tab"
          aria-controls="pills-assignments"
          aria-selected="false"
          >Assignment</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-Gradebook-tab"
          data-toggle="pill"
          href="#pills-Gradebook"
          role="tab"
          aria-controls="pills-Gradebook"
          aria-selected="false"
          >Grade book</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-Gradebook-tab"
          data-toggle="pill"
          href="#pills-Gradebook"
          role="tab"
          aria-controls="pills-Gradebook"
          aria-selected="false"
          >Praticum</a
        >
      </li>
      <li class="nav-item mx-md-3 mx-1" role="presentation">
        <a
          class="nav-link medbrownparagraph"
          id="pills-Gradebook-tab"
          data-toggle="pill"
          href="#pills-Gradebook"
          role="tab"
          aria-controls="pills-Gradebook"
          aria-selected="false"
          >Attendance</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav-link {
  display: block;
  padding: 1rem 1rem;
}
</style>