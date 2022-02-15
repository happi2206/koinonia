<template>
  <div class="">
    <login-nav />

    <dashboard>
      <template #contentheader> Instructor Dashboard </template>
      <template #contentactive> Courses</template>
      <template #content> Instructors</template>
    </dashboard>
    <main class="page-content mt-0 mb-5 height">
      <div class="mt-5 horizontalspacing pt-md-5">
        <div
          class="d-flex align-items-center pt-5 justify-content-between mb-4"
        >
          <h2 class="largebrownparagraph mb-0">Courses</h2>
          <button
            class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
            data-toggle="modal"
            data-target="#addCourse"
            v-b-modal.addcourse
          >
            Add Course
          </button>
          <!-- Modal -->
          <b-modal id="addcourse" title="Add Course">
            <div class="modacontent">
              <div class="modabody">
                <div class="my-4">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Course Code
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                    placeholder="e.g ECO23"
                    class="forminputs text-dark"
                  />
                </div>
                <div class="my-4">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Course Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                    placeholder="e.g Alchemy"
                    class="forminputs text-dark"
                  />
                </div>
                <div class="my-4">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Course Subtitle
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                    placeholder="e.g Alchemy"
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
                        name=""
                        id=""
                        required
                        placeholder="e.g DD/MM/YYYY"
                        class="forminputs text-dark"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="" class="d-block medbrownparagraph graytext"
                        >Start Date
                      </label>
                      <input
                        type="date"
                        name=""
                        id=""
                        required
                        placeholder="e.g DD/MM/YYYY"
                        class="forminputs text-dark"
                      />
                    </div>
                  </div>
                </div>
                <div class="my-4">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Course Subtitle
                  </label>
                  <textarea
                    name=""
                    id=""
                    class="forminputs textarea tinyarea"
                    cols="30"
                    rows="40"
                    required
                    placeholder="e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                  ></textarea>
                </div>

                <div class="my-2">
                  <p class="medbrownparagraph lightgraytext">
                    Upload your course image here. It must meet our course image
                    quality standards to be accepted. Important guidelines:
                    750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                    image.
                  </p>
                </div>
                <div class="my-4 d-flex justify-content-end">
                  <div class="upload-btn-wrapper">
                    <button class="upbtn">Upload file</button>
                    <input type="file" name="myfile" />
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
                      Create Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </b-modal>
        </div>

        <div class="card bg-white rounded">
          <b-tabs content-class="mt-3" class="custom-tabs">
            <b-tab title="All Status" active>
              <div class="mx-3">
                <filter-component />
                <div class="table-responsive">
                  <table-component />
                </div></div
            ></b-tab>
            <b-tab title="Open" class=""><p>I'm the second tab</p></b-tab>
            <b-tab title="On-going"><p>I'm a tab!</p></b-tab>
            <b-tab title="Archived"><p>I'm a tab!</p></b-tab>
          </b-tabs>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TableComponent from '../../components/tableComponent.vue'
import dashboard from '../../layouts/dashboard.vue'
export default {
  components: { dashboard, TableComponent },
}
</script>

<style>
.height {
  height: 100vh !important;
}
</style>