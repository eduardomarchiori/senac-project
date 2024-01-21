<template>
  <div class="card" :class="{ 'not-clickable': !clickable }">
    <div class="image-content">
      <img :src="bannerLink" alt="banner" height="120" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <span>{{ info }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  clickable: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "Título",
  },
  info: {
    type: String,
    default: "Breve informação",
  },
  bannerLink: {
    type: String,
    default:
      "https://ufpr.br/wp-content/uploads/ac_assets/uc_post_list//placeholder.jpeg",
  },
});
</script>

<style scoped>
.card {
  display: block;
  border-radius: 8px;
  height: 200px;
  background-color: white;
  padding: 12px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: auto;
}

.image-content {
  display: flex;
  width: 100%;
}

.not-clickable {
  cursor: auto;
  pointer-events: none;
}

img {
  max-width: 100%;
  flex: 1;
}

h3 {
  margin: 8px 0;
}
</style>
