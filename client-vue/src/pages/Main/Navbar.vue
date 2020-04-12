<template>
  <div class="nav">
    <a>
      <h1 class="title header">chrss</h1>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({ name: 'Navbar' });
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 2rem;
  background: var(--primary);
  display: flex;
  justify-content: center;
}

.header {
  color: white;
  font-family: 'iosevka';
  font-style: italic;
  font-weight: bold;
}
</style>
