<template>
  <div>
    <navbar />
    <div class="content">
      <sidebar :tags="tags" class="sidebar is-hidden-mobile" />
      <posts-pane class="posts-pane" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import tags from '@/mocks/tags';
import Navbar from './Navbar.vue';
import PostsPane from './panes/PostsPane/index.vue';
import Sidebar from './Sidebar/index.vue';

export default Vue.extend({
  components: { Navbar, Sidebar, PostsPane },
  data() {
    return {
      tags: tags,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1rem;
}

.sidebar {
  width: 200px;
}

.posts-pane {
  flex-grow: 1;
}
</style>
