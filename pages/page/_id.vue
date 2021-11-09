<template>
  <main class="pt-16">
    <p v-if="error">Failed to fetch page</p>
    <p v-else-if="posts === null">Loading</p>
    <pre v-else>{{ posts }}</pre>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      error: false,
    }
  },
  async created() {
    try {
      const posts = await this.$store.dispatch('pages/getPage', {
        pageId: this.$route.params.id,
      })
      this.posts = posts
    } catch (err) {
      console.log(err)
      this.error = true
    }
  },
}
</script>
