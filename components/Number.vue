<template>
  <div>
    {{ block.number }}
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
}
</script>
