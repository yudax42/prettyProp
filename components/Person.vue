<template>
  <div class="w-full grid grid-cols-2">
    <div>
      {{ name }}
    </div>
    <div>
      <ul>
        <li v-for="person in people" class="inline-block mr-1" :key="person.id">
          <img
            :src="person.avatar"
            class="w-6 h-6 rounded-full mr-1 inline-block"
            :alt="person.name"
          />
          <span class="inline-block">{{ person.name }}</span>
        </li>
      </ul>
    </div>
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
  computed: {
    people() {
      switch (this.block.type) {
        case 'created_by':
          return [
            {
              avatar: this.block.created_by.avatar_url,
              name: this.block.created_by.name,
              person: this.block.created_by.person,
              id: this.block.created_by.id,
            },
          ]
        case 'last_edited_by':
          return [
            {
              avatar: this.block.last_edited_by.avatar_url,
              name: this.block.last_edited_by.name,
              person: this.block.last_edited_by.person,
              id: this.block.last_edited_by.id,
            },
          ]
        case 'people':
          return this.block.people.map((person) => {
            return {
              avatar: person.avatar_url,
              name: person.name,
              person: person.person,
              id: person.id,
            }
          })
      }
    },
  },
}
</script>
