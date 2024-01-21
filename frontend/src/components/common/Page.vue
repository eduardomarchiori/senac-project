<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style scoped>
.page {
  display: flex;
  border-radius: 8px;
  background-color: white;
  padding: 24px 12px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
</style>
