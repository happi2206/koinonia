<template>
  <div class="px-4 pt-3 bodylightgray height">
    <div class="mt-5 pt-4">
      <h2 class="largebrownparagraph">My learning</h2>
    </div>

    <div>
      <div class="card mt-3">
        <b-tabs content-class="mt-3" class="custom-tabs">
          <b-tab title="All courses" active>
            <div class="d-flex justify-content-center align-items-center p-4">
              <div class="h-100">
                <h2 class="text-center header2 my-4">No Class found</h2>
                <p class="my-4 medbrownparagraph text-center">
                  Link to a course by asking an administrator for the link code
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab title="On-going">
            <div class="d-flex justify-content-center align-items-center p-4">
              <div class="h-100">
                <h2 class="text-center header2 my-4">No Class found</h2>
                <p class="my-4 medbrownparagraph text-center">
                  Link to a course by asking an administrator for the link code
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab title="Archived">
            <div class="d-flex justify-content-center align-items-center p-4">
              <div class="h-100">
                <h2 class="text-center header2 my-4">No Class found</h2>
                <p class="my-4 medbrownparagraph text-center">
                  Link to a course by asking an administrator for the link code
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab title="Applied">
            <div class="d-flex justify-content-center align-items-center p-4">
              <div class="h-100">
                <h2 class="text-center header2 my-4">No Class found</h2>
                <p class="my-4 medbrownparagraph text-center">
                  Link to a course by asking an administrator for the link code
                </p>
              </div>
            </div></b-tab
          >
          <b-tab title="Saved">
            <div class="d-flex justify-content-center align-items-center p-4">
              <div class="h-100">
                <h2 class="text-center header2 my-4">No Class found</h2>
                <p class="my-4 medbrownparagraph text-center">
                  Link to a course by asking an administrator for the link code
                </p>
              </div>
            </div></b-tab
          >
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style>
</style>