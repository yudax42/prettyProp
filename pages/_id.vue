<template>
  <main class="pt-16 w-full container mb-24 px-5 mx-auto">
    <Header :icon="icon" :cover="cover" />
    <p v-if="error">Failed to fetch page</p>
    <p v-else-if="data === null">Loading</p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10"
      v-else
    >
      <div
        v-for="(propertie, i) in properties"
        class="bg-white border border-gray-200 mb-7 p-3 rounded-xl"
        :key="i"
      >
        <div class="text-xs mb-5 flex items-center text-gray-800">
          <Vicon
            class="w-4 h-4 mr-1 inline-block"
            :icon="data[propertie].type"
          />
          <span class="inline-block">{{ propertie.toUpperCase() }}</span>
        </div>
        <div>
          <Files
            v-if="data[propertie].type === 'files'"
            :block="data[propertie]"
          />
          <Link
            v-if="
              ['email', 'url', 'phone_number'].includes(data[propertie].type)
            "
            :block="data[propertie]"
          />
          <Txt
            v-if="
              data[propertie].type === 'rich_text' ||
              data[propertie].type === 'title'
            "
            :block="data[propertie]"
            :type="data[propertie].type"
          />
          <Time
            v-if="
              ['date', 'created_time', 'last_edited_time'].includes(
                data[propertie].type
              )
            "
            :block="data[propertie]"
          />
          <Formula
            v-if="data[propertie].type === 'formula'"
            :block="data[propertie]"
          />
          <Select
            v-if="['select', 'multi_select'].includes(data[propertie].type)"
            :block="data[propertie]"
          />
          <CheckBox
            v-if="data[propertie].type === 'checkbox'"
            :block="data[propertie]"
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
          />
          <Number
            v-if="data[propertie].type === 'number'"
            :block="data[propertie]"
          />
        </div>
      </div>
      <!-- <pre>{{ cover }} {{ icon }}</pre> -->
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
