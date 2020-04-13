<template>
  <section class="sidebar">
    <div class="top-bar">
      <settings-button />
      <div
        class="button is-primary"
        :class="{ 'is-light': !isAllFeeds }"
        @click="selectAll"
      >
        All Feeds
      </div>
      <add-feed-button />
    </div>
    <div class="tag-list">
      <tag-item
        v-for="tag in tags"
        :key="tag.id"
        :tag="tag"
        :selected="tag.id === selectedTagId"
        :onClick="onTagClick"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { Tag } from '@/types/api';
import AddFeedButton from './AddFeedButton.vue';
import SettingsButton from './SettingsButton.vue';
import TagItem from './TagItem.vue';

export default Vue.extend({
  components: { TagItem, AddFeedButton, SettingsButton },

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

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0rem;
}

.tag-list {
}
</style>
