<template>
  <div>
    <Navbar />
    <div class="content">
      <div class="is-hidden-mobile">
        <Sidebar />
      </div>
      <div class="pane-wrapper">
        <PostsPane />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';

export default Vue.extend({
  name: 'Main',
  components: { Navbar },
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
