<template>
  <div>
    <login-nav />

    <dashboard>
      <template #contentheader> Instructor Dashboard </template>
      <template #contentactive> Courses</template>
      <template #content> Instructors</template>
    </dashboard>
    <main class="page-content mt-0 mb-5">
      <div class="mt-5 horizontalspacing pt-5">
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
          <div class="custom-tabs mt-1">
            <ul
              class="nav flex-nowrap px-md-4 px-3 customscroll"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item mx-md-3 mx-1" role="presentation">
                <a
                  class="nav-link medbrownparagraph active"
                  id="pills-status-tab"
                  data-toggle="pill"
                  href="#pills-status"
                  role="tab"
                  aria-controls="pills-status"
                  aria-selected="true"
                  >All Status</a
                >
              </li>
              <li class="nav-item mx-md-3 mx-1" role="presentation">
                <a
                  class="nav-link medbrownparagraph"
                  id="pills-My-gallery-tab"
                  data-toggle="pill"
                  href="#pills-My-gallery"
                  role="tab"
                  aria-controls="pills-My-gallery"
                  aria-selected="false"
                  >Open</a
                >
              </li>
              <li class="nav-item mx-md-3 mx-1" role="presentation">
                <a
                  class="nav-link medbrownparagraph"
                  id="pills-My-approval-tab"
                  data-toggle="pill"
                  href="#pills-My-approval"
                  role="tab"
                  aria-controls="pills-My-approval"
                  aria-selected="false"
                  >On-Going</a
                >
              </li>
              <li class="nav-item mx-md-3 mx-1" role="presentation">
                <a
                  class="nav-link medbrownparagraph"
                  id="pills-My-approval-tab"
                  data-toggle="pill"
                  href="#pills-My-approval"
                  role="tab"
                  aria-controls="pills-My-approval"
                  aria-selected="false"
                  >Archive</a
                >
              </li>
            </ul>
          </div>
          <div class="tab-content card-body" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-status"
              role="tabpanel"
              aria-labelledby="pills-status-tab"
            >
              <div>
                <div class="">
                  <div
                    class="
                      pb-3
                      d-flex
                      flex-md-row flex-column
                      justify-content-md-between
                      align-items-md-center
                    "
                  >
                    <div
                      class="
                        dropdown
                        account-dropdown
                        my-2 my-md-0
                        d-flex
                        align-items-center
                      "
                    >
                      <div class="mr-2">
                        <div class="d-flex align-items-center icontoggle">
                          <div class="icon-wrapper active borderright">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75497 6.39903H1.22682C0.861993 6.39903 0.583008 6.12004 0.583008 5.75521V1.22706C0.583008 0.862237 0.861993 0.583252 1.22682 0.583252H5.75497C6.1198 0.583252 6.39878 0.862237 6.39878 1.22706V5.75521C6.39878 6.12004 6.1198 6.39903 5.75497 6.39903ZM1.87063 5.1114H5.11116V1.87088H1.87063V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M5.75497 13.4165H1.22682C0.861993 13.4165 0.583008 13.1375 0.583008 12.7727V8.24452C0.583008 7.87969 0.861993 7.60071 1.22682 7.60071H5.75497C6.1198 7.60071 6.39878 7.87969 6.39878 8.24452V12.7727C6.39878 13.1375 6.1198 13.4165 5.75497 13.4165ZM1.87063 12.1289H5.11116V8.88833H1.87063V12.1289Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 6.39903H8.2444C7.87957 6.39903 7.60059 6.12004 7.60059 5.75521V1.22706C7.60059 0.862237 7.87957 0.583252 8.2444 0.583252H12.7725C13.1374 0.583252 13.4164 0.862237 13.4164 1.22706V5.75521C13.4164 6.12004 13.1374 6.39903 12.7725 6.39903ZM8.88821 5.1114H12.1287V1.87088H8.88821V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 13.4165H8.2444C7.87957 13.4165 7.60059 13.1375 7.60059 12.7727V8.24452C7.60059 7.87969 7.87957 7.60071 8.2444 7.60071H12.7725C13.1374 7.60071 13.4164 7.87969 13.4164 8.24452V12.7727C13.4164 13.1375 13.1374 13.4165 12.7725 13.4165ZM8.88821 12.1289H12.1287V8.88833H8.88821V12.1289Z"
                                fill="#8F9AA3"
                              />
                            </svg>
                          </div>
                          <div class="icon-wrapper">
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.84495 9.66658H1.22467C0.861063 9.66658 0.583008 9.38042 0.583008 9.0062C0.583008 8.63199 0.861063 8.34583 1.22467 8.34583H1.84495C2.20856 8.34583 2.48662 8.63199 2.48662 9.0062C2.48662 9.38042 2.20856 9.66658 1.84495 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 5.66023H1.22467C0.861063 5.66023 0.583008 5.37407 0.583008 4.99985C0.583008 4.62564 0.861063 4.33948 1.22467 4.33948H1.84495C2.20856 4.33948 2.48662 4.62564 2.48662 4.99985C2.48662 5.37407 2.20856 5.66023 1.84495 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 1.65401H1.22467C0.861063 1.65401 0.583008 1.36784 0.583008 0.993629C0.583008 0.619415 0.861063 0.333252 1.22467 0.333252H1.84495C2.20856 0.333252 2.48662 0.619415 2.48662 0.993629C2.48662 1.36784 2.20856 1.65401 1.84495 1.65401Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 9.66658C3.89817 9.66658 3.62012 9.38042 3.62012 9.0062C3.62012 8.63199 3.89817 8.34583 4.26178 8.34583H12.7746C13.1382 8.34583 13.4162 8.63199 13.4162 9.0062C13.4162 9.38042 13.1382 9.66658 12.7746 9.66658H4.26178C4.28317 9.66658 4.28317 9.66658 4.26178 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 5.66023C3.89817 5.66023 3.62012 5.37407 3.62012 4.99985C3.62012 4.62564 3.89817 4.33948 4.26178 4.33948H12.7746C13.1382 4.33948 13.4162 4.62564 13.4162 4.99985C13.4162 5.37407 13.1382 5.66023 12.7746 5.66023H4.26178C4.28317 5.66023 4.28317 5.66023 4.26178 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 1.65401C3.89817 1.65401 3.62012 1.36784 3.62012 0.993629C3.62012 0.619415 3.89817 0.333252 4.26178 0.333252H12.7746C13.1382 0.333252 13.4162 0.619415 13.4162 0.993629C13.4162 1.36784 13.1382 1.65401 12.7746 1.65401H4.26178C4.28317 1.65401 4.28317 1.65401 4.26178 1.65401Z"
                                fill="#1070B7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span class="text-dark medbrownparagraph mx-2">
                        Viewed by</span
                      >
                      <a
                        href="#"
                        class="
                          dropdown-toggle
                          mb-0
                          medbrownparagraph
                          text-dark
                          d-flex
                          align-items-center
                        "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span> 6 records</span
                        ><span
                          class="iconify"
                          data-icon="akar-icons:chevron-down"
                          data-width="15"
                          data-height="15"
                        ></span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 1</a
                        >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 2</a
                        >
                      </div>
                    </div>

                    <div class="searchbar my-2 my-md-0 d-flex flwidth">
                      <input
                        type="text"
                        name=""
                        id=""
                        required
                        placeholder="Search Class"
                        class="forminputs searchbar text-dark"
                      />

                      <button class="btn searchbtninside">
                        <span
                          class="iconify"
                          data-icon="akar-icons:search"
                          data-width="20"
                          data-height="20"
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between justify-content-md-end
                      flex-wrap
                      mb-1 mb-md-0
                    "
                  ></div>
                </div>

                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Name
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Class Code
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          No of Students
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Start date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          End date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav
                  aria-label="..."
                  class="d-flex justify-content-center mt-4"
                >
                  <ul class="pagination">
                    <li class="page-item">
                      <span class="page-link smallbrownparagraph text-dark"
                        >1</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >2</a
                      >
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link smallbrownparagraph text-dark"
                        >3</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >4</a
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >5</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-My-gallery"
              role="tabpanel"
              aria-labelledby="pills-My-gallery-tab"
            >
              <div>
                <div class="">
                  <div
                    class="
                      pb-3
                      d-flex
                      flex-md-row flex-column
                      justify-content-md-between
                      align-items-md-center
                    "
                  >
                    <div
                      class="
                        dropdown
                        account-dropdown
                        my-2 my-md-0
                        d-flex
                        align-items-center
                      "
                    >
                      <div class="mr-2">
                        <div class="d-flex align-items-center icontoggle">
                          <div class="icon-wrapper active borderright">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75497 6.39903H1.22682C0.861993 6.39903 0.583008 6.12004 0.583008 5.75521V1.22706C0.583008 0.862237 0.861993 0.583252 1.22682 0.583252H5.75497C6.1198 0.583252 6.39878 0.862237 6.39878 1.22706V5.75521C6.39878 6.12004 6.1198 6.39903 5.75497 6.39903ZM1.87063 5.1114H5.11116V1.87088H1.87063V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M5.75497 13.4165H1.22682C0.861993 13.4165 0.583008 13.1375 0.583008 12.7727V8.24452C0.583008 7.87969 0.861993 7.60071 1.22682 7.60071H5.75497C6.1198 7.60071 6.39878 7.87969 6.39878 8.24452V12.7727C6.39878 13.1375 6.1198 13.4165 5.75497 13.4165ZM1.87063 12.1289H5.11116V8.88833H1.87063V12.1289Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 6.39903H8.2444C7.87957 6.39903 7.60059 6.12004 7.60059 5.75521V1.22706C7.60059 0.862237 7.87957 0.583252 8.2444 0.583252H12.7725C13.1374 0.583252 13.4164 0.862237 13.4164 1.22706V5.75521C13.4164 6.12004 13.1374 6.39903 12.7725 6.39903ZM8.88821 5.1114H12.1287V1.87088H8.88821V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 13.4165H8.2444C7.87957 13.4165 7.60059 13.1375 7.60059 12.7727V8.24452C7.60059 7.87969 7.87957 7.60071 8.2444 7.60071H12.7725C13.1374 7.60071 13.4164 7.87969 13.4164 8.24452V12.7727C13.4164 13.1375 13.1374 13.4165 12.7725 13.4165ZM8.88821 12.1289H12.1287V8.88833H8.88821V12.1289Z"
                                fill="#8F9AA3"
                              />
                            </svg>
                          </div>
                          <div class="icon-wrapper">
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.84495 9.66658H1.22467C0.861063 9.66658 0.583008 9.38042 0.583008 9.0062C0.583008 8.63199 0.861063 8.34583 1.22467 8.34583H1.84495C2.20856 8.34583 2.48662 8.63199 2.48662 9.0062C2.48662 9.38042 2.20856 9.66658 1.84495 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 5.66023H1.22467C0.861063 5.66023 0.583008 5.37407 0.583008 4.99985C0.583008 4.62564 0.861063 4.33948 1.22467 4.33948H1.84495C2.20856 4.33948 2.48662 4.62564 2.48662 4.99985C2.48662 5.37407 2.20856 5.66023 1.84495 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 1.65401H1.22467C0.861063 1.65401 0.583008 1.36784 0.583008 0.993629C0.583008 0.619415 0.861063 0.333252 1.22467 0.333252H1.84495C2.20856 0.333252 2.48662 0.619415 2.48662 0.993629C2.48662 1.36784 2.20856 1.65401 1.84495 1.65401Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 9.66658C3.89817 9.66658 3.62012 9.38042 3.62012 9.0062C3.62012 8.63199 3.89817 8.34583 4.26178 8.34583H12.7746C13.1382 8.34583 13.4162 8.63199 13.4162 9.0062C13.4162 9.38042 13.1382 9.66658 12.7746 9.66658H4.26178C4.28317 9.66658 4.28317 9.66658 4.26178 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 5.66023C3.89817 5.66023 3.62012 5.37407 3.62012 4.99985C3.62012 4.62564 3.89817 4.33948 4.26178 4.33948H12.7746C13.1382 4.33948 13.4162 4.62564 13.4162 4.99985C13.4162 5.37407 13.1382 5.66023 12.7746 5.66023H4.26178C4.28317 5.66023 4.28317 5.66023 4.26178 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 1.65401C3.89817 1.65401 3.62012 1.36784 3.62012 0.993629C3.62012 0.619415 3.89817 0.333252 4.26178 0.333252H12.7746C13.1382 0.333252 13.4162 0.619415 13.4162 0.993629C13.4162 1.36784 13.1382 1.65401 12.7746 1.65401H4.26178C4.28317 1.65401 4.28317 1.65401 4.26178 1.65401Z"
                                fill="#1070B7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span class="text-dark medbrownparagraph mx-2">
                        Viewed by</span
                      >
                      <a
                        href="#"
                        class="
                          dropdown-toggle
                          mb-0
                          medbrownparagraph
                          text-dark
                          d-flex
                          align-items-center
                        "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span> 6 records</span
                        ><span
                          class="iconify"
                          data-icon="akar-icons:chevron-down"
                          data-width="15"
                          data-height="15"
                        ></span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 1</a
                        >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 2</a
                        >
                      </div>
                    </div>

                    <div class="searchbar my-2 my-md-0 d-flex flwidth">
                      <input
                        type="text"
                        name=""
                        id=""
                        required
                        placeholder="Search Class"
                        class="forminputs searchbar text-dark"
                      />

                      <button class="btn searchbtninside">
                        <span
                          class="iconify"
                          data-icon="akar-icons:search"
                          data-width="20"
                          data-height="20"
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between justify-content-md-end
                      flex-wrap
                      mb-1 mb-md-0
                    "
                  ></div>
                </div>

                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Name
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Class Code
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          No of Students
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Start date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          End date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav
                  aria-label="..."
                  class="d-flex justify-content-center mt-4"
                >
                  <ul class="pagination">
                    <li class="page-item">
                      <span class="page-link smallbrownparagraph text-dark"
                        >1</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >2</a
                      >
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link smallbrownparagraph text-dark"
                        >3</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >4</a
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >5</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-My-approval"
              role="tabpanel"
              aria-labelledby="pills-My-approval-tab"
            >
              <div>
                <div class="">
                  <div
                    class="
                      pb-3
                      d-flex
                      flex-md-row flex-column
                      justify-content-md-between
                      align-items-md-center
                    "
                  >
                    <div
                      class="
                        dropdown
                        account-dropdown
                        my-2 my-md-0
                        d-flex
                        align-items-center
                      "
                    >
                      <div class="mr-2">
                        <div class="d-flex align-items-center icontoggle">
                          <div class="icon-wrapper active borderright">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75497 6.39903H1.22682C0.861993 6.39903 0.583008 6.12004 0.583008 5.75521V1.22706C0.583008 0.862237 0.861993 0.583252 1.22682 0.583252H5.75497C6.1198 0.583252 6.39878 0.862237 6.39878 1.22706V5.75521C6.39878 6.12004 6.1198 6.39903 5.75497 6.39903ZM1.87063 5.1114H5.11116V1.87088H1.87063V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M5.75497 13.4165H1.22682C0.861993 13.4165 0.583008 13.1375 0.583008 12.7727V8.24452C0.583008 7.87969 0.861993 7.60071 1.22682 7.60071H5.75497C6.1198 7.60071 6.39878 7.87969 6.39878 8.24452V12.7727C6.39878 13.1375 6.1198 13.4165 5.75497 13.4165ZM1.87063 12.1289H5.11116V8.88833H1.87063V12.1289Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 6.39903H8.2444C7.87957 6.39903 7.60059 6.12004 7.60059 5.75521V1.22706C7.60059 0.862237 7.87957 0.583252 8.2444 0.583252H12.7725C13.1374 0.583252 13.4164 0.862237 13.4164 1.22706V5.75521C13.4164 6.12004 13.1374 6.39903 12.7725 6.39903ZM8.88821 5.1114H12.1287V1.87088H8.88821V5.1114Z"
                                fill="#8F9AA3"
                              />
                              <path
                                d="M12.7725 13.4165H8.2444C7.87957 13.4165 7.60059 13.1375 7.60059 12.7727V8.24452C7.60059 7.87969 7.87957 7.60071 8.2444 7.60071H12.7725C13.1374 7.60071 13.4164 7.87969 13.4164 8.24452V12.7727C13.4164 13.1375 13.1374 13.4165 12.7725 13.4165ZM8.88821 12.1289H12.1287V8.88833H8.88821V12.1289Z"
                                fill="#8F9AA3"
                              />
                            </svg>
                          </div>
                          <div class="icon-wrapper">
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.84495 9.66658H1.22467C0.861063 9.66658 0.583008 9.38042 0.583008 9.0062C0.583008 8.63199 0.861063 8.34583 1.22467 8.34583H1.84495C2.20856 8.34583 2.48662 8.63199 2.48662 9.0062C2.48662 9.38042 2.20856 9.66658 1.84495 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 5.66023H1.22467C0.861063 5.66023 0.583008 5.37407 0.583008 4.99985C0.583008 4.62564 0.861063 4.33948 1.22467 4.33948H1.84495C2.20856 4.33948 2.48662 4.62564 2.48662 4.99985C2.48662 5.37407 2.20856 5.66023 1.84495 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M1.84495 1.65401H1.22467C0.861063 1.65401 0.583008 1.36784 0.583008 0.993629C0.583008 0.619415 0.861063 0.333252 1.22467 0.333252H1.84495C2.20856 0.333252 2.48662 0.619415 2.48662 0.993629C2.48662 1.36784 2.20856 1.65401 1.84495 1.65401Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 9.66658C3.89817 9.66658 3.62012 9.38042 3.62012 9.0062C3.62012 8.63199 3.89817 8.34583 4.26178 8.34583H12.7746C13.1382 8.34583 13.4162 8.63199 13.4162 9.0062C13.4162 9.38042 13.1382 9.66658 12.7746 9.66658H4.26178C4.28317 9.66658 4.28317 9.66658 4.26178 9.66658Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 5.66023C3.89817 5.66023 3.62012 5.37407 3.62012 4.99985C3.62012 4.62564 3.89817 4.33948 4.26178 4.33948H12.7746C13.1382 4.33948 13.4162 4.62564 13.4162 4.99985C13.4162 5.37407 13.1382 5.66023 12.7746 5.66023H4.26178C4.28317 5.66023 4.28317 5.66023 4.26178 5.66023Z"
                                fill="#1070B7"
                              />
                              <path
                                d="M4.26178 1.65401C3.89817 1.65401 3.62012 1.36784 3.62012 0.993629C3.62012 0.619415 3.89817 0.333252 4.26178 0.333252H12.7746C13.1382 0.333252 13.4162 0.619415 13.4162 0.993629C13.4162 1.36784 13.1382 1.65401 12.7746 1.65401H4.26178C4.28317 1.65401 4.28317 1.65401 4.26178 1.65401Z"
                                fill="#1070B7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span class="text-dark medbrownparagraph mx-2">
                        Viewed by</span
                      >
                      <a
                        href="#"
                        class="
                          dropdown-toggle
                          mb-0
                          medbrownparagraph
                          text-dark
                          d-flex
                          align-items-center
                        "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span> 6 records</span
                        ><span
                          class="iconify"
                          data-icon="akar-icons:chevron-down"
                          data-width="15"
                          data-height="15"
                        ></span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 1</a
                        >
                        <a class="dropdown-item medbrownparagraph" href="#"
                          >Option 2</a
                        >
                      </div>
                    </div>

                    <div class="searchbar my-2 my-md-0 d-flex flwidth">
                      <input
                        type="text"
                        name=""
                        id=""
                        required
                        placeholder="Search Class"
                        class="forminputs searchbar text-dark"
                      />

                      <button class="btn searchbtninside">
                        <span
                          class="iconify"
                          data-icon="akar-icons:search"
                          data-width="20"
                          data-height="20"
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between justify-content-md-end
                      flex-wrap
                      mb-1 mb-md-0
                    "
                  ></div>
                </div>

                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Name
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Class Code
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          No of Students
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          Start date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700">
                          End date
                        </th>
                        <th scope="col" class="medbrownparagraph bold700"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="col"
                          class="d-flex align-items-center align-content-center"
                        >
                          <div class="">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-input"
                                name=""
                                id=""
                                value="checkedValue"
                                checked
                              />
                            </label>
                          </div>
                        </th>
                        <td class="medbrownparagraph">
                          concepts of fellowship, Joint Participation
                        </td>
                        <td class="medbrownparagraph">EOD23</td>
                        <td class="medbrownparagraph">100</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">01/01/2023</td>
                        <td class="medbrownparagraph">
                          <span
                            class="iconify"
                            data-icon="bi:three-dots-vertical"
                            data-width="15"
                            data-height="15"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav
                  aria-label="..."
                  class="d-flex justify-content-center mt-4"
                >
                  <ul class="pagination">
                    <li class="page-item">
                      <span class="page-link smallbrownparagraph text-dark"
                        >1</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >2</a
                      >
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link smallbrownparagraph text-dark"
                        >3</span
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >4</a
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link smallbrownparagraph text-dark"
                        href="#"
                        >5</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import dashboard from '../../layouts/dashboard.vue'
export default {
  components: { dashboard },
}
</script>

<style>
</style>