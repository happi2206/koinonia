<template>
  <div class="bodylightgray">
    <section class="horizontalspacing">
      <div class="imagesection">
        <div class="textsection">
          <div class="d-flex justify-content-center">
            <div>
              <h1 class="brownheaderlarge text-center mainbluecolor">
                Welcome
              </h1>
              <p class="mt-4 mt-2 brownparagraph text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div class="svgplaceholderimages">
                <div class="d-flex align-items-center">
                  <img
                    src="~/assets/images/people1.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="mt-3 horizontalspacing"
      v-if="authenticated && courses.length > 0"
    >
      <b-tabs content-class="mt-3" class="custom-tabs">
        <b-tab title="All Courses" active>
          <div class="row mt-4">
            <div class="col-lg-6 my-3 my-lg-0" :key="index" v-for="(course, index) in courses">
              <div class="bg-white rounded">
                <div class="p-2 d-flex flex-sm-row flex-column">
                  <div class="coursewidth1 d-flex align-items-center">
                    <img
                      src="~/assets/images/man1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <div class="p-3 coursewidth2">
                    <h1 class="largebrownparagraph bold700 text-capitalize">
                      {{course.title}}
                    </h1>
                    <div class="my-2 row">
                      <div class="col-12">
                        <p class="my-2 medbrownparagraph">
                          <span class="lightgraytext"> Start Date:</span>
                          01/01/2022
                        </p>
                      </div>
                      <div class="col-12">
                        <p class="my-2 medbrownparagraph">
                          <span class="lightgraytext"> End Date:</span>
                          01/01/2022
                        </p>
                      </div>
                    </div>
                    <p class="my-2 medbrownparagraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,it
                      esse cillum dolore eu fugiat nulla pariatur....
                    </p>
                    <p class="mt-4 mb-0 medbrownparagraph">23334 Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div></b-tab
        >
        <b-tab title="On-going" class=""><p>I'm the second tab</p></b-tab>
        <b-tab title="Archived" disabled><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Applied" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </section>

    <section class="horizontalspacing mt-5">
      <div>
        <h1 class="brown28 text-center mainbluecolor">Top Featured Courses</h1>
        <p class="mt-3 brownparagraph horizontalspacing text-center graytext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div class="row mt-5">
        <div class="col-lg-3 col-6 my-3 my-lg-0">
          <div class="d-flex flex-column">
            <img
              src="~/assets/images/featuredimg.png"
              alt=""
              class="img-fluid"
            />
            <div class="bg-white">
              <div class="my-3 px-3">
                <p class="brownparagraph bold700">
                  Lorem ipsum dolor sit amet, ctetur adipiscing elit
                </p>
                <div class="my-2 row">
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> Start Date:</span>
                      01/01/2022
                    </p>
                  </div>
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> End Date:</span>
                      01/01/2022
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class="btn mainbtndashboard px-lg-5 px-3 py-2">
                      Apply
                    </button>

                    <div>
                      <!-- <Icon
                        icon="bi:bookmark-star-fill"
                        class="mainyellowcolor"
                      /> -->
                      <span class="medbrownparagraph mb-0">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 my-3 my-lg-0">
          <div class="d-flex flex-column">
            <img
              src="~/assets/images/featuredimg.png"
              alt=""
              class="img-fluid"
            />
            <div class="bg-white">
              <div class="my-3 px-3">
                <p class="brownparagraph bold700">
                  Lorem ipsum dolor sit amet, ctetur adipiscing elit
                </p>
                <div class="my-2 row">
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> Start Date:</span>
                      01/01/2022
                    </p>
                  </div>
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> End Date:</span>
                      01/01/2022
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class="btn mainbtndashboard px-lg-5 px-3 py-2">
                      Apply
                    </button>

                    <div>
                      <!-- <Icon
                        icon="bi:bookmark-star-fill"
                        class="mainyellowcolor"
                      /> -->
                      <span class="medbrownparagraph mb-0">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 my-3 my-lg-0">
          <div class="d-flex flex-column">
            <img
              src="~/assets/images/featuredimg.png"
              alt=""
              class="img-fluid"
            />
            <div class="bg-white">
              <div class="my-3 px-3">
                <p class="brownparagraph bold700">
                  Lorem ipsum dolor sit amet, ctetur adipiscing elit
                </p>
                <div class="my-2 row">
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> Start Date:</span>
                      01/01/2022
                    </p>
                  </div>
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> End Date:</span>
                      01/01/2022
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class="btn mainbtndashboard px-lg-5 px-3 py-2">
                      Apply
                    </button>

                    <div>
                      <!-- <Icon
                        icon="bi:bookmark-star-fill"
                        class="mainyellowcolor"
                      /> -->
                      <span class="medbrownparagraph mb-0">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 my-3 my-lg-0">
          <div class="d-flex flex-column">
            <img
              src="~/assets/images/featuredimg.png"
              alt=""
              class="img-fluid"
            />
            <div class="bg-white">
              <div class="my-3 px-3">
                <p class="brownparagraph bold700">
                  Lorem ipsum dolor sit amet, ctetur adipiscing elit
                </p>
                <div class="my-2 row">
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> Start Date:</span>
                      01/01/2022
                    </p>
                  </div>
                  <div class="col-12">
                    <p class="my-2 medbrownparagraph">
                      <span class="lightgraytext"> End Date:</span>
                      01/01/2022
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button class="btn mainbtndashboard px-lg-5 px-3 py-2">
                      Apply
                    </button>

                    <div>
                      <!-- <Icon
                        icon="bi:bookmark-star-fill"
                        class="mainyellowcolor"
                      /> -->
                      <span class="medbrownparagraph mb-0">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5">
      <div class="horizontalspacing">
        <div>
          <h1 class="brown28 text-center mainbluecolor">Top Tutors</h1>
          <p class="mt-3 brownparagraph horizontalspacing text-center graytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="mt-5 slider">
          <div class="horizontalspacing px-lg-5 px-0">
            <div class="px-md-5 mx-lg-3">
              <flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
                  <div class="d-flex justify-content-center">
                    <div>
                      <img
                        src="~/assets/images/carouselpeople1.png"
                        class="p-0 m-0"
                        alt=""
                      />

                      <h3
                        class="mainparagraph text-center my-3 mainparagraph18"
                      >
                        John S. Sergent 1
                      </h3>
                      <p class="mainparagraph text-center graytext">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
                  <div class="d-flex justify-content-center">
                    <div>
                      <img
                        src="~/assets/images/carouselpeople2.png"
                        class="p-0 m-0"
                        alt=""
                      />

                      <h3
                        class="mainparagraph text-center my-3 mainparagraph18"
                      >
                        John S. Sergent 1
                      </h3>
                      <p class="mainparagraph text-center graytext">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
                  <div class="d-flex justify-content-center">
                    <div>
                      <img
                        src="~/assets/images/carouselpeople3.png"
                        class="p-0 m-0"
                        alt=""
                      />

                      <h3
                        class="mainparagraph text-center my-3 mainparagraph18"
                      >
                        John S. Sergent 1
                      </h3>
                      <p class="mainparagraph text-center graytext">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
                  <div class="d-flex justify-content-center">
                    <div>
                      <img
                        src="~/assets/images/carouselpeople4.png"
                        class="p-0 m-0"
                        alt=""
                      />

                      <h3
                        class="mainparagraph text-center my-3 mainparagraph18"
                      >
                        John S. Sergent 1
                      </h3>
                      <p class="mainparagraph text-center graytext">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
                  <div class="d-flex justify-content-center">
                    <div>
                      <img
                        src="~/assets/images/carouselpeople1.png"
                        class="p-0 m-0"
                        alt=""
                      />

                      <h3
                        class="mainparagraph text-center my-3 mainparagraph18"
                      >
                        John S. Sergent 1
                      </h3>
                      <p class="mainparagraph text-center graytext">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </flickity>
            </div>

            <div class="customarrows">
              <span @click="previous()" class="customarrowleft">
                <!-- <Icon icon="la:long-arrow-alt-left" width="60" height="60"/> -->
              </span>
              <span @click="next()" class="customarrowright">
                <!-- <Icon icon="la:long-arrow-alt-right" width="60" height="60"/> -->
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="horizontalspacing">
        <div>
          <h1 class="brown28 text-center mainbluecolor">Testimonials</h1>
          <p class="mt-3 brownparagraph horizontalspacing text-center graytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="my-3 slider">
          <flickity ref="flickity2" :options="flickityOptions">
            <div class="carousel-cell maincarous">
              <div class="carousel-item active relativecontainer">
                <div
                  class="
                    d-flex
                    flex-md-row flex-column
                    align-items-center
                    carouselheight
                  "
                >
                  <div class="mr-5">
                    <div class="relativecontainer">
                      <div class="absolutecontainer blockblue">
                        <img
                          src="~/assets/images/testimonialblock.png"
                          class="img"
                          alt=""
                        />
                      </div>
                      <img
                        src="~/assets/images/testimonial1.png"
                        class="img mx-lg-5"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div class="relativecontainer ml-4">
                    <div class="absolutecontainer blockquote">
                      <img
                        src="~/assets/images/testimonialquoteblock.png"
                        class="img"
                        alt="..."
                      />
                    </div>

                    <div class="col-lg-9">
                      <h3 class="roboto32">Emilet Jonas</h3>

                      <p class="mainparagraph graytext mt-md-5 mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-cell maincarous">
              <div class="carousel-item active relativecontainer">
                <div
                  class="
                    d-flex
                    flex-md-row flex-column
                    align-items-center
                    carouselheight
                  "
                >
                  <div class="mr-5">
                    <div class="relativecontainer">
                      <div class="absolutecontainer blockblue">
                        <img
                          src="~/assets/images/testimonialblock.png"
                          class="img"
                          alt=""
                        />
                      </div>
                      <img
                        src="~/assets/images/testimonial1.png"
                        class="img mx-lg-5"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div class="relativecontainer ml-4">
                    <div class="absolutecontainer blockquote">
                      <img
                        src="~/assets/images/testimonialquoteblock.png"
                        class="img"
                        alt="..."
                      />
                    </div>

                    <div class="col-lg-9">
                      <h3 class="roboto32">Emilet Jonas</h3>

                      <p class="mainparagraph graytext mt-md-5 mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </flickity>
        </div>
      </div>
    </section>

    <section class="lightbluebg">
      <div class="d-flex justify-content-center py-5 p-3">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <img
              src="~/assets/images/Illustration.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 mt-5">
            <h2 class="rubikheader mainbluecolor col-lg-9 p-0">
              Get Regular Updates from
            </h2>

            <img
              src="~/assets/images/logotext.png"
              alt=""
              class="img-fluid my-md-4 mx-2"
            />

            <div class="mt-3 px-2">
              <label for="" class="d-block rubikheader2 mainbluecolor"
                >Subscribe to Newsletter</label
              >
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                class="newsletterinputs"
              />

              <button class="subscribebtn btn mt-3 py-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Flickity from 'vue-flickity'
export default {
  components: { Flickity },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,

        // any options from Flickity can be used
      },
      courses: [],
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      token: 'auth/token',
    }),
  },

  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },
    async get_all() {
      try {
        // set custom hear
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }
        // make axios request for all courses
        const { items } = await this.$axios.$get(
          `https://koinonia.herokuapp.com/api/v1/slate/course-v/get-all-course?page=1&size=3`,
          {
            headers: headers,
          }
        )
        // assign response to coures
        this.courses = items
      } catch (e) {
        this.$toast.error(e.data.detail)
      }
    },
  },
  mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.get_all()
      this.$nuxt.$loading.finish()
    })
  },
}
</script>

<style lang="css" scoped>
.customarrows {
  position: relative;
}
.customarrows span {
  position: absolute;
  top: -220px;
  color: #c4c4c4;
}
.customarrows span:hover {
  color: #003294;
}
.customarrows .customarrowleft {
  left: -20px;
}
.customarrows .customarrowright {
  right: -20px;
}

.icon {
  width: 50px;
  height: 50px;
}
</style>