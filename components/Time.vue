<template>
  <div class="w-full grid grid-cols-2">
    <div>
      {{ name }}
    </div>
    <div>
      {{ date }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
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
    date() {
      switch (this.block.type) {
        case 'date':
          return `${this.formatDate(this.block.date.start)} ${
            this.block.date.end !== null
              ? ' -> ' + this.formatDate(this.block.date.end)
              : ''
          }`
        case 'created_time':
          return `${this.formatDate(this.block.created_time)}`
        case 'last_edited_time':
          return `${this.formatDate(this.block.last_edited_time)}`
      }
    },
  },
}
</script>
