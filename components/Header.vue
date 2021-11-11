<template>
  <div class="w-full h-64 relative">
    <img
      v-if="cover"
      class="w-full h-full object-cover"
      :src="coverImg"
      alt=""
    />
    <div v-if="icon" class="rounded-full w-24 h-24 absolute bottom-0 left-0">
      <span v-if="icon.type == 'emoji'">{{ icon.emoji }}</span>
      <img v-else :src="iconImg" class="w-full h-full" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: {
      required: true,
    },
    icon: {
      require: true,
    },
  },
  computed: {
    coverImg() {
      return this.cover.type == 'file'
        ? this.cover.file.url
        : this.cover.external.url
    },
    iconImg() {
      return this.icon.type == 'file'
        ? this.icon.file.url
        : this.icon.external.url
    },
  },
}
</script>
