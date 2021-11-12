<template>
  <ul>
    <li
      class="select"
      v-for="(option, i) in options"
      :key="i"
      :style="{ 'background-color': option.color }"
    >
      {{ option.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    block: {
      required: true,
      type: Object,
    },
  },
  methods: {
    getColor(name) {
      const colors = {
        default: '#e6e6e4',
        gray: '#d7d6d5',
        brown: '#e8d5cc',
        orange: '#fcdecc',
        yellow: '#fbeecc',
        green: '#cce7e1',
        blue: '#cce4f9',
        purple: '#e0d3f9',
        pink: '#f6cce6',
        red: '#f7cbd1',
      }
      return colors[name]
    },
  },
  computed: {
    options() {
      switch (this.block.type) {
        case 'select':
          return [
            {
              name: this.block.select.name,
              color: this.getColor(this.block.select.color),
            },
          ]
        case 'multi_select':
          return this.block.multi_select.map((option) => {
            return {
              name: option.name,
              color: this.getColor(option.color),
            }
          })
      }
    },
  },
}
</script>

<style>
.select {
  @apply px-1.5 py-0.5 rounded-full inline-block font-light mr-1 mb-3 text-sm;
  color: #37352f;
}
</style>
