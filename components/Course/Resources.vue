<template>
  <div>
    <div>
      <div>
        <div class="bg-white p-3">
          <div class="row">
            <div
              class="
                col-4 col-lg-3 col-xl-2
                d-flex
                flex-column
                justify-content-between
              "
            >
              <div>
                <span class="text-secondary"> Resource Upload</span>
                <div
                  class="
                    blue-dashed
                    rounded
                    text-center
                    p-1
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div class="d-flex mt-2 flex-column">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                        class="text-primary iconify iconify--ant-design"
                        style="font-size: 1.5rem"
                      >
                        <path
                          fill="currentColor"
                          d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"
                        ></path>
                      </svg>
                    </div>
                    <div class="text-primary" style="overflow-wrap: break-word">
                      Click to upload
                    </div>
                  </div>
                </div>
                <!---->
                <div class="mt-2">
                  <div class="v-popper v-popper--theme-tooltip">
                    <div
                      class="
                        info-icon
                        d-flex
                        align-items-center
                        border-0
                        bg-transparent
                        text-dark
                      "
                    >
                      <span class="mr-1" style="font-size: 0.85rem">
                        Formats
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        focusable="false"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        data-v-3fc91724=""
                        data-inline="false"
                        data-icon="foundation:info"
                        class="iconify"
                        style="transform: rotate(360deg)"
                      >
                        <path
                          fill="currentColor"
                          d="M50 12.5c-20.712 0-37.5 16.793-37.5 37.502C12.5 70.712 29.288 87.5 50 87.5s37.5-16.788 37.5-37.498C87.5 29.293 70.712 12.5 50 12.5zm3.826 58.36c0 .72-.584 1.304-1.304 1.304h-5.044c-.72 0-1.304-.583-1.304-1.304V46.642c0-.72.584-1.304 1.304-1.304h5.044c.72 0 1.304.583 1.304 1.304V70.86zm-3.857-30.927c-2.47 0-4.518-2.048-4.518-4.579a4.512 4.512 0 0 1 4.518-4.518c2.531 0 4.579 1.987 4.579 4.518a4.576 4.576 0 0 1-4.579 4.579z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <div
                  class="p-1 text-primary rounded"
                  style="
                    height: 12rem;
                    max-width: 9rem;
                    transition: transform 0.3s ease-out 0s;
                    border-style: dotted;
                    border-color: rgb(128, 180, 217);
                    background-image: url('');
                    background-repeat: no-repeat, repeat;
                    background-size: 10rem 12rem;
                    background-position: 50% 10%;
                  "
                >
                  <div
                    class="
                      mt-5
                      d-flex
                      flex-column
                      align-items-center
                      justify-content-center
                    "
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        class="iconify iconify--akar-icons"
                        style="font-size: 1.5rem"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path
                            d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"
                          ></path>
                          <circle cx="8.5" cy="8.5" r="2.5"></circle>
                          <path
                            d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <br />
                    <div
                      class="m-0 text-center"
                      style="overflow-wrap: break-word"
                    >
                      Upload Thumbnail
                    </div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <div class="col-8 col-lg-9 col-xl-10">
              <div class="form-group">
                <span
                  ><label class="form-control-label"></label>
                  <label for="title">Resource Title</label>
                  <br />
                  <input
                    id="title"
                    type="text"
                    placeholder="Enter Title"
                    class="w-100 form-control"
                  />
                  <span class="text-danger form-control-label font-weight-light"
                    >This field is required</span
                  ></span
                >
              </div>
              <div class="mt-2 form-group">
                <label for="title">Authors</label>
                <br />
                <div
                  dir="auto"
                  class="v-select style-chooser1 vs--multiple vs--searchable"
                >
                  <div
                    id="vs4__combobox"
                    role="combobox"
                    aria-expanded="false"
                    aria-owns="vs4__listbox"
                    aria-label="Search for option"
                    class="vs__dropdown-toggle"
                  >
                    <div class="vs__selected-options">
                      <input
                        placeholder="Adamu Muhammad, Ada JohnSon"
                        aria-autocomplete="list"
                        aria-labelledby="vs4__combobox"
                        aria-controls="vs4__listbox"
                        type="search"
                        autocomplete="off"
                        class="vs__search"
                      />
                    </div>
                    <div class="vs__actions">
                      <button
                        type="button"
                        title="Clear Selected"
                        aria-label="Clear Selected"
                        class="vs__clear"
                        style="display: none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                          ></path>
                        </svg>
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        role="presentation"
                        class="vs__open-indicator"
                      >
                        <path
                          d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                        ></path>
                      </svg>
                      <div class="vs__spinner" style="display: none">
                        Loading...
                      </div>
                    </div>
                  </div>
                  <ul
                    id="vs4__listbox"
                    role="listbox"
                    style="display: none; visibility: hidden"
                  ></ul>
                </div>
              </div>
              <div class="mt-2 form-group">
                <label for="description">Description</label>
                <br />
                <textarea
                  id="description"
                  rows="4"
                  cols="50"
                  type="text"
                  placeholder="Enter Description"
                  class="w-100 form-control"
                ></textarea>
              </div>
              <div class="row mt-2">
                <div class="col form-group">
                  <label for="publishers">Publishers</label>
                  <br />
                  <div
                    dir="auto"
                    class="v-select style-chooser1 vs--multiple vs--searchable"
                  >
                    <div
                      id="vs5__combobox"
                      role="combobox"
                      aria-expanded="false"
                      aria-owns="vs5__listbox"
                      aria-label="Search for option"
                      class="vs__dropdown-toggle"
                    >
                      <div class="vs__selected-options">
                        <input
                          placeholder="Type in Publishers"
                          aria-autocomplete="list"
                          aria-labelledby="vs5__combobox"
                          aria-controls="vs5__listbox"
                          type="search"
                          autocomplete="off"
                          class="vs__search"
                        />
                      </div>
                      <div class="vs__actions">
                        <button
                          type="button"
                          title="Clear Selected"
                          aria-label="Clear Selected"
                          class="vs__clear"
                          style="display: none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                          >
                            <path
                              d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                            ></path>
                          </svg>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          role="presentation"
                          class="vs__open-indicator"
                        >
                          <path
                            d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                          ></path>
                        </svg>
                        <div class="vs__spinner" style="display: none">
                          Loading...
                        </div>
                      </div>
                    </div>
                    <ul
                      id="vs5__listbox"
                      role="listbox"
                      style="display: none; visibility: hidden"
                    ></ul>
                  </div>
                </div>
                <div class="col form-group">
                  <label for="date">Publishing Date</label>
                  <br />
                  <v-date-picker
                    v-model="available_date"
                    :model-config="modelConfig"
                    mode="date"
                  >
                    <template #default="{ togglePopover }">
                      <span @click="togglePopover()">
                        <input
                          v-model="available_date"
                          class="form-control form-control-md"
                          style="background: #fbfdfe"
                          placeholder="Publishing Date"
                        />
                      </span>
                    </template>
                  </v-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-3">
      <div class="text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          class="iconify iconify--akar-icons"
          style="font-size: 1.5rem"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          ></path>
        </svg>
        <span> Add another Material </span>
      </div>
      <button class="btn btn-primary">
        <!---->
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.p-3 {
  padding: 1rem !important;
}
.bg-white {
  background-color: #fff !important;
}
</style>