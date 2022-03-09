<template>
  <div>
    <!-- ****************************************************************************************** -->
    <div class="site-container">
      <div class="conatiner">
        <div class="card bg-white mb-3">
          <div class="card-header pt-4 pb-0">
            <div class="card-title">Create Exercise</div>
          </div>
          <div class="card-body d-flex">
            <div class="row mt-4">
              <div class="col-xl-6">
                <div class="mb-2">
                  <label class="form-control-label">Exercise Name</label>
                  <input class="form-control" placeholder="Enter Name" />
                </div>
                <div class="mb-2">
                  <label class="form-control-label">Exercise Description</label>
                  <textarea
                    class="form-control"
                    placeholder="Description"
                  ></textarea>
                  <small class="text-dark"
                    >Let students know a little about the lesson in 500
                    characters or less.</small
                  >
                </div>
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Grade</label>
                    <select class="form-control w-100">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Subject</label>
                    <select class="form-control w-100">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
                <div class="mb-2">
                  <label class="form-control-label">Class(es)</label>
                  <select class="form-control w-100">
                    <option>Select Classes</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <hr />
              </div>
              <div class="">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Exercise Type</label>
                    <select class="form-control w-100">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Exercise Format</label>
                    <select class="form-control w-100">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Available Date</label>
                    <div class="input-group">
                      <input
                        type="date"
                        class="form-control border-right"
                        placeholder="Available Date"
                      />
                      <!-- <span class="input-group-text border-left-0 bg-white"
                        ><span
                          class="iconify"
                          data-inline="false"
                          data-icon="carbon:calendar"
                          style="font-size: 20px"
                        ></span
                      ></span> -->
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Due Date</label>
                    <div class="input-group">
                      <input
                        type="date"
                        class="form-control border-right"
                        placeholder="Due Date"
                      />
                      <!-- <span class="input-group-text border-left-0 bg-white"
                        ><span
                          class="iconify"
                          data-inline="false"
                          data-icon="carbon:calendar"
                          style="font-size: 20px"
                        ></span
                      ></span> -->
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label class="form-control-label">Set Duration</label>
                    <select class="form-control w-100">
                      <option>Set Duration</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <hr />
                <div class="card-title mb-3 fs-20 font-weight-normal">
                  Sections
                </div>
              </div>
              <div class="col-12">
                <div class="exc-sections-wrapper">
                  <div class="exc-section mb-2">
                    <div
                      class="
                        accordion-header
                        target-icon
                        creation-accordion-header
                        d-flex
                        justify-content-between
                        px-3
                        py-3
                      "
                    >
                      <div class="d-flex align-items-center">
                        <div class="mr-3 line-height-0">
                          <svg
                            class="toggle-icon"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                              fill="#D6DAEB"
                            />
                            <path
                              d="M15 9.5L11 13.5L7 9.5"
                              stroke="#484848"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div class="title-text mr-2">
                          Section 1 - Lesson Material
                        </div>
                        <div class="line-height-0 pt-1">
                          <span
                            class="iconify text-primary pointer fs-18"
                            data-icon="eva:edit-2-outline"
                          ></span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="score mr-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.3569 11.5055C15.9872 11.6744 16.6458 11.2994 16.7076 10.6497C16.8186 9.48153 16.6378 8.29745 16.173 7.20657C15.5527 5.7512 14.4626 4.54569 13.0768 3.78266C11.691 3.01962 10.0894 2.74308 8.52789 2.99723C6.96642 3.25138 5.53518 4.02154 4.46285 5.18468C3.39052 6.34781 2.73897 7.83679 2.6123 9.41373C2.48563 10.9907 2.89115 12.5646 3.76407 13.884C4.63699 15.2033 5.92693 16.1921 7.42782 16.6922C8.5528 17.0671 9.74764 17.1513 10.903 16.9458C11.5455 16.8316 11.8658 16.1447 11.6464 15.5302C11.4269 14.9156 10.748 14.6117 10.0982 14.6718C9.45285 14.7314 8.79782 14.6577 8.17495 14.4501C7.17543 14.117 6.31638 13.4586 5.73505 12.5799C5.15373 11.7013 4.88367 10.6531 4.96803 9.60296C5.05238 8.55279 5.48629 7.56119 6.20041 6.78659C6.91454 6.012 7.86768 5.4991 8.90755 5.32985C9.94742 5.1606 11.014 5.34476 11.9369 5.85291C12.8598 6.36106 13.5858 7.16387 13.9988 8.13309C14.2562 8.73708 14.3828 9.38396 14.3757 10.032C14.3685 10.6846 14.7265 11.3366 15.3569 11.5055Z"
                              fill="#51B8F4"
                            />
                          </svg>
                        </div>
                        <div class="material-type mr-4">Document / PDF</div>
                        <div class="line-height-0 mr-3">
                          <span
                            class="iconify text-danger pointer fs-18 ml-3"
                            data-icon="uil:trash-alt"
                          ></span>
                        </div>
                        <div class="pointer">
                          <svg
                            width="10"
                            height="21"
                            viewBox="0 0 10 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="2"
                              cy="2.62173"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="2"
                              cy="10.4054"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="2"
                              cy="18.1894"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="2.62173"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="10.4054"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="18.1894"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-content px-4 px-md-5 mb-5">
                      <div class="row mt-3">
                        <div class="col-lg-10">
                          <div class="mb-2">
                            <label class="form-control-label"
                              >Header/Section Instruction</label
                            >
                            <textarea
                              class="form-control"
                              placeholder="Add Header / Description / Instruction"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <!-- Questions Start Here  -->
                      <label class="form-control-label fs-14 mb-2"
                        >Section Questions</label
                      >
                      <div class="exc-section-question mb-2">
                        <div
                          class="
                            accordion-header
                            target-icon
                            creation-accordion-header
                            px-3
                            py-3
                          "
                        >
                          <div class="d-flex align-items-center">
                            <div class="mr-3 line-height-0">
                              <svg
                                class="toggle-icon"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                                  fill="#D6DAEB"
                                />
                                <path
                                  d="M15 9.5L11 13.5L7 9.5"
                                  stroke="#484848"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div
                              class="
                                bg-grayish-variant-1
                                fs-14
                                text-dark
                                py-1
                                px-2
                                font-weight-bold
                                rounded
                                mr-2
                              "
                            >
                              1
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="line-height-0 mr-3">
                              <span
                                class="iconify text-danger pointer fs-18 ml-3"
                                data-icon="uil:trash-alt"
                              ></span>
                            </div>
                            <div class="pointer">
                              <svg
                                width="10"
                                height="21"
                                viewBox="0 0 10 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <ellipse
                                  cx="2"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-content px-2">
                          <div class="row mt-3">
                            <div class="col-lg-10 order-last order-xl-first">
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question</label
                                >
                                <textarea
                                  class="form-control form-control-sm"
                                  placeholder="Enter Question"
                                ></textarea>
                              </div>
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question Score</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter Score"
                                  style="max-width: 220px"
                                />
                              </div>
                            </div>
                            <div class="col-xl-2 mb-3 mb-lg-0">
                              <div
                                class="
                                  file-type-display
                                  py-3
                                  px-3
                                  text-center
                                  w-100
                                "
                                style="max-width: 241px"
                              >
                                <div class="mb-2">
                                  <span
                                    class="iconify mr-2"
                                    data-icon="bi:file-image"
                                    style="font-size: 31px"
                                  ></span>
                                </div>
                                <div class="text-primary fs-10">
                                  Click to Upload Image
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="">
                            <div class="mb-2">
                              <label class="form-control-label">Options</label>
                              <div class="fs-12 font-weight-bold text-dark">
                                Highlight correct answer
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" checked />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-content-center
                                    justify-content-end
                                  "
                                >
                                  <div
                                    class="
                                      text-primary
                                      pointer
                                      d-flex
                                      align-content-center
                                    "
                                  >
                                    <div class="mr-1 line-height-0">
                                      <span
                                        class="iconify fs-18"
                                        data-icon="fluent:add-24-filled"
                                        style="font-size: 18px; color: #1070b7"
                                      ></span>
                                    </div>
                                    <strong class="fs-14">Add Option</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10">
                                <div class="mb-3">
                                  <label class="form-control-label"
                                    >Solution</label
                                  >
                                  <textarea
                                    class="form-control"
                                    placeholder="Add question solution"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="exc-section-question mb-2">
                        <div
                          class="
                            accordion-header
                            target-icon
                            creation-accordion-header
                            px-3
                            py-3
                          "
                        >
                          <div class="d-flex align-items-center">
                            <div class="mr-3 line-height-0">
                              <svg
                                class="toggle-icon"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                                  fill="#D6DAEB"
                                />
                                <path
                                  d="M15 9.5L11 13.5L7 9.5"
                                  stroke="#484848"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div
                              class="
                                bg-grayish-variant-1
                                fs-14
                                text-dark
                                py-1
                                px-2
                                font-weight-bold
                                rounded
                                mr-2
                              "
                            >
                              2
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="line-height-0 mr-3">
                              <span
                                class="iconify text-danger pointer fs-18 ml-3"
                                data-icon="uil:trash-alt"
                              ></span>
                            </div>
                            <div class="pointer">
                              <svg
                                width="10"
                                height="21"
                                viewBox="0 0 10 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <ellipse
                                  cx="2"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-content px-2">
                          <div class="row mt-3">
                            <div class="col-lg-10 order-last order-xl-first">
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question</label
                                >
                                <textarea
                                  class="form-control form-control-sm"
                                  placeholder="Enter Question"
                                ></textarea>
                              </div>
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question Score</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter Score"
                                  style="max-width: 220px"
                                />
                              </div>
                            </div>
                            <div class="col-xl-2 mb-3 mb-lg-0">
                              <div
                                class="
                                  file-type-display
                                  py-3
                                  px-3
                                  text-center
                                  w-100
                                "
                                style="max-width: 241px"
                              >
                                <div class="mb-2">
                                  <span
                                    class="iconify mr-2"
                                    data-icon="bi:file-image"
                                    style="font-size: 31px"
                                  ></span>
                                </div>
                                <div class="text-primary fs-10">
                                  Click to Upload Image
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="">
                            <div class="mb-2">
                              <label class="form-control-label">Options</label>
                              <div class="fs-12 font-weight-bold text-dark">
                                Highlight correct answer
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" checked />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-content-center
                                    justify-content-end
                                  "
                                >
                                  <div
                                    class="
                                      text-primary
                                      pointer
                                      d-flex
                                      align-content-center
                                    "
                                  >
                                    <div class="mr-1 line-height-0">
                                      <span
                                        class="iconify fs-18"
                                        data-icon="fluent:add-24-filled"
                                        style="font-size: 18px; color: #1070b7"
                                      ></span>
                                    </div>
                                    <strong class="fs-14">Add Option</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10">
                                <div class="mb-3">
                                  <label class="form-control-label"
                                    >Solution</label
                                  >
                                  <textarea
                                    class="form-control"
                                    placeholder="Add question solution"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Questions End Here  -->
                      <hr />
                      <div
                        class="d-flex align-content-center justify-content-end"
                      >
                        <div
                          class="
                            text-primary
                            pointer
                            d-flex
                            align-content-center
                          "
                        >
                          <div class="mr-1 line-height-0">
                            <span
                              class="iconify fs-18"
                              data-icon="fluent:add-24-filled"
                              style="font-size: 18px; color: #1070b7"
                            ></span>
                          </div>
                          <strong class="fs-14">Add Questions</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="exc-section mb-2">
                    <div
                      class="
                        accordion-header
                        target-icon
                        creation-accordion-header
                        px-3
                        py-3
                      "
                    >
                      <div class="d-flex align-items-center">
                        <div class="mr-3 line-height-0">
                          <svg
                            class="toggle-icon"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                              fill="#D6DAEB"
                            />
                            <path
                              d="M15 9.5L11 13.5L7 9.5"
                              stroke="#484848"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div class="title-text mr-2">
                          Section 2 - Lesson Material
                        </div>
                        <div class="line-height-0 pt-1">
                          <span
                            class="iconify text-primary pointer fs-18"
                            data-icon="eva:edit-2-outline"
                          ></span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="score mr-3">
                          <!-- <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.3569 11.5055C15.9872 11.6744 16.6458 11.2994 16.7076 10.6497C16.8186 9.48153 16.6378 8.29745 16.173 7.20657C15.5527 5.7512 14.4626 4.54569 13.0768 3.78266C11.691 3.01962 10.0894 2.74308 8.52789 2.99723C6.96642 3.25138 5.53518 4.02154 4.46285 5.18468C3.39052 6.34781 2.73897 7.83679 2.6123 9.41373C2.48563 10.9907 2.89115 12.5646 3.76407 13.884C4.63699 15.2033 5.92693 16.1921 7.42782 16.6922C8.5528 17.0671 9.74764 17.1513 10.903 16.9458C11.5455 16.8316 11.8658 16.1447 11.6464 15.5302C11.4269 14.9156 10.748 14.6117 10.0982 14.6718C9.45285 14.7314 8.79782 14.6577 8.17495 14.4501C7.17543 14.117 6.31638 13.4586 5.73505 12.5799C5.15373 11.7013 4.88367 10.6531 4.96803 9.60296C5.05238 8.55279 5.48629 7.56119 6.20041 6.78659C6.91454 6.012 7.86768 5.4991 8.90755 5.32985C9.94742 5.1606 11.014 5.34476 11.9369 5.85291C12.8598 6.36106 13.5858 7.16387 13.9988 8.13309C14.2562 8.73708 14.3828 9.38396 14.3757 10.032C14.3685 10.6846 14.7265 11.3366 15.3569 11.5055Z"
                              fill="#51B8F4"
                            />
                          </svg> -->
                        </div>
                        <div class="material-type mr-4">Document / PDF</div>
                        <div class="line-height-0 mr-3">
                          <span
                            class="iconify text-danger pointer fs-18 ml-3"
                            data-icon="uil:trash-alt"
                          ></span>
                        </div>
                        <div class="pointer">
                          <svg
                            width="10"
                            height="21"
                            viewBox="0 0 10 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="2"
                              cy="2.62173"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="2"
                              cy="10.4054"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="2"
                              cy="18.1894"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="2.62173"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="10.4054"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                            <ellipse
                              cx="8"
                              cy="18.1894"
                              rx="2"
                              ry="1.94595"
                              fill="#8B9EB0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-content px-4 px-md-5 mb-5">
                      <div class="row mt-3">
                        <div class="col-lg-10">
                          <div class="mb-2">
                            <label class="form-control-label"
                              >Header/Section Instruction</label
                            >
                            <textarea
                              class="form-control"
                              placeholder="Add Header / Description / Instruction"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <!-- Questions Start Here  -->
                      <label class="form-control-label fs-14 mb-2"
                        >Section Questions</label
                      >
                      <div class="exc-section-question mb-2">
                        <div
                          class="
                            accordion-header
                            target-icon
                            creation-accordion-header
                            px-3
                            py-3
                          "
                        >
                          <div class="d-flex align-items-center">
                            <div class="mr-3 line-height-0">
                              <svg
                                class="toggle-icon"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                                  fill="#D6DAEB"
                                />
                                <path
                                  d="M15 9.5L11 13.5L7 9.5"
                                  stroke="#484848"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div
                              class="
                                bg-grayish-variant-1
                                fs-14
                                text-dark
                                py-1
                                px-2
                                font-weight-bold
                                rounded
                                mr-2
                              "
                            >
                              1
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="line-height-0 mr-3">
                              <span
                                class="iconify text-danger pointer fs-18 ml-3"
                                data-icon="uil:trash-alt"
                              ></span>
                            </div>
                            <div class="pointer">
                              <svg
                                width="10"
                                height="21"
                                viewBox="0 0 10 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <ellipse
                                  cx="2"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-content px-2">
                          <div class="row mt-3">
                            <div class="col-lg-10 order-last order-xl-first">
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question</label
                                >
                                <textarea
                                  class="form-control form-control-sm"
                                  placeholder="Enter Question"
                                ></textarea>
                              </div>
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question Score</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter Score"
                                  style="max-width: 220px"
                                />
                              </div>
                            </div>
                            <div class="col-xl-2 mb-3 mb-lg-0">
                              <div
                                class="
                                  file-type-display
                                  py-3
                                  px-3
                                  text-center
                                  w-100
                                "
                                style="max-width: 241px"
                              >
                                <div class="mb-2">
                                  <span
                                    class="iconify mr-2"
                                    data-icon="bi:file-image"
                                    style="font-size: 31px"
                                  ></span>
                                </div>
                                <div class="text-primary fs-10">
                                  Click to Upload Image
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="">
                            <div class="mb-2">
                              <label class="form-control-label">Options</label>
                              <div class="fs-12 font-weight-bold text-dark">
                                Highlight correct answer
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" checked />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-content-center
                                    justify-content-end
                                  "
                                >
                                  <div
                                    class="
                                      text-primary
                                      pointer
                                      d-flex
                                      align-content-center
                                    "
                                  >
                                    <div class="mr-1 line-height-0">
                                      <span
                                        class="iconify fs-18"
                                        data-icon="fluent:add-24-filled"
                                        style="font-size: 18px; color: #1070b7"
                                      ></span>
                                    </div>
                                    <strong class="fs-14">Add Option</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10">
                                <div class="mb-3">
                                  <label class="form-control-label"
                                    >Solution</label
                                  >
                                  <textarea
                                    class="form-control"
                                    placeholder="Add question solution"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="exc-section-question mb-2">
                        <div
                          class="
                            accordion-header
                            active
                            target-icon
                            creation-accordion-header
                            px-3
                            py-3
                          "
                        >
                          <div class="d-flex align-items-center">
                            <div class="mr-3 line-height-0">
                              <svg
                                class="toggle-icon"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0Z"
                                  fill="#D6DAEB"
                                />
                                <path
                                  d="M15 9.5L11 13.5L7 9.5"
                                  stroke="#484848"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div
                              class="
                                bg-grayish-variant-1
                                fs-14
                                text-dark
                                py-1
                                px-2
                                font-weight-bold
                                rounded
                                mr-2
                              "
                            >
                              2
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="line-height-0 mr-3">
                              <span
                                class="iconify text-danger pointer fs-18 ml-3"
                                data-icon="uil:trash-alt"
                              ></span>
                            </div>
                            <div class="pointer">
                              <svg
                                width="10"
                                height="21"
                                viewBox="0 0 10 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <ellipse
                                  cx="2"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="2"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="2.62173"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="10.4054"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                                <ellipse
                                  cx="8"
                                  cy="18.1894"
                                  rx="2"
                                  ry="1.94595"
                                  fill="#8B9EB0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-content px-2 show">
                          <div class="row mt-3">
                            <div class="col-lg-10 order-last order-xl-first">
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question</label
                                >
                                <textarea
                                  class="form-control form-control-sm"
                                  placeholder="Enter Question"
                                ></textarea>
                              </div>
                              <div class="mb-3">
                                <label class="form-control-label"
                                  >Question Score</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter Score"
                                  style="max-width: 220px"
                                />
                              </div>
                            </div>
                            <div class="col-xl-2 mb-3 mb-lg-0">
                              <div
                                class="
                                  file-type-display
                                  py-3
                                  px-3
                                  text-center
                                  w-100
                                "
                                style="max-width: 241px"
                              >
                                <div class="mb-2">
                                  <span
                                    class="iconify mr-2"
                                    data-icon="bi:file-image"
                                    style="font-size: 31px"
                                  ></span>
                                </div>
                                <div class="text-primary fs-10">
                                  Click to Upload Image
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="">
                            <div class="mb-2">
                              <label class="form-control-label">Options</label>
                              <div class="fs-12 font-weight-bold text-dark">
                                Highlight correct answer
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" checked />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-items-center
                                    form-control
                                    py-0
                                    h-auto
                                  "
                                >
                                  <div class="flex-grow-1 mr-2">
                                    <input
                                      type="text"
                                      placeholder="Option"
                                      class="
                                        form-control
                                        bg-white
                                        h-100
                                        px-0
                                        border-0
                                        py-2
                                        fs-14
                                      "
                                      style="box-shadow: none"
                                    />
                                  </div>
                                  <div>
                                    <label class="custom-checkbox">
                                      <input type="checkbox" />
                                      <span class="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="line-height-0 mr-3">
                                <span
                                  class="iconify text-danger pointer fs-18"
                                  data-icon="uil:trash-alt"
                                ></span>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10 col-11">
                                <div
                                  class="
                                    d-flex
                                    align-content-center
                                    justify-content-end
                                  "
                                >
                                  <div
                                    class="
                                      text-primary
                                      pointer
                                      d-flex
                                      align-content-center
                                    "
                                  >
                                    <div class="mr-1 line-height-0">
                                      <span
                                        class="iconify fs-18"
                                        data-icon="fluent:add-24-filled"
                                        style="font-size: 18px; color: #1070b7"
                                      ></span>
                                    </div>
                                    <strong class="fs-14">Add Option</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row align-items-center mb-2">
                              <div class="col-md-10">
                                <div class="mb-3">
                                  <label class="form-control-label"
                                    >Solution</label
                                  >
                                  <textarea
                                    class="form-control"
                                    placeholder="Add question solution"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Questions End Here  -->
                      <hr />
                      <div
                        class="d-flex align-content-center justify-content-end"
                      >
                        <div
                          class="
                            text-primary
                            pointer
                            d-flex
                            align-content-center
                          "
                        >
                          <div class="mr-1 line-height-0">
                            <span
                              class="iconify fs-18"
                              data-icon="fluent:add-24-filled"
                              style="font-size: 18px; color: #1070b7"
                            ></span>
                          </div>
                          <strong class="fs-14">Add Questions</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <hr />
                <div>
                  <div class="d-flex align-items-center justify-content-end">
                    <div
                      class="text-primary pointer d-flex align-content-center"
                    >
                      <strong class="fs-14">Import Previous Sections</strong>
                    </div>
                    <div
                      class="
                        text-primary
                        pointer
                        d-flex
                        align-content-center
                        ml-4
                      "
                    >
                      <div class="mr-1 line-height-0">
                        <span
                          class="iconify fs-18"
                          data-icon="fluent:add-24-filled"
                          style="font-size: 18px; color: #1070b7"
                        ></span>
                      </div>
                      <strong class="fs-14">Add Section</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 d-flex align-items-center justify-content-end">
              <div class="dropdown">
                <button
                  class="btn btn-primary py-2 px-3 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Save
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">Save as draft</a>
                  <a class="dropdown-item" href="#">Save and Publish</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- JQuery 3.5.1 and Bootstrap 4.6.0 -->
    <!-- <script
