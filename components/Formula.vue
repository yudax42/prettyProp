<template>
  <div>
    {{ formula }}
  </div>
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
    formatDate(value) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date = new Date(value)
      return `${
        monthNames[date.getMonth()]
      }, ${date.getDay()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    },
  },
  computed: {
    formula() {
      switch (this.block.formula.type) {
        case 'number':
          return this.block.formula.number
        case 'string':
          return this.block.formula.string
        case 'date':
          return `${this.formatDate(this.block.date.start)} ${
            this.block.date.end !== null
              ? ' -> ' + this.formatDate(this.block.date.end)
              : ''
          }`
        case 'boolean':
          return this.block.formula.boolean === true ? '☐' : '✅'
      }
    },
  },
}
</script>
