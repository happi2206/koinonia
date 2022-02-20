<template>
  <div>
    <button
      class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
      data-toggle="modal"
      data-target="#addCourse"
      v-b-modal.addcourse
    >
      Add Course
    </button>

    <!-- add course -->
    <b-modal id="addcourse" title="Add Course" hide-footer>
      <div class="modacontent">
        <form class="modabody" @submit.prevent="addCourses">
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Course Name
            </label>
            <input
              type="text"
              v-model="courseData.title"
              required
              placeholder="e.g Alchemy"
              class="forminputs"
            />
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Course Subtitle
            </label>
            <input
              type="text"
              v-model="courseData.short_description"
              required
              placeholder="e.g Alchemy"
              class="forminputs"
            />
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Description
            </label>
            <input
              type="text"
              v-model="courseData.description"
              required
              placeholder="e.g Alchemy"
              class="forminputs"
            />
          </div>
          <div class="my-2">
            <div class="row">
              <div class="col-md-6">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Start Date
                </label>
                <input
                  type="date"
                  v-model="courseData.start_date"
                  required
                  placeholder="e.g DD/MM/YYYY"
                  class="forminputs text-dark"
                />
              </div>
              <div class="col-md-6">
                <label for="" class="d-block medbrownparagraph graytext"
                  >End Date
                </label>
                <input
                  type="date"
                  v-model="courseData.end_date"
                  required
                  placeholder="e.g DD/MM/YYYY"
                  class="forminputs text-dark"
                />
              </div>
            </div>
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Course Description
            </label>
            <VueEditor v-model="courseData.long_description" required>
            </VueEditor>
          </div>

          <div class="my-2">
            <p class="medbrownparagraph lightgraytext">
              Upload your course image here. It must meet our course image
              quality standards to be accepted. Important guidelines: 750x422
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </p>
          </div>

          <div class="my-4">
            <div class="flex gap-3 justify-content-center">
              <upload-file v-model="courseData.feature_image" />
              <input
                class="btn px-md-4 px-3 py-2 mainbtndashboard medbrownparagraph"
                type="submit"
                value="Create Course"
              />
            </div>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'addCourse',
  data() {
    return {
      currentCourse: {
        title: '',
        short_description: '',
        long_description: '',
        description: '',
        course_code: '',
        feature_image: '',
        start_date: '',
        end_date: '',
        feature_image: '',
      },
    }
  },
}
</script>