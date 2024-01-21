<template>
  <button type="button" :class="theme">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonApp",
};
</script>

<script setup>
const props = defineProps({
  text: String,
  theme: { type: String, default: "primary" },
});
const text = props.text;
</script>

<style scoped>
button {
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid black;
  min-width: 80px;
  cursor: pointer;
}

.primary {
  background-color: #0085e5;
}

.secondary {
  background-color: #f5bf86;
}
</style>