src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"
></script> -->
    <!-- <script
src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
crossorigin="anonymous"
></script> -->
    <!-- Iconify  -->
    <!-- <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script> -->

    <!-- Custom JS  -->
    <!-- <script src="../../assets/js/scripts.js"></script> -->

    <!-- Filter Container -->
    <div class="filters-container filter-wrapper d-none" id="filters-container">
      <div class="filter-closer" data-toggle-visibility="#filters-container">
        <span
          class="iconify"
          data-inline="false"
          data-icon="eva:close-outline"
        ></span>
      </div>

      <div class="filters-container-content">
        <div class="search-input mb-2">
          <span
            class="iconify icon"
            data-inline="false"
            data-icon="carbon:search"
          ></span>
          <input
            type="text"
            class="form-control w-100"
            placeholder="Search for class"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal custom-modal fade"
      id="mediaLibraryModal"
      tabindex="-1"
      aria-labelledby="mediaLibraryModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mediaLibraryModalLabel">
              Slate Media Library
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                class="iconify"
                data-inline="false"
                data-icon="uil:times"
              ></span>
            </button>
          </div>
          <div class="modal-body py-0">
            <div class="media-select-modal">
              <div class="row">
                <div class="col-8">
                  <div class="img-selection">
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                    <div class="img-item">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-4 media-details py-3 px-4">
                  <div class="title mb-3">IMAGE PREVIEW</div>

                  <div class="mb-2">
                    <img
                      class="media-preview"
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </div>
                  <div class="mb-4">
                    <div class="mb-1">
                      <span class="tag-label">Physics:</span>
                      <span class="tag-value">Energy Equation</span>
                    </div>
                    <div>
                      <span class="tag-label">Tags:</span>
                      <span class="tag-badge badge mr-1">Energy Equation</span
                      ><span class="tag-badge badge mr-1">Energy</span
                      ><span class="tag-badge badge mr-1">Matter</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <input class="form-control" placeholder="Alt Text" />
                  </div>

                  <div class="mb-4">
                    <div class="section-label mb-1">Select Background Fill</div>
                    <div class="color-selector">
                      <div
                        class="color-item border"
                        style="background: #ffffff"
                      ></div>
                      <div class="color-item" style="background: #750a0a"></div>
                      <div class="color-item" style="background: #f0df81"></div>
                      <div
                        class="color-item active"
                        style="background: #b2ce42"
                      ></div>
                      <div class="color-item" style="background: #6bcf87"></div>
                      <div class="color-item" style="background: #21cad5"></div>
                      <div class="color-item" style="background: #498bd8"></div>
                      <div class="color-item" style="background: #da54d5"></div>
                      <div class="color-item" style="background: #d46542"></div>
                      <div class="color-item" style="background: #e77373"></div>
                      <div class="color-item" style="background: #eaa24e"></div>
                      <div class="color-item" style="background: #0f5252"></div>
                      <div class="color-item" style="background: #596d07"></div>
                      <div class="color-item" style="background: #2b195c"></div>
                      <div class="color-item" style="background: #9d79e6"></div>
                      <div class="color-item" style="background: #832f85"></div>
                      <div class="color-item" style="background: #363636"></div>
                      <div class="color-item" style="background: #87959a"></div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="section-label mb-1">Select Font Colour</div>
                    <div class="color-selector">
                      <div
                        class="color-item border"
                        style="background: #ffffff"
                      ></div>
                      <div class="color-item" style="background: #750a0a"></div>
                      <div class="color-item" style="background: #f0df81"></div>
                      <div
                        class="color-item active"
                        style="background: #b2ce42"
                      ></div>
                      <div class="color-item" style="background: #6bcf87"></div>
                      <div class="color-item" style="background: #21cad5"></div>
                      <div class="color-item" style="background: #498bd8"></div>
                      <div class="color-item" style="background: #da54d5"></div>
                      <div class="color-item" style="background: #d46542"></div>
                      <div class="color-item" style="background: #e77373"></div>
                      <div class="color-item" style="background: #eaa24e"></div>
                      <div class="color-item" style="background: #0f5252"></div>
                      <div class="color-item" style="background: #596d07"></div>
                      <div class="color-item" style="background: #2b195c"></div>
                      <div class="color-item" style="background: #9d79e6"></div>
                      <div class="color-item" style="background: #832f85"></div>
                      <div class="color-item" style="background: #363636"></div>
                      <div class="color-item" style="background: #87959a"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Set Featured Image
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schemeOfWork: { title: '', objective: '' },
      addedScheme: [],
      showSchemeOfWork: false,
      addedSection: false,
      addSchemeType: true,
    }
  },
  props: {
    courseDetail: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    addScheme() {},
    deleteCurrent(index) {},
    handleAdd() {
      this.showSchemeOfWork = false
      this.addedSection = true
      console.log('added')
    },
    deletescheme() {
      this.schemeOfWork.title = ''
      this.schemeOfWork.objective = ''
      this.showSchemeOfWork = false
    },
  },
}
</script>