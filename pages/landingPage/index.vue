<template>
  <div class="bodylightgray">
    <login-nav />
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

    <section class="mt-3 horizontalspacing">
      <!-- <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs> -->
      <div class="custom-tabs mt-1 bg-white rounded">
        <ul
          class="nav px-md-4 px-3 flex-nowrap customscroll"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item mx-md-3 mx-1" role="presentation">
            <a
              class="nav-link medbrownparagraph active"
              id="pills-courses-tab"
              data-toggle="pill"
              href="#pills-courses"
              role="tab"
              aria-controls="pills-courses"
              aria-selected="true"
              >All Courses
            </a>
          </li>
          <li class="nav-item mx-md-3 mx-1" role="presentation">
            <a
              class="nav-link medbrownparagraph"
              id="pills-ongoing"
              data-toggle="pill"
              href="#pills-ongoing"
              role="tab"
              aria-controls="pills-ongoing"
              aria-selected="false"
              >On-going</a
            >
          </li>
          <li class="nav-item mx-md-3 mx-1" role="presentation">
            <a
              class="nav-link medbrownparagraph"
              id="pills-archived-tab"
              data-toggle="pill"
              href="#pills-archived"
              role="tab"
              aria-controls="pills-archived"
              aria-selected="false"
              >Archived</a
            >
          </li>
          <li class="nav-item mx-md-3 mx-1" role="presentation">
            <a
              class="nav-link medbrownparagraph"
              id="pills-applied-tab"
              data-toggle="pill"
              href="#pills-applied"
              role="tab"
              aria-controls="pills-applied"
              aria-selected="false"
              >Applied</a
            >
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active mx-0 px-0"
          id="pills-courses"
          role="tabpanel"
          aria-labelledby="pills-courses-tab"
        >
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="bg-white rounded">
                <div class="p-2 d-flex">
                  <div class="coursewidth1 d-flex align-items-center">
                    <img
                      src="~/assets/images/man1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <div class="p-3 coursewidth2">
                    <h1 class="largebrownparagraph bold700 text-capitalize">
                      concepts of fellowship, joint participation
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
            <div class="col-md-6">
              <div class="bg-white rounded">
                <div class="p-2 d-flex">
                  <div class="coursewidth1 d-flex align-items-center">
                    <img
                      src="~/assets/images/man1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <div class="p-3 coursewidth2">
                    <h1 class="largebrownparagraph bold700 text-capitalize">
                      concepts of fellowship, joint participation
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
          </div>
        </div>
        <div
          class="tab-pane fade mx-0 px-0 bg-white rounded"
          id="pills-ongoing"
          role="tabpanel"
          aria-labelledby="pills-ongoing"
        ></div>
        <div
          class="tab-pane fade mx-0 px-0 bg-white rounded"
          id="pills-archived"
          role="tabpanel"
          aria-labelledby="pills-archived"
        ></div>
      </div>
    </section>

    <section class="my-5">
      <div class="horizontalspacing">
        <div>
          <h1 class="arialheader">Top Tutors</h1>
          <p class="mt-3 mainparagraph graytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="mt-5 slider">
          <div
            class="main-carousel horizontalspacing slider"
            data-flickity='{"pageDots": false, "wrapAround": true, "autoPlay": 2500, "freeScroll": true, "contain": true, "prevNextButtons": true, "resize": false }'
          >
            <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
              <div class="d-flex justify-content-center">
                <div>
                  <img
                    src="~/assets/images/carouselpeople1.png"
                    class="p-0 m-0"
                    alt=""
                  />

                  <h3 class="mainparagraph text-center my-3 mainparagraph18">
                    John S. Sergent 1
                  </h3>
                  <p class="mainparagraph text-center graytext">Lorem ipsum</p>
                </div>
              </div>
            </div>

            <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
              <div class="d-flex justify-content-center">
                <div>
                  <img
                    src="images/carouselpeople2.png"
                    class="p-0 m-0"
                    alt=""
                  />

                  <h3 class="mainparagraph text-center my-3 mainparagraph18">
                    John S. Sergent 1
                  </h3>
                  <p class="mainparagraph text-center graytext">Lorem ipsum</p>
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

                  <h3 class="mainparagraph text-center my-3 mainparagraph18">
                    John S. Sergent 1
                  </h3>
                  <p class="mainparagraph text-center graytext">Lorem ipsum</p>
                </div>
              </div>
            </div>

            <div class="carousel-cell col-lg-3 col-sm-6 maincarous">
              <div class="d-flex justify-content-center">
                <div>
                  <img
                    src="images/carouselpeople4.png"
                    class="p-0 m-0"
                    alt=""
                  />

                  <h3 class="mainparagraph text-center my-3 mainparagraph18">
                    John S. Sergent 1
                  </h3>
                  <p class="mainparagraph text-center graytext">Lorem ipsum</p>
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

                  <h3 class="mainparagraph text-center my-3 mainparagraph18">
                    John S. Sergent 1
                  </h3>
                  <p class="mainparagraph text-center graytext">Lorem ipsum</p>
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
          <h1 class="arialheader">Testimonials</h1>
          <p class="mt-3 mainparagraph graytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="my-3 slider">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner horizontalspacing">
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
                        src="images/testimonial1.png"
                        class="img mx-lg-5"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div class="relativecontainer ml-4">
                    <div class="absolutecontainer blockquote">
                      <img
                        src="images/testimonialquoteblock.png"
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
              <div class="carousel-item relativecontainer">
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
                          src="images/testimonialblock.png"
                          class="img"
                          alt=""
                        />
                      </div>
                      <img
                        src="images/testimonial1.png"
                        class="img mx-lg-5"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div class="relativecontainer ml-4">
                    <div class="absolutecontainer blockquote">
                      <img
                        src="images/testimonialquoteblock.png"
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
            <div
              class="carousel-control-prev custom"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <div class="absolutecontainer">
                <span
                  class="iconify"
                  data-icon="bi:arrow-left-circle-fill"
                  data-width="40"
                  data-height="40"
                ></span>
                <span class="sr-only">Previous</span>
              </div>
            </div>
            <div
              class="carousel-control-next custom"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="iconify"
                data-icon="bi:arrow-right-circle-fill"
                data-width="40"
                data-height="40"
              ></span>
              <span class="sr-only">Next</span>
            </div>
          </div>
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

    <footer />
  </div>
</template>

<script>
import loginNav from '../../components/loginNav.vue'
export default {
  components: { loginNav },
}
</script>

<style>
</style>