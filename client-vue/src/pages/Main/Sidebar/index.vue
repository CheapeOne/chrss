<template>
  <div>
    <div
      class="button is-primary"
      :class="{ 'is-light': !isAllFeeds }"
      @click="selectAll"
    >
      All Feeds
    </div>
    <tag-item
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      :selected="tag.id === selectedTagId"
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
  components: { TagItem },

  props: {
    tags: Array,
  },

  computed: {
    selectedTagId: () => store.state.feeds.selectedTag?.id,
    isAllFeeds: () => store.state.feeds.selectedTag === null,
  },

  methods: {
    onTagClick(tag: Tag) {
      store.commit.feeds.selectTag(tag);
    },

    selectAll() {
      store.commit.feeds.selectAll();
    },
  },
});
</script>

<style scoped></style>
