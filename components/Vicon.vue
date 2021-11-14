<template>
  <div>
    <!-- <p>{{ icon }}</p> -->
    <Files v-if="icon == 'files'" />
    <CheckBox v-else-if="icon == 'checkbox'" />
    <CreatedBy
      v-else-if="
        ['last_edited_time', 'created_by', 'last_edited_by'].includes(icon)
      "
    />
    <Date v-else-if="icon == 'date'" />
    <Email v-else-if="icon == 'email'" />
    <Formula v-else-if="icon == 'formula'" />
    <Clock v-else-if="icon == 'created_time'" />
    <MultiSelect v-else-if="icon == 'multi_select'" />
    <Number v-else-if="icon == 'number'" />
    <People v-else-if="icon == 'people'" />
    <PhoneNumber v-else-if="icon == 'phone_number'" />
    <Relation v-else-if="icon == 'relation'" />
    <RichText v-else-if="icon == 'rich_text'" />
    <Select v-else-if="icon == 'select'" />
    <Url v-else-if="icon == 'url'" />
    <Page v-else-if="icon == 'title'" />
  </div>

  <!-- <component v-bind:is="icon"></component> -->
</template>
<script>
import Files from '@/assets/icons/Files.vue'
import CheckBox from '@/assets/icons/CheckBox.vue'
import CreatedBy from '@/assets/icons/CreatedBy.vue'
import Date from '@/assets/icons/Date.vue'
import Email from '@/assets/icons/Email.vue'
import Formula from '@/assets/icons/Formula.vue'
import MultiSelect from '@/assets/icons/MultiSelect.vue'
import Number from '@/assets/icons/Number.vue'
import People from '~/assets/icons/People.vue'
import PhoneNumber from '@/assets/icons/PhoneNumber.vue'
import Relation from '@/assets/icons/Relation.vue'
import RichText from '@/assets/icons/RichText.vue'
import Select from '@/assets/icons/Select.vue'
import Url from '@/assets/icons/Url.vue'
import Clock from '@/assets/icons/Clock.vue'
import Page from '@/assets/icons/Page.vue'
export default {
  props: {
    icon: String,
  },
  components: {
    Page,
    Files,
    CheckBox,
    CreatedBy,
    Date,
    Email,
    Formula,
    MultiSelect,
    Number,
    People,
    PhoneNumber,
    Relation,
    RichText,
    Select,
    Url,
    Clock,
  },
}
</script>
