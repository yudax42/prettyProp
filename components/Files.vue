<template>
  <div class="w-full grid grid-cols-2">
    <div>
      {{ name }}
    </div>
    <ul>
      <li v-for="el in block.files" class="inline-block" :key="el.name">
        <!-- {{ el }} -->
        <img
          v-if="el.type == 'file'"
          :src="el.file.url"
          width="100"
          height="100"
        />
        <img
          v-if="el.type == 'external'"
          :src="el.external.url"
          width="100"
          height="100"
        />
      </li>
    </ul>
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
}
</script>
