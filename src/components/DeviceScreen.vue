<script setup>
const props = defineProps(["image", "width", "height", "light", "dark"]);

function imgUrl(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
</script>

<template>
  <img :src="imgUrl(image)" alt="screenshot" draggable="false" rel="preload" fetchpriority="high" as="image" />
</template>

<style scoped>
img {
  display: v-bind(light);

  max-width: 350px;
  min-width: v-bind(width) !important;
  max-height: v-bind(height);
  margin-right: -10px;
}

@media (max-width: 1280px) {
  img {
    max-width: 250px;
    min-width: calc(v-bind(width) / 1.4) !important;
  }
}

@media (max-width: 500px) {
  img {
    max-width: 150px;
    min-width: calc(v-bind(width) / 1.8) !important;
  }
}

@media (prefers-color-scheme: dark) {
  img {
    display: v-bind(dark);
  }
}
</style>
