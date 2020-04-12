<template>
  <div>
    <Navbar />
    <div class="content">
      <div class="is-hidden-mobile">
        <Sidebar :tags="tags" />
      </div>
      <div class="pane-wrapper">
        <PostsPane />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import tags from '@/mocks/tags';
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar/index.vue';

export default Vue.extend({
  name: 'Main',
  components: { Navbar, Sidebar },
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
  margin-top: 2rem;
}

.pane-wrapper {
  width: 100%;
  max-width: 45rem;
}
</style>
