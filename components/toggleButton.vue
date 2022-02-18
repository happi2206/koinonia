<template>
  <div>
    <label class="switch">
      <input type="checkbox" :checked="value" @change="onChange" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.checked)
    },
  },
}
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
} /* Hide default HTML
checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
} /* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e1002a;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 5px;
  bottom: 4px;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #68c989;
}
input:focus + .slider {
  box-shadow: 0 0 1px #68c989;
}
input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(22px);
  transform: translateX(20px);
} /* Rounded sliders */
.slider.round {
  border-radius: 30px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
