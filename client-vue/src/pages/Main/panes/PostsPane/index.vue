<template>
  <div>
    <post-item v-for="post in posts" :key="post.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PostItem from './PostItem.vue';
import Posts from './posts.gql';

export default Vue.extend({
  components: { PostItem },

  apollo: {
    posts: {
      query: Posts,
    },
  },
});
</script>
