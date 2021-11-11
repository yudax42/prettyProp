<template>
  <div class="w-full grid grid-cols-2">
    <div>
      {{ name }}
    </div>
    <div>
      {{ checkBox }}
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

  computed: {
    checkBox() {
      return this.block.checkbox === true ? '☐' : '✅'
    },
  },
}
</script>
