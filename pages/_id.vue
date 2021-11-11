<template>
  <main class="pt-16">
    <p v-if="error">Failed to fetch page</p>
    <p v-else-if="data === null">Loading</p>
    <div v-else>
      <div v-for="(propertie, i) in properties" :key="i">
        <!-- {{ data[propertie] }} -->
        <Files
          v-if="data[propertie].type === 'files'"
          :block="data[propertie]"
          :name="propertie"
        />
        <Link
          v-if="['email', 'url', 'phone_number'].includes(data[propertie].type)"
          :block="data[propertie]"
          :name="propertie"
        />
        <Txt
          v-if="data[propertie].type === 'rich_text'"
          :block="data[propertie]"
          :name="propertie"
        />
        <Time
          v-if="
            ['date', 'created_time', 'last_edited_time'].includes(
              data[propertie].type
            )
          "
          :block="data[propertie]"
          :name="propertie"
        />
        <Formula
          v-if="data[propertie].type === 'formula'"
          :block="data[propertie]"
          :name="propertie"
        />
        <Select
          v-if="['select', 'multi_select'].includes(data[propertie].type)"
          :block="data[propertie]"
          :name="propertie"
        />
      </div>
      <pre>{{ data }}</pre>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      error: false,
    }
  },
  async created() {
    try {
      const data = await this.$store.dispatch('pages/getPage', {
        pageId: this.$route.params.id,
      })
      this.data = data.post.properties
    } catch (err) {
      console.log(err)
      this.error = true
    }
  },
  computed: {
    properties() {
      return this.data !== null ? Object.keys(this.data) : []
    },
  },
}
</script>
