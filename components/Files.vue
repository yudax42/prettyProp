<template>
  <ul>
    <li
      v-for="el in block.files"
      class="inline-block w-32 h-32 mr-1 bg-gray-100 rounded-lg overflow-hidden"
      :key="el.name"
    >
      <img
        v-if="el.type == 'file' && isImage(el.name)"
        class="w-full h-full object-cover"
        :src="el.file.url"
        width="100"
        height="100"
      />
      <div
        class="flex w-full h-full text-center text-sm items-center"
        v-else-if="el.type == 'file' && !isImage(el.name)"
      >
        <a class="block mx-auto" :href="el.file.url">{{ el.name }}</a>
      </div>
      <img
        v-if="el.type == 'external'"
        :src="el.external.url"
        class="w-full h-full object-cover"
        width="100"
        height="100"
      />
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
