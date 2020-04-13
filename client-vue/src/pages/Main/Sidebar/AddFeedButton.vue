<template>
  <div class="wrapper">
    <plus-icon size="1.5x" class="custom-class"></plus-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PlusIcon } from 'vue-feather-icons';

export default Vue.extend({
  components: { PlusIcon },
});
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
