<template>
  <div>
    <div>
      <div v-show="subItem" class="lecture-cover pl-3 pt-3 mt-3 mx-3">
        <div>
          <div>
            <div>
              <form>
                <div>
                  <div class="fullborder p-3 my-2" style="width: 98%">
                    <div>
                      <div class="row">
                        <div class="p-0">
                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-start
                              h-100
                            "
                            style="width: 80px"
                          >
                            <h2
                              style="margin-bottom: 0"
                              class="text-16 ml-4 bold700"
                            >
                              Item :
                            </h2>
                          </div>
                        </div>
                        <div
                          class="form-group col-md-10 pl-0 pr-2"
                          ref="clearscheme"
                        >
                          <div class="my-2 text-16">
                            <input
                              v-model="item.title"
                              required
                              type="text"
                              class="form-control form-control-width"
                              style="
                                border: 1px solid #000000;
                                border-radius: 0rem;
                              "
                              placeholder="Enter A Title"
                            />
                          </div>
                          <div class="my-2 text-16">
                            <input
                              v-model="item.objective"
                              required
                              type="text"
                              class="form-control form-control-width"
                              style="
                                border: 1px solid #000000;
                                border-radius: 0rem;
                              "
                              placeholder="Objective"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="py-1 pr-4 d-flex justify-content-end">
                        <button
                          class="btn medbrownparagraph"
                          style="
                            border-radius: none;
                            width: 102px;
                            text-align: center;
                          "
                          @click.prevent="removeInnerSection"
                        >
                          Cancel
                        </button>
                        <button
                          class="mainbtn rounded medbrownparagraph py-2 px-3"
                          style="
                            border-radius: none;
                            width: 102px;
                            text-align: center;
                          "
                          @click.prevent="openInnerSection"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- <added-inner-section :item="item" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subItem: false,
      item: {
        title: '',
        objective: '',
      },
    }
  },
}
</script>

<style>
.lecture-cover {
  background: #fff8dc;
  max-width: 95%;
  border: 0.5px solid #333333;
}
.second-section {
  max-width: 1000px;
  /* margin-left: 3rem; */
}
.form-control-width {
  max-width: 100%;
}
</style>