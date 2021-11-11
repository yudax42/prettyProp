<template>
  <main class="pt-16">
    <Header :icon="icon" :cover="cover" />
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
        <CheckBox
          v-if="data[propertie].type === 'checkbox'"
          :block="data[propertie]"
          :name="propertie"
        />
        <Relation
          v-if="data[propertie].type === 'relation'"
          :block="data[propertie]"
          :name="propertie"
        />
        <Person
          v-if="
            ['created_by', 'last_edited_by', 'people'].includes(
              data[propertie].type
            )
          "
          :block="data[propertie]"
          :name="propertie"
        />
        <Number
          v-if="data[propertie].type === 'number'"
          :block="data[propertie]"
          :name="propertie"
        />
      </div>
      <pre>{{ cover }} {{ icon }}</pre>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      icon: null,
      cover: null,
      data: null,
      error: false,
    }
  },
  async created() {
    try {
      const data = await this.$store.dispatch('pages/getPage', {
        pageId: this.$route.params.id,
      })
      this.icon = data.post.icon
      this.cover = data.post.cover
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
