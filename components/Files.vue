<template>
  <div class="w-full grid grid-cols-2">
    <div>
      {{ name }}
    </div>
    <ul>
      <li v-for="el in block.files" class="inline-block" :key="el.name">
        <!-- {{ el }} -->
        <img
          v-if="el.type == 'file' && isImage(el.name)"
          :src="el.file.url"
          width="100"
          height="100"
        />
        <div v-else-if="el.type == 'file' && !isImage(el.name)">
          <a :href="el.file.url">{{ el.name }}</a>
        </div>
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
  methods: {
    isImage(file) {
      const split = file.split('.')
      console.log(split)
      return ['png', 'jpeg', 'jpg', 'gif', 'webp'].includes(
        split[split.length - 1]
      )
    },
  },
}
</script>
