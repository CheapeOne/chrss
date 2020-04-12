<template>
  <div>
    <a class="button is-primary" :class="isAllFeeds">All Feeds</a>
    <TagItem
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      :isActive="tag.id === activeTagId"
      :onClick="onTagClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { Tag } from '@/types/api';
import TagItem from './TagItem.vue';

export default Vue.extend({
  name: 'Sidebar',
  components: { TagItem },

  props: {
    tags: Array,
  },

  data() {
    return {
      isAllFeeds: true,
    };
  },

  computed: {
    activeTagId: () => store.state.tags.active?.id,
  },

  methods: {
    onTagClick(tag: Tag) {
      store.commit.tags.setActiveTag(tag);
    },
  },
});
</script>

<style scoped></style>
