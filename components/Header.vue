<template>
  <div class="w-full h-64 relative rounded-xl overflow-hidden shadow-xl">
    <img
      v-if="cover"
      class="w-full h-full object-cover"
      :src="coverImg"
      alt=""
    />
    <div
      v-if="icon"
      class="
        rounded-full
        w-24
        h-24
        absolute
        top-10
        bg-white
        backdrop-filter backdrop-blur-sm
        bg-opacity-30
        shadow-xl
        text-center
        p-2
        left-5
      "
    >
      <span v-if="icon.type == 'emoji'" class="text-5xl">{{ icon.emoji }}</span>
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
