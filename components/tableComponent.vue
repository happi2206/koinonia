<template>
  <div class="table-responsive">
    <b-table
      ref="scrollingtable"
      :items="items"
      :fields="fields"
      stacked="md"
      :filter="filter"
      hover
      striped
      responsive
      show-empty
      sort-icon-left
      :busy="busy"
      class="custom-table"
      :table-class="tableClass"
      @row-clicked="$emit('row-clicked', $event)"
    >
      <template #table-busy>
        <div class="p-4">
          <b-skeleton-table
            :rows="4"
            :columns="4"
            :table-props="{ bordered: true, striped: true }"
          ></b-skeleton-table>
        </div>
      </template>

      <template #cell(link_code)="data">
        <span class="border p-2" style="border-radius: 5px">
          <span v-if="data.value">
            {{ data.value }}
          </span>

          <span v-else> Connected </span>
        </span>
      </template>

      <template #cell(color)="data">
        <slot name="color" :data="data">
          <div
            class="rounded-circle"
            style="height: 25px; width: 25px"
            :style="{ backgroundColor: data.value }"
          ></div>
        </slot>
      </template>

      <template #cell(name)="data">
        <slot name="name" :data="data">
          {{ data.value }}
        </slot>
        <!-- <div class="text-center">
          <span class="badge red-badge">{{ data.value }}</span>
        </div> -->
      </template>

      <template #cell()="data">
        <span class="text-capitalize"> {{ data.value }}</span>
      </template>
      <template #cell(check)="data">
        <input type="checkbox" :value="data.value" />
      </template>

      <template #cell(house)="data">
        <slot name="house" :data="data">{{ data.value }}</slot>
        <!-- <span class="text-capitalize"> {{ data.value }}</span> -->
      </template>

      <template #cell(state)="data">
        <slot name="state" :data="data">{{ data.value }}</slot>
      </template>

      <template #cell(submissions)="data">
        <slot name="submissions" :data="data">{{ data.value }}</slot>
      </template>

      <template #cell(status)="data">
        <slot name="status" :data="data">{{ data.value }}</slot>
      </template>
      <template #cell(avatar)="data">
        <slot name="avatar" :data="data">{{ data.value }}</slot>
      </template>
      <template #cell(start_date)="data">
        <slot name="start_date" :data="data">
          <span>{{ data.item.start_date | DateTimeFormat }}</span></slot
        >
      </template>

      <template #cell(check_in)="data">
        <span>{{ data.item.check_in | DateTimeFormat }}</span>
      </template>
      <template #cell(end_date)="data">
        <slot name="end_date" :data="data"
          ><span>{{ data.item.end_date | DateTimeFormat }}</span></slot
        >
      </template>
      <template #cell(Progress)="data">
        <slot name="Progress" :data="data"></slot>
        <!-- <b-progress class="mt-2" :max="10">
          <b-progress-bar
            :value="data.item.progress"
            variant="success"
          ></b-progress-bar>
          <b-progress-bar
            :value="10 - data.item.progress"
            variant="danger"
          ></b-progress-bar>
        </b-progress> -->
      </template>
      <!-- <template #cell(no_of_students)="data">
        <slot name="no_of_students" :data="data"></slot>
     
      </template> -->
      <template #cell(actions)="row">
        <div class="text-left w-auto">
          <button
            v-if="!disableEditAction"
            class="btn"
            @click="$emit('edit', row.item)"
          >
            <span class="iconify" data-icon="ant-design:edit-twotone"></span>
          </button>
          <button
            v-if="!disableDeleteAction"
            class="btn"
            @click="$emit('delete', row.item)"
          >
            <span class="iconify text-danger" data-icon="mi:delete"></span>
          </button>
        </div>

        <!-- <button class="btn">
          <span class="iconify text-danger" data-icon="mi:delete"></span>
        </button> -->

        <!-- <b-button size="sm" class="mr-1"> Info modal </b-button> -->
        <!-- <b-button size="sm"> extra_icons </b-button> -->
      </template>
      <template #cell(dots)="row">
        <b-dropdown
          variant="link"
          toggle-class="text-decoration-none text-center"
          no-caret
        >
          <slot name="delete">
            <span
              class="iconify"
              data-icon="gridicons:trash"
              data-width="16"
              data-height="16"
            ></span>
          </slot>
          <template class="p-0 mx-auto text-center" #button-content>
            <b-icon icon="three-dots-vertical" class="text-dark"></b-icon>
          </template>
          <template v-if="dropdownItem.length > 0">
            <b-dropdown-item
              v-for="(dropdown, index) in dropdownItem"
              right
              :key="index"
              class="text-capitalize"
              @click="$emit(dropdown, row.item)"
              >{{ dropdown.split('_').join(' ') }}</b-dropdown-item
            >
          </template>
        </b-dropdown>
      </template>
    </b-table>
    <b-pagination
      v-if="paginate"
      v-model="currentPage"
      :total-rows="totalItems"
      :per-page="perPage"
      align="right"
      size="sm"
      class="my-0"
      @change="$emit('page-changed', $event)"
    ></b-pagination>
    <!-- <div v-observe-visibility="fetchMore"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      default: () => [],
      required: false,
    },
    perPage: {
      default: 12,
    },
    /**
     * @description
     * The number of pages coming from the server(API)
     */
    pages: {
      type: Number,
      default: 0,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    /**
     * @description
     * If true, pagination will be displayed
     */
    paginate: {
      type: Boolean,
      default: true,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    filter: {
      type: String,
      required: false,
      default: '',
    },

    // this is for the three dots dropdown
    dropdownItem: {
      type: Array,
      default: () => [],
    },
    tableClass: {
      type: String,
      default: 'custom-table pointer',
    },
    disableEditAction: {
      type: Boolean,
      default: false,
    },
    disableDeleteAction: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1,
      totalRows: 0,
    }
  },
  computed: {
    sortable_cols() {
      return this.fields.map((f) => {
        const notSortColumn = ['actions']
        // eslint-disable-next-line prefer-const
        let tmp = f
        if (notSortColumn.includes(tmp.key)) {
          return tmp
        }
        tmp.sortable = true
        return tmp
      })
    },
  },
  watch: {
    pages() {
      // This is a hack to help to get the total rows in the DB
      // Then passes it to bootstrap to do his work
      this.totalRows = this.perPage * this.pages
    },
  },
  mounted() {
    this.totalRows = this.perPage * this.pages
    const tableScrollBody = this.$refs.scrollingtable.$el

    console.log(tableScrollBody)

    tableScrollBody.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.$emit('handle-scroll', e)
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
        console.log('hey')
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>

<style scoped></style>
