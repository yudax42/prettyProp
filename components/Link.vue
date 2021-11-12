<template>
  <div>
    <a :href="link.url">{{ link.name }}</a>
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
    link() {
      switch (this.block.type) {
        case 'email':
          return { name: this.block.email, url: `mailto: ${this.block.email}` }
        case 'url':
          return { name: this.block.url, url: this.block.url }
        case 'phone_number':
          return {
            name: this.block.phone_number,
            url: `tel:${this.block.phone_number}`,
          }
      }
    },
  },
}
</script>
