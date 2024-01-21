<template>
  <input
    v-bind="$attrs"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
});
</script>

<style scoped>
input {
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid black;
}
</style>
