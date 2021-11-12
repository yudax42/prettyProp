<template>
  <div>
    {{ checkBox }}
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

  computed: {
    checkBox() {
      return this.block.checkbox === true ? '☐' : '✅'
    },
  },
}
</script>
