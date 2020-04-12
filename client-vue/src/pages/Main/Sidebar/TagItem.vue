<template>
  <div class="wrapper" :class="{ active: isActive }" @click="onClick(tag)">
    <span class="active-icon">#</span>
    {{ tag.name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    isActive: Boolean,
    onClick: Function,
    tag: Object,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: 'iosevka';
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
    font-style: italic;

    .active-icon {
      opacity: 1;
    }
  }
}

.active-icon {
  opacity: 0;
}
</style>
